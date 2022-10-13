export const select = {
  templateOf: {
    homePage: '#template-home-page',
    menuProduct: '#template-products-page',
    contactPage: '#template-contact-page',
  },
  
  containerOf: {
    homeId: 'home',
    home: '.home-wrapper',
    products: '#product-list',
    contact: '.contact-wrapper',
    pages: '#pages',
    startingPages: '.products, .home'
  },

  nav: {
    links: '.header-nav a',
  },

  hidden: 'hidden'
};

export const classNames = {
  nav: {
    active: 'active',
  },
  pages: {
    active: 'active',
  },
};

export const settings = {
  db: {
    url: '//' + window.location.hostname + (window.location.hostname=='localhost' ? ':3131' : ''),
    products: 'products',
  },
};


export const templates = {
  homePage: Handlebars.compile(document.querySelector(select.templateOf.homePage).innerHTML),
  menuProduct: Handlebars.compile(document.querySelector(select.templateOf.menuProduct).innerHTML),
  contactPage: Handlebars.compile(document.querySelector(select.templateOf.contactPage).innerHTML),
};