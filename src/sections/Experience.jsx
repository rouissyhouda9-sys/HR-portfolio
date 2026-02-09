 
 const experiences = [
  {
    period: "06/2023 — Present",
    role: "Web Developer / Webmaster",
    company: "CREACOM",
    current: true,
    bullets: [
      "Design, development, and maintenance of modern websites with a strong focus on performance, reliability, and user experience.",
      "Building intuitive, user-centered interfaces aligned with brand identity and business objectives.",
      "Integration of UI/UX designs into fully responsive, accessible, and cross-browser-compatible websites.",
      "Ongoing optimization, bug fixing, and continuous improvement of website features and performance.",
    ],
  },
  {
    period: "09/2021 — 05/2023",
    role: "Content Moderator",
    company: "MAJOREL",
    current: false,
    bullets: [
      "Moderation of high-traffic digital platforms to ensure safe and compliant online environments.",
      "Analysis and removal of inappropriate or harmful content in accordance with platform guidelines.",
      "Strict application of quality standards, procedures, and moderation policies.",
      "Contribution to platform reliability, user trust, and overall content quality.",
    ],
  },
  {
    period: "09/2018 — 05/2021",
    role: "Web Integrator",
    company: "ENGINEERING INSIDE",
    current: false,
    bullets: [
      "Integration of graphic designs and creation of HTML email campaigns.",
      "Conversion of PSD designs into clean, structured HTML for web and email use.",
      "Development of responsive, cross-client-compatible HTML emails.",
      "Strict adherence to technical constraints, rendering consistency, and responsive design standards.",
      "Close collaboration with design teams to ensure visual consistency and accuracy.",
    ],
  },
];
 export const Experience = () => {
  return (
    <section id="experience" className="py-32 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <span className="text-secondary  text-sm font-medium tracking-wider uppercase animate-fade-in">
            Career Journey
          </span>

          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-highlight">
            Experience that{" "}
            <span className="font-serif italic font-normal text-white">
              speaks volumes.
            </span>
          </h2>

          <p className="text-muted-foreground animate-fade-in animation-delay-200">
            A timeline of my professional growth, from hands-on execution to
            building reliable, user-focused web experiences.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative ">
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-primary/70 via-primary/30 to-transparent md:-translate-x-1/2" />

          <div className="space-y-12 ">
            {experiences.map((exp, idx) => (
              <div
                key={idx}
                className="relative grid  md:grid-cols-2 gap-8 animate-fade-in"
                style={{ animationDelay: `${(idx + 1) * 150}ms` }}
              >
                {/* Timeline Dot */}
                <div className="absolute left-0 md:left-1/2 top-0 w-3 h-3 bg-primary rounded-full -translate-x-1/2 ring-4 ring-background z-10">
                  {exp.current && (
                    <span className="absolute inset-0 rounded-full bg-primary animate-ping opacity-75" />
                  )}
                </div>

                {/* Content */}
                <div
                  className={`text-justify pl-8 md:pl-0 ${
                    idx % 2 === 0
                      ? "md:pr-16 md:text-justify"
                      : "md:col-start-2 md:pl-16"
                  }`}
                >
                  <div className="glass p-6 rounded-2xl border border-primary/30 hover:border-primary/50 transition-all duration-500">
                    <span className="text-sm text-primary font-medium">
                      {exp.period}
                    </span>

                    <h3 className="text-xl font-semibold mt-2">
                      {exp.role}
                    </h3>

                    <p className="text-muted-foreground">
                      {exp.company}
                    </p>

                    {/* Bullets */}
                    <ul className="mt-4 space-y-2 text-sm text-muted-foreground list-disc pl-5">
                      {exp.bullets.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
