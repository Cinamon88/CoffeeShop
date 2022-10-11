import { templates, select } from '../settings.js';

class Products {
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
    
    thisProducts.dom.links = thisProducts.dom.wrapper.querySelectorAll(
      select.containerOf.products
    );
  }
}

export default Products;