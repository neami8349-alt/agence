import { Link } from "react-router-dom";
import { useEffect, useRef } from "react";
import { ArrowRight } from "lucide-react";
import Header from "@/components/Header";
import heroImage from "@/assets/hero-creative-tech.jpg";
import designSystemsImage from "@/assets/design-systems.jpg";
import storytellingImage from "@/assets/storytelling.jpg";
import sustainableDevImage from "@/assets/sustainable-dev.jpg";

const Blog = () => {
  const articlesRef = useRef<(HTMLAnchorElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fadeInUp");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }, // Changed from 0.5 to 0.1 - triggers earlier
    );

    articlesRef.current.forEach((article) => {
      if (article) observer.observe(article);
    });

    return () => observer.disconnect();
  }, []);

  const featuredArticle = {
    title: "The Future of Creative Technology",
    description:
      "Exploring how artificial intelligence and human creativity are converging to reshape the digital landscape. A deep dive into the transformative possibilities ahead.",
    image: heroImage,
    tag: "Technology",
    slug: "future-creative-technology",
  };

  const articles = [
    {
      title: "Design Systems That Scale",
      description: "Building maintainable design foundations for growing teams and products.",
      image: designSystemsImage,
      tag: "Design",
      slug: "design-systems-scale",
    },
    {
      title: "The Art of Storytelling",
      description: "How narrative structure influences user experience and engagement.",
      image: storytellingImage,
      tag: "Content",
      slug: "art-of-storytelling",
    },
    {
      title: "Sustainable Development",
      description: "Creating digital products with environmental consciousness at the core.",
      image: sustainableDevImage,
      tag: "Innovation",
      slug: "sustainable-development",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <section className="animate-fade-in" style={{ paddingTop: 0 }}>
        <div className="mx-auto" style={{ padding: "0 calc(18vw - 10rem)" }}>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="font-sans text-[3.4rem] font-semibold text-[hsl(var(--editorial-text))] md:text-[4.2rem] md:leading-[1.1] lg:text-[6rem] lg:leading-[1]">
                {featuredArticle.title}
              </h1>
              <p className="text-[1.8rem] text-[hsl(var(--editorial-text-light))] leading-relaxed">
                {featuredArticle.description}
              </p>
              <Link
                to={`/article/${featuredArticle.slug}`}
                className="inline-flex items-center text-[1.8rem] font-medium text-primary hover:underline group"
              >
                Read Story
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
            <div className="relative aspect-[23/28] rounded-2xl overflow-hidden bg-muted my-[4rem]">
              <img src={featuredArticle.image} alt={featuredArticle.title} className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-16">
        <div className="mx-auto" style={{ width: "100%", padding: "0 calc(18vw - 10rem)" }}>
          <div className="flex gap-[4.347826087%]">
            {articles.map((article, index) => (
              <Link
                key={index}
                to={`/article/${article.slug}`}
                ref={(el) => (articlesRef.current[index] = el)}
                className="group blog-feed__item"
                style={{
                  flex: "0 0 30.434783%",
                }}
              >
                <article className="h-full">
                  <div className="relative aspect-[16/10] rounded-xl overflow-hidden bg-muted mb-4">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <span className="inline-block px-[0.2em] py-[0.1em] text-center text-transparent border-b-[0.15em] border-solid border-b-transparent bg-gradient-to-r from-[#8d49f7] to-[#6b53ff] bg-clip-text mb-3 hover:border-b-[#8d49f7] transition-colors">
                    {article.tag}
                  </span>
                  <h2 className="font-sans text-[2.2rem] md:text-[2.7rem] leading-[1.4] text-[hsl(var(--editorial-text))] mt-[0.3rem] mb-[1.5rem] group-hover:text-primary transition-colors">
                    {article.title}
                  </h2>
                  <p className="text-[hsl(var(--editorial-text-light))] leading-relaxed">{article.description}</p>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border mt-24">
        <div className="mx-auto py-12" style={{ maxWidth: "86.25rem", padding: "2rem calc(18vw - 10rem)" }}>
          <div className="text-center text-sm text-muted-foreground">
            <p>© 2024 Editorial. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Blog;
