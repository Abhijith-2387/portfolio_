import React, { useEffect, useMemo, useRef, useState } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";

const navItems = [
  "home",
  "about",
  "education",
  "skills",
  "projects",
  "experience",
  "certifications",
  "contact",
];

const skills = [
  { title: "Programming", items: ["Python", "Java", "C"] },
  { title: "Web Development", items: ["HTML", "CSS", "JavaScript", "React"] },
  {
    title: "Data & AI",
    items: ["Machine Learning", "Data Analysis", "Visualization"],
  },
  { title: "Database & Tools", items: ["MongoDB", "SQL", "DBMS", "Git", "GitHub"] },
];

const projects = [
  {
    label: "Computer Vision · Python",
    title: "AI-Powered Baby Monitoring System",
    description:
      "Python-based monitoring system that detects sleep and wake states, then sends real-time alerts to support more efficient monitoring.",
    points: [
      "OpenCV-based state detection",
      "Real-time alert workflow",
      "Twilio API notification integration",
      "Designed for practical monitoring efficiency",
    ],
    tech: ["Python", "OpenCV", "Twilio API"],
    href: "https://github.com/Abhijith-2387/baby-sleep-monitoring-system",
    featured: true,
    art: "monitor",
  },
  {
    label: "Machine Learning · Python",
    title: "AI-Driven Handwritten Text Recognition",
    description:
      "A handwritten text recognition system that uses image preprocessing and machine learning to classify digits and text from scanned input.",
    points: [
      "Image preprocessing pipeline",
      "Digit and text classification",
      "Scanned-input support",
      "Accessibility-focused application",
    ],
    tech: ["Python", "Machine Learning", "Image Processing"],
    href: "https://github.com/Abhijith-2387/handwritten-text-recognition",
    art: "type",
  },
  {
    label: "Generative AI · Python",
    title: "Email Summarization Agent",
    description:
      "A local AI agent that turns emails into structured summaries, key points, action items, deadlines, and urgency levels.",
    points: [
      "Runs Phi-3-mini locally through Hugging Face Transformers",
      "Uses 4-bit NF4 quantization for efficient inference",
      "Extracts reliable structured JSON from model responses",
      "Designed to run on consumer hardware",
    ],
    tech: ["Python", "Hugging Face", "Phi-3", "LLM"],
    href: "https://github.com/Abhijith-2387/Email-summarization-agent",
    art: "email",
  },
];

const experiences = [
  {
    date: "Jun 2025 - Jul 2025",
    label: "AR / VR Intern",
    org: "Praya Labs",
    description:
      "Completed structured, hands-on training in augmented reality and virtual reality development concepts, expanding practical exposure to immersive technologies.",
    tech: ["Augmented Reality", "Virtual Reality"],
  },
  {
    date: "Oct 2025 - Nov 2025",
    label: "AI / ML Training Program",
    org: "Taras Systems and Solutions",
    description:
      "Completed a structured training program covering foundational concepts in artificial intelligence and machine learning.",
    tech: ["Artificial Intelligence", "Machine Learning"],
  },
  {
    date: "Jul 2026 - Aug 2026",
    label: "Full Stack Development / Intern",
    org: "ApexPlanet",
    description:
      "Completed hands-on training in full stack web development, building applications with modern JavaScript technologies across the frontend and backend.",
    tech: ["MERN Stack", "Full Stack Development"],
  },
];

const certifications = [
  ["Tata GenAI Powered Data Analytics Job Simulation", "Tata · Jan 2026"],
  ["Building RAG Apps Using MongoDB", "MongoDB · Oct 2025"],
  ["Learn AI and GenAI Basics", "Microsoft · Oct 2025"],
  ["Oracle Certified Foundations Associate", "Oracle · Apr 2025"],
  ["Cloud Computing", "NPTEL · Apr 2026"],
];

function useReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.14 },
    );

    document.querySelectorAll(".reveal").forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("home");
  const [progress, setProgress] = useState(0);
  const [showTop, setShowTop] = useState(false);
  const [typed, setTyped] = useState("");
  const [statsStarted, setStatsStarted] = useState(false);
  const [counts, setCounts] = useState([0, 0, 0]);
  const statsRef = useRef(null);
  const roleText = "Computer Science Engineering Student";

  useReveal();

  useEffect(() => {
    const sectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-38% 0px -52% 0px", threshold: 0.01 },
    );
    navItems.forEach((id) => {
      const section = document.getElementById(id);
      if (section) sectionObserver.observe(section);
    });
    return () => sectionObserver.disconnect();
  }, []);

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      index += 1;
      setTyped(roleText.slice(0, index));
      if (index >= roleText.length) clearInterval(timer);
    }, 46);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? (window.scrollY / max) * 100 : 0);
      setShowTop(window.scrollY > 500);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setStatsStarted(true);
      },
      { threshold: 0.5 },
    );
    if (statsRef.current) observer.observe(statsRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!statsStarted) return;
    const targets = [3, 15, 3];
    const timer = setInterval(() => {
      setCounts((current) => {
        const next = current.map((value, index) =>
          value < targets[index] ? value + 1 : value,
        );
        if (next.every((value, index) => value >= targets[index])) {
          clearInterval(timer);
        }
        return next;
      });
    }, 140);
    return () => clearInterval(timer);
  }, [statsStarted]);

  return (
    <>
      <div className="progress" aria-hidden="true">
        <span style={{ width: `${progress}%` }} />
      </div>
      <Header active={active} menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <main>
        <section id="home" className="hero">
          <div className="hero-grid container">
            <div className="hero-copy reveal">
              <p className="eyebrow"><span /> Available for opportunities</p>
              <h1>Abhijith<br /><em>Mohan R.</em></h1>
              <p className="role"><span>{typed}</span><b>|</b></p>
              <p className="lead">
                Exploring the intersection of Artificial Intelligence, Machine
                Learning, and software engineering to build impactful solutions
                for real-world challenges.
              </p>
              <div className="hero-actions">
                <a className="btn primary" href={`${import.meta.env.BASE_URL}assets/resume/ABHIJITH-MOHAN-R-Resume.pdf`} download>
                  Download Resume <span>↓</span>
                </a>
                <a className="btn dark" href="#projects">View Projects</a>
                <a className="text-link" href="#contact">Contact me <span>→</span></a>
              </div>
              <div className="quick-contact">
                <a href="mailto:jithu5231w@gmail.com">Email: jithu5231w@gmail.com</a>
                <a href="tel:+919061079495">Phone: +91 90610 79495</a>
                <span>Palakkad, Kerala, India</span>
              </div>
            </div>
            <div className="portrait-wrap reveal">
              <div className="portrait">
                <img src={`${import.meta.env.BASE_URL}assets/images/profile-photo.jpeg`} alt="Abhijith Mohan R" />
              </div>
            </div>
          </div>
          <a className="scroll-cue" href="#about">SCROLL TO EXPLORE <i /></a>
        </section>

        <section id="about" className="section about">
          <div className="container split">
            <div className="section-intro reveal">
              <p className="eyebrow">01 - About</p>
              <h2>Curious mind.<br /><em>Practical builder.</em></h2>
            </div>
            <div className="about-copy reveal">
              <p className="large-copy">
                Computer Science Engineering student with a strong passion for
                Artificial Intelligence, Machine Learning, and software engineering.
                Experienced in developing intelligent applications, training and
                integrating machine learning models, and building AI-driven solutions.
              </p>
              <p className="passion">
                Driven by the challenge of turning complex ideas into clear,
                useful digital experiences.
              </p>
            </div>
          </div>
          <div className="container stats reveal" ref={statsRef}>
            {[
              ["Projects built", counts[0]],
              ["Technical skills", counts[1]],
              ["Industry experience", counts[2]],
            ].map(([label, value]) => (
              <div key={label}><strong>{value}+</strong><span>{label}</span></div>
            ))}
          </div>
        </section>

        <Education />
        <Skills />
        <Projects />
        <Experience />
        <Certifications />
        <ContactForm />
      </main>
      <Footer />
      <button
        className={`back-top ${showTop ? "show" : ""}`}
        aria-label="Back to top"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        ↑
      </button>
    </>
  );
}

