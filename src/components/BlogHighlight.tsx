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
    <div
      className={`relative flex items-center flex-col min-[960px]:flex-row justify-between min-[960px]:w-full ${className}`}
    >
      {/* Text Content */}
      <div className="flex-[0_0_100%] min-[960px]:flex-[0_0_44%] w-full max-w-[80rem] py-[3rem] min-[640px]:py-[5rem] min-[960px]:py-[8rem] flex flex-col items-start text-left">
        <h2 className="text-[3.4rem] min-[640px]:text-[4.2rem] min-[960px]:text-[6rem] font-extrabold leading-[1.25] min-[640px]:leading-[1.1] min-[960px]:leading-[1] mb-[1rem] min-[640px]:mb-[1.5rem] min-[960px]:mb-[2rem]">
          <a
            href={href}
            data-test-id="blog-overview-highlight"
            className="mb-[-0.3em] pb-[0.3em] transition-[background-position] duration-[400ms] ease-[cubic-bezier(0.45,0,0.55,1)] bg-current bg-gradient-to-r from-[#8d49f7] via-[#6b53ff] to-current bg-[length:220%_100%] bg-[position:100%_0] bg-clip-text text-transparent [-webkit-text-fill-color:transparent] [-moz-text-fill-color:transparent] hover:bg-[position:0%_0]"
          >
            {title}
          </a>
        </h2>

        <p className="text-[#545465] break-words mb-[1em]">{description}</p>

        <p className="mb-0">
          <a
            href={href}
            className="inline-block mt-[2rem] no-underline text-[1.8rem] font-bold cursor-pointer border-none bg-none appearance-none"
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

      {/* Image */}
      <figure className="flex-[0_0_100%] order-[-1] min-[960px]:order-0 min-[960px]:flex-[0_0_50%] min-[960px]:relative min-[960px]:flex min-[960px]:items-stretch min-[960px]:self-stretch min-[960px]:h-0 min-[960px]:my-[4rem] min-[960px]:pb-[60.9%] m-0">
        <a href={href} className="block min-[960px]:absolute min-[960px]:inset-0 min-[960px]:flex">
          <picture className="min-[960px]:flex min-[960px]:absolute min-[960px]:inset-0">
            {imageSrcDesktop && <source media="(min-width: 960px)" srcSet={imageSrcDesktop} />}
            <img
              alt={imageAlt}
              src={imageSrc}
              className="max-w-full h-auto align-middle transition-opacity duration-300 rounded-[0.6rem] min-[960px]:self-center min-[960px]:object-cover"
            />
          </picture>
        </a>
      </figure>
    </div>
  );
}
