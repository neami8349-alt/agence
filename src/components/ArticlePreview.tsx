interface ArticlePreviewProps {
  title: string;
  slug: string;
  image: string;
  imageAlt: string;
  category: string;
  categorySlug: string;
  teaser: string;
  className?: string;
}

export default function ArticlePreview({
  title,
  slug,
  image,
  imageAlt,
  category,
  categorySlug,
  teaser,
  className = "",
}: ArticlePreviewProps) {
  return (
    <article className={`relative flex flex-col ${className}`}>
      <h3 className="mt-[0.3rem] mb-[1.5rem] text-[2.2rem] md:text-[2.7rem] leading-[1.4] font-semibold tracking-[-0.02em]">
        <a
          href={`/blog/${slug}`}
          className="inline-block mb-[-0.3em] pb-[0.3em] transition-[background-position] duration-[400ms] ease-[cubic-bezier(0.45,0,0.55,1)] bg-current [background-image:linear-gradient(90deg,hsl(217_100%_65%)_0%,hsl(320_98%_74%)_46%,hsl(var(--foreground))_54%,hsl(var(--foreground))_100%)] bg-[length:220%_100%] bg-[position:100%_0] bg-clip-text text-transparent hover:bg-[position:0%_0]"
        >
          {title}
        </a>
      </h3>

      <figure className="relative order-[-1] mb-[2rem] pb-[71.43%] rounded-[0.6rem] overflow-hidden bg-gray-100">
        <a href={`/blog/${slug}`} title={imageAlt}>
          <img alt={imageAlt} src={image} className="absolute w-full h-full rounded-[0.6rem] object-cover" />
        </a>
      </figure>

      <ul className="order-[-1] list-none uppercase text-primary text-[1.2rem] font-sans mb-[0.8rem]">
        <li className="inline">
          <a
            href={`/blog/${categorySlug}`}
            className="py-[0.2em] px-0 pb-[0.1em] text-center text-transparent border-b-[0.15em] border-solid inline-block mb-[-0.3em] pb-[0.3em] transition-[background-position] duration-[400ms] ease-[cubic-bezier(0.45,0,0.55,1)] bg-current [background-image:linear-gradient(90deg,hsl(217_100%_65%)_0%,hsl(320_98%_74%)_46%,hsl(var(--foreground))_54%,hsl(var(--foreground))_100%)] bg-[length:220%_100%] bg-[position:100%_0] bg-clip-text text-transparent hover:bg-[position:0%_0]"
          >
            {category}
          </a>
        </li>
      </ul>

      <p className="m-0 leading-[1.8] text-muted-foreground">{teaser}</p>
    </article>
  );
}
