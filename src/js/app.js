/* eslint-disable no-undef */
import { settings, select, classNames } from './settings.js';
import Products from './components/Products.js';
import Home from './components/Home.js';
import Contact from './components/Contact.js';

const app = {
  initPages: function() {
    const thisApp = this;

    thisApp.pages = document.querySelector(select.containerOf.pages).children;

    thisApp.navLinks = document.querySelectorAll(select.nav.links);

    const idFromHash = window.location.hash.replace('#/', '');

    let pageMatchingHash = thisApp.pages[0].id;

    for (let page of thisApp.pages) {
      if (page.id == idFromHash) {
        pageMatchingHash = page.id;
        break;
      }
    }

    thisApp.activatePage(pageMatchingHash);

    for (let link of thisApp.navLinks) {
      link.addEventListener('click', function (event) {
        const clickedElement = this;
        event.preventDefault();

        // get page id from href attribute
        const id = clickedElement.getAttribute('href').replace('#', '');

        // run thisApp.activatePage with that id
        thisApp.activatePage(id);

        // change URL hash
        window.location.hash = `#/${id}`;
      });
    }
  },  

  activatePage: function (pageId) {
    const thisApp = this;

    // add class 'active' to matching pages, remove from non-matching
    for (let page of thisApp.pages) {
      page.classList.toggle(classNames.pages.active, page.id == pageId);
    }

    // add class 'active' to matching links, remove from non-matching
    for (let link of thisApp.navLinks) {
      link.classList.toggle(
        classNames.nav.active,
        link.getAttribute('href') == `#${pageId}`
      );
    }
  },

  

  initData: function() {
    const thisApp = this;
    thisApp.data = {};
    const url = settings.db.url + '/' + settings.db.products;
    thisApp.data = {};
    fetch(url)
      .then((rawResponse) => {
        return rawResponse.json();
      })
      .then((parsedResponse) => {
        thisApp.data.products = parsedResponse;
        
      });
  },

  initProducts: function(){
    const thisApp = this;
    const productsSub = document.querySelector(select.containerOf.products);
    thisApp.products = new Products(productsSub);
  },

  initHome: function(){
    const thisApp = this;
    const homeSub = document.querySelector(select.containerOf.home);
    thisApp.home = new Home(homeSub);
  },

  initContact: function(){
    const thisApp = this;
    const contactSub = document.querySelector(select.containerOf.contact);
    thisApp.contact = new Contact(contactSub);
  },


  

  init: function(){
    const thisApp = this;
    thisApp.initPages();
    thisApp.initData();
    thisApp.initProducts();
    thisApp.initContact();
    thisApp.initHome();
    
    
  }
};


app.init();