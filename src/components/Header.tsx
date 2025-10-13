import { PenLine } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { Twitter } from "lucide-react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 bg-background transition-shadow duration-300 ${
        isScrolled ? "shadow-[0_0_calc(1.125*16px)_rgba(0,0,0,0.15)]" : ""
      }`}
      style={{ height: "72px" }}
    >
      <div className="mx-auto h-full" style={{ padding: "0 calc(18vw - 10rem)" }}>
        <div className="flex items-center justify-between h-full">
          <Link 
            to="/" 
            className="text-[2.4rem] font-bold tracking-tight transition-opacity hover:opacity-80 flex items-center gap-3"
          >
            <div className="bg-gradient-to-br from-primary via-secondary to-accent p-2 rounded-lg">
              <PenLine className="w-6 h-6 text-white" strokeWidth={2.5} />
            </div>
            <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Editorial
            </span>
          </Link>
          <nav className="flex items-center gap-8">
            <Link
              to="/blog"
              className="text-[1.8rem] font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Blog
            </Link>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[1.8rem] font-medium text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2"
            >
              Twitter
            </a>
            <a href="#" className="text-[1.8rem] font-medium text-muted-foreground hover:text-foreground transition-colors">
              Remix
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
