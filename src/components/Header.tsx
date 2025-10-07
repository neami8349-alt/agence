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
          <Link to="/" className="font-sans text-2xl font-bold text-foreground">
            Editorial
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
