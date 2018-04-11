const fs = require('fs');

//create array of objs
//read file
  //split by line to get objs
  //for each obj
    //split by comma
    //create obj
      //assign title,id,price,keywords,description,num_reviews,avg_rating,imageUrl to value in array
    //push obj to array of objs

let listings = [];

fs.readFile('./listings.csv', 'utf8', (err, data) => {
  if (err) {
    console.log('error in reading'. err);
  } else {
    const objs = data.split('\r\n');
    for (let i = 0; i < objs.length; i++) {
      let listing = objs[i].split(',');
      let keywordString = listing[3];
      if (keywordString[0] === '"') {
        keywordString = keywordString.slice(1, keywordString.length-1);
      }
      let keywords = keywordString.split(' ');

      let newObj = {
        id: Number(listing[1]),
        imageUrl: listing[7],
        description: listing[4],
        title: listing[0],
        price: Number(listing[2]),
        num_reviews: Number(listing[5]),
        avg_rating: Number(listing[6]),
        keywords: keywords,
      };
      
      listings.push(newObj);
    }

    console.log(listings);
  }


});
