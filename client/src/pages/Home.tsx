/*
 * Sala de Controle Editorial — layout assimétrico, tipografia editorial e acento âmbar.
 * Este arquivo traduz o currículo em uma narrativa de confiança operacional.
 */
import { useEffect, useState } from "react";
import {
  ArrowUpRight,
  BriefcaseBusiness,
  Check,
  Cloud,
  ExternalLink,
  Linkedin,
  Mail,
  MapPin,
  Menu,
  Network,
  Phone,
  ShieldCheck,
  Terminal,
  X,
} from "lucide-react";

const skills = [
  "Infraestrutura de TI",
  "Sustentação Enterprise",
  "TOTVS Protheus",
  "TOTVS RM Cloud",
  "TOTVS Meu RH",
  "Cloud Computing",
  "Segurança da Informação",
  "Active Directory",
  "DNS & DHCP",
  "Zabbix",
  "Gestão de Incidentes",
  "Suporte N1 / N2 / N3",
  "Troubleshooting Avançado",
  "Implantação de Sistemas",
  "VPN Cisco & TP-Link",
  "Power BI",
  "Virtualização",
  "Office 365",
  "RFID",
];

const projects = [
  {
    number: "01",
    title: "Implantação ERP TOTVS Protheus",
    text: "Estruturação e sustentação de uma plataforma central para processos críticos da operação.",
    tags: ["ERP", "Sustentação", "Processos"],
  },
  {
    number: "02",
    title: "Implantação SULTS",
    text: "Condução de uma frente de transformação digital conectando tecnologia, rotina e negócio.",
    tags: ["Transformação", "Projeto", "Integração"],
  },
  {
    number: "03",
    title: "Implantação RFID — IBC Soft",
    text: "Aplicação de identificação e rastreabilidade para elevar visibilidade sobre ativos e fluxos.",
    tags: ["RFID", "Automação", "Visibilidade"],
  },
  {
    number: "04",
    title: "Integrador XML Protheus → TOTVS Transmite",
    text: "Implantação da integração para automatizar o envio de documentos XML do Protheus ao TOTVS Transmite.",
    tags: ["Integração", "XML", "TOTVS"],
  },
];

const certifications = [
  "IBM — Fundamentos da Computação em Nuvem",
  "Cisco Networking Academy — Cibersegurança",
  "FIAP — Nano Course Cibersecurity",
  "FIAP — Nano Course Inteligência Artificial e Computacional",
  "Microsoft — Office Forms 365",
  "Fundação Bradesco — Análise de Dados no Power BI",
  "Fundação Bradesco — AI-900 Fundamentos de IA no Azure",
  "FIAP — Gestão de Infraestrutura de TI",
];

