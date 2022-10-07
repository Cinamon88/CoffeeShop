/* eslint-disable no-undef */
import { settings } from './settings.js';


const app = {
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
    thisApp.initData();
  }
};


app.init();