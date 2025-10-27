import { Link } from "react-router-dom";
import { useTheme } from "./ThemeProvider";

const Footer = () => {
  const { theme, setTheme } = useTheme();

  return (
    <footer className="border-t border-border mt-24">
      <div className="py-12 px-6 md:px-[calc(18vw-10rem)]">
        <div className="max-w-[138rem] mx-auto">
          {/* Row 1: Navigation and Social Links */}
          <div className="mb-8 flex justify-between items-center">
          {/* Footer Navigation */}
          <nav className="flex gap-x-8 text-[1.4rem]">
            <Link to="/blog" className="text-muted-foreground hover:text-foreground transition-colors whitespace-nowrap">
              Home
            </Link>
            <Link to="/about" className="text-muted-foreground hover:text-foreground transition-colors whitespace-nowrap">
              Our story
            </Link>
            <Link to="/contact" className="text-muted-foreground hover:text-foreground transition-colors whitespace-nowrap">
              Contact
            </Link>
            <Link to="/faq" className="text-muted-foreground hover:text-foreground transition-colors whitespace-nowrap">
              FAQ
            </Link>
            <Link to="/privacy" className="text-muted-foreground hover:text-foreground transition-colors whitespace-nowrap">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-muted-foreground hover:text-foreground transition-colors whitespace-nowrap">
              Terms & Conditions
            </Link>
          </nav>

          {/* Social Media */}
          <nav className="flex gap-x-8 text-[1.4rem]">
            <a
              href="mailto:hello@editorial.com"
              className="text-muted-foreground hover:text-foreground transition-colors whitespace-nowrap"
            >
              Email
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors whitespace-nowrap"
            >
              Facebook
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors whitespace-nowrap"
            >
              Instagram
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors whitespace-nowrap"
            >
              Twitter
            </a>
          </nav>
        </div>

        {/* Horizontal Rule */}
        <hr className="border-t border-border mb-8" />

        {/* Row 2: Copyright and Theme Toggle */}
        <div className="flex justify-between items-center">
          {/* Copyright */}
          <div className="text-[1.4rem] text-muted-foreground">
            <p>© 2024 Editorial. All rights reserved.</p>
          </div>

          {/* Theme Toggle */}
          <div className="flex items-center gap-6">
            <button
              onClick={() => setTheme("light")}
              className={`px-2 py-2 text-[1.4rem] font-medium transition-colors ${
                theme === "light"
                  ? "text-foreground underline decoration-2 underline-offset-4"
                  : "text-muted-foreground"
              }`}
              aria-label="Light mode"
            >
              Light
            </button>
            <button
              onClick={() => setTheme("dark")}
              className={`px-2 py-2 text-[1.4rem] font-medium transition-colors ${
                theme === "dark"
                  ? "text-foreground underline decoration-2 underline-offset-4"
                  : "text-muted-foreground"
              }`}
              aria-label="Dark mode"
            >
              Dark
            </button>
            <button
              onClick={() => setTheme("system")}
              className={`px-2 py-2 text-[1.4rem] font-medium transition-colors ${
                theme === "system"
                  ? "text-foreground underline decoration-2 underline-offset-4"
                  : "text-muted-foreground"
              }`}
              aria-label="System theme"
            >
              Auto
            </button>
          </div>
        </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
