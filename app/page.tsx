"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

type Lang = "fr" | "en";

const email = "edimjoseph04@gmail.com";
const linkedin = "https://www.linkedin.com/in/joseph-edim/";
const github = "https://github.com/Kjoris27";

const copy = {
  fr: {
    nav: [["Projets", "#projets"], ["Expérience", "#parcours"]],
    location: "Software Engineer à Lomé, Togo",
    intro: "Je développe des applications web et mobiles pour mes clients, de l’interface aux API et à la base de données.",
    focus: "J’aime concevoir des backends capables de monter en charge. J’ai près de 3 ans d’expérience et je travaille couramment en français et en anglais.",
    contactMe: "Me contacter",
    viewProjects: "Voir mes projets",
    projects: "Projets sélectionnés",
    visit: "Voir le projet",
    source: "Voir le code",
    experience: "Expérience professionnelle",
    toolkit: "Technologies",
    skills: ["Backend et données", "Frontend web", "Mobile"],
    contactTitle: "Parlons de votre projet",
    contactText: "Vous cherchez quelqu’un pour construire votre application ou rejoindre votre équipe ? Je suis ouvert aux missions freelance et aux opportunités d’emploi.",
    email: "Envoyer un e-mail",
    whatsapp: "Écrire sur WhatsApp",
    download: "Télécharger mon CV",
  },
  en: {
    nav: [["Projects", "#projets"], ["Experience", "#parcours"]],
    location: "Software Engineer based in Lomé, Togo",
    intro: "I build web and mobile apps for clients, from the user interface to the APIs and database.",
    focus: "I enjoy designing backend systems that can handle growth. I have nearly 3 years of experience and work fluently in English and French.",
    contactMe: "Contact me",
    viewProjects: "See my projects",
    projects: "Selected projects",
    visit: "View project",
    source: "View code",
    experience: "Work experience",
    toolkit: "Technologies",
    skills: ["Backend and data", "Web frontend", "Mobile"],
    contactTitle: "Let’s talk about your project",
    contactText: "Looking for someone to build your app or join your team? I’m open to freelance projects and job opportunities.",
    email: "Send an email",
    whatsapp: "Message on WhatsApp",
    download: "Download my résumé",
  },
} as const;

const projects = [
  {
    id: "allfiles",
    name: "AllFiles.io",
    summary: {
      fr: "Une plateforme pour convertir, compresser et fusionner des fichiers. J’ai intégré les traitements côté serveur, les quotas d’utilisation et les abonnements Stripe.",
      en: "A platform to convert, compress, and merge files. I integrated server-side processing, usage quotas, and Stripe subscriptions.",
    },
    tech: ["Next.js", "TypeScript", "Deno", "Stripe"],
    url: "https://all-files-three.vercel.app/",
    tone: "violet",
  },
  {
    id: "lokki",
    name: "Lokki",
    summary: {
      fr: "Un site de location de packs de jeux à Lomé. J’ai construit le parcours de réservation, du choix du créneau au récapitulatif envoyé via WhatsApp.",
      en: "A board game bundle rental site in Lomé. I built the booking flow, from picking a time slot to sending the order summary via WhatsApp.",
    },
    tech: ["Next.js", "TypeScript", "Zustand"],
    url: "https://lokki-gold.vercel.app/",
    repo: "https://github.com/Kjoris27/lokki",
    tone: "indigo",
  },
  {
    id: "maillot",
    name: "Maillot Drip",
    summary: {
      fr: "Une boutique de maillots de football. J’ai développé le catalogue filtrable, le panier, le tunnel de commande et l’administration des commandes et promotions.",
      en: "A football jersey store. I built the searchable catalogue, cart, checkout flow, and admin tools for orders and promotions.",
    },
    tech: ["Next.js", "TypeScript", "Zod", "Zustand"],
    url: "https://maillot-drip.vercel.app/",
    tone: "orange",
  },
];

const internship = { fr: "Software Engineer Intern · Stage", en: "Software Engineer Intern" };

