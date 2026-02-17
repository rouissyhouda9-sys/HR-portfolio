import { AnimatedBorderButton } from "@/components/AnimatedBorderButton";
import { Button } from "@/components/Button";
import LiquidEther from "@/components/LiquidEther";
import { ArrowRight, Github, Instagram, Linkedin,ChevronDown } from "lucide-react";

const socials = [
  {
    name: "GitHub",
    href: "https://github.com/#",
    icon: Github,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/authwall?trk=bf&trkInfo=AQE671xkG0Q2igAAAZw_wdbQ__KL2UFlLbhsw0cpF-2Mtqzt8X_JGxH1Qps7XepIgbowX1metfaYhP7v9AhrX8OrXehLTnovHkt56_FItO_P5P7-U6wIChW5eTuOe7xOtBAAOkE=&original_referer=&sessionRedirect=https%3A%2F%2Fwww.linkedin.com%2Fin%2Fhouda-rouissy%3Futm_source%3Dshare%26utm_campaign%3Dshare_via%26utm_content%3Dprofile%26utm_medium%3Dios_app",
    icon: Linkedin,
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/hr.arenas?igsh=MXJrdWRndHA4eHh5bQ%3D%3D&utm_source=qr/",
    icon: Instagram,
  },
];
export default function Hero() {
  return (
    <section className="relative min-h-[100dvh] overflow-hidden">
      {/* Background animation */}
      <div className="absolute inset-0 -z-10">
       <LiquidEther     mouseForce={20}
    cursorSize={50}
    isViscous
    viscous={30}
    colors={["#95939f","#FF9FFC","#fbbced"]}
    autoDemo
    autoSpeed={0.5}
    autoIntensity={2.2}
    isBounce={false}
    resolution={0.5}
  />
  {/* <ColorBends
     colors={["#ff5c7a", "#8a5cff", "#00ffd1"]}
  rotation={0}
  speed={0.2}
  scale={1}
  frequency={1}
  warpStrength={1}
  mouseInfluence={1}
  parallax={0.5}
  noise={0.1}
  transparent
  autoRotate={0}
  color=""
/>*/}
      </div>

      {/* Content */}
      <div className="container mx-auto px-20 pt-50 pb-24 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* LEFT COLUMN */}
          <div className="space-y-8">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-foreground animate-fade-in">
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              Web Developer – Webmaster
            </span>

            <div className="space-y-8">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight animate-fade-in animation-delay-300">
                Crafting <span className="text-primary glow-text">digital</span>
                <br />
                experiences
                <br />
                <span className="font-serif italic font-normal">
                  precision
                </span>
              </h1>

              <p className="text-lg text-foreground max-w-lg animate-fade-in animation-delay-500">
               
               Hi, I'm Houda Rouissy, a web developer who builds and manages modern websites.
                Paying attention to performance, usability, and clean UI is absolutely my thing...<br/>
                Creating scalable and efficient web experiences that users enjoy is my specialty
              </p>

              {/* CTAs */}
              <div className="flex flex-wrap gap-4 animate-fade-in animation-delay-600">
                <a href="#contact">
  <Button size="lg">
    Contact Me <ArrowRight className="w-5 h-5" />
  </Button>
</a>
                <AnimatedBorderButton />
              </div>

              {/* Socials */}
              <div className="flex items-center gap-4 animate-fade-in animation-delay-600">
                <span className="text-md text-muted-foreground">
                  Follow me :
                </span>
               {socials.map(({ name, href, icon: Icon }) => (
                  <a
      key={name}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={name}
      className="p-2 rounded-full glass 
        hover:bg-primary/10 hover:text-primary 
        transition-all duration-300"
    >
                    <Icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>
          

          {/* RIGHT COLUMN */}
          <div className="relative flex justify-center lg:justify-end lg:-mt-16 animate-fade-in animation-delay-300">
            <div className="relative max-w-md">
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/30 via-transparent to-primary/10 blur-2xl" />
              <div className="relative glass rounded-3xl p-2 glow-border">
                <img
                  src="/imagesprofile.png"
                  alt="Houda Rouissy"
                  className="w-full aspect-[4/5] object-cover rounded-2xl"
                />
                {/* Floating Badge */}
                <div className="absolute -bottom-4 -right-4 glass rounded-xl px-4 py-3 animate-float">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                    <span className="text-sm glow text-primary-foreground font-medium">
                      Available for work
                    </span>
                  </div>
                </div>
                     {/* Stats Badge */}
                         <div className="absolute -top-4 -left-4 glass rounded-xl px-4 py-3 animate-float animation-delay-500">
                  <div className="text-2xl font-bold text-primary-foreground">6+</div>
                  <div className="text-xs text-primary-foreground">Years Exp.</div>    
                  </div>
              </div>

            </div>
          </div>

        </div>
      
      </div>
       <div className="absolute bottom-2 left-1/2 -translate-x-1/2 z-30 animate-fade-in animation-delay-800">
  <a
    href="#about"
    className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors group"
  >
    <span className="text-xs uppercase tracking-wider">Scroll</span>
    <ChevronDown className="w-6 h-6 animate-bounce" />
  </a>
</div>

      
    </section>
  );
}
