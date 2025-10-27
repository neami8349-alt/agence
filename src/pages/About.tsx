import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Section from "@/components/Section";
import AppearOnScroll from "@/components/AppearOnScroll";
import { useCounter } from "@/hooks/useCounter";
import {
  Sparkles,
  Palette,
  Heart,
  Users,
  TrendingUp,
  Leaf,
  Check,
  ArrowRight,
} from "lucide-react";

// Import team placeholder images
import avatar1 from "@/assets/avatar-1.jpg";
import avatar2 from "@/assets/avatar-2.jpg";
import avatar3 from "@/assets/avatar-3.jpg";
import avatar4 from "@/assets/avatar-4.jpg";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section with Animated Background */}
      <Section className="relative overflow-hidden">
        {/* Animated gradient background */}
        <div className="absolute inset-0 gradient-background opacity-30 -z-10" />

        <div className="text-center max-w-[80rem] mx-auto relative z-10">
          <AppearOnScroll delay={0}>
            <h1 className="text-[3.4rem] md:text-[4.2rem] lg:text-[6rem] font-semibold tracking-[-0.01em] leading-[1.2] md:leading-[1] mb-[2rem]">
              Our{" "}
              <span className="inline-block bg-current [background-image:linear-gradient(90deg,#FE2C55_0%,#CB30DF_46%,hsl(var(--foreground))_54%,hsl(var(--foreground))_100%)] bg-[length:220%_100%] bg-[position:100%_0] bg-clip-text text-transparent">
                Story
              </span>
            </h1>
          </AppearOnScroll>
          <AppearOnScroll delay={200}>
            <p className="text-[1.8rem] md:text-[2rem] text-muted-foreground leading-[1.8]">
              Where stories meet design, and every word finds its perfect space.
            </p>
          </AppearOnScroll>

          {/* Decorative year badge */}
          <AppearOnScroll delay={400}>
            <div className="inline-block mt-8 px-6 py-2 rounded-full border-2 border-primary/20 bg-primary/5">
              <span className="text-[1.4rem] font-semibold text-primary">Est. 2020</span>
            </div>
          </AppearOnScroll>
        </div>
      </Section>

      {/* Animated Statistics Section */}
      <StatsSection />

      {/* Visual Timeline Section */}
      <TimelineSection />

      {/* Mission Section with Enhanced Quote */}
      <MissionSection />

      {/* Interactive Values Section */}
      <ValuesSection />

      {/* Team/Community Grid */}
      <CommunitySection />

      {/* Enhanced Call to Action */}
      <CTASection />

      <Footer />
    </div>
  );
};

// Statistics Component with Counter Animation
const StatsSection = () => {
  const { count: creators, ref: creatorsRef } = useCounter(10000);
  const { count: articles, ref: articlesRef } = useCounter(500);
  const { count: countries, ref: countriesRef } = useCounter(100);

  return (
    <Section>
      <div className="max-w-[110rem] mx-auto">
        <div className="grid md:grid-cols-3 gap-8 md:gap-12">
          <AppearOnScroll delay={0}>
            <div className="text-center p-8 rounded-2xl border border-border bg-card">
              <div
                ref={creatorsRef as React.RefObject<HTMLDivElement>}
                className="text-[4rem] md:text-[5rem] font-bold mb-2 bg-current [background-image:linear-gradient(90deg,#FE2C55_0%,#CB30DF_100%)] bg-[length:200%_100%] bg-clip-text text-transparent"
              >
                {creators.toLocaleString()}+
              </div>
              <div className="text-[1.6rem] font-medium text-muted-foreground">
                Creators
              </div>
            </div>
          </AppearOnScroll>

          <AppearOnScroll delay={150}>
            <div className="text-center p-8 rounded-2xl border border-border bg-card">
              <div
                ref={articlesRef as React.RefObject<HTMLDivElement>}
                className="text-[4rem] md:text-[5rem] font-bold mb-2 bg-current [background-image:linear-gradient(90deg,#CB30DF_0%,#FE2C55_100%)] bg-[length:200%_100%] bg-clip-text text-transparent"
              >
                {articles.toLocaleString()}+
              </div>
              <div className="text-[1.6rem] font-medium text-muted-foreground">
                Articles Published
              </div>
            </div>
          </AppearOnScroll>

          <AppearOnScroll delay={300}>
            <div className="text-center p-8 rounded-2xl border border-border bg-card">
              <div
                ref={countriesRef as React.RefObject<HTMLDivElement>}
                className="text-[4rem] md:text-[5rem] font-bold mb-2 bg-current [background-image:linear-gradient(90deg,#FE2C55_0%,#CB30DF_100%)] bg-[length:200%_100%] bg-clip-text text-transparent"
              >
                {countries.toLocaleString()}+
              </div>
              <div className="text-[1.6rem] font-medium text-muted-foreground">
                Countries Reached
              </div>
            </div>
          </AppearOnScroll>
        </div>
      </div>
    </Section>
  );
};

