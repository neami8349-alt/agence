// Browser feature detection utilities
class Features {
  private _isSmoothScrollSupported?: boolean;
  private _hasIntersectionObserver?: boolean;
  private _isReducedMotion?: boolean;

  get isSmoothScrollSupported(): boolean {
    if (this._isSmoothScrollSupported === undefined) {
      this._isSmoothScrollSupported = 'scrollBehavior' in document.documentElement.style;
    }
    return this._isSmoothScrollSupported;
  }

  get isAnimationEnabled(): boolean {
    return !this.isReducedMotion && this.hasIntersectionObserver;
  }

  get hasIntersectionObserver(): boolean {
    if (this._hasIntersectionObserver === undefined) {
      const hasIO = !!window.IntersectionObserver;
      const hasIOEntry = hasIO && !!window.IntersectionObserverEntry && !!window.IntersectionObserverEntry.prototype;
      const hasRatio = hasIOEntry && 'intersectionRatio' in window.IntersectionObserverEntry.prototype;
      this._hasIntersectionObserver = hasIO && hasIOEntry && hasRatio;
    }
    return this._hasIntersectionObserver;
  }

  get isReducedMotion(): boolean {
    if (this._isReducedMotion === undefined) {
      this._isReducedMotion = !!window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    }
    return this._isReducedMotion;
  }
}

const features = new Features();

// Scroll-based IntersectionObserver wrapper with performance optimizations
let latestKnownScrollY = window.pageYOffset || 0;
let eventType: string | null = null;
let ticking = false;
const scrollCallbacks: Array<(data: { latestKnownScrollY: number; eventType: string }) => void> = [];
let scrollCallbacksLength = 0;

function update() {
  for (let i = scrollCallbacksLength; i--; ) {
    scrollCallbacks[i]({
      latestKnownScrollY,
      eventType: eventType!,
    });
  }
  ticking = false;
}

function onScrollOrResize(event: Event) {
  const type = event.type;
  if (!ticking) {
    ticking = true;
    latestKnownScrollY = window.pageYOffset;
    eventType = type;
    requestAnimationFrame(update);
  }
}

window.addEventListener('scroll', onScrollOrResize, { passive: true });
window.addEventListener('resize', onScrollOrResize, { passive: true });

interface ScrollSectionOptions {
  onInView?: (entry: IntersectionObserverEntry) => void;
  onOutOfView?: (entry: IntersectionObserverEntry) => void;
  onScroll?: (data: { latestKnownScrollY: number; eventType: string }) => void;
  threshold?: number | number[];
}

class ScrollSection {
  el: HTMLElement;
  onInView?: (entry: IntersectionObserverEntry) => void;
  onOutOfView?: (entry: IntersectionObserverEntry) => void;
  onScroll?: (data: { latestKnownScrollY: number; eventType: string }) => void;
  observer?: IntersectionObserver;

  constructor(element: HTMLElement, options: ScrollSectionOptions) {
    const { onInView, onOutOfView, onScroll, threshold = 0 } = options;

    if (!element) return;

    this.el = element;
    this.onInView = onInView;
    this.onOutOfView = onOutOfView;
    this.onScroll = onScroll;

    if (window.IntersectionObserver) {
      this.observer = new IntersectionObserver(
        (entries) => this.intersectionObserver(entries),
        { threshold }
      );
      this.observer.observe(this.el);
    }
  }

  intersectionObserver(entries: IntersectionObserverEntry[]) {
    const [entry] = entries;
    if (entry.intersectionRatio > 0) {
      this.inView(entry);
    } else {
      this.outOfView(entry);
    }
  }

  inView(entry: IntersectionObserverEntry) {
    if (this.onInView) {
      this.onInView(entry);
    }
    if (this.onScroll) {
      this.onScroll({ latestKnownScrollY, eventType: eventType! });
      scrollCallbacks.push(this.onScroll);
      scrollCallbacksLength = scrollCallbacks.length;
    }
  }

  outOfView(entry: IntersectionObserverEntry) {
    if (this.onOutOfView) {
      this.onOutOfView(entry);
    }
    if (this.onScroll) {
      const index = scrollCallbacks.indexOf(this.onScroll);
      if (index > -1) {
        scrollCallbacks.splice(index, 1);
      }
      scrollCallbacksLength = scrollCallbacks.length;
    }
  }

  get relativeScrollY(): number {
    return latestKnownScrollY - this.el.offsetTop;
  }
}

// Handle fade-in animation when element comes into view
function handleInView(entry: IntersectionObserverEntry) {
  const target = entry.target as HTMLElement;
  const delay =
    !isNaN(Number(target.dataset.fadeIn)) && target.dataset.fadeIn!.length
      ? Number(target.dataset.fadeIn)
      : 0;

  setTimeout(() => {
    target.classList.remove('opacity-0');
    target.classList.add('animate-fade-in');
  }, delay);
}

// Initialize fade-in animations for elements with data-fade-in attribute
export function initFadeIn() {
  const elements = document.querySelectorAll<HTMLElement>('[data-fade-in]');

  if (!elements || !features.isAnimationEnabled) {
    return;
  }

  // Initially hide all elements
  for (let i = elements.length - 1; i >= 0; i--) {
    elements[i].classList.add('opacity-0');
  }

  // Set up IntersectionObserver for each element after 300ms delay
  setTimeout(() => {
    for (let i = elements.length - 1; i >= 0; i--) {
      new ScrollSection(elements[i], {
        threshold: [0.5, 1],
        onInView: handleInView,
      });
    }
  }, 300);
}
