export const settings = {
  db: {
    url: '//' + window.location.hostname + (window.location.hostname=='localhost' ? ':3131' : ''),
    products: 'products',
  },
};

export const select = {
  templateOf: {
    contact: '#template-contact-page',
    about: '#template-about-page',
  },

  containerOf: {
    home: '#home-wrapper',
    contact: '#contact-wrapper',
    pages: '#pages',
  },

  nav: {
    links: '.header-nav a',
  },
};

export const className = {
  active: 'active',
};
  
export const templates = {
  about: Handlebars.compile(document.querySelector(select.templateOf.about).innerHTML),
  contact: Handlebars.compile(document.querySelector(select.templateOf.contact).innerHTML),
};