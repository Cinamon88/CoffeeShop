import { templates, select } from '../settings.js';

const productData = {
  products: [
    { 
      name1: 'LA LAGARTIJA',
      price: '36',
      newPrice: '',
      description1: 'Mysterious and treachorous... The best choice for the start of your journey! It will procide you a rich delicious flavor.',
      images1: 'coffee-1.png',
      numberOne: 'badge.png',
      roasting1: '5/10',
      intensity1: '6/10'
    },
    {
      name2: 'EL TIGRE',
      description2: 'Really dark coffee, only for the real gourments. It has bitter flavor of grapefruits and is mixed with a little bit of peanuts with caramel.',
      images2: 'coffee-2.png',
      roasting2: '8/10',
      intensity2: '9/10'
    },
    {
      name3: 'LA CUCARACHA',
      description3: 'Sweet and intense with a bif amount of different flavors. Caramel, grapes, strwaberry, you name it! It\'s great choice for warm summer days.',
      images3: 'coffee-3.png',
      roasting3: '3/10',
      intensity3: '7/10'
    }
  ],
}; 

class Product {
  constructor(element){
    const thisProducts = this;
    thisProducts.data = productData;

    thisProducts.render(element);
  }
  
  render(element){
    const thisProducts = this;
    
    thisProducts.dom = {};
    
    thisProducts.dom.wrapper = element;
    
    const generatedHTML = templates.menuProduct(thisProducts.data);
    
    document.querySelector(select.containerOf.products).innerHTML = generatedHTML;
    document.querySelector(select.containerOf.home).innerHTML = generatedHTML;
  }
}


export default Product;