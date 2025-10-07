import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Share2 } from "lucide-react";
import { FacebookIcon, TwitterIcon, LinkedinIcon } from "lucide-react";
import articleCoverImage from "@/assets/article-cover.jpg";
import workspaceImage from "@/assets/workspace.jpg";
import designSystemsImage from "@/assets/design-systems.jpg";
import storytellingImage from "@/assets/storytelling.jpg";
import sustainableDevImage from "@/assets/sustainable-dev.jpg";

const Article = () => {
  const relatedArticles = [
    {
      title: "Design Systems That Scale",
      description: "Building maintainable design foundations",
      image: designSystemsImage,
      tag: "Design",
      slug: "design-systems-scale"
    },
    {
      title: "The Art of Storytelling",
      description: "How narrative influences experience",
      image: storytellingImage,
      tag: "Content",
      slug: "art-of-storytelling"
    },
    {
      title: "Sustainable Development",
      description: "Creating with environmental consciousness",
      image: sustainableDevImage,
      tag: "Innovation",
      slug: "sustainable-development"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Image */}
      <div className="relative w-full bg-muted" style={{ aspectRatio: '16/5' }}>
        <img 
          src={articleCoverImage} 
          alt="Article cover"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Header */}
      <header style={{ 
        width: '100%',
        maxWidth: '86.25rem',
        margin: '100px auto 0',
        paddingRight: 'calc(18vw - 6.25rem)',
        paddingLeft: 'calc(18vw - 6.25rem)'
      }}>
        <Link to="/blog" className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-foreground transition-colors mb-8 group">
          <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
          Back to Stories
        </Link>
        
        <div className="space-y-4 animate-fade-in">
          <time className="block text-sm font-medium text-muted-foreground">
            December 15, 2024
          </time>
          <h1 className="font-serif text-5xl lg:text-6xl font-bold text-[hsl(var(--editorial-text))] leading-tight">
            The Future of Creative Technology
          </h1>
          <div className="flex items-center gap-4 pt-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-muted" />
              <div>
                <p className="font-semibold text-[hsl(var(--editorial-text))]">Sarah Mitchell</p>
                <p className="text-sm text-muted-foreground">Senior Editor</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Article Content */}
      <article className="mx-auto py-16 animate-fade-in" style={{ maxWidth: '640px', padding: '4rem 2rem' }}>
        <div className="prose prose-lg max-w-none">
          <p className="text-lg text-[hsl(var(--editorial-text-light))] leading-relaxed mb-6">
            In an era where technology evolves at breakneck speed, the intersection of artificial intelligence 
            and human creativity represents one of the most fascinating frontiers of our time. This convergence 
            is not just reshaping industries—it's fundamentally altering how we conceive, create, and interact 
            with digital experiences.
          </p>

          <p className="text-[hsl(var(--editorial-text-light))] leading-relaxed mb-6">
            The traditional boundaries between creator and tool are blurring. AI systems are no longer passive 
            instruments waiting for human direction; they're becoming collaborative partners in the creative 
            process. This shift demands that we reconsider our relationship with technology and reimagine what 
            it means to be creative in the digital age.
          </p>

          <p className="text-[hsl(var(--editorial-text-light))] leading-relaxed mb-8">
            Consider the designer who uses AI to generate hundreds of layout variations in seconds, or the 
            writer who employs language models to explore narrative possibilities. These aren't examples of 
            technology replacing human creativity—they're instances of augmentation, where AI amplifies human 
            capabilities and opens new avenues for expression.
          </p>
        </div>

        {/* Large Quote */}
        <blockquote className="my-12 py-8 border-l-4 border-primary pl-8" style={{ maxWidth: '1020px', marginLeft: 'calc(-190px)', marginRight: 'calc(-190px)' }}>
          <p className="font-serif text-3xl font-semibold text-[hsl(var(--editorial-text))] leading-relaxed mb-4">
            "The future belongs to those who can harness technology's power while maintaining the irreplaceable 
            essence of human insight and intuition."
          </p>
          <cite className="text-sm font-medium text-muted-foreground not-italic">
            — Dr. Elena Rodriguez, AI Ethics Research Lead
          </cite>
        </blockquote>

        <div className="prose prose-lg max-w-none">
          <p className="text-[hsl(var(--editorial-text-light))] leading-relaxed mb-6">
            Yet this transformation raises important questions. How do we preserve authenticity in an age of 
            AI-generated content? What role should human judgment play when machines can optimize for metrics? 
            And perhaps most critically, how do we ensure that these powerful tools remain accessible and 
            beneficial to creators of all backgrounds?
          </p>
        </div>

        {/* Large Image */}
        <figure className="my-12" style={{ maxWidth: '1020px', marginLeft: 'calc(-190px)', marginRight: 'calc(-190px)' }}>
          <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden bg-muted">
            <img 
              src={workspaceImage} 
              alt="Creative workspace"
              className="w-full h-full object-cover"
            />
          </div>
          <figcaption className="mt-3 text-sm text-center text-muted-foreground">
            Modern creative workspaces blend traditional and digital tools
          </figcaption>
        </figure>

        <div className="prose prose-lg max-w-none">
          <p className="text-[hsl(var(--editorial-text-light))] leading-relaxed mb-6">
            The path forward requires thoughtful consideration of both opportunities and responsibilities. 
            As creators, developers, and users of these technologies, we must advocate for systems that enhance 
            rather than replace human creativity, that democratize access to creative tools, and that maintain 
            ethical standards in their application.
          </p>

          <p className="text-[hsl(var(--editorial-text-light))] leading-relaxed mb-6">
            Looking ahead, the most successful creative practitioners will be those who view AI not as a 
            replacement for human insight, but as a powerful collaborator that can handle routine tasks, 
            generate alternatives, and help explore creative possibilities that might otherwise remain 
            undiscovered. The future of creativity is not human versus machine—it's human and machine, 
            working together to push the boundaries of what's possible.
          </p>
        </div>
      </article>

      {/* Social Share */}
      <div className="mx-auto pb-16 border-b border-border" style={{ maxWidth: '640px', padding: '0 2rem 4rem' }}>
        <p className="text-sm font-medium text-[hsl(var(--editorial-text))] mb-4">Share this article</p>
        <div className="flex gap-3">
          <Button variant="outline" size="icon" className="rounded-full">
            <LinkedinIcon className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="icon" className="rounded-full">
            <TwitterIcon className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="icon" className="rounded-full">
            <FacebookIcon className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* Related Articles */}
      <section className="py-16">
        <div className="mx-auto" style={{ maxWidth: '1020px', padding: '0 2rem' }}>
          <h2 className="font-serif text-3xl font-bold text-[hsl(var(--editorial-text))] mb-8">
            Related Stories
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {relatedArticles.map((article, index) => (
              <Link
                key={index}
                to={`/article/${article.slug}`}
                className="group"
              >
                <article>
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
                  <h3 className="font-serif text-xl font-bold text-[hsl(var(--editorial-text))] mb-2 group-hover:text-primary transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-[hsl(var(--editorial-text-light))]">
                    {article.description}
                  </p>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border mt-12">
        <div className="mx-auto py-12" style={{ maxWidth: '86.25rem', padding: '2rem calc(18vw - 10rem)' }}>
          <div className="text-center text-sm text-muted-foreground">
            <p>© 2024 Editorial. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Article;