function Header({ active, menuOpen, setMenuOpen }) {
  return (
    <header className="nav-wrap">
      <nav className="nav container" aria-label="Primary navigation">
        <a className="brand" href="#home">AM<span>R</span></a>
        <button
          className="menu-toggle"
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <i /><i /><i />
        </button>
        <div className={`nav-links ${menuOpen ? "open" : ""}`}>
          {navItems.map((item) => (
            <a
              key={item}
              className={active === item ? "active" : ""}
              href={`#${item}`}
              onClick={() => setMenuOpen(false)}
            >
              {item[0].toUpperCase() + item.slice(1)}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
}

function Education() {
  return (
    <section id="education" className="section gray">
      <div className="container">
        <div className="section-heading reveal">
          <p className="eyebrow">02 - Education</p>
          <h2>Academic <em>Background.</em></h2>
        </div>
        <div className="timeline">
          <article className="timeline-card reveal">
            <span className="date">Sep 2023 - Present</span>
            <div>
              <p className="label">Bachelor of Engineering</p>
              <h3>Akshaya College of Engineering &amp; Technology</h3>
              <p>Major in Computer Science · <b>7.6 CGPA</b></p>
              <div className="coursework">
                {["Python", "Software Development", "Web Development", "DBMS"].map((item) => <span key={item}>{item}</span>)}
              </div>
            </div>
          </article>
          <article className="timeline-card reveal">
            <span className="date">Jan 2021 - Mar 2023</span>
            <div>
              <p className="label">Higher Secondary Education (CBSE)</p>
              <h3>Kendriya Vidyalaya Kanjikode</h3>
              <p>Computer Science specialization · <b>89.8%</b></p>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section id="skills" className="section">
      <div className="container">
        <div className="section-heading reveal">
          <p className="eyebrow">03 - Expertise</p>
          <h2>Tools I <em>work</em> with.</h2>
        </div>
        <div className="skills-grid reveal">
          {skills.map((group) => (
            <article key={group.title}>
              <h3>{group.title}</h3>
              <div>{group.items.map((item) => <span key={item}>{item}</span>)}</div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section id="projects" className="section projects">
      <div className="container">
        <div className="section-heading light reveal">
          <p className="eyebrow">04 - Selected Work</p>
          <h2>Projects with <em>purpose.</em></h2>
          <p>Turning ideas into meaningful applications through thoughtful design, problem-solving, and modern software development.</p>
        </div>
        <div className="project-grid">
          {projects.map((project, index) => (
            <article className={`project-card reveal ${project.featured ? "featured" : ""}`} key={project.title}>
              <div className="project-number">{String(index + 1).padStart(2, "0")}</div>
              <div className="project-content">
                <p className="label">{project.label}</p>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <ul>{project.points.map((point) => <li key={point}>{point}</li>)}</ul>
                <div className="tech">{project.tech.map((item) => <span key={item}>{item}</span>)}</div>
                <a className="btn primary project-link" href={project.href} target="_blank" rel="noopener">
                  View on GitHub <span>↗</span>
                </a>
              </div>
              <ProjectArt type={project.art} />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectArt({ type }) {
  if (type === "monitor") {
    return <div className="project-art monitor-art"><div className="screen"><i /><i /><i /></div><span>LIVE<br />MONITOR</span></div>;
  }
  if (type === "email") {
    return <div className="project-art email-art" aria-hidden="true"><span>AI</span><i /><i /><i /></div>;
  }
  return <div className="project-art type-art">A<span>i</span><b>01</b></div>;
}

function Experience() {
  return (
    <section id="experience" className="section gray">
      <div className="container">
        <div className="section-heading reveal">
          <p className="eyebrow">05 - Experience</p>
          <h2>Internships <em>&amp;</em> Training</h2>
        </div>
        {experiences.map((item) => (
          <article className="experience-card reveal" key={item.org}>
            <div className="exp-date">{item.date}</div>
            <div>
              <p className="label">{item.label}</p>
              <h3>{item.org}</h3>
              <p>{item.description}</p>
              <div className="tech">{item.tech.map((tech) => <span key={tech}>{tech}</span>)}</div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function Certifications() {
  return (
    <section id="certifications" className="section">
      <div className="container">
        <div className="section-heading reveal">
          <p className="eyebrow">06 - Certifications</p>
          <h2>Committed to <em>growth.</em></h2>
        </div>
        <div className="cert-grid reveal">
          {certifications.map(([title, issuer], index) => (
            <article key={title}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h3>{title}</h3>
              <p>{issuer}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function ContactForm() {
  const initialForm = useMemo(() => ({ name: "", email: "", subject: "", message: "" }), []);
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const updateField = (event) => {
    setForm((current) => ({ ...current, [event.target.name]: event.target.value }));
  };

  const submitForm = async (event) => {
    event.preventDefault();
    setSubmitting(true);
    setStatus("Sending your message...");

    try {
      const response = await fetch("https://formsubmit.co/ajax/jithu5231w@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          _subject: `Portfolio Contact: ${form.subject}`,
          message: form.message,
        }),
      });
      const data = await response.json();
      if (!response.ok || data.success === "false") {
        throw new Error(data.message || "Unable to send message.");
      }
      setStatus("Thank you! Your message has been sent successfully.");
      setForm(initialForm);
    } catch (error) {
      setStatus(error.message || "Failed to send message.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section contact">
      <div className="container contact-grid">
        <div className="reveal">
          <p className="eyebrow">07 - Contact</p>
          <h2>Let's build something<br /><em>meaningful.</em></h2>
          <p>Open to internships, graduate opportunities, and conversations around software, AI, and impactful technology.</p>
          <div className="contact-list">
            <a href="mailto:jithu5231w@gmail.com"><b>@</b><span>Email<small>jithu5231w@gmail.com</small></span></a>
            <a href="tel:+919061079495"><b>☎</b><span>Phone<small>+91 90610 79495</small></span></a>
            <span><b>⌖</b><span>Location<small>Palakkad, Kerala, India</small></span></span>
            <a href="https://www.linkedin.com/in/abhijith-mohan-r" target="_blank" rel="noopener"><b>in</b><span>LinkedIn<small>abhijith-mohan-r</small></span></a>
            <a href="https://github.com/Abhijith-2387" target="_blank" rel="noopener"><b>GH</b><span>GitHub<small>Abhijith-2387</small></span></a>
          </div>
        </div>
        <form className="contact-form reveal" onSubmit={submitForm}>
          <label>Name<input name="name" required autoComplete="name" placeholder="Your name" value={form.name} onChange={updateField} /></label>
          <label>Email<input type="email" name="email" required autoComplete="email" placeholder="you@gmail.com" value={form.email} onChange={updateField} /></label>
          <label>Subject<input name="subject" required placeholder="Message subject" value={form.subject} onChange={updateField} /></label>
          <label>Message<textarea name="message" required rows="4" placeholder="Write your message here" value={form.message} onChange={updateField} /></label>
          <button className="btn primary" type="submit" disabled={submitting}>
            {submitting ? "Sending..." : "Send Message"} <span>→</span>
          </button>
          <p className="form-status" aria-live="polite">{status}</p>
        </form>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer>
      <div className="container footer-inner">
        <a className="brand" href="#home">AM<span>R</span></a>
        <p>Designed &amp; Developed by Abhijith Mohan R</p>
        <div>
          <a href="#home">Home</a>
          <a href="#projects">Projects</a>
          <a href="mailto:jithu5231w@gmail.com" aria-label="Email">Email</a>
          <a href="https://www.linkedin.com/in/abhijith-mohan-r" target="_blank" rel="noopener" aria-label="LinkedIn">in</a>
        </div>
      </div>
      <p className="copyright">© {new Date().getFullYear()} Abhijith Mohan R. All rights reserved.</p>
    </footer>
  );
}

createRoot(document.getElementById("root")).render(<App />);
