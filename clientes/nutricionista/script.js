// Edite estes dados para personalizar o site com as informações reais.
const siteConfig = {
  whatsapp: "5511999999999",
  phone: "(11) 99999-9999",
  email: "contato@nutriana.com.br",
  instagramUrl: "https://instagram.com/nutrianacarvalho",
  instagramHandle: "@nutrianacarvalho",
  address: "Rua das Flores, 123 - São Paulo, SP"
};

const menuToggle = document.querySelector(".menu-toggle");
const navPanel = document.querySelector(".nav-panel");
const navLinks = document.querySelectorAll(".nav-panel a");
const contactForm = document.querySelector(".contact-form");
const formFeedback = document.querySelector(".form-feedback");
const revealItems = document.querySelectorAll(".reveal");

function applyContactConfig() {
  const whatsappUrl = `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent("Olá! Gostaria de agendar uma consulta nutricional.")}`;

  document.querySelectorAll("[data-whatsapp-link]").forEach((link) => {
    link.href = whatsappUrl;
  });

  document.querySelector("[data-phone]").textContent = siteConfig.phone;
  document.querySelector("[data-email]").textContent = siteConfig.email;
  document.querySelector("[data-email-link]").href = `mailto:${siteConfig.email}`;
  document.querySelector("[data-instagram]").textContent = siteConfig.instagramHandle;
  document.querySelector("[data-instagram-link]").href = siteConfig.instagramUrl;
  document.querySelector("[data-address]").textContent = siteConfig.address;
}

function toggleMenu() {
  const isOpen = navPanel.classList.toggle("is-open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.setAttribute("aria-label", isOpen ? "Fechar menu" : "Abrir menu");
}

function closeMenu() {
  navPanel.classList.remove("is-open");
  menuToggle.setAttribute("aria-expanded", "false");
  menuToggle.setAttribute("aria-label", "Abrir menu");
}

function setupRevealAnimation() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.14 });

  revealItems.forEach((item) => observer.observe(item));
}

menuToggle.addEventListener("click", toggleMenu);
navLinks.forEach((link) => link.addEventListener("click", closeMenu));

document.addEventListener("click", (event) => {
  const clickedInsideMenu = navPanel.contains(event.target);
  const clickedToggle = menuToggle.contains(event.target);

  if (!clickedInsideMenu && !clickedToggle) {
    closeMenu();
  }
});

window.addEventListener("resize", () => {
  if (window.innerWidth > 820) {
    closeMenu();
  }
});

contactForm.addEventListener("submit", (event) => {
  event.preventDefault();
  formFeedback.textContent = "Mensagem preparada! Em um site real, ela seria enviada para a nutricionista.";
  contactForm.reset();
});

applyContactConfig();
setupRevealAnimation();
