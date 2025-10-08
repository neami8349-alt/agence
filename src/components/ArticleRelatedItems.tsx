import AppearOnScroll from './AppearOnScroll';

interface RelatedItem {
  title: string;
  slug: string;
  image: string;
  description?: string;
  tag?: string;
}

interface ArticleRelatedItemsProps {
  items: RelatedItem[];
  className?: string;
}

export function ArticleRelatedItems({ items, className = "" }: ArticleRelatedItemsProps) {
  return (
    <div
      className={`box-content max-w-[138rem] px-[1.5rem] md:px-[calc(18vw-10rem)] mx-auto mt-[3rem] md:mt-[6rem] lg:mt-[9rem] mb-[3rem] md:mb-[6rem] lg:mb-[9rem] ${className}`}
    >
      <h2 className="font-sans text-3xl font-bold text-[hsl(var(--editorial-text))] mb-8">Related Stories</h2>
      <ul className="list-none grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[9.6rem] gap-x-[5%]">
        {items.map((item, index) => (
          <AppearOnScroll key={item.slug} delay={index * 200}>
            <li>
              <a href={`/article/${item.slug}`} className="block group">
                <div className="relative aspect-[16/10] rounded-[1.6rem] overflow-hidden mb-[1.6rem]">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                {item.tag && (
                  <span className="inline-block px-[0.2em] py-[0.1em] text-[1.2rem] font-medium uppercase text-center text-transparent border-b-[0.15em] border-solid border-b-transparent bg-gradient-to-r from-[#8d49f7] to-[#6b53ff] bg-clip-text hover:border-b-[#8d49f7] transition-colors">
                    {item.tag}
                  </span>
                )}
                <h3 className="text-[2.2rem] md:text-[2.7rem] font-semibold leading-[1.4] text-[hsl(var(--editorial-text))] mt-[0.3rem] mb-[1.5rem] group-hover:text-primary transition-colors">
                  {item.title}
                </h3>
                {item.description && (
                  <p className="text-[#545465] leading-[1.6]">{item.description}</p>
                )}
              </a>
            </li>
          </AppearOnScroll>
        ))}
      </ul>
    </div>
  );
}