const experience = [
  {
    company: "Gozem",
    period: { fr: "Depuis nov. 2025", en: "Since Nov 2025" },
    role: { fr: "Software Engineer · Temps plein", en: "Software Engineer · Full-time" },
    text: {
      fr: "Je développe et maintiens les API REST, migre des fonctionnalités existantes vers le backend modulaire du domaine User et corrige des incidents en production. Je travaille avec les équipes Android et iOS sur la conception et l’évolution des API.",
      en: "I develop and maintain REST endpoints, migrate legacy features to the modular User backend, and fix production issues. I work with Android and iOS engineers to design and improve the APIs.",
    },
    tech: ["Node.js", "Fastify", "MongoDB"],
  },
  {
    company: "BeWell Corporation",
    period: { fr: "Juin à sept. 2025", en: "Jun to Sep 2025" },
    role: internship,
    text: {
      fr: "J’ai développé des applications full-stack avec Next.js et intégré les paiements Stripe. J’ai aussi aidé l’équipe à définir ses priorités avec la direction.",
      en: "I built full-stack apps with Next.js and integrated Stripe payments. I also worked with management to clarify priorities for the team.",
    },
    tech: ["Next.js", "Stripe"],
  },
  {
    company: "Yas Togo",
    period: { fr: "Nov. 2024 à avr. 2025", en: "Nov 2024 to Apr 2025" },
    role: internship,
    text: {
      fr: "J’ai développé de nouvelles fonctionnalités, des composants réutilisables et des interfaces adaptées au mobile au sein de l’équipe produit.",
      en: "I worked with the product team to build new features, reusable components, and responsive interfaces.",
    },
    tech: ["React.js"],
  },
  {
    company: "HISTECH",
    period: { fr: "Mai à août 2024", en: "May to Aug 2024" },
    role: internship,
    text: {
      fr: "J’ai développé une application de gestion scolaire avec des modules pour les élèves et les classes, ainsi qu’une authentification par JWT.",
      en: "I built a school management app with student and class modules and JWT authentication.",
    },
    tech: ["JavaScript", "React", "Prisma", "JWT"],
  },
  {
    company: "Germe Tech",
    period: { fr: "Juin à août 2023", en: "Jun to Aug 2023" },
    role: internship,
    text: {
      fr: "J’ai développé une plateforme de suivi des patients qui gère leur inscription, leur affectation à un médecin et le suivi administratif.",
      en: "I built a patient tracking platform for registration, doctor assignment, and administrative oversight.",
    },
    tech: ["PHP", "Laravel"],
  },
];

const toolkit = [
  ["Node.js", "Fastify", "Express", "NestJS", "MongoDB", "PostgreSQL"],
  ["JavaScript", "TypeScript", "React", "Next.js"],
  ["Flutter", "Dart", "Firebase"],
];

function SocialLinks() {
  return (
    <>
      <a href={linkedin} target="_blank" rel="noreferrer">LinkedIn ↗</a>
      <a href={github} target="_blank" rel="noreferrer">GitHub ↗</a>
    </>
  );
}

function ProjectVisual({ id }: { id: string }) {
  if (id === "allfiles") {
    return (
      <div className="visual visual-converter" aria-hidden="true">
        <div className="mini-window-bar"><i /><i /><i /><span>allfiles.io</span></div>
        <div className="upload-zone"><b>PDF</b><span>→</span><b>JPG</b></div>
        <div className="tool-row"><span>Compress</span><span>Convert</span><span>Merge</span></div>
      </div>
    );
  }
  if (id === "lokki") {
    return (
      <div className="visual visual-rental" aria-hidden="true">
        <div className="rental-head">Lokki</div>
        <div className="rental-photo"><span>♟</span><span>⚄</span></div>
        <div className="rental-button">WhatsApp ↗</div>
      </div>
    );
  }
  if (id === "maillot") {
    return (
      <div className="visual visual-jersey" aria-hidden="true">
        <div className="jersey-copy"><small>COLLECTION 25/26</small><b>La fierté<br />en maillot.</b><span>Voir le catalogue →</span></div>
        <div className="shirt"><i>10</i></div>
      </div>
    );
  }
  return null;
}

