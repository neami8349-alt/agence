import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { ArrowRight } from "lucide-react";
import Header from "@/components/Header";
import Section from "@/components/Section";
import ArticlePreview from "@/components/ArticlePreview";
import BlogHighlight from "@/components/BlogHighlight";
import heroImage from "@/assets/hero-creative-tech.jpg";
import designSystemsImage from "@/assets/design-systems.jpg";
import storytellingImage from "@/assets/storytelling.jpg";
import sustainableDevImage from "@/assets/sustainable-dev.jpg";
import avatar1 from "@/assets/avatar-1.jpg";
import avatar2 from "@/assets/avatar-2.jpg";
import avatar3 from "@/assets/avatar-3.jpg";
import avatar4 from "@/assets/avatar-4.jpg";

const Blog = () => {
  const articlesRef = useRef<(HTMLElement | null)[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const tagColors: Record<string, string> = {
    All: "#000000",
    Design: "#009aff",
    Development: "#32d158",
    Innovation: "#5e5ce6",
    Content: "#ff3037",
  };

  const selectedCategoryStyle = {
    bg: "rgba(0, 192, 232, 0.18)",
    text: "#00C0E8",
  };

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
    tag: "Innovation",
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
      tag: "Development",
      slug: "sustainable-development",
    },
  ];

  const opinions = [
    {
      title: "Why Design Thinking Matters More Than Ever",
      avatar: avatar1,
      author: "Emma Thompson",
      slug: "design-thinking-matters",
    },
    {
      title: "The Hidden Cost of Technical Debt",
      avatar: avatar2,
      author: "Marcus Chen",
      slug: "technical-debt-cost",
    },
    {
      title: "Rethinking User Privacy in 2024",
      avatar: avatar3,
      author: "Sofia Rodriguez",
      slug: "rethinking-user-privacy",
    },
    {
      title: "The Future of Remote Collaboration",
      avatar: avatar4,
      author: "James Wilson",
      slug: "remote-collaboration-future",
    },
  ];

  const allArticles = [
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
      tag: "Development",
      slug: "sustainable-development",
    },
    {
      title: "Building Accessible Interfaces",
      description: "Creating inclusive digital experiences for all users.",
      image: designSystemsImage,
      tag: "Design",
      slug: "accessible-interfaces",
    },
    {
      title: "Data-Driven Design Decisions",
      description: "Using analytics to inform creative choices.",
      image: storytellingImage,
      tag: "Content",
      slug: "data-driven-design",
    },
    {
      title: "The Power of Minimalism",
      description: "Less is more in modern digital design.",
      image: sustainableDevImage,
      tag: "Design",
      slug: "power-minimalism",
    },
    {
      title: "Microinteractions Matter",
      description: "Small details that create big impact.",
      image: designSystemsImage,
      tag: "Design",
      slug: "microinteractions-matter",
    },
    {
      title: "Color Psychology in UI",
      description: "How colors influence user behavior and emotion.",
      image: storytellingImage,
      tag: "Design",
      slug: "color-psychology",
    },
    {
      title: "Typography Best Practices",
      description: "Choosing and using fonts effectively.",
      image: sustainableDevImage,
      tag: "Design",
      slug: "typography-practices",
    },
    {
      title: "Mobile-First Methodology",
      description: "Designing for the smallest screen first.",
      image: designSystemsImage,
      tag: "Development",
      slug: "mobile-first",
    },
    {
      title: "Animation in Web Design",
      description: "When and how to use motion effectively.",
      image: storytellingImage,
      tag: "Design",
      slug: "animation-web-design",
    },
    {
      title: "User Testing Strategies",
      description: "Getting valuable feedback from real users.",
      image: sustainableDevImage,
      tag: "Content",
      slug: "user-testing",
    },
    {
      title: "Design Systems Governance",
      description: "Managing and maintaining design consistency.",
      image: designSystemsImage,
      tag: "Design",
      slug: "design-governance",
    },
    {
      title: "Dark Mode Implementation",
      description: "Creating beautiful experiences in low light.",
      image: storytellingImage,
      tag: "Development",
      slug: "dark-mode",
    },
    {
      title: "Performance Optimization",
      description: "Making your website lightning fast.",
      image: sustainableDevImage,
      tag: "Development",
      slug: "performance-optimization",
    },
    {
      title: "Voice Interface Design",
      description: "Designing for the next generation of interaction.",
      image: designSystemsImage,
      tag: "Innovation",
      slug: "voice-interface",
    },
    {
      title: "Ethical Design Principles",
      description: "Creating responsible digital products.",
      image: storytellingImage,
      tag: "Content",
      slug: "ethical-design",
    },
    {
      title: "Cross-Platform Consistency",
      description: "Maintaining brand identity across devices.",
      image: sustainableDevImage,
      tag: "Design",
      slug: "cross-platform",
    },
    {
      title: "AI in Design Tools",
      description: "How artificial intelligence is changing the creative process.",
      image: designSystemsImage,
      tag: "Innovation",
      slug: "ai-design-tools",
    },
    {
      title: "Design Collaboration Tools",
      description: "Working together in distributed teams.",
      image: storytellingImage,
      tag: "Content",
      slug: "collaboration-tools",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <Section>
        <BlogHighlight
          title={featuredArticle.title}
          description={featuredArticle.description}
          href={`/article/${featuredArticle.slug}`}
          imageSrc={featuredArticle.image}
          imageAlt={featuredArticle.title}
        />
      </Section>

      {/* Articles Grid */}
      <Section>
        <div className="flex gap-[4.347826087%]">
          {articles.map((article, index) => (
            <div
              key={index}
              ref={(el) => (articlesRef.current[index] = el)}
              className="blog-feed__item"
              style={{
                flex: "0 0 30.434783%",
              }}
            >
              <ArticlePreview
                title={article.title}
                slug={article.slug}
                image={article.image}
                imageAlt={article.title}
                category={article.tag}
                categorySlug={article.tag.toLowerCase()}
                teaser={article.description}
              />
            </div>
          ))}
        </div>
      </Section>

      {/* Opinions Section */}
      <Section>
        <h2
          className="text-[hsl(var(--editorial-text))]"
          style={{
            width: "100%",
            marginBottom: "3rem",
            padding: "1rem 0",
            textAlign: "left",
            letterSpacing: "0.2rem",
            textTransform: "uppercase",
            borderBottom: "1px solid rgba(0, 0, 0, 0.2)",
            fontSize: "1.6rem",
            fontWeight: 600,
            lineHeight: 1.5,
          }}
        >
          Opinions
        </h2>
        <div style={{ display: "flex", gap: "3rem" }}>
          {opinions.map((opinion, index) => (
            <Link
              key={index}
              to={`/article/${opinion.slug}`}
              ref={(el) => (articlesRef.current[articles.length + index] = el)}
              className="group blog-feed__item"
              style={{
                flex: "0 0 calc(25% - 2.25rem)",
                animationDelay: `${index * 150}ms`,
              }}
            >
              <article className="h-full">
                <div className="relative w-[60px] h-[60px] rounded-full overflow-hidden bg-muted mb-4">
                  <img
                    src={opinion.avatar}
                    alt={opinion.author}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <h2 className="font-sans font-semibold text-[2.2rem] md:text-[2.7rem] leading-[1.4] text-[hsl(var(--editorial-text))] text-left group-hover:text-primary transition-colors">
                  {opinion.title}
                </h2>
              </article>
            </Link>
          ))}
        </div>
      </Section>

      {/* More Articles Section */}
      <Section>
        <h2
          className="text-[hsl(var(--editorial-text))]"
          style={{
            width: "100%",
            marginBottom: "3rem",
            padding: "1rem 0",
            textAlign: "left",
            letterSpacing: "0.2rem",
            textTransform: "uppercase",
            borderBottom: "1px solid rgba(0, 0, 0, 0.2)",
            fontSize: "1.6rem",
            fontWeight: 600,
            lineHeight: 1.5,
          }}
        >
          More Articles
        </h2>

        {/* Category Filter Bar */}
        <div
          className="flex gap-4 mb-8 flex-wrap bg-background py-4 -mx-[calc(18vw-10rem)] px-[calc(18vw-10rem)] justify-center"
          style={{
            position: "sticky",
            top: "72px",
            zIndex: 10,
          }}
        >
          {["All", "Design", "Development", "Innovation", "Content"].map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className="uppercase tracking-wide transition-colors"
              style={{
                display: "block",
                padding: "0.5rem 1rem",
                borderRadius: "0.6rem",
                textDecoration: "none",
                fontSize: "1.6rem",
                lineHeight: "2rem",
                fontWeight: 400,
                backgroundColor: selectedCategory === category ? selectedCategoryStyle.bg : "transparent",
                color: selectedCategory === category ? selectedCategoryStyle.text : "hsl(var(--foreground))",
              }}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="flex flex-wrap gap-[4.347826087%] gap-y-16">
          {allArticles
            .filter((article) => selectedCategory === "All" || article.tag === selectedCategory)
            .map((article, index) => (
              <div
                key={index}
                ref={(el) => (articlesRef.current[articles.length + opinions.length + index] = el)}
                className="blog-feed__item"
                style={{
                  flex: "0 0 30.434783%",
                  animationDelay: `${(index % 3) * 150}ms`,
                }}
              >
                <ArticlePreview
                  title={article.title}
                  slug={article.slug}
                  image={article.image}
                  imageAlt={article.title}
                  category={article.tag}
                  categorySlug={article.tag.toLowerCase()}
                  teaser={article.description}
                />
              </div>
            ))}
        </div>
      </Section>

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
