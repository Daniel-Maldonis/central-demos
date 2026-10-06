// Edite estes dados para personalizar o site com as informações reais.
const siteConfig = {
  whatsappNumber: "5511999999999",
  whatsappMessage: "Olá, Lucas! Quero agendar uma avaliação.",
  displayPhone: "(11) 99999-9999"
};

const header = document.querySelector("[data-header]");
const menuToggle = document.querySelector("[data-menu-toggle]");
const nav = document.querySelector("[data-nav]");
const whatsappLinks = document.querySelectorAll("[data-whatsapp-link]");
const whatsappText = document.querySelector("[data-whatsapp-text]");
const contactForm = document.querySelector("[data-contact-form]");
const formFeedback = document.querySelector("[data-form-feedback]");
const revealElements = document.querySelectorAll(".reveal");

function getWhatsappUrl(message = siteConfig.whatsappMessage) {
  return `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

function closeMenu() {
  document.body.classList.remove("menu-open");
  nav.classList.remove("is-open");
  menuToggle.classList.remove("is-active");
  menuToggle.setAttribute("aria-expanded", "false");
}

function updateHeaderState() {
  header.classList.toggle("is-scrolled", window.scrollY > 12);
}

function setupWhatsappLinks() {
  whatsappLinks.forEach((link) => {
    link.href = getWhatsappUrl();
  });

  if (whatsappText) {
    whatsappText.href = getWhatsappUrl();
    whatsappText.textContent = siteConfig.displayPhone;
  }
}

function setupMobileMenu() {
  menuToggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("is-open");
    document.body.classList.toggle("menu-open", isOpen);
    menuToggle.classList.toggle("is-active", isOpen);
    menuToggle.setAttribute("aria-expanded", String(isOpen));
  });

  nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", closeMenu);
  });
}

function setupRevealAnimation() {
  if (!("IntersectionObserver" in window)) {
    revealElements.forEach((element) => element.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.16 }
  );

  revealElements.forEach((element) => observer.observe(element));
}

function setupContactForm() {
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const formData = new FormData(contactForm);
    const name = formData.get("nome") || "";
    const goal = formData.get("objetivo") || "treino personalizado";
    const message = `Olá, Lucas! Meu nome é ${name}. Quero saber mais sobre ${goal}.`;

    formFeedback.textContent = "Mensagem pronta. Abrindo WhatsApp para continuar o atendimento.";
    window.open(getWhatsappUrl(message), "_blank", "noopener");
    contactForm.reset();
  });
}

setupWhatsappLinks();
setupMobileMenu();
setupRevealAnimation();
setupContactForm();
updateHeaderState();

window.addEventListener("scroll", updateHeaderState, { passive: true });
