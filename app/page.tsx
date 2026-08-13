"use client";

import { useEffect, useState } from "react";

type Lang = "fr" | "en";

type Project = {
  id: string;
  name: string;
  category: Record<Lang, string>;
  summary: Record<Lang, string>;
  story: Record<
    Lang,
    {
      intention: string;
      challenge: string;
      build: string;
      backend: string;
    }
  >;
  tech: string[];
  url: string;
  repo?: string;
  tone: string;
  index: string;
};

const copy = {
  fr: {
    nav: [
      ["Projets", "#projets"],
      ["Parcours", "#parcours"],
      ["À propos", "#apropos"],
      ["Contact", "#contact"],
    ],
    available: "Ouvert aux collaborations ciblées",
    eyebrow: "FULL-STACK SOFTWARE ENGINEER · LOMÉ, TOGO",
    intro:
      "Je transforme des besoins réels en produits web clairs, utiles et solides — de l’interface jusqu’aux systèmes backend.",
    description:
      "Je m’appelle Joseph Edim. J’aime comprendre le vrai problème, dessiner un parcours simple, puis construire la technologie qui le rend fiable.",
    viewProjects: "Découvrir mes projets",
    contactMe: "Me contacter",
    years: "années à construire pour le web",
    products: "produits racontés en profondeur",
    approach: "produit · frontend · backend",
    now: "EN CE MOMENT",
    nowTitle: "Graduate Tech Trainee",
    nowCompany: "GOZEM · Backend Developer",
    nowText: "Systèmes backend scalables avec Node.js et Fastify.",
    selected: "PROJETS SÉLECTIONNÉS",
    selectedTitle: "Chaque produit commence par une raison d’exister.",
    selectedText:
      "Pas seulement une galerie d’écrans : voici le besoin, le choix produit et l’architecture derrière chaque expérience.",
    openCase: "Lire l’étude de cas",
    closeCase: "Fermer l’étude",
    visit: "Visiter le site",
    source: "Voir le code",
    labels: ["L’intention", "Le défi", "Ce que j’ai construit", "Côté backend"],
    backendKicker: "BACKEND LAB",
    backendTitle: "Des systèmes qui continuent de travailler hors écran.",
    backendText:
      "APIs, temps réel, authentification, sécurité et automatisation : le produit ne s’arrête pas à son interface.",
    apiLabel: "API REST · AUTOMATISATION",
    apiTitle: "Subscription Tracker API",
    apiText:
      "Une API pour gérer ses abonnements et déclencher des rappels avant renouvellement, avec authentification JWT et protections serveur.",
    chatLabel: "TEMPS RÉEL · SERVEUR",
    chatTitle: "Real-time Chat Server",
    chatText:
      "Une exploration backend des échanges instantanés et de la gestion d’un serveur de discussion en TypeScript.",
    experienceKicker: "PARCOURS",
    experienceTitle: "Apprendre en livrant, progresser en équipe.",
    experienceText:
      "Du suivi clinique à la super app : chaque étape a élargi ma façon de penser un produit et son architecture.",
    education: "Formation",
    skills: "Outils de travail",
    aboutKicker: "À PROPOS",
    aboutTitle: "Curieux du produit. Rigoureux dans le code. Humain dans la collaboration.",
    aboutText:
      "Je suis un développeur togolais de 21 ans, diplômé en informatique et actuellement en Master. Presque deux années d’expérience web m’ont appris à naviguer entre contraintes métier, qualité d’interface et fiabilité technique.",
    principles: [
      ["01", "Partir du besoin", "Je clarifie d’abord qui utilise le produit, pourquoi et dans quel contexte."],
      ["02", "Rendre simple", "Une bonne interface réduit l’effort sans cacher la complexité nécessaire."],
      ["03", "Construire durable", "Données, sécurité et évolutivité font partie du design dès le départ."],
    ],
    languages: "Français · natif  /  Anglais · natif",
    interests: "Lecture · Football · Cinéma",
    contactKicker: "UN PROJET EN TÊTE ?",
    contactTitle: "Construisons quelque chose d’utile.",
    contactText:
      "Produit web, API ou collaboration technique : écrivez-moi. Je réponds directement par email ou WhatsApp.",
    email: "Envoyer un email",
    whatsapp: "Écrire sur WhatsApp",
    download: "Télécharger mon CV",
    footer: "Conçu et construit avec intention à Lomé.",
  },
  en: {
    nav: [
      ["Projects", "#projets"],
      ["Experience", "#parcours"],
      ["About", "#apropos"],
      ["Contact", "#contact"],
    ],
    available: "Open to focused collaborations",
    eyebrow: "FULL-STACK SOFTWARE ENGINEER · LOMÉ, TOGO",
    intro:
      "I turn real needs into clear, useful and robust web products — from the interface to backend systems.",
    description:
      "I’m Joseph Edim. I like understanding the real problem, designing a simple journey, then building the technology that makes it dependable.",
    viewProjects: "Explore my projects",
    contactMe: "Contact me",
    years: "years building for the web",
    products: "products told in depth",
    approach: "product · frontend · backend",
    now: "RIGHT NOW",
    nowTitle: "Graduate Tech Trainee",
    nowCompany: "GOZEM · Backend Developer",
    nowText: "Scalable backend systems with Node.js and Fastify.",
    selected: "SELECTED PROJECTS",
    selectedTitle: "Every product starts with a reason to exist.",
    selectedText:
      "More than a gallery of screens: the need, the product choice and the architecture behind each experience.",
    openCase: "Read the case study",
    closeCase: "Close case study",
    visit: "Visit live site",
    source: "View source",
    labels: ["The intention", "The challenge", "What I built", "Behind the scenes"],
    backendKicker: "BACKEND LAB",
    backendTitle: "Systems that keep working beyond the screen.",
    backendText:
      "APIs, real-time, authentication, security and automation: a product does not stop at its interface.",
    apiLabel: "REST API · AUTOMATION",
    apiTitle: "Subscription Tracker API",
    apiText:
      "An API to manage subscriptions and trigger reminders before renewals, with JWT authentication and server-side protection.",
    chatLabel: "REAL-TIME · SERVER",
    chatTitle: "Real-time Chat Server",
    chatText:
      "A backend exploration of instant communication and chat server management in TypeScript.",
    experienceKicker: "EXPERIENCE",
    experienceTitle: "Learning by shipping, growing with teams.",
    experienceText:
      "From clinical follow-up to a super app: every step broadened the way I think about products and architecture.",
    education: "Education",
    skills: "Working toolkit",
    aboutKicker: "ABOUT",
    aboutTitle: "Product-curious. Rigorous in code. Human in collaboration.",
    aboutText:
      "I’m a 21-year-old Togolese developer with a bachelor’s degree in computer science, currently pursuing a Master’s. Almost two years of web experience taught me to balance business constraints, interface quality and technical reliability.",
    principles: [
      ["01", "Start with the need", "I first clarify who uses the product, why, and in which context."],
      ["02", "Make it simple", "A good interface reduces effort without hiding the complexity that matters."],
      ["03", "Build to last", "Data, security and scalability are part of the design from day one."],
    ],
    languages: "French · native  /  English · native",
    interests: "Reading · Football · Cinema",
    contactKicker: "HAVE A PROJECT IN MIND?",
    contactTitle: "Let’s build something useful.",
    contactText:
      "Web product, API or technical collaboration: send me a message. I reply directly by email or WhatsApp.",
    email: "Send an email",
    whatsapp: "Message on WhatsApp",
    download: "Download my résumé",
    footer: "Designed and built with intention in Lomé.",
  },
} as const;