export default function Home() {
  const [lang, setLang] = useState<Lang>("fr");
  const [menuOpen, setMenuOpen] = useState(false);
  const t = copy[lang];

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  useEffect(() => {
    if (!menuOpen) return;
    document.body.style.overflow = "hidden";
    const desktop = window.matchMedia("(min-width: 981px)");
    const closeOnDesktop = () => {
      if (desktop.matches) setMenuOpen(false);
    };
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    desktop.addEventListener("change", closeOnDesktop);
    window.addEventListener("keydown", closeOnEscape);
    return () => {
      document.body.style.overflow = "";
      desktop.removeEventListener("change", closeOnDesktop);
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [menuOpen]);

  return (
    <main>
      <a className="skip-link" href="#contenu">{lang === "fr" ? "Aller au contenu" : "Skip to content"}</a>
      <header className="site-header">
        <a className="monogram" href="#top" aria-label="Joseph Edim">JE<span>.</span></a>
        <nav className="desktop-nav" aria-label={lang === "fr" ? "Navigation principale" : "Main navigation"}>
          {t.nav.map(([label, href]) => <a key={href} href={href}>{label}</a>)}
        </nav>
        <div className="header-actions">
          <div className="language-switch" aria-label={lang === "fr" ? "Choisir la langue" : "Choose language"}>
            <button className={lang === "fr" ? "active" : ""} onClick={() => setLang("fr")} aria-pressed={lang === "fr"}>FR</button>
            <button className={lang === "en" ? "active" : ""} onClick={() => setLang("en")} aria-pressed={lang === "en"}>EN</button>
          </div>
          <a className="header-cta" href="#contact">{t.contactMe} <span>↗</span></a>
          <button
            className={`mobile-menu-button ${menuOpen ? "is-open" : ""}`}
            type="button"
            onClick={() => setMenuOpen((current) => !current)}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            aria-label={menuOpen ? (lang === "fr" ? "Fermer le menu" : "Close menu") : (lang === "fr" ? "Ouvrir le menu" : "Open menu")}
          >
            <span /><span />
          </button>
        </div>
      </header>

      <div className={`mobile-menu ${menuOpen ? "is-open" : ""}`} aria-hidden={!menuOpen}>
        <button className="mobile-menu-backdrop" type="button" onClick={() => setMenuOpen(false)} tabIndex={menuOpen ? 0 : -1} aria-label={lang === "fr" ? "Fermer le menu" : "Close menu"} />
        <nav id="mobile-navigation" aria-label={lang === "fr" ? "Navigation mobile" : "Mobile navigation"}>
          <p>Navigation</p>
          {[...t.nav, [t.contactMe, "#contact"]].map(([label, href]) => (
            <a key={href} href={href} onClick={() => setMenuOpen(false)} tabIndex={menuOpen ? 0 : -1}>
              {label}<b aria-hidden="true">↘</b>
            </a>
          ))}
        </nav>
      </div>

      <div id="contenu" className="page-shell">
        <section id="top" className="hero-grid" aria-labelledby="hero-title">
          <div className="hero-copy card">
            <p className="eyebrow">{t.location}</p>
            <h1 id="hero-title">Joseph Edim</h1>
            <p className="hero-lead">{t.intro}</p>
            <p className="hero-description">{t.focus}</p>
            <div className="hero-actions">
              <a className="button primary" href="#contact">{t.contactMe} <span aria-hidden="true">↗</span></a>
              <a className="button secondary" href="#projets">{t.viewProjects} <span aria-hidden="true">↓</span></a>
            </div>
            <div className="social-links"><SocialLinks /></div>
          </div>
          <div className="portrait-card card">
            <Image
              src="/joseph-edim.png"
              alt="Joseph Edim"
              fill
              sizes="(max-width: 680px) calc(100vw - 32px), (max-width: 980px) 35vw, 360px"
              preload
            />
          </div>
        </section>

        <section id="projets" className="section-block" aria-labelledby="projects-title">
          <h2 id="projects-title" className="section-title">{t.projects}</h2>
          <div className="projects-list">
            {projects.map((project) => (
              <article key={project.id} className={`project-card card tone-${project.tone}`}>
                <ProjectVisual id={project.id} />
                <div className="project-copy">
                  <h3>{project.name}</h3>
                  <p>{project.summary[lang]}</p>
                  <div className="tags">{project.tech.map((tech) => <span key={tech}>{tech}</span>)}</div>
                  <div className="project-actions">
                    <a href={project.url} target="_blank" rel="noreferrer" aria-label={`${t.visit} · ${project.name}`}>{t.visit} ↗</a>
                    {project.repo && <a href={project.repo} target="_blank" rel="noreferrer" aria-label={`${t.source} · ${project.name}`}>{t.source} ↗</a>}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="parcours" className="section-block" aria-labelledby="experience-title">
          <h2 id="experience-title" className="section-title">{t.experience}</h2>
          <div className="experience-layout">
            <div className="timeline card">
              {experience.map((item) => (
                <article key={item.company}>
                  <div className="timeline-heading"><h3>{item.company}</h3><p>{item.period[lang]}</p></div>
                  <p className="timeline-role">{item.role[lang]}</p>
                  <p>{item.text[lang]}</p>
                  <div className="tags">{item.tech.map((tech) => <span key={tech}>{tech}</span>)}</div>
                </article>
              ))}
            </div>
            <aside className="skills-card card">
              <h3>{t.toolkit}</h3>
              {toolkit.map((skills, index) => (
                <div key={t.skills[index]} className="skill-group">
                  <h4>{t.skills[index]}</h4>
                  <p>{skills.join(" · ")}</p>
                </div>
              ))}
            </aside>
          </div>
        </section>

        <section id="contact" className="contact-section card" aria-labelledby="contact-title">
          <div className="contact-copy">
            <h2 id="contact-title">{t.contactTitle}</h2>
            <p>{t.contactText}</p>
            <div className="social-links"><SocialLinks /></div>
          </div>
          <div className="contact-links">
            <a className="contact-primary" href={`mailto:${email}`}><span>{t.email}</span><b>{email} ↗</b></a>
            <a href="https://wa.me/22892494828" target="_blank" rel="noreferrer"><span>{t.whatsapp}</span><b>+228 92 49 48 28 ↗</b></a>
            <a href="/Joseph-Edim-CV-2026.pdf" download><span>{t.download}</span><b>PDF ↓</b></a>
          </div>
        </section>

        <footer>
          <a className="monogram" href="#top" aria-label={lang === "fr" ? "Retour en haut" : "Back to top"}>JE<span>.</span></a>
          <p>© 2026 Joseph Edim</p>
        </footer>
      </div>

      <nav className="mobile-contact-dock" aria-label={lang === "fr" ? "Contacts rapides" : "Quick contacts"}>
        <a href={`mailto:${email}`}><span>✉</span>Email</a>
        <a className="dock-whatsapp" href="https://wa.me/22892494828" target="_blank" rel="noreferrer"><span>●</span>WhatsApp</a>
        <a href="/Joseph-Edim-CV-2026.pdf" download><span>↓</span>CV</a>
      </nav>
    </main>
  );
}
