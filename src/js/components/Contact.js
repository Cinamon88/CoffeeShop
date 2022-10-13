import { templates, select } from '../settings.js';

class Contact {
  constructor(element){
    const thisContact = this;
    
    thisContact.render(element);
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
}

export default Contact;