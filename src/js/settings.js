export const settings = {
  db: {
    url: '//' + window.location.hostname + (window.location.hostname=='localhost' ? ':3131' : ''),
    products: 'products',
  },
};

export const select = {
  templateOf: {
    contact: '#template-contact-page',
  },

  containerOf: {
    contact: '#contact-wrapper',
  }
};

export const templates = {
  contatc: Handlebars.compile(document.querySelector(select.templateOf.contact).innerHTML),
};