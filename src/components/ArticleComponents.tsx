import { ReactNode } from "react";

interface ArticleProps {
  children: ReactNode;
  className?: string;
}

export function Article({ children, className = "" }: ArticleProps) {
  return <article className={`flex flex-col ${className}`}>{children}</article>;
}

interface ArticleHeaderProps {
  title: string;
  date: string;
  author: {
    name: string;
    title?: string;
    avatar: string;
  };
  className?: string;
}

export function ArticleHeader({ title, date, author, className = "" }: ArticleHeaderProps) {
  return (
    <header
      className={`box-content max-w-[138rem] px-4 md:px-[calc(18vw-10rem)] mx-auto flex flex-col items-center mt-[4.5rem] xl:mt-[6rem] ${className}`}
    >
      <time className="block order-[-1] text-[#545465] text-[1.8rem]">{date}</time>

      <h1 className="inline-block max-w-[100rem] mt-0 mb-[0.5em] text-[3.4rem] md:text-[4.2rem] lg:text-[6rem] font-extrabold tracking-[-0.01em] leading-[1.2] md:leading-[1] text-center">
        {title}
      </h1>

      <address className="not-italic">
        <div className="inline-block overflow-hidden w-[6rem] rounded-full mr-[2rem] align-middle relative">
          <div className="block pb-[100%] bg-gray-200 content-['']" />
          <img
            src={author.avatar}
            alt={author.name}
            className="absolute top-0 left-0 w-full h-full object-contain rounded-full max-w-full transition-opacity duration-300 ease-in-out"
          />
        </div>
        <div className="inline-block text-[#545465] text-[1.5rem] font-light leading-[1.5] align-middle whitespace-nowrap">
          <span className="block font-bold">{author.name}</span>
          {author.title && <span className="block">{author.title}</span>}
        </div>
      </address>
    </header>
  );
}

interface ArticleHeroProps {
  image: string;
  alt: string;
  className?: string;
}

export function ArticleHero({ image, alt, className = "" }: ArticleHeroProps) {
  return (
    <figure className={`order-[-1] relative flex overflow-hidden w-full ${className}`}>
      <picture className="flex w-full justify-center">
        <img
          src={image}
          alt={alt}
          className="top-0 left-0 max-w-full w-full aspect-[2/1] xl:aspect-[16/5] object-cover"
        />
      </picture>
    </figure>
  );
}

interface ArticleContainerProps {
  children: ReactNode;
  className?: string;
}

export function ArticleContainer({ children, className = "" }: ArticleContainerProps) {
  return (
    <div
      className={`box-content max-w-[64rem] px-4 md:px-[calc(18vw-10rem)] mx-auto relative leading-[1.6] mt-[2rem] md:mt-[3rem] lg:mt-[6rem] ${className}`}
    >
      {children}
    </div>
  );
}

interface TopSharesProps {
  facebookUrl: string;
  twitterUrl: string;
  linkedinUrl: string;
  facebookIcon: string;
  twitterIcon: string;
  linkedinIcon: string;
  className?: string;
}

