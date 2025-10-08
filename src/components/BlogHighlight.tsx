interface BlogHighlightProps {
  title: string;
  description: string;
  linkText?: string;
  href: string;
  imageSrc: string;
  imageSrcDesktop?: string;
  imageAlt: string;
  className?: string;
}

export default function BlogHighlight({
  title,
  description,
  linkText = "Turn the page",
  href,
  imageSrc,
  imageSrcDesktop,
  imageAlt,
  className = "",
}: BlogHighlightProps) {
  return (
    <div className={`relative flex items-center justify-between flex-col lg:flex-row lg:w-full ${className}`}>
      {/* Image - appears first on mobile, second on desktop (right side) */}
      <figure className="flex-[0_0_100%] order-[-1] lg:order-1 lg:flex-[0_0_50%] lg:relative lg:flex lg:items-stretch lg:self-stretch lg:h-0 lg:my-[4rem] lg:pb-[60.9%] m-0">
        <a href={href} className="block lg:absolute lg:inset-0 lg:flex">
          <picture className="lg:flex lg:absolute lg:inset-0">
            {imageSrcDesktop && <source media="(min-width: 1024px)" srcSet={imageSrcDesktop} />}
            <img
              alt={imageAlt}
              src={imageSrc}
              className="max-w-full h-auto align-middle transition-opacity duration-300 rounded-[0.6rem] lg:self-center lg:object-cover"
            />
          </picture>
        </a>
      </figure>

      {/* Text Content - appears second on mobile, first on desktop (left side) */}
      <div className="flex-[0_0_100%] lg:flex-[0_0_44%] w-full max-w-[80rem] py-[3rem] md:py-[5rem] lg:py-[8rem] flex flex-col items-start text-left">
        <h2 className="text-[3.4rem] md:text-[4.2rem] lg:text-[6rem] font-extrabold leading-[1.25] md:leading-[1.1] lg:leading-[1] m-0 mb-[1rem] md:mb-[1.5rem] lg:mb-[2rem]">
          <a
            href={href}
            data-test-id="blog-overview-highlight"
            className="mb-[-0.3em] pb-[0.3em] transition-[background-position] duration-[400ms] ease-[cubic-bezier(0.45,0,0.55,1)] bg-current bg-gradient-to-r from-[#8d49f7] from-0% via-[#6b53ff] via-46% to-current to-54% bg-[length:220%_100%] bg-[position:100%_0] bg-clip-text text-transparent [-webkit-text-fill-color:transparent] [-moz-text-fill-color:transparent] hover:bg-[position:0%_0]"
          >
            {title}
          </a>
        </h2>

        <p className="text-[#545465] break-words m-0 mb-[1em]">{description}</p>

        <p className="m-0">
          <a
            href={href}
            className="inline-block mt-[2rem] no-underline text-[1.8rem] font-bold cursor-pointer text-[#334ac0] border-none bg-none appearance-none"
          >
            <span className="transition-[background-position,color] duration-500 ease-out text-[#9758fd] rounded-[0.1rem] bg-[#9758fd] bg-gradient-to-r from-[#9758fd] via-[#4c66f8] to-[#9758fd] bg-[length:200%_100%] bg-[position:100%_0] bg-clip-text [-webkit-text-fill-color:transparent] [-moz-text-fill-color:transparent] hover:bg-[position:0%_0] inline-flex items-center gap-2">
              {linkText}
              <svg height="8" viewBox="0 0 27 8" width="27" xmlns="http://www.w3.org/2000/svg" className="inline-block">
                <path
                  clipRule="evenodd"
                  d="M23.172.464l3.182 3.182a.5.5 0 010 .708l-3.182 3.182a.5.5 0 11-.707-.708L24.793 4.5H0v-1h24.793l-2.328-2.328a.5.5 0 11.707-.708z"
                  fill="currentColor"
                />
              </svg>
            </span>
          </a>
        </p>
      </div>
    </div>
  );
}
