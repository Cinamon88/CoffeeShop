/* eslint-disable no-undef */
import { settings, select, classNames } from './settings.js';
import Products from './components/Product.js';
import Home from './components/Home.js';
import Contact from './components/Contact.js';

const app = {
  initPages: function() {
    const thisApp = this;
    thisApp.pages = document.querySelector(select.containerOf.pages).children;
    thisApp.navLinks = document.querySelectorAll(select.navLinks);

    for(let clickedElement of thisApp.navLinks){
      clickedElement.addEventListener('click', function(event){
        event.preventDefault();
        thisApp.clickId = clickedElement.getAttribute('href').replace('#','');
        const find = document.querySelector('#' + thisApp.clickId);

        thisApp.products = document.querySelector('#products');
        thisApp.home = document.querySelector('#home, #products');
        thisApp.contact = document.querySelector('#contact');

        if
        (thisApp.clickId === 'home'){
          thisApp.products.classList.add(classNames.active);
          thisApp.home.classList.add(classNames.active);
          thisApp.contact.classList.remove(classNames.active);

        } else if
        (thisApp.clickId == 'products'){
          find.classList.add(classNames.active);
          thisApp.home.classList.remove(classNames.active);
          thisApp.contact.classList.remove(classNames.active);

        } else if
        (thisApp.clickId == 'contact'){
          find.classList.add(classNames.active);
          thisApp.home.classList.remove(classNames.active);
          thisApp.products.classList.remove(classNames.active);
        }
        
      });
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

  initProduct: function(){
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
    thisApp.initProduct();
    thisApp.initContact();
    thisApp.initHome();
    
    
  }
};


app.init();