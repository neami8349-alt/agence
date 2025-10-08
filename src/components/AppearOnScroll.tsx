import { ReactElement, forwardRef, useEffect, useImperativeHandle, useRef, cloneElement } from 'react';

interface AppearOnScrollProps {
  delay?: number;
  children: ReactElement;
  className?: string;
}

const AppearOnScroll = forwardRef<HTMLElement, AppearOnScrollProps>(
  ({ delay = 0, children, className = '' }, ref) => {
    const elementRef = useRef<HTMLElement>(null);

    useImperativeHandle(ref, () => elementRef.current as HTMLElement);

    const makeVisible = () => {
      if (elementRef.current) {
        elementRef.current.classList.add('!opacity-100', '!translate-y-0');
      }
    };

    useEffect(() => {
      try {
        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                makeVisible();
                observer.disconnect();
              }
            });
          },
          {
            rootMargin: '0px 0px -120px 0px',
          }
        );

        if (elementRef.current) {
          observer.observe(elementRef.current);
        }

        return () => {
          observer.disconnect();
        };
      } catch (error) {
        // Fallback: make visible immediately if IntersectionObserver fails
        makeVisible();
      }
    }, []);

    return cloneElement(children, {
      ...children.props,
      ref: elementRef,
      style: {
        ...children.props.style,
        transitionDelay: `${delay}ms`,
      },
      className: `${className} ${children.props.className || ''} opacity-0 translate-y-[8rem] transition-[opacity,transform] duration-[400ms] ease-[cubic-bezier(0.39,0.57,0.56,1)]`,
    });
  }
);

AppearOnScroll.displayName = 'AppearOnScroll';

export default AppearOnScroll;
