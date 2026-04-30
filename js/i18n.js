// ============================================================
// i18n.js — PT / EN translations
// ============================================================

const translations = {
  pt: {
    nav_work:     "Trabalho",
    nav_services: "Servicos",
    nav_products: "Produtos",
    nav_about:    "Sobre",
    nav_contact:  "Contacto",
    nav_cta:      "Briefing",

    home_eyebrow: "Creative Director · AI Cinema · Lisboa",
    home_h1_1:    "Ideias que se",
    home_h1_2:    "transformam",
    home_h1_3:    "em cinema.",
    home_sub:     "Producoes cinematograficas com IA. Sem camara. Sem set. Sem actores. Com direccao criativa real.",
    home_btn_work:    "Ver trabalho",
    home_btn_contact: "Trabalhar comigo",
    home_stat_views:  "Views geradas",
    home_stat_reach:  "Alcance mensal",
    home_stat_engage: "Interaccoes",
    home_stat_solo:   "100% solo",

    home_about_tag:  "Quem sou",
    home_about_text: "Cresci no Rio fazendo musica. Trabalhei com grandes editoras internacionais, videoclipes, producao artistica. Hoje faco cinema com IA, em Lisboa. Sem camara. Com direccao real.",

    home_work_tag:   "Trabalho seleccionado",
    home_work_title: "Projectos em destaque",
    home_work_cta:   "Ver todo o trabalho",

    home_serv_tag:   "Servicos",
    home_serv_title: "O que faco",
    home_serv_1:     "Brand Films",
    home_serv_2:     "Aberturas de Show",
    home_serv_3:     "Reels Cinematic",
    home_serv_4:     "Series de Conteudo",
    home_serv_cta:   "Ver tabela completa",

    home_prod_tag:   "Produtos",
    home_prod_title: "Aprende o metodo",
    home_prod_sub:   "Guias, templates e frameworks usados em producao real.",
    home_prod_cta:   "Ver todos os produtos",

    home_final_tag:   "Vamos trabalhar juntos",
    home_final_title: "Tens um projecto?",
    home_final_sub:   "Preenche o briefing e recebo a tua proposta em 24h.",
    home_final_btn:   "Iniciar briefing",

    footer_tagline: "Producoes cinematograficas com IA. Lisboa, Portugal.",
    footer_col1:    "Navegacao",
    footer_col2:    "Servicos",
    footer_col3:    "Contacto",
    footer_copy:    "2026 Mateus Oliveira. Todos os direitos reservados.",
  },

  en: {
    nav_work:     "Work",
    nav_services: "Services",
    nav_products: "Products",
    nav_about:    "About",
    nav_contact:  "Contact",
    nav_cta:      "Brief",

    home_eyebrow: "Creative Director · AI Cinema · Lisbon",
    home_h1_1:    "Ideas that",
    home_h1_2:    "become",
    home_h1_3:    "cinema.",
    home_sub:     "Cinematic AI productions. No camera. No set. No actors. With real creative direction.",
    home_btn_work:    "See work",
    home_btn_contact: "Work with me",
    home_stat_views:  "Views generated",
    home_stat_reach:  "Monthly reach",
    home_stat_engage: "Interactions",
    home_stat_solo:   "100% solo",

    home_about_tag:  "Who I am",
    home_about_text: "Grew up in Rio making music. Worked with major international labels, music videos, artistic production. Now I make AI cinema, from Lisbon. No camera. Real direction.",

    home_work_tag:   "Selected work",
    home_work_title: "Featured projects",
    home_work_cta:   "See all work",

    home_serv_tag:   "Services",
    home_serv_title: "What I do",
    home_serv_1:     "Brand Films",
    home_serv_2:     "Show Openers",
    home_serv_3:     "Cinematic Reels",
    home_serv_4:     "Content Series",
    home_serv_cta:   "See full pricing",

    home_prod_tag:   "Products",
    home_prod_title: "Learn the method",
    home_prod_sub:   "Guides, templates and frameworks used in real production.",
    home_prod_cta:   "See all products",

    home_final_tag:   "Let's work together",
    home_final_title: "Got a project?",
    home_final_sub:   "Fill in the brief and I'll send your proposal within 24h.",
    home_final_btn:   "Start brief",

    footer_tagline: "Cinematic AI productions. Lisbon, Portugal.",
    footer_col1:    "Navigation",
    footer_col2:    "Services",
    footer_col3:    "Contact",
    footer_copy:    "2026 Mateus Oliveira. All rights reserved.",
  }
};

let currentLang = localStorage.getItem('mo_lang') || 'pt';

function t(key) {
  return translations[currentLang][key] || translations['pt'][key] || key;
}

function applyTranslations() {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    el.textContent = t(el.getAttribute('data-i18n'));
  });
  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    el.innerHTML = t(el.getAttribute('data-i18n-html'));
  });
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    el.placeholder = t(el.getAttribute('data-i18n-placeholder'));
  });
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === currentLang);
  });
  document.documentElement.lang = currentLang;
}

function setLang(lang) {
  currentLang = lang;
  localStorage.setItem('mo_lang', lang);
  applyTranslations();
}

document.addEventListener('DOMContentLoaded', () => {
  applyTranslations();
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => setLang(btn.dataset.lang));
  });
});
