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
    All: "hsl(217 100% 65%)",
    Wellness: "hsl(320 98% 74%)",
    Home: "hsl(27 100% 55%)",
    Travel: "hsl(215 86% 70%)",
    Food: "hsl(356 100% 56%)",
    Fashion: "hsl(320 98% 74%)",
    Lifestyle: "hsl(217 100% 65%)",
    Creative: "hsl(27 100% 55%)",
    Fitness: "hsl(356 100% 56%)",
  };

  const selectedCategoryStyle = {
    bg: "hsl(217 100% 95%)",
    text: "hsl(217 100% 65%)",
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
    title: "Living Your Best Life",
    description:
      "Discover the art of mindful living, wellness routines, and creating a lifestyle that brings joy, balance, and fulfillment to your everyday moments.",
    image: "https://images.unsplash.com/photo-1550581190-9c1c48d21d6c?w=1200&q=80",
    tag: "Lifestyle",
    slug: "living-your-best-life",
  };

  const articles = [
    {
      title: "Wellness & Self-Care Rituals",
      description: "Simple daily practices that transform your mental and physical wellbeing.",
      image: "https://images.unsplash.com/photo-1519567241046-7f570eee3ce6?w=800&q=80",
      tag: "Wellness",
      slug: "wellness-self-care",
    },
    {
      title: "Minimalist Home Design",
      description: "Creating serene spaces that inspire calm and creativity.",
      image: "https://images.unsplash.com/photo-1545158535-c3f7168c28b6?w=800&q=80",
      tag: "Home",
      slug: "minimalist-home",
    },
    {
      title: "Adventure & Travel",
      description: "Exploring the world with intention and embracing new experiences.",
      image: "https://images.unsplash.com/photo-1527870950744-1c1c53067304?w=800&q=80",
      tag: "Travel",
      slug: "adventure-travel",
    },
  ];

  const opinions = [
    {
      title: "Finding Balance in a Busy World",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80",
      author: "Emma Thompson",
      slug: "finding-balance",
    },
    {
      title: "The Joy of Slow Living",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80",
      author: "Marcus Chen",
      slug: "slow-living",
    },
    {
      title: "Building Meaningful Connections",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80",
      author: "Sofia Rodriguez",
      slug: "meaningful-connections",
    },
    {
      title: "Embracing Change & Growth",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&q=80",
      author: "James Wilson",
      slug: "embracing-change",
    },
  ];

  const allArticles = [
    {
      title: "Morning Yoga Routines",
      description: "Start your day with energy and mindfulness through gentle movement.",
      image: "https://images.unsplash.com/photo-1535060005458-66dd0b39142c?w=800&q=80",
      tag: "Wellness",
      slug: "morning-yoga",
    },
    {
      title: "Plant-Based Kitchen Essentials",
      description: "Delicious and nourishing recipes for vibrant living.",
      image: "https://images.unsplash.com/photo-1560105196-e8bb5cfbe487?w=800&q=80",
      tag: "Food",
      slug: "plant-based-kitchen",
    },
    {
      title: "Sustainable Fashion Choices",
      description: "Building a conscious wardrobe that reflects your values.",
      image: "https://images.unsplash.com/photo-1550581190-9c1c48d21d6c?w=800&q=80",
      tag: "Fashion",
      slug: "sustainable-fashion",
    },
    {
      title: "Digital Detox Weekends",
      description: "Reclaim your time and reconnect with what matters most.",
      image: "https://images.unsplash.com/photo-1549298222-1cadb3b33c99?w=800&q=80",
      tag: "Wellness",
      slug: "digital-detox",
    },
    {
      title: "Cozy Reading Nooks",
      description: "Creating intimate spaces for reflection and literature.",
      image: "https://images.unsplash.com/photo-1545158535-c3f7168c28b6?w=800&q=80",
      tag: "Home",
      slug: "reading-nooks",
    },
    {
      title: "Mindful Photography",
      description: "Capturing life's beautiful moments with intention.",
      image: "https://images.unsplash.com/photo-1533158628620-e2d8b77a0b8f?w=800&q=80",
      tag: "Creative",
      slug: "mindful-photography",
    },
    {
      title: "Weekend Getaway Guide",
      description: "Exploring nearby destinations for quick refreshment.",
      image: "https://images.unsplash.com/photo-1527870950744-1c1c53067304?w=800&q=80",
      tag: "Travel",
      slug: "weekend-getaways",
    },
    {
      title: "Aromatherapy at Home",
      description: "Using natural scents to enhance mood and atmosphere.",
      image: "https://images.unsplash.com/photo-1519567241046-7f570eee3ce6?w=800&q=80",
      tag: "Wellness",
      slug: "aromatherapy",
    },
    {
      title: "Urban Gardening Tips",
      description: "Growing your own herbs and vegetables in small spaces.",
      image: "https://images.unsplash.com/photo-1534237886190-ced735ca4b73?w=800&q=80",
      tag: "Home",
      slug: "urban-gardening",
    },
    {
      title: "Journaling for Clarity",
      description: "Writing practices that unlock self-discovery and peace.",
      image: "https://images.unsplash.com/photo-1533158628620-e2d8b77a0b8f?w=800&q=80",
      tag: "Wellness",
      slug: "journaling",
    },
    {
      title: "Outdoor Fitness Adventures",
      description: "Taking your workout beyond the gym walls.",
      image: "https://images.unsplash.com/photo-1535060005458-66dd0b39142c?w=800&q=80",
      tag: "Fitness",
      slug: "outdoor-fitness",
    },
    {
      title: "Tea Culture & Rituals",
      description: "Discovering tranquility in the ancient art of tea.",
      image: "https://images.unsplash.com/photo-1560105196-e8bb5cfbe487?w=800&q=80",
      tag: "Food",
      slug: "tea-culture",
    },
    {
      title: "Vintage Finds & Treasures",
      description: "The joy of thrifting and giving items new life.",
      image: "https://images.unsplash.com/photo-1549298222-1cadb3b33c99?w=800&q=80",
      tag: "Fashion",
      slug: "vintage-finds",
    },
    {
      title: "Evening Wind-Down Routine",
      description: "Preparing mind and body for restful sleep.",
      image: "https://images.unsplash.com/photo-1519567241046-7f570eee3ce6?w=800&q=80",
      tag: "Wellness",
      slug: "evening-routine",
    },
    {
      title: "Artisan Coffee Culture",
      description: "Appreciating the craft behind every perfect cup.",
      image: "https://images.unsplash.com/photo-1534237886190-ced735ca4b73?w=800&q=80",
      tag: "Food",
      slug: "coffee-culture",
    },
    {
      title: "Coastal Living Inspiration",
      description: "Bringing beachside serenity into your everyday life.",
      image: "https://images.unsplash.com/photo-1527870950744-1c1c53067304?w=800&q=80",
      tag: "Lifestyle",
      slug: "coastal-living",
    },
    {
      title: "DIY Natural Beauty",
      description: "Creating skincare products from simple ingredients.",
      image: "https://images.unsplash.com/photo-1545158535-c3f7168c28b6?w=800&q=80",
      tag: "Wellness",
      slug: "natural-beauty",
    },
    {
      title: "Bohemian Interior Style",
      description: "Embracing free-spirited decor and personal expression.",
      image: "https://images.unsplash.com/photo-1550581190-9c1c48d21d6c?w=800&q=80",
      tag: "Home",
      slug: "bohemian-interior",
    },
    {
      title: "Solo Travel Adventures",
      description: "Finding yourself while exploring the world alone.",
      image: "https://images.unsplash.com/photo-1533158628620-e2d8b77a0b8f?w=800&q=80",
      tag: "Travel",
      slug: "solo-travel",
    },
    {
      title: "Sustainable Living Hacks",
      description: "Simple swaps for an eco-friendly lifestyle.",
      image: "https://images.unsplash.com/photo-1534237886190-ced735ca4b73?w=800&q=80",
      tag: "Lifestyle",
      slug: "sustainable-living",
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
                <h2 className="font-sans font-semibold text-[2.2rem] md:text-[2.7rem] leading-[1.4] text-[hsl(var(--editorial-text))] text-left transition-[background-position] duration-[400ms]">
                  <span className="inline-block mb-[-0.3em] pb-[0.3em] bg-current [background-image:linear-gradient(90deg,hsl(217_100%_65%)_0%,hsl(320_98%_74%)_46%,hsl(var(--foreground))_54%,hsl(var(--foreground))_100%)] bg-[length:220%_100%] bg-[position:100%_0] bg-clip-text text-transparent group-hover:bg-[position:0%_0]">
                    {opinion.title}
                  </span>
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
          className="flex gap-4 mb-8 flex-wrap bg-background py-4 justify-center w-screen relative left-1/2 right-1/2 ml-0 mr-0"
          style={{
            position: "sticky",
            top: "72px",
            zIndex: 10,
            marginLeft: "calc(-50vw + 50%)",
            marginRight: "calc(-50vw + 50%)",
          }}
        >
          {["All", "Wellness", "Home", "Travel", "Food", "Fashion", "Lifestyle"].map((category) => (
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
