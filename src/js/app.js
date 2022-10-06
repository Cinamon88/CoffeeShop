/* eslint-disable no-undef */
import { settings, select, className, templates} from './settings.js';
import utils from './utils.js';

const app = {
  initData: function() {
    const thisApp = this; 
    thisApp.data = {};

    const url = settings.db.url + '/' + settings.db.products;
    this.data = {};
    fetch(url)
      .then((rawResponse) => {
        return rawResponse.json();
      })
      .then((parsedResponse) => {
        this.data.products = parsedResponse;
        thisApp.initProduct();
      });
  },

  initPage: function(){
    const thisApp = this;
    thisApp.pages = document.querySelector(select.containerOf.pages);
    thisApp.navLinks = document.querySelectorAll(select.nav.links);

    for(let clickedElement of thisApp.navLinks){
      clickedElement.addEventListener('click', function(event){
        event.preventDefault();
        thisApp.clickId = clickedElement.getAttribute('href').replace('#','');
        const find = document.querySelector('#' + thisApp.clickId);
        console.log(thisApp.clickId);
        thisApp.products = document.querySelector('#products');
        thisApp.home = document.querySelector('#home');
        thisApp.contact = document.querySelector('#contact');

        // eslint-disable-next-line no-unused-vars
        for(let pages of thisApp.pages){
          if(thisApp.clickId === 'home'){

            thisApp.products.classList.add(className.active);
            thisApp.home.classList.add(className.active);
            thisApp.contact.classList.remove(className.active);

          }
          if(thisApp.clickId == 'products'){
            find.classList.add(className.active);
            thisApp.home.classList.remove(className.active);
            thisApp.contact.classList.remove(className.active);

          }if(thisApp.clickId == 'contact'){
            find.classList.add(className.active);
            thisApp.home.classList.remove(className.active);
            thisApp.products.classList.remove(className.active);
          }
        }
      });
    }
  },

  initAbout: function(){
    const thisApp = this;
    const generatedHTML = templates.about();
    thisApp.aboutElement = utils.createDOMFromHTML(generatedHTML);
    const aboutContainer = document.querySelector(select.containerOf.home);
    aboutContainer.appendChild(thisApp.aboutElement);
  },

  initProduct: function(){
    const thisApp = this;
    const generatedHTML = templates.product(thisApp.data.products);
    const createDOM = utils.createDOMFromHTML(generatedHTML);
    const container = document.querySelector(select.containerOf.products);
    container.appendChild(createDOM);
  },

  initContact: function(){
    const generatedHTML = templates.contact();
    const createDOM = utils.createDOMFromHTML(generatedHTML);
    const container = document.querySelector(select.containerOf.contact);
    container.appendChild(createDOM);
  },

  init: function() {
    const thisApp = this;
    
    thisApp.initData();
    thisApp.initPage();
    thisApp.initAbout();
    thisApp.initContact();
  },
};


app.init();