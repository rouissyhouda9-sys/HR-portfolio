import { AnimatedBorderButton } from "@/components/AnimatedBorderButton";
import { Button } from "@/components/Button";
import LiquidEther from "@/components/LiquidEther";
 import { ArrowRight, Github, Instagram, Linkedin, ChevronDown } from "lucide-react";

const skills = [
  "Webflow", "React", "WordPress", "HTML5", "CSS3",
  "JavaScript", "Tailwind CSS", "Next.js", "Figma",
  "MongoDB", "Git", "Jira", "MantisBT", "Squash TM", "TestLink",
];

export default function Hero() {
  return (
    <section className="relative px-[18%]  py-6 overflow-hidden">
      {/* On n'enveloppe que le texte que l'on veut animer au scroll */}
     <p className="text-lg text-secondary mb-5 text-center animate-fade-in animation-delay-200">
          Technologies I work with
        </p>
       
      <div className="mt-10 animate-fade-in animation-delay-300" >
        <div className="relative overflow-hidden group cursor-pointer">
          {/* Gradients pour l'effet de fondu sur les côtés */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />

          {/* Animation Marquee */}

<div className="flex animate-marquee group-hover:[animation-play-state:paused]">
  {/* On double la liste pour créer l'effet de boucle infinie */}
  {[...skills, ...skills].map((skill, idx) => (
    <div key={idx} className="flex-shrink-0 px-8">
       <span className="text-2xl font-semibold text-muted-foreground/50 hover:text-primary transition-colors">
         {skill}
       </span>
    </div>
  ))}
</div>


      
        </div>
      </div>
    </section>
  );
}