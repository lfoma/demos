module.exports = {
  
  init: function() {
    localStorage.clear();
    localStorage.setItem('product', JSON.stringify([
      {
        id: '0011001',
        name: 'Duff beer',
        image: 'duff.png',
        description: 'Duff Beer is a brand of beer that originally started as a fictional beverage on the animated series The Simpsons. Since then it has become a real brand of beer in a number of countries without permission or consent from its original creator, Matt Groening, and has resulted in legal battles with varying results. An official version of the beer is sold in three variations near The Simpsons Ride at Universal Studios.',
        variants: [
          {
            sku: '123123',
            type: '40oz Bottle',
            price: 3.99,
            inventory: 1

          },
          {
            sku: '123124',
            type: '6 Pack',
            price: 14.99,
            inventory: 2
          },
          {
            sku: '1231235',
            type: '30 Pack',
            price: 19.99,
            inventory: 3
          },
          {
            sku: '1231235',
            type: '90 Pack',
            price: 58.99,
            inventory: 3
          }
        ]
      }
    ]));
  }

};
