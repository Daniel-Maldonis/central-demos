const siteConfig = {
  name: "Dra. Mariana Alves",
  crp: "CRP 06/123456",
  whatsappDisplay: "(11) 91234-5678",
  whatsappNumber: "5511912345678",
  email: "contato@marianaalvespsi.com.br",
  address: "Rua das Flores, 123 - Sala 805, São Paulo - SP",
  instagram: "@marianaalves.psi",
  instagramUrl: "https://www.instagram.com/marianaalves.psi"
};

const menuToggle = document.querySelector(".menu-toggle");
const navMenu = document.querySelector(".nav-menu");

menuToggle.addEventListener("click", () => {
  const isOpen = navMenu.classList.toggle("is-open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
});

document.querySelectorAll(".nav-menu a").forEach((link) => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("is-open");
    menuToggle.setAttribute("aria-expanded", "false");
  });
});

document.addEventListener("click", (event) => {
  const clickedInsideMenu = navMenu.contains(event.target);
  const clickedToggle = menuToggle.contains(event.target);

  if (!clickedInsideMenu && !clickedToggle && navMenu.classList.contains("is-open")) {
    navMenu.classList.remove("is-open");
    menuToggle.setAttribute("aria-expanded", "false");
  }
});

window.addEventListener("resize", () => {
  if (window.innerWidth > 980) {
    navMenu.classList.remove("is-open");
    menuToggle.setAttribute("aria-expanded", "false");
  }
});

// Atualize o objeto siteConfig para trocar dados fictícios por informações reais.
document.querySelectorAll("[data-config='name']").forEach((item) => {
  item.textContent = siteConfig.name;
});

document.querySelectorAll("[data-config='crp']").forEach((item) => {
  item.textContent = siteConfig.crp;
});

const whatsappMessage = encodeURIComponent("Olá, gostaria de agendar uma consulta.");
const whatsappUrl = `https://wa.me/${siteConfig.whatsappNumber}?text=${whatsappMessage}`;

document.querySelectorAll("[data-whatsapp-link]").forEach((link) => {
  link.href = whatsappUrl;
});

const phoneLink = document.querySelector("[data-config='phoneLink']");
phoneLink.href = whatsappUrl;
phoneLink.textContent = siteConfig.whatsappDisplay;

const emailLink = document.querySelector("[data-config='emailLink']");
emailLink.href = `mailto:${siteConfig.email}`;
emailLink.textContent = siteConfig.email;

document.querySelector("[data-config='address']").textContent = siteConfig.address;

const instagramLink = document.querySelector("[data-config='instagramLink']");
instagramLink.href = siteConfig.instagramUrl;
instagramLink.textContent = siteConfig.instagram;

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("is-visible");
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll(".reveal").forEach((element) => {
  revealObserver.observe(element);
});

document.querySelector("#contactForm").addEventListener("submit", (event) => {
  event.preventDefault();
  const status = event.currentTarget.querySelector(".form-status");
  status.textContent = "Mensagem pronta para envio. Integre um backend ou serviço de formulário para receber os dados.";
  event.currentTarget.reset();
});
