
import { useEffect, useState } from "react";
import {
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  BrainCircuit,
  Code2,
  Database,
  ExternalLink,
  GraduationCap,
  Mail,
  Menu,
  X,
  Award,
  BriefcaseBusiness,
} from "lucide-react";
import "./App.css";

const projects = [
  {
    number: "01",
    title: "Z-Sentinel",
    category: "AI · Fraud Detection",
    description:
      "A real-time fraud detection system designed to analyze transaction behavior, identify suspicious activity, and recommend actions such as Allow, Verify, or Hold.",
    image: "/images/z-sentinel.png",
    tags: ["Python", "Machine Learning", "FastAPI", "Network Analysis"],
    status: "Project",
  },
  {
    number: "02",
    title: "TrustHire AI",
    category: "AI · Resume Analysis",
    description:
      "An AI-powered resume analysis and hiring assistant that helps users evaluate resumes and explore useful insights for recruitment workflows.",
    image: "/images/trusthire.png",
    tags: ["Python", "FastAPI", "Gemini API", "JavaScript"],
    github: "https://github.com/myashwanthkumar721/TrustHire-AI",
    demo: "https://trusthire-ai-o8zz.onrender.com",
  },
  {
    number: "03",
    title: "Amazon Sales Analytics",
    category: "Data · Business Intelligence",
    description:
      "A sales analytics project exploring order data, revenue, average order value, and business performance through SQL analysis and Power BI.",
    image: "/images/amazon-analytics.png",
    tags: ["Power BI", "SQL", "Data Analysis"],
  },
];

const skillGroups = [
  {
    number: "01",
    title: "Programming",
    icon: <Code2 size={20} />,
    skills: ["Python", "C", "JavaScript", "HTML", "CSS"],
  },
  {
    number: "02",
    title: "Data & Analytics",
    icon: <Database size={20} />,
    skills: ["SQL", "MySQL", "Power BI", "Pandas", "Jupyter Notebook"],
  },
  {
    number: "03",
    title: "AI & Development",
    icon: <BrainCircuit size={20} />,
    skills: ["Machine Learning", "FastAPI", "Git", "GitHub", "VS Code"],
  },
];

const highlights = [
  {
    icon: <BriefcaseBusiness size={19} />,
    title: "Infosys Springboard",
    detail:
      "Selected for an AI internship scheduled to commence in October 2026.",
    type: "Internship",
  },
  {
    icon: <Award size={19} />,
    title: "Hackathon participation",
    detail: "Adobe University Hackathon and AB Talks Vicodathon.",
    type: "Competition",
  },
  {
    icon: <GraduationCap size={19} />,
    title: "Continuous learning",
    detail:
      "AI and data science courses, including an Accenture AI certificate through FutureLearn.",
    type: "Certification",
  },
];

