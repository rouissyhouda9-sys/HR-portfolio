import { Github, Linkedin, Instagram, Heart } from "lucide-react";

const socialLinks = [
  { icon: Github, href: "#", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/authwall?trk=bf&trkInfo=AQE671xkG0Q2igAAAZw_wdbQ__KL2UFlLbhsw0cpF-2Mtqzt8X_JGxH1Qps7XepIgbowX1metfaYhP7v9AhrX8OrXehLTnovHkt56_FItO_P5P7-U6wIChW5eTuOe7xOtBAAOkE=&original_referer=&sessionRedirect=https%3A%2F%2Fwww.linkedin.com%2Fin%2Fhouda-rouissy%3Futm_source%3Dshare%26utm_campaign%3Dshare_via%26utm_content%3Dprofile%26utm_medium%3Dios_app", label: "LinkedIn" },
  { icon: Instagram, href: "https://www.instagram.com/hr.arenas?igsh=MXJrdWRndHA4eHh5bQ%3D%3D&utm_source=qr/", label: "Instagram" },
];


const footerLinks = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo & Copyright */}
          <div className="text-center md:text-left">
            <a
          href="#"
          className=" logo-hover text-xl font-bold tracking-tight hover:text-primary"
        > <span className="logo-short">
    HR<span className="logo-dot">.</span>
  </span>

  <span className="logo-full">
    &lt;HoudaRouissy/&gt;
  </span>
        </a>
            <p className="text-sm text-muted-foreground mt-2">
              © {currentYear} Rouissy Houda. All rights reserved.
            </p>
          </div>

          {/* Links */}
          <nav className="flex flex-wrap justify-center gap-6">
            {footerLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                className="p-2 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all"
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};