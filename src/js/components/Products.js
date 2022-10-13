import { templates, select, classNames } from '../settings.js';
import utils from '../utils.js';

class Products {
  constructor(element){
    const thisProducts = this;
    
    thisProducts.render(element);
    thisProducts.renderInHome();
    thisProducts.initWidgets();
  }
    
  renderInHome() {
    const thisProduct = this;

    /* generate HTML based on template */
    const generatedHTML = templates.menuProduct(thisProduct.data);

    /* create element using utils.createElementFromHTML */
    thisProduct.element = utils.createDOMFromHTML(generatedHTML);

    /* find home container */
    const menuContainer = document.querySelector(select.containerOf.home);

    /* add element to menu */
    menuContainer.appendChild(thisProduct.element);
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

  initWidgets(){
    const thisHome = this;

    for(let link of thisHome.dom.links){
      link.addEventListener('click', function(event){
        event.preventDefault();

        const hash = event.target.hash.replace('#', '');
        const currentLink = document.querySelector('.header-nav a[href="#contact"]');
        const currentPageId = document.getElementById(select.containerOf.contact);
        const newPageId = document.getElementById(hash);
        const newLink = document.querySelector(`.header-nav a[href="${event.target.hash}"]`);

        window.location.hash = `#/${hash}`;
        currentLink.classList.remove(classNames.nav.active);
        currentPageId.classList.remove(classNames.nav.active);
        newPageId.classList.add(classNames.pages.active);
        newLink.classList.add(classNames.pages.active);
      });
    }
  }
}

export default Products;