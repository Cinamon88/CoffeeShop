/* eslint-disable no-undef */
import { settings, select, } from './settings.js';


const app = {
  initPages: function () {
    const thisApp = this;


    thisApp.pages = document.querySelector(select.containerOf.pages).children;
    thisApp.navLinks = document.querySelectorAll(select.nav.links);
    
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

  init: function(){
    const thisApp = this;
    thisApp.initPages();
    thisApp.initData();
    
  }
};


app.init();