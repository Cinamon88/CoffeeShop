export const select = {
  templateOf: {
    menuProduct: '#template-products-page',
    aboutPage: '#template-about-page',
    contactPage: '#template-contact-page',
  },
  containerOf: {
    home: '#home-wrapper',
    products: '#products-wrapper',
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

export const settings = {
  db: {
    url: '//' + window.location.hostname + (window.location.hostname=='localhost' ? ':3131' : ''),
    products: 'products',
  },
};


export const templates = {
  menuProduct: Handlebars.compile(document.querySelector(select.templateOf.menuProduct).innerHTML),
  aboutPage: Handlebars.compile(document.querySelector(select.templateOf.aboutPage).innerHTML),
  contactPage: Handlebars.compile(document.querySelector(select.templateOf.contactPage).innerHTML),
};