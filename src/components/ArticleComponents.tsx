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
      className={`box-content max-w-[86.25rem] px-4 md:px-[calc(18vw-6.25rem)] mx-auto flex flex-col items-center mt-[2.8125rem] xl:mt-[3.75rem] ${className}`}
    >
      <time className="block order-[-1] text-[#545465] text-[1.125rem]">{date}</time>

      <h1 className="inline-block max-w-[62.5rem] mt-0 mb-[0.5em] text-[2.125rem] md:text-[2.625rem] lg:text-[3.75rem] font-extrabold tracking-[-0.01em] leading-[1.2] md:leading-[1] text-center">
        {title}
      </h1>

      <address className="not-italic">
        <div className="inline-block overflow-hidden w-[3.75rem] rounded-full mr-5 align-middle relative">
          <div className="block pb-[100%] bg-gray-200 content-['']" />
          <img
            src={author.avatar}
            alt={author.name}
            className="absolute top-0 left-0 w-full h-full object-contain rounded-full max-w-full transition-opacity duration-300 ease-in-out"
          />
        </div>
        <div className="inline-block text-[#545465] text-[0.9375rem] font-light leading-[1.5] align-middle whitespace-nowrap">
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
      className={`box-content max-w-[40rem] px-4 md:px-[calc(18vw-6.25rem)] mx-auto relative leading-[1.6] mt-5 md:mt-[1.875rem] lg:mt-[3.75rem] ${className}`}
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
      <div className="flex w-[7.5rem] xl:w-[10.625rem] justify-between mx-auto mb-5 xl:absolute xl:top-[-0.375rem] xl:left-0 xl:w-auto xl:pr-[1.875rem] xl:transform xl:-translate-x-full xl:flex-col xl:h-[10.625rem] xl:justify-evenly">
        <a
          href={facebookUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="w-[1.875rem] h-[1.875rem] xl:w-[2.625rem] xl:h-[2.625rem] rounded-full bg-[#4367b0]"
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
          className="w-[1.875rem] h-[1.875rem] xl:w-[2.625rem] xl:h-[2.625rem] rounded-full bg-[#14171a]"
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
          className="w-[1.875rem] h-[1.875rem] xl:w-[2.625rem] xl:h-[2.625rem] rounded-full bg-[#3375b0]"
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
      [&_h2]:mt-[1.666em] [&_h2]:mb-[0.666em] [&_h2]:text-[1.125rem] [&_h2]:md:text-[1.3125rem] [&_h2]:lg:text-[1.6875rem] [&_h2]:font-semibold [&_h2]:tracking-[-0.02em] [&_h2]:leading-[1.6] [&_h2]:lg:leading-[1.4]
      [&_h2:first-child]:mt-0
      [&_h3]:mt-[1.875em] [&_h3]:mb-[0.75em] [&_h3]:font-bold
      [&_h3:first-child]:mt-0
      [&_h2+p]:mt-0 [&_h3+p]:mt-0
      [&_h4]:mb-5
      [&_p]:mb-5
      [&_ul]:pl-[1.4375rem] [&_ul]:mb-5 [&_ul]:list-disc
      [&_ol]:pl-[1.4375rem] [&_ol]:mb-5 [&_ol]:list-decimal
      [&_ul_li]:mb-[1em]
      [&_ol_li]:mb-[1em]
      [&_blockquote]:my-5
      [&_.blockquote-big]:text-center
      [&_.blockquote-big_blockquote]:font-sans [&_.blockquote-big_blockquote]:text-[calc(5vw+0.375rem)] [&_.blockquote-big_blockquote]:lg:text-[3.375rem] [&_.blockquote-big_blockquote]:font-extrabold [&_.blockquote-big_blockquote]:leading-[1.2]
      [&_.blockquote-big_figcaption]:text-[calc(2.5vw+0.5rem)] [&_.blockquote-big_figcaption]:lg:text-[1.875rem] [&_.blockquote-big_figcaption]:font-semibold [&_.blockquote-big_figcaption]:leading-[1.6] [&_.blockquote-big_figcaption]:md:leading-[1.4]
      [&_.blockquote-big_figcaption]:before:content-['―_']
      [&_.blockquote-indented]:my-10 [&_.blockquote-indented]:md:my-[3.75rem] [&_.blockquote-indented]:ml-[10%]
      [&_.blockquote-indented_blockquote]:text-[calc(2.5vw+0.5rem)] [&_.blockquote-indented_blockquote]:lg:text-[1.875rem] [&_.blockquote-indented_blockquote]:leading-[1.6] [&_.blockquote-indented_blockquote]:md:leading-[1.4]
      [&_.blockquote-indented_figcaption]:text-[calc(2vw+0.5rem)] [&_.blockquote-indented_figcaption]:lg:text-[1.5rem] [&_.blockquote-indented_figcaption]:leading-[1.6] [&_.blockquote-indented_figcaption]:md:leading-[1.4]
      [&_.blockquote-indented_figcaption]:before:content-['―_']
      ${className}
    `}
    >
      {children}
    </div>
  );
}
