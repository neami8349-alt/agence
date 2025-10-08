import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Header from "@/components/Header";
import {
  Article as ArticleWrapper,
  ArticleHeader,
  ArticleHero,
  ArticleContainer,
  ArticleContent,
} from "@/components/ArticleComponents";
import { ArticleRelatedItems } from "@/components/ArticleRelatedItems";
import articleCoverImage from "@/assets/article-cover.jpg";
import workspaceImage from "@/assets/workspace.jpg";
import designSystemsImage from "@/assets/design-systems.jpg";
import storytellingImage from "@/assets/storytelling.jpg";
import sustainableDevImage from "@/assets/sustainable-dev.jpg";
import avatar1 from "@/assets/avatar-1.jpg";

const Article = () => {
  const relatedArticles = [
    {
      title: "Design Systems That Scale",
      description: "Building maintainable design foundations requires strategic planning and thoughtful execution. Here's how to create systems that grow with your team.",
      image: designSystemsImage,
      tag: "Design",
      slug: "design-systems-scale",
    },
    {
      title: "The Art of Storytelling",
      description: "How narrative influences experience and shapes the way users connect with your product. Learn the techniques that make stories unforgettable.",
      image: storytellingImage,
      tag: "Content",
      slug: "art-of-storytelling",
    },
    {
      title: "Sustainable Development",
      description: "Creating with environmental consciousness is no longer optional. Discover practical approaches to building digital products that reduce carbon footprint.",
      image: sustainableDevImage,
      tag: "Innovation",
      slug: "sustainable-development",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <ArticleWrapper>
        <ArticleHero image={articleCoverImage} alt="The Future of Creative Technology" />

        <div className="box-content max-w-[86.25rem] px-4 md:px-[calc(18vw-6.25rem)] mx-auto mt-8">
          <Link
            to="/blog"
            className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-foreground transition-colors group"
          >
            <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
            Back to Stories
          </Link>
        </div>

        <ArticleHeader
          title="The Future of Creative Technology"
          date="December 15, 2024"
          author={{
            name: "Sarah Mitchell",
            title: "Senior Editor",
            avatar: avatar1,
          }}
        />

        <ArticleContainer>
          <ArticleContent>
            <p>
              In an era where technology evolves at breakneck speed, the intersection of artificial intelligence and
              human creativity represents one of the most fascinating frontiers of our time. This convergence is not
              just reshaping industries—it's fundamentally altering how we conceive, create, and interact with digital
              experiences.
            </p>

            <p>
              The traditional boundaries between creator and tool are blurring. AI systems are no longer passive
              instruments waiting for human direction; they're becoming collaborative partners in the creative process.
              This shift demands that we reconsider our relationship with technology and reimagine what it means to be
              creative in the digital age.
            </p>

            <p>
              Consider the designer who uses AI to generate hundreds of layout variations in seconds, or the writer who
              employs language models to explore narrative possibilities. These aren't examples of technology replacing
              human creativity—they're instances of augmentation, where AI amplifies human capabilities and opens new
              avenues for expression.
            </p>

            <figure className="blockquote-big">
              <blockquote>
                "The future belongs to those who can harness technology's power while maintaining the irreplaceable
                essence of human insight and intuition."
              </blockquote>
              <figcaption>Dr. Elena Rodriguez, AI Ethics Research Lead</figcaption>
            </figure>

            <p>
              Yet this transformation raises important questions. How do we preserve authenticity in an age of
              AI-generated content? What role should human judgment play when machines can optimize for metrics? And
              perhaps most critically, how do we ensure that these powerful tools remain accessible and beneficial to
              creators of all backgrounds?
            </p>

            <figure className="my-12">
              <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden bg-muted">
                <img src={workspaceImage} alt="Creative workspace" className="w-full h-full object-cover" />
              </div>
              <figcaption className="mt-3 text-sm text-center text-muted-foreground">
                Modern creative workspaces blend traditional and digital tools
              </figcaption>
            </figure>

            <h2>Embracing the New Era</h2>

            <p>
              The path forward requires thoughtful consideration of both opportunities and responsibilities. As
              creators, developers, and users of these technologies, we must advocate for systems that enhance rather
              than replace human creativity, that democratize access to creative tools, and that maintain ethical
              standards in their application.
            </p>

            <p>
              Looking ahead, the most successful creative practitioners will be those who view AI not as a replacement
              for human insight, but as a powerful collaborator that can handle routine tasks, generate alternatives,
              and help explore creative possibilities that might otherwise remain undiscovered. The future of creativity
              is not human versus machine—it's human and machine, working together to push the boundaries of what's
              possible.
            </p>
          </ArticleContent>
        </ArticleContainer>
      </ArticleWrapper>

      {/* Related Articles */}
      <section>
        <ArticleRelatedItems items={relatedArticles} />
      </section>

      {/* Footer */}
      <footer className="border-t border-border mt-12">
        <div className="mx-auto py-12" style={{ maxWidth: "86.25rem", padding: "2rem calc(18vw - 10rem)" }}>
          <div className="text-center text-sm text-muted-foreground">
            <p>© 2024 Editorial. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Article;
