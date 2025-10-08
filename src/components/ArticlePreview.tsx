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
  className = '',
}: ArticlePreviewProps) {
  return (
    <article className={`relative flex flex-col ${className}`}>
      <h3 className="mt-[0.3rem] mb-[1.5rem] text-[2.2rem] md:text-[2.7rem] leading-[1.4] font-semibold tracking-[-0.02em]">
        <a
          href={`/blog/${slug}`}
          className="transition-[background-position] duration-[400ms] ease-[cubic-bezier(0.45,0,0.55,1)] bg-current bg-gradient-to-r from-[#8d49f7] via-[#6b53ff] to-current bg-[length:220%_100%] bg-[position:100%_0] bg-clip-text text-transparent [-webkit-text-fill-color:transparent] hover:bg-[position:0%_0]"
        >
          {title}
        </a>
      </h3>

      <figure className="relative order-[-1] mb-[2rem] pb-[71.43%] rounded-[0.6rem] overflow-hidden">
        <a href={`/blog/${slug}`} title={imageAlt}>
          <img
            alt={imageAlt}
            data-src={image}
            className="absolute w-full h-full rounded-[0.6rem] object-contain transition-opacity duration-300 opacity-0 data-[lazyloaded=true]:opacity-100"
          />
        </a>
      </figure>

      <ul className="order-[-1] list-none uppercase text-[#586ee0] text-[1.2rem] font-sans">
        <li className="inline">
          <a
            href={`/blog/${categorySlug}`}
            className="py-[0.2em] px-0 pb-[0.1em] text-center text-transparent border-b-[0.15em] border-solid bg-gradient-to-r from-[#8d49f7] to-[#6b53ff] bg-clip-text"
          >
            {category}
          </a>
        </li>
      </ul>

      <p className="m-0 leading-[1.6] text-[#545465]">{teaser}</p>
    </article>
  );
}
