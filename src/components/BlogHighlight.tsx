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
  linkText = 'Turn the page',
  href,
  imageSrc,
  imageSrcDesktop,
  imageAlt,
  className = '',
}: BlogHighlightProps) {
  return (
    <div
      className={`relative flex items-center flex-col min-[60rem]:flex-row justify-between min-[60rem]:w-full ${className}`}
    >
      {/* Text Content */}
      <div className="flex-[0_0_100%] min-[60rem]:flex-[0_0_44%] w-full max-w-[128rem] py-[4.8rem] min-[40rem]:py-[8rem] min-[60rem]:py-[12.8rem] flex flex-col items-start text-left">
        <h2 className="text-[5.44rem] min-[40rem]:text-[6.72rem] min-[60rem]:text-[9.6rem] font-extrabold leading-[1.25] min-[40rem]:leading-[1.1] min-[60rem]:leading-[1] mb-[1.6rem] min-[40rem]:mb-[2.4rem] min-[60rem]:mb-[3.2rem]">
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
            className="inline-block mt-[3.2rem] no-underline text-[2.88rem] font-bold cursor-pointer border-none bg-none appearance-none"
          >
            <span className="transition-[background-position,color] duration-500 ease-out text-[#9758fd] rounded-[0.16rem] bg-[#9758fd] bg-gradient-to-r from-[#9758fd] via-[#4c66f8] to-[#9758fd] bg-[length:200%_100%] bg-[position:100%_0] bg-clip-text [-webkit-text-fill-color:transparent] [-moz-text-fill-color:transparent] hover:bg-[position:0%_0] inline-flex items-center gap-2">
              {linkText}
              <svg
                height="8"
                viewBox="0 0 27 8"
                width="27"
                xmlns="http://www.w3.org/2000/svg"
                className="inline-block"
              >
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
      <figure className="flex-[0_0_100%] order-[-1] min-[60rem]:order-0 min-[60rem]:flex-[0_0_50%] min-[60rem]:relative min-[60rem]:flex min-[60rem]:items-stretch min-[60rem]:self-stretch min-[60rem]:h-0 min-[60rem]:my-[6.4rem] min-[60rem]:pb-[60.9%] m-0">
        <a href={href} className="block min-[60rem]:absolute min-[60rem]:inset-0 min-[60rem]:flex">
          <picture className="min-[60rem]:flex min-[60rem]:absolute min-[60rem]:inset-0">
            {imageSrcDesktop && (
              <source media="(min-width: 960px)" srcSet={imageSrcDesktop} />
            )}
            <img
              alt={imageAlt}
              src={imageSrc}
              className="max-w-full h-auto align-middle transition-opacity duration-300 rounded-[0.96rem] min-[60rem]:self-center min-[60rem]:object-cover"
            />
          </picture>
        </a>
      </figure>
    </div>
  );
}
