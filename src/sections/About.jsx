import { Code2, Lightbulb, Rocket, Users } from "lucide-react"; 
const highlights = [
  {
    icon: Code2,
    title: "Front-end Development",
    description:
      "HTML, CSS, JavaScript, React, Tailwind & responsive UI integration.",
  },
  {
    icon: Rocket,
    title: "Performance & Reliability",
    description:
      "Optimized, stable interfaces designed for real-world usage.",
  },
  {
    icon: Users,
    title: "Quality & Testing",
    description: "Manual functional testing, test cases, bug tracking, and reporting.",
  },
  {
    icon: Lightbulb,
    title: "Collaboration",
    description:
      "Clear communication with designers, teams, and clients to deliver quality results.",
  },
];

export const About = () => {
  return (
    <section id="about" className="py-25 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column */}
          <div className="space-y-8">
            <div className=" animate-fade-in animation-delay-300">
              <span className="text-secondary text-sm font-medium tracking-wider uppercase">
                About Me
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold leading-tight animate-fade-in animation-delay-400 text-secondary-foreground">
             <span className="text-highlight glow-text"> Building the future</span>,
              <span className="font-serif italic font-normal text-white">
                {" "}
                one component at a time.
              </span>
            </h2>

            <div className="space-y-4 text-muted-foreground animate-fade-in animation-delay-500">
              <p>
           I’m a front-end web developer with a Bachelor’s degree in Web Application Design and Development, specialized in creating performant,
 maintainable, and user-friendly web solutions. I focus on transforming UI/UX designs into responsive, accessible interfaces aligned with
  real functional needs.
              </p>
              <p>
               I bring a strong sensitivity to software quality and functional testing, applying structured testing practices to ensure reliability, stability,
 and consistency across user journeys. For me, a good interface is not only visually clean — it must work flawlessly.
              </p>
              <p>
             I have experience working on high-traffic digital platforms, contributing to their reliability through bug fixing, continuous improvement, 
and strict adherence to quality standards. I’m comfortable collaborating within teams or working independently with clients, always prioritizing
 clarity, performance, and long-term maintainability.
              </p>
            </div>

            <div className="glass rounded-2xl p-6 glow-border animate-fade-in animation-delay-500">
              <p className="text-xl font-medium italic text-foreground ">
                "I build digital spaces that people love to use and developers actually want to maintain."
              </p>
            </div>
          </div>

          {/* Right Column - Hilights */}
          <div className="grid sm:grid-cols-2 gap-6 ">
            {highlights.map((item, idx) => (
              <div
                key={idx}
                className="glass p-6 rounded-2xl hover:bg-secondary/65   animate-fade-in  "
                style={{ animationDelay: `${(idx + 1) * 200}ms` }}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 hover:bg-secondary/30">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
     
    </section>
  );
};