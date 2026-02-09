import ScrollStack, { ScrollStackItem } from "@/components/ScrollStack";

const experiences = [
  {
    period: "06/2023 — Présent",
    role: "Web Developer / Webmaster",
    company: "CREACOM",
    current: true,
      bullets: [
    "Design, development, and maintenance of modern websites with a strong focus on performance, reliability, and user experience.",
    "Building intuitive, user-centered interfaces that align with business goals.",
    "Integration of UI/UX designs with fully responsive and accessible implementations.",
    "Ongoing optimization, bug fixing, and continuous improvement of website features and performance.",
  ],
  },
  {
    period: "09/2021 — 05/2023",
    role: "Modératrice de contenu",
    company: "MAJOREL",
    current: false,
    bullets: [
      "Intervention sur des plateformes numériques à fort trafic.",
      "Analyse et suppression des contenus inappropriés ou nuisibles.",
      "Application rigoureuse des procédures et standards de qualité.",
      "Contribution à la fiabilité globale et au bon fonctionnement des espaces en ligne.",
    ],
  },
  {
    period: "09/2018 — 05/2021",
    role: "Intégratrice web",
    company: "ENGINEERING INSIDE",
    current: false,
    bullets: [
      "Intégration de maquettes graphiques et réalisation de campagnes emailing.",
      "Transformation de maquettes PSD en HTML pour le web et l’email.",
      "Conception d’emails HTML compatibles avec les principaux clients de messagerie.",
      "Respect strict des contraintes techniques, d’affichage et de responsive design.",
      "Collaboration étroite avec les équipes design pour assurer la cohérence visuelle.",
    ],
  },
];

export function Experience() {
  return (
    <section id="experience"  className="py-32 relative overflow-hidden">
       <div
        className="absolute top-1/2 left-1/4 w-96
       h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2"
      />
      {/* Glow background */}
      <div
        className="absolute top-1/2 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2"
        aria-hidden
      />

      <div className="container mx-auto  px-6 relative z-10">
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
            A timeline of my professional growth, from curious beginner to
            senior engineer leading teams and building products at scale.
          </p>
        </div>

        {/* Scroll Stack */}
          <div className="relative">
          <div className="timeline-glow absolute left-0 md:left-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-primary/70 via-primary/30 to-transparent md:-translate-x-1/2 shadow-[0_0_25px_rgba(32,178,166,0.8)]" />

        <ScrollStack useWindowScroll>
            <div className="space-y-12">
  {experiences.map((exp, idx) => (
    <ScrollStackItem key={`${exp.period}-${exp.company}`}>
      <div
        className="scroll-card-content  animate-fade-in"
        style={{ animationDelay: `${idx * 180}ms` }}  
      >
        {exp.current && (
          <span className="flex items-center gap-2 mb-3 text-xs glow uppercase tracking-wider text-primary">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            Current
          </span>
        )}

        <p className="text-sm uppercase tracking-widest opacity-60 mb-3">
          {exp.period} · {exp.company}
        </p>

        <h2 className="text-3xl font-semibold mb-6">
          {exp.role}
        </h2>

       <ul className="space-y-3 list-disc pl-5">
  {exp.bullets.map((item, i) => (
    <li
      key={i}
      className="animate-fade-in"
      style={{ animationDelay: `${200 + i * 80}ms` }}
    >
      {item}
    </li>
  ))}
</ul>

      </div>
    </ScrollStackItem>
  ))}</div>
</ScrollStack>
</div>

      </div>
    </section>
  );
}
