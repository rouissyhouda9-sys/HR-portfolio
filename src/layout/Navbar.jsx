import { Button } from "@/components/Button";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
];

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // lock scroll when menu is open (important on mobile)
  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "";
  }, [isMobileMenuOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled ? "glass-strong py-3" : "bg-transparent py-5"
        }`}
      >
        <nav className="container mx-auto px-6 flex items-center justify-between">
          <a href="#" className="logo-hover text-xl font-bold">
            <span className="logo-short">
              HR<span className="logo-dot">.</span>
            </span>
            <span className="logo-full">&lt;HoudaRouissy/&gt;</span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex gap-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-4 py-2 text-sm hover:bg-surface rounded-full"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <Button size="sm">Contact Me</Button>
          </div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden p-2 z-[60]"
            onClick={() => setIsMobileMenuOpen((p) => !p)}
          >
            {isMobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </nav>
      </header>

      {/* MOBILE MENU OVERLAY */}
      {isMobileMenuOpen && (
  <div className="fixed inset-0 z-[60] bg-black/90 backdrop-blur-xl md:hidden">
    {/* Top bar */}
    <div className="flex items-center justify-between px-6 py-5">
      {/* Logo */}
      <span className="text-xl font-bold text-white">
        HR<span className="text-primary">.</span>
      </span>

      {/* Close button */}
      <button
        onClick={() => setIsMobileMenuOpen(false)}
        className="text-white"
      >
        <X size={28} />
      </button>
    </div>

    {/* Menu links */}
    <div className="mt-12 px-6 flex flex-col gap-6">
      {navLinks.map((link) => (
        <a
          key={link.href}
          href={link.href}
          onClick={() => setIsMobileMenuOpen(false)}
          className="text-2xl font-medium text-white"
        >
          {link.label}
        </a>
      ))}

      <Button
        size="lg"
        className="mt-6 bg-primary text-primary-foreground"
        onClick={() => {
          document
            .querySelector("#contact")
            ?.scrollIntoView({ behavior: "smooth" });
          setIsMobileMenuOpen(false);
        }}
      >
        Contact Me
      </Button>
    </div>
  </div>
)}
    </>
  );
};

export default Navbar;
