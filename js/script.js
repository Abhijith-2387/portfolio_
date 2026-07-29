// Portfolio interactions: navigation, progressive reveals, counters, and contact form feedback.

// Shortcuts for selecting one element or multiple elements from the page.
const $ = (selector, context = document) => context.querySelector(selector);
const $$ = (selector, context = document) => [
  ...context.querySelectorAll(selector),
];

// -----------------------------------------------------------------------------
// Mobile navigation
// -----------------------------------------------------------------------------
const menuButton = $(".menu-toggle");
const navLinks = $(".nav-links");

menuButton.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("open");

  menuButton.setAttribute("aria-expanded", isOpen);
  menuButton.setAttribute(
    "aria-label",
    isOpen ? "Close navigation" : "Open navigation",
  );
});

$$(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => navLinks.classList.remove("open"));
});

// -----------------------------------------------------------------------------
// Reveal sections as they enter the screen and highlight the active nav link.
// -----------------------------------------------------------------------------
const sections = $$("main section[id]");
const links = $$(".nav-links a");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");

        const id = entry.target.closest("section")?.id;
        if (id) {
          links.forEach((link) =>
            link.classList.toggle("active", link.hash === `#${id}`),
          );
        }
      }
    });
  },
  { threshold: 0.14 },
);

$$(".reveal").forEach((item) => observer.observe(item));
sections.forEach((section) => observer.observe(section));

// -----------------------------------------------------------------------------
// Type the role text in the hero section one character at a time.
// -----------------------------------------------------------------------------
const typing = $(".typing");
const title = typing.dataset.text;
let char = 0;

const writeTitle = () => {
  typing.textContent = title.slice(0, ++char);

  if (char < title.length) {
    setTimeout(writeTitle, 46);
  }
};

setTimeout(writeTitle, 350);

// -----------------------------------------------------------------------------
// Count up the statistics once the stats area becomes visible.
// -----------------------------------------------------------------------------
let counted = false;
const stats = $(".stats");

new IntersectionObserver(
  (entries) => {
    if (entries[0].isIntersecting && !counted) {
      counted = true;

      $$("[data-count]").forEach((el) => {
        const end = +el.dataset.count;
        let value = 0;

        const timer = setInterval(() => {
          value++;
          el.textContent = value + (end === 1 ? "" : "+");

          if (value >= end) {
            clearInterval(timer);
          }
        }, 170);
      });
    }
  },
  { threshold: 0.5 },
).observe(stats);

// -----------------------------------------------------------------------------
// Update scroll progress and show the button that returns to the top.
// -----------------------------------------------------------------------------
const progress = $(".progress span");
const backTop = $(".back-top");

window.addEventListener(
  "scroll",
  () => {
    const max = document.documentElement.scrollHeight - innerHeight;
    progress.style.width = `${(scrollY / max) * 100}%`;
    backTop.classList.toggle("show", scrollY > 500);
  },
  { passive: true },
);

backTop.addEventListener("click", () =>
  window.scrollTo({ top: 0, behavior: "smooth" }),
);

// Put the current year in the footer automatically.
$("#year").textContent = new Date().getFullYear();

// -----------------------------------------------------------------------------
// Validate the contact form, then let FormSubmit deliver the message.
// -----------------------------------------------------------------------------
$(".contact-form").addEventListener("submit", (event) => {
  const form = event.currentTarget;
  const status = $(".form-status", form);

  if (!form.checkValidity()) {
    event.preventDefault();
    status.textContent =
      "Please complete every field with a valid email address.";
    form.reportValidity();
    return;
  }

  status.textContent = "Sending your message…";
});