const navItems = [
  ["About", "about"],
  ["Skills", "skills"],
  ["Projects", "projects"],
  ["Journey", "journey"],
  ["Contact", "contact"],
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const sections = document.querySelectorAll("main section[id]");

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (a, b) => b.intersectionRatio - a.intersectionRatio
          )[0];

        if (visible) {
          setActiveSection(visible.target.id);
        }
      },
      {
        rootMargin: "-20% 0px -55% 0px",
        threshold: [0, 0.2, 0.5],
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <main>
      <header className="site-header">
        <div className="nav-wrap">
          <a className="brand" href="#home" onClick={closeMenu}>
            YK<span>.</span>
          </a>

          <button
            className="menu-toggle"
            type="button"
            aria-label={
              menuOpen ? "Close navigation" : "Open navigation"
            }
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>

          <nav
            className={
              menuOpen ? "nav-links nav-open" : "nav-links"
            }
          >
            {navItems.map(([label, id]) => (
              <a
                key={id}
                href={`#${id}`}
                className={activeSection === id ? "active" : ""}
                onClick={closeMenu}
              >
                {label}
              </a>
            ))}
          </nav>

          <a className="nav-cta" href="#contact">
            Let's connect <ArrowUpRight size={15} />
          </a>
        </div>
      </header>

      <section className="hero" id="home">
        <div className="hero-inner page-width">
          <div className="hero-copy">
            <p className="eyebrow">
              <span className="eyebrow-line" />
              Computer Science · Data Science
            </p>

            <h1>
              Turning curiosity
              <br />
              into <span className="accent-text">creation.</span>
            </h1>

            <p className="hero-intro">
              I'm <strong>Yashwanth Kumar</strong>, a B.Tech student
              exploring artificial intelligence, data analytics, and
              software development through hands-on projects.
            </p>

            <div className="hero-actions">
              <a className="button button-primary" href="#projects">
                Explore projects <ArrowUpRight size={17} />
              </a>

              <a className="text-link" href="#about">
                More about me <ArrowDownRight size={17} />
              </a>
            </div>

            <div className="hero-socials">
              <a
                href="https://github.com/myashwanthkumar721"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub profile"
                title="GitHub"
              >
                <Code2 size={18} />
              </a>

              <a
                href="https://www.linkedin.com/in/yashwanth-kumar-madugonde"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn profile"
                title="LinkedIn"
              >
                <ExternalLink size={18} />
              </a>

              <span className="social-note">Find me online</span>
            </div>
          </div>

          <div className="hero-side">
            <div className="hero-monogram" aria-label="YK monogram">
              <span className="monogram-top">YK</span>
              <span className="monogram-bottom">
                DATA · AI · CODE
              </span>

              <div className="monogram-corner corner-one" />
              <div className="monogram-corner corner-two" />
              <div className="monogram-corner corner-three" />
              <div className="monogram-corner corner-four" />
            </div>

            <div className="hero-side-caption">
              <span className="caption-dot" />
              <span>Learning by building</span>
            </div>
          </div>
        </div>

        <div className="hero-bottom page-width">
          <span>Based in Hyderabad, India</span>
          <a href="#about">
            Scroll to discover <ArrowDownRight size={15} />
          </a>
        </div>
      </section>

      <section className="section about-section" id="about">
        <div className="page-width">
          <div className="section-topline">
            <span>01 / About</span>
            <span className="section-rule" />
          </div>

          <div className="about-layout">
            <div className="section-title">
              <p className="eyebrow">A little introduction</p>
              <h2>
                Curious by nature.
                <br />
                <span className="muted-text">Driven to build.</span>
              </h2>
            </div>

            <div className="about-copy">
              <p className="about-lead">
                I enjoy exploring how technology can turn ideas and
                data into useful, real-world solutions.
              </p>

              <p>
                I'm pursuing a B.Tech in Computer Science and
                Engineering (Data Science) at CMR Institute of
                Technology, Hyderabad. Alongside my coursework, I'm
                developing projects that help me strengthen my
                programming, analytical thinking, and problem-solving
                skills.
              </p>

              <p>
                My interests include data analytics, artificial
                intelligence, and building practical software. I'm
                focused on learning consistently and growing through
                projects, collaboration, and new challenges.
              </p>

              <div className="about-facts">
                <div>
                  <span className="fact-label">Education</span>
                  <strong>B.Tech · CSE (Data Science)</strong>
                </div>

                <div>
                  <span className="fact-label">Institute</span>
                  <strong>CMR Institute of Technology</strong>
                </div>

                <div>
                  <span className="fact-label">Graduation</span>
                  <strong>Expected 2029</strong>
                </div>

                <div>
                  <span className="fact-label">Current focus</span>
                  <strong>AI · Data · Development</strong>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section skills-section" id="skills">
        <div className="page-width">
          <div className="section-topline">
            <span>02 / Skills</span>
            <span className="section-rule" />
          </div>

          <div className="section-heading-row">
            <div className="section-title">
              <p className="eyebrow">My toolkit</p>
              <h2>
                Skills in <span className="accent-text">progress.</span>
              </h2>
            </div>

            <p className="section-aside">
              Technologies and tools I'm using as I learn, experiment,
              and build.
            </p>
          </div>

          <div className="skills-grid">
            {skillGroups.map((group) => (
              <article className="skill-card" key={group.number}>
                <div className="skill-card-top">
                  <span className="skill-icon">{group.icon}</span>
                  <span className="skill-number">
                    {group.number}
                  </span>
                </div>

                <h3>{group.title}</h3>

                <div className="skill-list">
                  {group.skills.map((skill) => (
                    <span key={skill}>{skill}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section projects-section" id="projects">
        <div className="page-width">
          <div className="section-topline">
            <span>03 / Selected work</span>
            <span className="section-rule" />
          </div>

          <div className="section-heading-row projects-heading">
            <div className="section-title">
              <p className="eyebrow">Things I've worked on</p>
              <h2>
                Built with <span className="accent-text">purpose.</span>
              </h2>
            </div>

            <p className="section-aside">
              A selection of projects where I turn learning into
              practical experience.
            </p>
          </div>

          <div className="projects-list">
            {projects.map((project) => (
              <article className="project-card" key={project.number}>
                <div className="project-media">
                  <img
                    src={project.image}
                    alt={`${project.title} preview`}
                    loading="lazy"
                  />
                  <span className="project-index">
                    {project.number}
                  </span>
                </div>

                <div className="project-content">
                  <p className="project-category">
                    {project.category}
                  </p>

                  <h3>{project.title}</h3>

                  <p className="project-description">
                    {project.description}
                  </p>

                  <div className="project-tags">
                    {project.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>

                  <div className="project-footer">
                    <span className="project-status">
                      {project.status || "Project"}
                    </span>

                    <div className="project-actions">
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noreferrer"
                          aria-label={`${project.title} GitHub repository`}
                        >
                          <Code2 size={16} /> Code
                        </a>
                      )}

                      {project.demo && (
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noreferrer"
                        >
                          Live demo <ExternalLink size={15} />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section journey-section" id="journey">
        <div className="page-width">
          <div className="section-topline">
            <span>04 / Journey</span>
            <span className="section-rule" />
          </div>

          <div className="section-heading-row">
            <div className="section-title">
              <p className="eyebrow">Learning and experience</p>
              <h2>
                Growing one step
                <br />
                <span className="muted-text">at a time.</span>
              </h2>
            </div>

            <p className="section-aside">
              Milestones from my learning journey so far.
            </p>
          </div>

          <div className="journey-list">
            {highlights.map((item, index) => (
              <article className="journey-item" key={item.title}>
                <span className="journey-number">
                  0{index + 1}
                </span>

                <span className="journey-icon">{item.icon}</span>

                <div className="journey-copy">
                  <span className="journey-type">{item.type}</span>
                  <h3>{item.title}</h3>
                  <p>{item.detail}</p>
                </div>

                <ArrowUpRight
                  className="journey-arrow"
                  size={18}
                />
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="contact-section" id="contact">
        <div className="page-width contact-inner">
          <div className="section-topline">
            <span>05 / Contact</span>
            <span className="section-rule" />
          </div>

          <p className="eyebrow">
            Have a project or opportunity in mind?
          </p>

          <h2>
            Let's make
            <br />
            <span className="accent-text">
              something meaningful.
            </span>
          </h2>

          <p className="contact-description">
            I'm always interested in connecting with people who enjoy
            technology, learning, and building useful ideas.
          </p>

          <a
            className="button button-primary contact-button"
            href="https://www.linkedin.com/in/yashwanth-kumar-madugonde"
            target="_blank"
            rel="noreferrer"
          >
            Connect on LinkedIn <ArrowUpRight size={17} />
          </a>

          <div className="contact-links">
            <a
              href="https://github.com/myashwanthkumar721"
              target="_blank"
              rel="noreferrer"
            >
              <Code2 size={17} /> GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/yashwanth-kumar-madugonde"
              target="_blank"
              rel="noreferrer"
            >
              <ExternalLink size={17} /> LinkedIn
            </a>

            <a href="mailto:myashwanthkumar721@gmail.com">
              <Mail size={17} /> Email
            </a>
          </div>
        </div>
      </section>

      <footer className="site-footer">
        <div className="page-width footer-inner">
          <a className="brand" href="#home">
            YK<span>.</span>
          </a>

          <p>Designed and built by Yashwanth Kumar.</p>

          <a className="back-to-top" href="#home">
            Back to top <ArrowRight size={15} />
          </a>
        </div>
      </footer>
    </main>
  );
}

export default App;