export function TopShares({
  facebookUrl,
  twitterUrl,
  linkedinUrl,
  facebookIcon,
  twitterIcon,
  linkedinIcon,
  className = "",
}: TopSharesProps) {
  return (
    <div className={`relative ${className}`}>
      <div className="flex w-[12rem] xl:w-[17rem] justify-between mx-auto mb-[2rem] xl:absolute xl:top-[-0.6rem] xl:left-0 xl:w-auto xl:pr-[3rem] xl:transform xl:-translate-x-full xl:flex-col xl:h-[17rem] xl:justify-evenly">
        <a
          href={facebookUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="w-[3rem] h-[3rem] xl:w-[4.2rem] xl:h-[4.2rem] rounded-full bg-[#4367b0]"
        >
          <img
            src={facebookIcon}
            alt="Share on Facebook"
            className="w-full h-full max-w-full transition-opacity duration-300 ease-in-out"
          />
        </a>
        <a
          href={twitterUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="w-[3rem] h-[3rem] xl:w-[4.2rem] xl:h-[4.2rem] rounded-full bg-[#14171a]"
        >
          <img
            src={twitterIcon}
            alt="Share on Twitter"
            className="w-full h-full max-w-full transition-opacity duration-300 ease-in-out"
          />
        </a>
        <a
          href={linkedinUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="w-[3rem] h-[3rem] xl:w-[4.2rem] xl:h-[4.2rem] rounded-full bg-[#3375b0]"
        >
          <img
            src={linkedinIcon}
            alt="Share on LinkedIn"
            className="w-full h-full max-w-full transition-opacity duration-300 ease-in-out"
          />
        </a>
      </div>
    </div>
  );
}

interface ArticleContentProps {
  children: ReactNode;
  className?: string;
}

export function ArticleContent({ children, className = "" }: ArticleContentProps) {
  return (
    <div
      className={`
      article-content
      [&_h2]:mt-[1.666em] [&_h2]:mb-[0.666em] [&_h2]:text-[1.8rem] [&_h2]:md:text-[2.1rem] [&_h2]:lg:text-[2.7rem] [&_h2]:font-semibold [&_h2]:tracking-[-0.02em] [&_h2]:leading-[1.6] [&_h2]:lg:leading-[1.4]
      [&_h2:first-child]:mt-0
      [&_h3]:mt-[1.875em] [&_h3]:mb-[0.75em] [&_h3]:font-bold
      [&_h3:first-child]:mt-0
      [&_h2+p]:mt-0 [&_h3+p]:mt-0
      [&_h4]:mb-[2rem]
      [&_p]:mb-[2rem]
      [&_ul]:pl-[2.3rem] [&_ul]:mb-[2rem] [&_ul]:list-disc
      [&_ol]:pl-[2.3rem] [&_ol]:mb-[2rem] [&_ol]:list-decimal
      [&_ul_li]:mb-[1em]
      [&_ol_li]:mb-[1em]
      [&_blockquote]:my-[2rem]
      [&_figcaption]:max-w-[50rem] [&_figcaption]:mt-[0.5em] [&_figcaption]:mx-auto [&_figcaption]:mb-[1em] [&_figcaption]:text-[#545465] [&_figcaption]:text-[1.5rem] [&_figcaption]:italic [&_figcaption]:text-center
      [&_.blockquote-big]:text-center [&_.blockquote-big]:mt-[1.25rem] [&_.blockquote-big]:mb-[0.9375rem] [&_.blockquote-big]:md:mt-[1.875rem] [&_.blockquote-big]:md:mb-[1.875rem] [&_.blockquote-big]:lg:mt-[3.75rem] [&_.blockquote-big]:lg:mb-[3.75rem] [&_.blockquote-big]:md:mx-[calc(-18vw+6.875rem)] [&_.blockquote-big]:xl:mx-[-12.5rem]
      [&_.blockquote-big_blockquote]:font-sans [&_.blockquote-big_blockquote]:text-[calc(5vw+0.6rem)] [&_.blockquote-big_blockquote]:lg:text-[5.4rem] [&_.blockquote-big_blockquote]:font-extrabold [&_.blockquote-big_blockquote]:leading-[1.2]
      [&_.blockquote-big_figcaption]:text-[calc(2.5vw+0.8rem)] [&_.blockquote-big_figcaption]:lg:text-[3rem] [&_.blockquote-big_figcaption]:font-semibold [&_.blockquote-big_figcaption]:leading-[1.6] [&_.blockquote-big_figcaption]:md:leading-[1.4]
      [&_.blockquote-big_figcaption]:before:content-['―_']
      [&_.blockquote-indented]:my-[4rem] [&_.blockquote-indented]:md:my-[6rem] [&_.blockquote-indented]:ml-[10%]
      [&_.blockquote-indented_blockquote]:text-[calc(2.5vw+0.8rem)] [&_.blockquote-indented_blockquote]:lg:text-[3rem] [&_.blockquote-indented_blockquote]:leading-[1.6] [&_.blockquote-indented_blockquote]:md:leading-[1.4]
      [&_.blockquote-indented_figcaption]:text-[calc(2vw+0.8rem)] [&_.blockquote-indented_figcaption]:lg:text-[2.4rem] [&_.blockquote-indented_figcaption]:leading-[1.6] [&_.blockquote-indented_figcaption]:md:leading-[1.4]
      [&_.blockquote-indented_figcaption]:before:content-['―_']
      ${className}
    `}
    >
      {children}
    </div>
  );
}