const projects: Project[] = [
  {
    id: "allfiles",
    name: "AllFiles.io",
    category: { fr: "SaaS · Utilitaires", en: "SaaS · Utilities" },
    summary: {
      fr: "Une plateforme tout-en-un pour convertir, compresser, fusionner et traiter des fichiers sans multiplier les outils.",
      en: "An all-in-one platform to convert, compress, merge and process files without juggling multiple tools.",
    },
    story: {
      fr: {
        intention: "Rassembler les opérations courantes sur PDF, images, vidéos, audio et documents dans une expérience unique et rassurante.",
        challenge: "Orchestrer plus de 300 traitements, gérer les limites d’usage et garder un parcours d’upload lisible malgré la variété des formats.",
        build: "Une découverte par type de fichier, une recherche d’outils, des parcours de conversion rapides et des offres gratuites ou premium.",
        backend: "Des traitements pilotés côté serveur avec Deno, une gestion d’accès et de quotas, puis Stripe pour les abonnements et la montée en gamme.",
      },
      en: {
        intention: "Bring everyday PDF, image, video, audio and document operations into one reassuring experience.",
        challenge: "Orchestrate 300+ tools, manage usage limits and keep uploads understandable across a wide range of formats.",
        build: "Discovery by file type, tool search, fast conversion journeys, and clear free or premium plans.",
        backend: "Server-side processing with Deno, access and quota management, plus Stripe for subscriptions and upgrades.",
      },
    },
    tech: ["Next.js", "TypeScript", "Deno", "Stripe", "SaaS"],
    url: "https://www.allfiles.io/",
    tone: "violet",
    index: "01",
  },
  {
    id: "stuffrental",
    name: "StuffRental",
    category: { fr: "Marketplace · Location", en: "Marketplace · Rental" },
    summary: {
      fr: "Louer une console, une sono ou un drone en choisissant ses dates, puis conclure la demande directement sur WhatsApp.",
      en: "Rent a console, sound system or drone by choosing dates, then complete the request directly on WhatsApp.",
    },
    story: {
      fr: {
        intention: "Donner aux petits loueurs un catalogue simple à administrer et aux clients un chemin sans friction jusqu’à la réservation.",
        challenge: "Rendre visibles les indisponibilités, calculer automatiquement la durée et le prix, et éviter un checkout disproportionné au contexte local.",
        build: "Catalogue filtrable, fiches détaillées, sélection de dates, panier persistant et espace d’administration pour articles et catégories.",
        backend: "Zustand structure les données et la persistance locale du MVP; la commande est transformée en message WhatsApp prérempli pour une reprise humaine immédiate.",
      },
      en: {
        intention: "Give small rental businesses a catalogue they can manage and customers a frictionless path to booking.",
        challenge: "Show unavailable dates, calculate duration and price automatically, and avoid an oversized checkout for the local context.",
        build: "Filterable catalogue, detailed listings, date selection, persistent cart, and admin spaces for items and categories.",
        backend: "Zustand structures MVP data and local persistence; the order becomes a pre-filled WhatsApp message for immediate human follow-up.",
      },
    },
    tech: ["Next.js 16", "React 19", "TypeScript", "Zustand", "WhatsApp"],
    url: "https://lokki-gold.vercel.app/",
    repo: "https://github.com/Kjoris27/lokki",
    tone: "indigo",
    index: "02",
  },
  {
    id: "maillot",
    name: "Maillot Drip",
    category: { fr: "E-commerce · Sport", en: "E-commerce · Sport" },
    summary: {
      fr: "Une boutique de maillots qui transforme la passion des clubs et sélections en parcours d’achat complet.",
      en: "A football jersey store that turns club and national-team passion into a complete shopping journey.",
    },
    story: {
      fr: {
        intention: "Créer une boutique énergique où l’on explore d’abord par équipe et championnat avant de choisir son maillot.",
        challenge: "Faire cohabiter catalogue riche, variantes produit, panier, authentification et gestion commerciale sans alourdir l’expérience mobile.",
        build: "Navigation par ligue, recherche et filtres, fiches produit, panier latéral, checkout, compte client, FAQ et contact.",
        backend: "Une couche de données structurée, une authentification dédiée et une administration pour commandes et codes promotionnels complètent le tunnel e-commerce.",
      },
      en: {
        intention: "Create an energetic store where supporters explore by team and league before choosing a jersey.",
        challenge: "Combine a rich catalogue, product variants, cart, authentication and sales management without weighing down mobile use.",
        build: "League browsing, search and filters, product pages, side cart, checkout, customer account, FAQ and contact.",
        backend: "A structured data layer, dedicated authentication, and admin views for orders and promo codes complete the commerce flow.",
      },
    },
    tech: ["Next.js", "React", "TypeScript", "Zod", "Zustand"],
    url: "https://maillot-drip.vercel.app/",
    tone: "orange",
    index: "03",
  },
  {
    id: "tatorh",
    name: "Tatorh Fashion",
    category: { fr: "Commerce · Mode", en: "Commerce · Fashion" },
    summary: {
      fr: "Une vitrine mobile-first pour commander à Lomé des robes et tenues africaines confectionnées sur demande.",
      en: "A mobile-first storefront for ordering made-to-request African dresses and outfits in Lomé.",
    },
    story: {
      fr: {
        intention: "Traduire le soin artisanal de la marque en une expérience éditoriale, élégante et simple à commander depuis un téléphone.",
        challenge: "Gérer photos et vidéos, tailles, couleurs, sélection multi-produit et commande WhatsApp tout en donnant de l’autonomie à la propriétaire.",
        build: "Collection filtrable, fiches immersives, sélection locale, calcul du total, formulaire client et relais fluide vers WhatsApp.",
        backend: "Supabase centralise produits, commandes, authentification admin et médias; les règles RLS protègent les écritures et le back-office suit les statuts.",
      },
      en: {
        intention: "Translate the brand’s craft into an editorial, elegant experience that remains easy to order from a phone.",
        challenge: "Manage photos, video, sizes, colours, multi-product selection and WhatsApp orders while giving the owner autonomy.",
        build: "Filterable collection, immersive product pages, local selection, totals, customer form and a smooth handoff to WhatsApp.",
        backend: "Supabase centralises products, orders, admin authentication and media; RLS protects writes and the back office tracks statuses.",
      },
    },
    tech: ["Next.js 16", "Supabase", "PostgreSQL", "RLS", "Storage"],
    url: "https://tatorh-fashion.vercel.app/",
    repo: "https://github.com/Kjoris27/tatorh-fashion",
    tone: "rose",
    index: "04",
  },
  {
    id: "dzigbodi",
    name: "DziGbodI",
    category: { fr: "Civic tech · Matching", en: "Civic tech · Matching" },
    summary: {
      fr: "Un service togolais qui rapproche les signalements d’objets perdus et trouvés jusqu’à une restitution vérifiée.",
      en: "A Togolese service that matches lost-and-found reports through to a verified return.",
    },
    story: {
      fr: {
        intention: "Transformer le bouche-à-oreille dispersé en un parcours de confiance, adapté aux habitudes et aux lieux de Lomé.",
        challenge: "Faire correspondre sans exposer trop d’informations, vérifier la propriété et sécuriser la dernière étape de restitution.",
        build: "Signalement guidé, photos privées, suggestions de correspondance, preuve non visible, alertes et parcours bilingue français/anglais.",
        backend: "Supabase et PostgreSQL calculent les scores par catégorie, lieu, date, couleur, marque et tags; réclamations et tickets à six chiffres clôturent la restitution.",
      },
      en: {
        intention: "Turn scattered word of mouth into a trusted journey shaped around Lomé’s habits and places.",
        challenge: "Match reports without exposing too much, verify ownership and secure the final handover.",
        build: "Guided reporting, private photos, match suggestions, hidden-detail proof, alerts, and a bilingual French/English journey.",
        backend: "Supabase and PostgreSQL score category, place, date, colour, brand and tags; claims and six-digit tickets close the return loop.",
      },
    },
    tech: ["Next.js 16", "Supabase", "PostgreSQL", "Zod", "Matching"],
    url: "https://dzigbodi.vercel.app/",
    tone: "lime",
    index: "05",
  },
];