// Timeline Component
const TimelineSection = () => {
  const milestones = [
    {
      year: "2020",
      title: "The Beginning",
      description:
        "Editorial was born from a simple belief: that great stories deserve beautiful spaces to live in. A small collective of designers and writers came together.",
    },
    {
      year: "2022",
      title: "Growing Community",
      description:
        "Reached 1 million readers and expanded to 50+ countries. Our platform became home to hundreds of creators from diverse backgrounds.",
    },
    {
      year: "2024",
      title: "Global Impact",
      description:
        "Today, Editorial serves as a canvas for voices that value both substance and style. We've published 500+ articles and continue to grow.",
    },
  ];

  return (
    <Section>
      <div className="max-w-[90rem] mx-auto">
        <AppearOnScroll delay={0}>
          <h2 className="text-[2.7rem] md:text-[3.6rem] font-semibold mb-[4rem] text-center">
            <span className="inline-block mb-[-0.3em] pb-[0.3em] bg-current [background-image:linear-gradient(90deg,#FE2C55_0%,#CB30DF_46%,hsl(var(--foreground))_54%,hsl(var(--foreground))_100%)] bg-[length:220%_100%] bg-[position:100%_0] bg-clip-text text-transparent">
              Our Journey
            </span>
          </h2>
        </AppearOnScroll>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-[2rem] md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-primary via-secondary to-accent" />

          <div className="space-y-16">
            {milestones.map((milestone, index) => (
              <AppearOnScroll key={index} delay={index * 200}>
                <div
                  className={`relative flex flex-col md:flex-row gap-8 ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-[1.4rem] md:left-1/2 md:-translate-x-1/2 w-[1.4rem] h-[1.4rem] rounded-full bg-primary ring-4 ring-background" />

                  {/* Content */}
                  <div
                    className={`flex-1 ml-16 md:ml-0 ${
                      index % 2 === 0 ? "md:pr-16 md:text-right" : "md:pl-16"
                    }`}
                  >
                    <div className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary font-bold text-[1.4rem] mb-3">
                      {milestone.year}
                    </div>
                    <h3 className="text-[2.4rem] font-semibold mb-2">
                      {milestone.title}
                    </h3>
                    <p className="text-[1.6rem] leading-[1.8] text-muted-foreground">
                      {milestone.description}
                    </p>
                  </div>

                  <div className="flex-1" />
                </div>
              </AppearOnScroll>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
};

// Mission Section
const MissionSection = () => {
  const values = [
    "Authentic storytelling over sensationalism",
    "Design as an integral part of the narrative",
    "Diversity in voices, perspectives, and creative approaches",
    "Quality over quantity in every piece we publish",
    "Accessibility and readability for all audiences",
  ];

  return (
    <Section>
      <div className="max-w-[80rem] mx-auto">
        <AppearOnScroll delay={0}>
          <h2 className="text-[2.7rem] md:text-[3.6rem] font-semibold mb-[4rem] text-center">
            <span className="inline-block mb-[-0.3em] pb-[0.3em] bg-current [background-image:linear-gradient(90deg,#FE2C55_0%,#CB30DF_46%,hsl(var(--foreground))_54%,hsl(var(--foreground))_100%)] bg-[length:220%_100%] bg-[position:100%_0] bg-clip-text text-transparent">
              Our Mission
            </span>
          </h2>
        </AppearOnScroll>

        <AppearOnScroll delay={200}>
          <div className="relative p-8 md:p-12 rounded-2xl border-2 border-border bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5 mb-8">
            <p className="text-[2.4rem] md:text-[3rem] font-medium text-center italic leading-[1.4]">
              "To elevate digital storytelling through thoughtful design and
              authentic voices."
            </p>
          </div>
        </AppearOnScroll>

        <AppearOnScroll delay={400}>
          <p className="text-[1.8rem] leading-[1.8] text-foreground mb-6">
            We exist to bridge the gap between editorial excellence and visual
            design. Our mission is to provide a platform where creators can share
            their perspectives without compromise—where technical quality meets
            creative freedom.
          </p>
        </AppearOnScroll>

        <AppearOnScroll delay={600}>
          <p className="text-[1.8rem] leading-[1.8] text-foreground mb-4">
            We're committed to fostering a community that values:
          </p>
        </AppearOnScroll>

        <ul className="space-y-3">
          {values.map((value, index) => (
            <AppearOnScroll key={index} delay={800 + index * 100}>
              <li className="flex items-start gap-3 text-[1.6rem] leading-[1.8] text-foreground">
                <Check className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                <span>{value}</span>
              </li>
            </AppearOnScroll>
          ))}
        </ul>
      </div>
    </Section>
  );
};

// Values Section with Icons
const ValuesSection = () => {
  const values = [
    {
      icon: Sparkles,
      title: "Creativity First",
      description:
        "We believe in empowering creators to push boundaries and explore new forms of expression without constraints.",
      color: "from-primary to-secondary",
    },
    {
      icon: Palette,
      title: "Design Excellence",
      description:
        "Every pixel matters. We're obsessive about typography, spacing, color, and the overall reading experience.",
      color: "from-secondary to-accent",
    },
    {
      icon: Heart,
      title: "Authentic Voices",
      description:
        "We champion genuine perspectives and original thinking over trending topics and clickbait.",
      color: "from-accent to-primary",
    },
    {
      icon: Users,
      title: "Community Driven",
      description:
        "Our readers and contributors shape who we are. We listen, adapt, and grow together.",
      color: "from-primary to-accent",
    },
    {
      icon: TrendingUp,
      title: "Continuous Learning",
      description:
        "We're always evolving, experimenting with new formats, and learning from our community.",
      color: "from-secondary to-primary",
    },
    {
      icon: Leaf,
      title: "Sustainability",
      description:
        "We're committed to building a platform that's sustainable for creators, readers, and the planet.",
      color: "from-accent to-secondary",
    },
  ];

  return (
    <Section>
      <div className="max-w-[110rem] mx-auto">
        <AppearOnScroll delay={0}>
          <h2 className="text-[2.7rem] md:text-[3.6rem] font-semibold mb-[4rem] text-center">
            <span className="inline-block mb-[-0.3em] pb-[0.3em] bg-current [background-image:linear-gradient(90deg,#FE2C55_0%,#CB30DF_46%,hsl(var(--foreground))_54%,hsl(var(--foreground))_100%)] bg-[length:220%_100%] bg-[position:100%_0] bg-clip-text text-transparent">
              Our Values
            </span>
          </h2>
        </AppearOnScroll>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <AppearOnScroll key={index} delay={index * 150}>
                <div className="relative p-8 rounded-2xl border border-border bg-card">
                  <div className="relative">
                    <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${value.color} mb-4`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-[2.2rem] font-semibold mb-3">
                      {value.title}
                    </h3>
                    <p className="text-[1.6rem] leading-[1.8] text-muted-foreground">
                      {value.description}
                    </p>
                  </div>
                </div>
              </AppearOnScroll>
            );
          })}
        </div>
      </div>
    </Section>
  );
};

