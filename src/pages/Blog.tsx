import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-creative-tech.jpg";
import designSystemsImage from "@/assets/design-systems.jpg";
import storytellingImage from "@/assets/storytelling.jpg";
import sustainableDevImage from "@/assets/sustainable-dev.jpg";

const Blog = () => {
  const featuredArticle = {
    title: "The Future of Creative Technology",
    description: "Exploring how artificial intelligence and human creativity are converging to reshape the digital landscape. A deep dive into the transformative possibilities ahead.",
    image: heroImage,
    tag: "Technology",
    slug: "future-creative-technology"
  };

  const articles = [
    {
      title: "Design Systems That Scale",
      description: "Building maintainable design foundations for growing teams and products.",
      image: designSystemsImage,
      tag: "Design",
      slug: "design-systems-scale"
    },
    {
      title: "The Art of Storytelling",
      description: "How narrative structure influences user experience and engagement.",
      image: storytellingImage,
      tag: "Content",
      slug: "art-of-storytelling"
    },
    {
      title: "Sustainable Development",
      description: "Creating digital products with environmental consciousness at the core.",
      image: sustainableDevImage,
      tag: "Innovation",
      slug: "sustainable-development"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border">
        <div className="mx-auto" style={{ maxWidth: '86.25rem', padding: '0 calc(18vw - 10rem)' }}>
          <div className="flex items-center justify-between py-6">
            <Link to="/" className="font-serif text-2xl font-bold text-foreground">
              Editorial
            </Link>
            <nav className="hidden md:flex gap-8">
              <Link to="/blog" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                Stories
              </Link>
              <a href="#" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                About
              </a>
              <a href="#" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                Contact
              </a>
            </nav>
          </div>
        </div>
      </header>

      {/* Featured Article */}
      <section className="py-16 animate-fade-in">
        <div className="mx-auto" style={{ maxWidth: '86.25rem', padding: '0 calc(18vw - 10rem)' }}>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <span className="inline-block px-3 py-1 text-xs font-semibold rounded-full bg-[hsl(var(--editorial-tag-bg))] text-[hsl(var(--editorial-tag))]">
                {featuredArticle.tag}
              </span>
              <h1 className="font-serif text-5xl lg:text-6xl font-bold text-[hsl(var(--editorial-text))] leading-tight">
                {featuredArticle.title}
              </h1>
              <p className="text-lg text-[hsl(var(--editorial-text-light))] leading-relaxed">
                {featuredArticle.description}
              </p>
              <Link to={`/article/${featuredArticle.slug}`}>
                <Button size="lg" className="group">
                  Read Story
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
            </div>
            <div className="relative aspect-[16/10] rounded-2xl overflow-hidden bg-muted">
              <img 
                src={featuredArticle.image} 
                alt={featuredArticle.title}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-16">
        <div className="mx-auto" style={{ width: '100%', padding: '0 calc(18vw - 10rem)' }}>
          <div className="flex gap-[4.347826087%]">
            {articles.map((article, index) => (
              <Link
                key={index}
                to={`/article/${article.slug}`}
                className="group animate-scale-in"
                style={{ 
                  flex: '0 0 30.434783%',
                  animationDelay: `${index * 100}ms`
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
                  <span className="inline-block px-3 py-1 text-xs font-semibold rounded-full bg-[hsl(var(--editorial-tag-bg))] text-[hsl(var(--editorial-tag))] mb-3">
                    {article.tag}
                  </span>
                  <h2 className="font-serif text-2xl font-bold text-[hsl(var(--editorial-text))] mb-2 group-hover:text-primary transition-colors">
                    {article.title}
                  </h2>
                  <p className="text-[hsl(var(--editorial-text-light))] leading-relaxed">
                    {article.description}
                  </p>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border mt-24">
        <div className="mx-auto py-12" style={{ maxWidth: '86.25rem', padding: '2rem calc(18vw - 10rem)' }}>
          <div className="text-center text-sm text-muted-foreground">
            <p>© 2024 Editorial. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Blog;