const experience = [
  {
    company: "GOZEM",
    period: { fr: "Depuis nov. 2025", en: "Since Nov. 2025" },
    role: { fr: "Graduate Tech Trainee · Backend Developer", en: "Graduate Tech Trainee · Backend Developer" },
    text: {
      fr: "Construction de systèmes backend scalables avec Node.js et Fastify dans un programme technique intensif.",
      en: "Building scalable backend systems with Node.js and Fastify in an intensive technical programme.",
    },
  },
  {
    company: "BEWELL Corporation",
    period: { fr: "Juin — sept. 2025", en: "Jun. — Sep. 2025" },
    role: { fr: "Responsable développement de projets IT · Stage", en: "IT Project Development Manager · Internship" },
    text: {
      fr: "Développement et mise en œuvre de projets sur tout leur cycle, de la conception à la production.",
      en: "Developed and implemented IT projects across their lifecycle, from design to production.",
    },
  },
  {
    company: "YAS TOGO",
    period: { fr: "Nov. 2024 — avr. 2025", en: "Nov. 2024 — Apr. 2025" },
    role: { fr: "Software Developer · Stage", en: "Software Developer · Internship" },
    text: {
      fr: "Nouvelles fonctionnalités, composants réutilisables et interfaces responsives au sein de l’équipe produit.",
      en: "New features, reusable components and responsive interfaces within the product team.",
    },
  },
  {
    company: "HISTECH",
    period: { fr: "Fév. — août 2024", en: "Feb. — Aug. 2024" },
    role: { fr: "Software Developer · Stage", en: "Software Developer · Internship" },
    text: {
      fr: "Application de gestion scolaire en React et Prisma avec modules élèves/classes et authentification JWT.",
      en: "School management application with React, Prisma, student/class modules and JWT authentication.",
    },
  },
  {
    company: "GERME TECH",
    period: { fr: "Juin — août 2023", en: "Jun. — Aug. 2023" },
    role: { fr: "Software Developer · Stage", en: "Software Developer · Internship" },
    text: {
      fr: "Plateforme Laravel de suivi des patients : inscription, assignation aux médecins et supervision admin.",
      en: "Laravel patient tracking platform: registration, doctor assignment and admin supervision.",
    },
  },
];

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
  if (id === "stuffrental") {
    return (
      <div className="visual visual-rental" aria-hidden="true">
        <div className="rental-head"><span>StuffRental</span><b>Panier · 2</b></div>
        <div className="rental-card"><div className="rental-photo">PS5</div><div><small>PAR JOUR</small><strong>5 000 F</strong><span>14 — 16 août</span></div></div>
        <div className="rental-button">Continuer sur WhatsApp ↗</div>
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
  if (id === "tatorh") {
    return (
      <div className="visual visual-fashion" aria-hidden="true">
        <div className="fashion-mark">Tatorh <i>Fashion</i></div>
        <div className="fashion-cards"><div><span>Nouvelle</span></div><div><span>Sur mesure</span></div><div><span>Lomé</span></div></div>
      </div>
    );
  }
  return (
    <div className="visual visual-match" aria-hidden="true">
      <div className="match-brand">DziGbodI <span>●</span></div>
      <div className="match-flow"><div><small>PERDU</small><b>Sac noir</b><span>Tokoin</span></div><i>↔</i><div><small>TROUVÉ</small><b>Sac à dos</b><span>Tokoin</span></div></div>
      <div className="match-status">Correspondance possible · vérifier →</div>
    </div>
  );
}

export default function Home() {
  const [lang, setLang] = useState<Lang>("fr");
  const [openProject, setOpenProject] = useState<string | null>("allfiles");
  const t = copy[lang];

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  return (
    <main>
      <a className="skip-link" href="#contenu">{lang === "fr" ? "Aller au contenu" : "Skip to content"}</a>
      <header className="site-header">
        <a className="monogram" href="#top" aria-label="Joseph Edim — accueil">JE<span>.</span></a>
        <nav aria-label={lang === "fr" ? "Navigation principale" : "Main navigation"}>
          {t.nav.map(([label, href]) => <a key={href} href={href}>{label}</a>)}
        </nav>
        <div className="header-actions">
          <div className="language-switch" aria-label={lang === "fr" ? "Choisir la langue" : "Choose language"}>
            <button className={lang === "fr" ? "active" : ""} onClick={() => setLang("fr")} aria-pressed={lang === "fr"}>FR</button>
            <button className={lang === "en" ? "active" : ""} onClick={() => setLang("en")} aria-pressed={lang === "en"}>EN</button>
          </div>
          <a className="header-cta" href="#contact">{t.contactMe} <span>↗</span></a>
        </div>
      </header>

      <div id="contenu" className="page-shell">
        <section id="top" className="hero-grid" aria-labelledby="hero-title">
          <div className="portrait-card card">
            <img src="/joseph-edim.png" alt="Joseph Edim, software engineer à Lomé" />
            <div className="portrait-overlay"><span className="status-dot" />{t.available}</div>
          </div>
          <div className="hero-copy card">
            <p className="eyebrow">{t.eyebrow}</p>
            <h1 id="hero-title">Joseph Edim<br /><em>builds useful things.</em></h1>
            <p className="hero-lead">{t.intro}</p>
            <p className="hero-description">{t.description}</p>
            <div className="hero-actions">
              <a className="button primary" href="#projets">{t.viewProjects} <span>↓</span></a>
              <a className="button secondary" href="mailto:edimjoseph04@gmail.com">{t.contactMe} <span>↗</span></a>
            </div>
          </div>
          <div className="stat-card card"><strong>02+</strong><span>{t.years}</span></div>
          <div className="stat-card card"><strong>05</strong><span>{t.products}</span></div>
          <div className="stat-card wide-stat card"><strong>360°</strong><span>{t.approach}</span></div>
          <div className="now-card card">
            <div className="now-top"><span>{t.now}</span><i className="pulse" /></div>
            <strong>{t.nowTitle}</strong>
            <b>{t.nowCompany}</b>
            <p>{t.nowText}</p>
          </div>
        </section>

        <section id="projets" className="section-block" aria-labelledby="projects-title">
          <div className="section-heading">
            <p className="eyebrow"><span>◆</span> {t.selected}</p>
            <h2 id="projects-title">{t.selectedTitle}</h2>
            <p>{t.selectedText}</p>
          </div>
          <div className="projects-list">
            {projects.map((project) => {
              const isOpen = openProject === project.id;
              const story = project.story[lang];
              return (
                <article key={project.id} className={`project-card card tone-${project.tone} ${isOpen ? "is-open" : ""}`}>
                  <div className="project-main">
                    <div className="project-copy">
                      <div className="project-meta"><span>{project.index}</span><span>{project.category[lang]}</span></div>
                      <h3>{project.name}</h3>
                      <p>{project.summary[lang]}</p>
                      <div className="tags">{project.tech.map((tech) => <span key={tech}>{tech}</span>)}</div>
                      <div className="project-actions">
                        <button onClick={() => setOpenProject(isOpen ? null : project.id)} aria-expanded={isOpen} aria-controls={`case-${project.id}`}>
                          {isOpen ? t.closeCase : t.openCase} <span>{isOpen ? "−" : "+"}</span>
                        </button>
                        <a href={project.url} target="_blank" rel="noreferrer">{t.visit} ↗</a>
                      </div>
                    </div>
                    <ProjectVisual id={project.id} />
                  </div>
                  <div id={`case-${project.id}`} className="case-study" hidden={!isOpen}>
                    {[story.intention, story.challenge, story.build, story.backend].map((text, index) => (
                      <div key={t.labels[index]}><span>0{index + 1}</span><h4>{t.labels[index]}</h4><p>{text}</p></div>
                    ))}
                    <div className="case-links">
                      <a href={project.url} target="_blank" rel="noreferrer">{t.visit} ↗</a>
                      {project.repo && <a href={project.repo} target="_blank" rel="noreferrer">{t.source} ↗</a>}
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        <section className="backend-section section-block" aria-labelledby="backend-title">
          <div className="section-heading compact-heading">
            <p className="eyebrow"><span>◆</span> {t.backendKicker}</p>
            <h2 id="backend-title">{t.backendTitle}</h2>
            <p>{t.backendText}</p>
          </div>
          <div className="backend-grid">
            <a className="backend-card card" href="https://github.com/Kjoris27/subscription-tracker" target="_blank" rel="noreferrer">
              <div className="backend-number">API</div>
              <p className="eyebrow">{t.apiLabel}</p>
              <h3>{t.apiTitle}</h3>
              <p>{t.apiText}</p>
              <div className="tags"><span>Node.js</span><span>Express</span><span>MongoDB</span><span>Upstash</span><span>JWT</span></div>
              <b>GitHub ↗</b>
            </a>
            <a className="backend-card card" href="https://github.com/Kjoris27/real-time-chat-server" target="_blank" rel="noreferrer">
              <div className="backend-number live-glyph"><i /><i /><i /></div>
              <p className="eyebrow">{t.chatLabel}</p>
              <h3>{t.chatTitle}</h3>
              <p>{t.chatText}</p>
              <div className="tags"><span>TypeScript</span><span>Node.js</span><span>Real-time</span></div>
              <b>GitHub ↗</b>
            </a>
          </div>
        </section>

        <section id="parcours" className="section-block experience-section" aria-labelledby="experience-title">
          <div className="section-heading">
            <p className="eyebrow"><span>◆</span> {t.experienceKicker}</p>
            <h2 id="experience-title">{t.experienceTitle}</h2>
            <p>{t.experienceText}</p>
          </div>
          <div className="experience-layout">
            <div className="timeline card">
              {experience.map((item, index) => (
                <article key={item.company}>
                  <div className="timeline-marker"><span>{String(index + 1).padStart(2, "0")}</span></div>
                  <div className="timeline-content">
                    <div><h3>{item.company}</h3><time>{item.period[lang]}</time></div>
                    <h4>{item.role[lang]}</h4>
                    <p>{item.text[lang]}</p>
                  </div>
                </article>
              ))}
            </div>
            <aside className="side-stack">
              <div className="education-card card">
                <p className="eyebrow">{t.education}</p>
                <div><span>2025 —</span><strong>Master’s Degree<br />Computer Science</strong><small>Lomé Business School</small></div>
                <div><span>2021 — 2024</span><strong>Bachelor’s Degree<br />Computer Science</strong><small>Institut Africain d’Informatique</small></div>
              </div>
              <div className="skills-card card">
                <p className="eyebrow">{t.skills}</p>
                <div className="skills-cloud">
                  {["JavaScript", "TypeScript", "Node.js", "Fastify", "Express", "NestJS", "React", "Next.js", "PostgreSQL", "MongoDB", "Supabase", "Git"].map((skill) => <span key={skill}>{skill}</span>)}
                </div>
              </div>
            </aside>
          </div>
        </section>

        <section id="apropos" className="section-block about-section" aria-labelledby="about-title">
          <div className="about-intro card">
            <p className="eyebrow"><span>◆</span> {t.aboutKicker}</p>
            <h2 id="about-title">{t.aboutTitle}</h2>
            <p>{t.aboutText}</p>
            <div className="about-lines"><span>{t.languages}</span><span>{t.interests}</span></div>
          </div>
          <div className="principles">
            {t.principles.map(([number, title, text]) => (
              <article className="card" key={number}><span>{number}</span><h3>{title}</h3><p>{text}</p></article>
            ))}
          </div>
        </section>

        <section id="contact" className="contact-section card" aria-labelledby="contact-title">
          <div className="contact-copy">
            <p className="eyebrow"><span>◆</span> {t.contactKicker}</p>
            <h2 id="contact-title">{t.contactTitle}</h2>
            <p>{t.contactText}</p>
          </div>
          <div className="contact-links">
            <a className="contact-primary" href="mailto:edimjoseph04@gmail.com"><span>{t.email}</span><b>edimjoseph04@gmail.com ↗</b></a>
            <a href="https://wa.me/22892494828" target="_blank" rel="noreferrer"><span>{t.whatsapp}</span><b>+228 92 49 48 28 ↗</b></a>
            <a href="/Joseph-Edim-CV-2026.pdf" download><span>{t.download}</span><b>PDF ↓</b></a>
          </div>
        </section>

        <footer>
          <a className="monogram" href="#top" aria-label="Retour en haut">JE<span>.</span></a>
          <p>© 2026 Joseph Edim · {t.footer}</p>
          <div><a href="https://www.linkedin.com/in/joseph-edim" target="_blank" rel="noreferrer">LinkedIn ↗</a><a href="https://github.com/Kjoris27" target="_blank" rel="noreferrer">GitHub ↗</a></div>
        </footer>
      </div>
    </main>
  );
}
