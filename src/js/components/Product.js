import { templates, select } from '../settings.js';

class Product {
  constructor(element){
    const thisProducts = this;
    thisProducts.render(element);
  }
  
  render(element){
    const thisProducts = this;
    
    thisProducts.dom = {};
    
    thisProducts.dom.wrapper = element;
    
    const generatedHTML = templates.menuProduct(thisProducts.data);
    
    document.querySelector(select.containerOf.products).innerHTML = generatedHTML;
    document.querySelector(select.containerOf.home).innerHTML = generatedHTML;
    
    thisProducts.dom.links = thisProducts.dom.wrapper.querySelectorAll(
      select.containerOf.products
    );
  }

  
}

export default Product;