function SectionLabel({ number, children }: { number: string; children: React.ReactNode }) {
  return (
    <div className="section-label">
      <span>{number}</span>
      <div />
      <strong>{children}</strong>
    </div>
  );
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="portfolio-shell">
      <header className={`site-header ${scrolled ? "is-scrolled" : ""}`}>
        <a className="brand" href="#inicio" onClick={closeMenu} aria-label="William Vasconcelos — início">
          <img src={`${import.meta.env.BASE_URL}assets/william-logo-palette.png`} alt="" />
          <span>WILLIAM<br /><b>VASCONCELOS</b></span>
        </a>
        <button className="menu-trigger" aria-label={menuOpen ? "Fechar menu" : "Abrir menu"} onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
        <nav className={`main-nav ${menuOpen ? "open" : ""}`}>
          <a href="#perfil" onClick={closeMenu}>Perfil</a>
          <a href="#experiencia" onClick={closeMenu}>Experiência</a>
          <a href="#projetos" onClick={closeMenu}>Projetos</a>
          <a href="#competencias" onClick={closeMenu}>Competências</a>
          <a className="nav-contact" href="https://wa.me/5511930046579" target="_blank" rel="noreferrer" onClick={closeMenu}>Vamos conversar <ArrowUpRight size={15} /></a>
        </nav>
      </header>

      <aside className="section-ruler" aria-label="Navegação por seções"><span className="ruler-line" /><a href="#inicio" className="active"><b>00</b><span>início</span></a><a href="#perfil"><b>01</b><span>perfil</span></a><a href="#experiencia"><b>02</b><span>experiência</span></a><a href="#projetos"><b>03</b><span>projetos</span></a><a href="#competencias"><b>04</b><span>competências</span></a><a href="#contato"><b>05</b><span>contato</span></a></aside>
      <main>
        <section id="inicio" className="hero-section">
          <div className="hero-image" aria-hidden="true" />
          <div className="hero-overlay" aria-hidden="true" />
          <div className="hero-content container">
            <div className="hero-kicker"><span className="status-dot" /> SISTEMAS • INFRAESTRUTURA • OPERAÇÃO</div>
            <h1>Infraestrutura que<br /><em>sustenta o negócio.</em></h1>
            <p className="hero-lede">Especialista em sistemas corporativos e ambientes críticos, conectando tecnologia, continuidade e resultado há mais de uma década.</p>
            <div className="hero-actions">
              <a className="button button-primary" href="#experiencia">Conheça minha trajetória <ArrowUpRight size={17} /></a>
              <a className="text-link" href="https://wa.me/5511930046579" target="_blank" rel="noreferrer">Entrar em contato <span>↗</span></a>
            </div>
          </div>
          <div className="hero-meta">
            <span>01 — PORTFÓLIO PROFISSIONAL</span>
            <span>GUARULHOS / SP · BRASIL</span>
          </div>
        </section>

        <section id="perfil" className="profile-section container">
          <SectionLabel number="01">Perfil profissional</SectionLabel>
          <div className="profile-grid">
            <div className="profile-statement">
              <p className="eyebrow">A tecnologia precisa funcionar para o negócio.</p>
              <h2>Experiência prática para transformar complexidade em <span>continuidade.</span></h2>
            </div>
            <div className="profile-copy">
              <p>Profissional de Tecnologia da Informação com sólida experiência em infraestrutura corporativa, sustentação enterprise, suporte avançado e implantação de soluções estratégicas.</p>
              <p>Atuo na administração de ambientes críticos, redes corporativas, servidores Microsoft, segurança da informação, cloud computing e ecossistemas ERP, com visão próxima da operação e do impacto no negócio.</p>
              <div className="profile-signature"><span>WV</span><div><strong>William Vasconcelos</strong><small>Especialista em Sistemas Corporativos & Infraestrutura</small></div></div>
            </div>
          </div>
        </section>

        <section className="scope-strip">
          <div className="container scope-grid">
            <div className="scope-intro"><span className="eyebrow light">Escopo de atuação</span><p>Ambientes onde precisão, suporte e continuidade não são opcionais.</p></div>
            <div className="scope-item"><Cloud size={22} /><strong>Cloud &<br />ambientes híbridos</strong></div>
            <div className="scope-item"><Network size={22} /><strong>Redes &<br />conectividade</strong></div>
            <div className="scope-item"><ShieldCheck size={22} /><strong>Segurança &<br />governança</strong></div>
            <div className="scope-item"><Terminal size={22} /><strong>ERP &<br />sustentação</strong></div>
          </div>
        </section>

        <section id="experiencia" className="experience-section container">
          <SectionLabel number="02">Experiência</SectionLabel>
          <div className="experience-grid">
            <div className="experience-aside"><span className="big-year">14<span>+</span></span><p>anos acompanhando a evolução de sistemas, infraestrutura e operações corporativas.</p></div>
            <div className="experience-main">
              <div className="section-note"><span>SYS / 2011—NOW</span><i /><span>CONTINUIDADE OPERACIONAL</span></div>
              <div className="role-heading"><div><span className="role-period">FEV 2011 — ATUAL</span><h2>Analista de Sistemas Sênior</h2><p className="company">Grupo EA9 Company</p></div><BriefcaseBusiness size={30} strokeWidth={1.3} /></div>
              <div className="role-body"><p>Responsável pela sustentação tecnológica do <strong>Grupo EA9 Company</strong>, grupo formado pelas lojas Empório Alex e pelas lojas oficiais do Corinthians, com uma operação de mais de <strong>70 lojas</strong>. Garanto disponibilidade, suporte e evolução do ecossistema digital.</p><div className="responsibility-list"><div><Check size={15} />Suporte N1 / N2 / N3 e troubleshooting avançado</div><div><Check size={15} />Administração de servidores, redes e infraestrutura</div><div><Check size={15} />Gestão de ambientes cloud e híbridos</div><div><Check size={15} />ERP, integrações e projetos de transformação digital</div><div><Check size={15} />VPN Cisco / TP-Link, DNS, DHCP e Zabbix</div></div></div>
              <div className="system-line"><span>SISTEMAS EM OPERAÇÃO</span><b>TOTVS PROTHEUS</b><b>RM CLOUD</b><b>APP MEU RH</b><b>APP MEU PROTHEUS</b><b>SECULLUM</b><b>IBC SOFT</b><b>NEXTT</b></div>
            </div>
          </div>
        </section>

        <section id="projetos" className="projects-section">
          <div className="container"><SectionLabel number="03">Projetos estratégicos</SectionLabel><div className="projects-intro"><h2>Da implantação à sustentação:<br /><em>tecnologia em movimento.</em></h2><p>Projetos que conectam decisão, execução e operação — com foco no que permanece funcionando depois da entrega.</p></div><div className="projects-list">{projects.map((project) => <article className="project-row" key={project.number}><span className="project-number">{project.number}</span><h3>{project.title}</h3><p>{project.text}</p><div className="project-tags">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div><ArrowUpRight className="project-arrow" size={24} /></article>)}</div></div>
        </section>

        <section id="competencias" className="skills-section container">
          <SectionLabel number="04">Competências & formação</SectionLabel>
          <div className="skills-grid"><div><div className="section-note"><span>STACK / FIELD KIT</span><i /><span>OPERAÇÃO & DIAGNÓSTICO</span></div><h2>Ferramentas para<br /><span>resolver o real.</span></h2><p>Uma combinação de repertório técnico, capacidade de diagnóstico e visão sistêmica para manter operações relevantes.</p><div className="skill-cloud">{skills.map((skill) => <span key={skill}>{skill}</span>)}</div></div><div className="education-column"><div className="education-block"><span className="eyebrow">Formação acadêmica</span><div className="education-item"><strong>Universidade Cruzeiro do Sul</strong><span>Bacharelado em Ciência da Computação · 2022–2025</span></div><div className="education-item"><strong>FGV</strong><span>Fundamentos em Gestão de TI · 2019</span></div><div className="education-item"><strong>SENAI</strong><span>Análise e Desenvolvimento de Sistemas · 2012</span></div><div className="education-item"><strong>Fundação Fundetec</strong><span>Tecnologia em Remanufaturamento de Computadores · 2007</span></div></div><div className="education-block certifications"><span className="eyebrow">Certificações selecionadas</span>{certifications.map((certification) => <div className="cert-item" key={certification}><Check size={14} />{certification}</div>)}</div></div></div>
        </section>

        <section id="contato" className="contact-section"><div className="container contact-inner"><div><span className="eyebrow light">05 — Próximo passo</span><h2>Vamos manter sua<br /><em>operação em movimento.</em></h2></div><div className="contact-cta"><p>Se você busca experiência para sustentar sistemas críticos, implantar soluções ou organizar a infraestrutura de uma operação, fale comigo.</p><div className="contact-buttons"><a className="button button-light" href="https://wa.me/5511930046579" target="_blank" rel="noreferrer">WhatsApp <ArrowUpRight size={18} /></a><a className="button button-outline-light" href="mailto:william-profissional@hotmail.com">E-mail <ArrowUpRight size={18} /></a></div></div></div></section>
      </main>

      <footer className="site-footer"><div className="container footer-inner"><div className="footer-brand"><img src={`${import.meta.env.BASE_URL}assets/william-logo-palette.png`} alt="" /><span>WILLIAM VASCONCELOS</span></div><div className="footer-links"><a href="https://wa.me/5511930046579" target="_blank" rel="noreferrer"><Phone size={15} /> WhatsApp</a><a href="https://www.linkedin.com/in/william-vasconcelos-091842252" target="_blank" rel="noreferrer"><Linkedin size={15} /> LinkedIn <ExternalLink size={13} /></a><a href="mailto:william-profissional@hotmail.com"><Mail size={15} /> E-mail</a></div><div className="footer-location"><MapPin size={14} /> Guarulhos — SP<br /><span>© {new Date().getFullYear()} William Vasconcelos</span></div></div></footer>
    </div>
  );
}