// Community Section
const CommunitySection = () => {
  const team = [
    { image: avatar1, name: "Sarah Chen" },
    { image: avatar2, name: "Marcus Johnson" },
    { image: avatar3, name: "Elena Rodriguez" },
    { image: avatar4, name: "David Kim" },
  ];

  return (
    <Section>
      <div className="max-w-[90rem] mx-auto text-center">
        <AppearOnScroll delay={0}>
          <h2 className="text-[2.7rem] md:text-[3.6rem] font-semibold mb-[2rem]">
            <span className="inline-block mb-[-0.3em] pb-[0.3em] bg-current [background-image:linear-gradient(90deg,#FE2C55_0%,#CB30DF_46%,hsl(var(--foreground))_54%,hsl(var(--foreground))_100%)] bg-[length:220%_100%] bg-[position:100%_0] bg-clip-text text-transparent">
              Our Community
            </span>
          </h2>
        </AppearOnScroll>

        <AppearOnScroll delay={200}>
          <p className="text-[1.8rem] leading-[1.8] text-muted-foreground mb-12 max-w-[70rem] mx-auto">
            Meet some of the talented creators who bring Editorial to life. From
            photographers to writers, designers to storytellers—our community is
            our strength.
          </p>
        </AppearOnScroll>

        <div className="flex flex-wrap justify-center gap-8 mb-12">
          {team.map((member, index) => (
            <AppearOnScroll key={index} delay={400 + index * 100}>
              <div className="text-center">
                <div className="relative w-32 h-32 mx-auto mb-3 rounded-full overflow-hidden ring-2 ring-border">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="text-[1.4rem] font-medium">{member.name}</p>
              </div>
            </AppearOnScroll>
          ))}
        </div>

        <AppearOnScroll delay={800}>
          <p className="text-[1.6rem] text-muted-foreground">
            + 10,000 creators worldwide
          </p>
        </AppearOnScroll>
      </div>
    </Section>
  );
};

// Enhanced CTA Section
const CTASection = () => {
  return (
    <Section className="relative overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 gradient-background opacity-20 -z-10" />

      <div className="text-center max-w-[70rem] mx-auto relative z-10 border-t border-border pt-[4rem]">
        <AppearOnScroll delay={0}>
          <h3 className="text-[2.4rem] md:text-[3rem] font-semibold mb-[1.5rem]">
            Join Our Community
          </h3>
        </AppearOnScroll>

        <AppearOnScroll delay={200}>
          <p className="text-[1.8rem] leading-[1.8] text-muted-foreground mb-[3rem]">
            Whether you're a reader, writer, photographer, or designer—there's a
            place for you at Editorial.
          </p>
        </AppearOnScroll>

        <AppearOnScroll delay={400}>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="/contact"
              className="group inline-flex items-center gap-2 px-8 py-4 text-[1.6rem] font-medium bg-foreground text-background rounded-xl hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Get in Touch
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="/blog"
              className="inline-flex items-center gap-2 px-8 py-4 text-[1.6rem] font-medium border-2 border-foreground rounded-xl hover:bg-foreground hover:text-background hover:scale-105 transition-all duration-300"
            >
              Explore Stories
            </a>
          </div>
        </AppearOnScroll>
      </div>
    </Section>
  );
};

export default About;
