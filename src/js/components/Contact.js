import { templates, select, classNames } from '../settings.js';

class Contact {
  constructor(element){
    const thisContact = this;
    
    thisContact.render(element);
    thisContact.initWidgets();
  }
    
  render(element){
    const thisContact = this;
    
    thisContact.dom = {};
    
    thisContact.dom.wrapper = element;
    
    const generatedHTML = templates.contactPage(thisContact.data);
    
    document.querySelector(select.containerOf.contact).innerHTML = generatedHTML;
    
    thisContact.dom.links = thisContact.dom.wrapper.querySelectorAll(
      select.containerOf.contact
    );
  }

  initWidgets(){
    const thisHome = this;

    for(let link of thisHome.dom.links){
      link.addEventListener('click', function(event){
        event.preventDefault();

        const hash = event.target.hash.replace('#', '');
        const currentLink = document.querySelector('.header-nav a[href="#products"]');
        const currentPageId = document.getElementById(select.containerOf.products);
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

export default Contact;