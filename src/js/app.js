/* eslint-disable no-undef */
import { settings, select, classNames } from './settings.js';
import Products from './components/Product.js';
import Home from './components/Home.js';
import Contact from './components/Contact.js';

const app = {
  initPages: function() {
    const thisApp = this;
    thisApp.pages = document.querySelector(select.containerOf.pages).children;
    thisApp.navLinks = document.querySelectorAll(select.nav.links);

    for(let link of thisApp.navLinks){
      link.addEventListener('click', function(event){
        event.preventDefault();
        const clickedElement = this;
        const id = clickedElement.getAttribute('href').replace('#', '');

        thisApp.activePage(id);
        
      });
    }
  },

  activePage: function(id) {
    for(const page of document.querySelectorAll(select.containerOf.pages)){
      page.classList.remove(classNames.active);
    }
    document.querySelector('#' + id).classList.add(classNames.active);
    window.location.hash = `#/${id}`;
  },

  initData: function() {
    const thisApp = this;
    thisApp.data = {};
    const url = settings.db.url + '/' + settings.db.products;
    
    fetch(url)
      .then((rawResponse) => {
        return rawResponse.json();
      })
      .then((parsedResponse) => {
        thisApp.data.products = parsedResponse;
      });
  },

  initProduct: function(){
    const thisApp = this;
    const productsSub = document.querySelector(select.templateOf.menuProduct);
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
    thisApp.initData();
    thisApp.initProduct();
    thisApp.initContact();
    thisApp.initHome();
    thisApp.initPages();
    
    
  }
};


app.init();