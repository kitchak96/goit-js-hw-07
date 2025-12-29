const cats = document.querySelectorAll('.item');
console.log ('Number of categories: ' +cats.length);
cats.forEach(cat => {
    // console.log(cat);
    const title = cat.querySelector('h2');
    console.log('Category: ' +title.innerHTML);
    const number = cat.querySelectorAll('li');
console.log('Elements: ' +number.length);
  });

// const animals = cats[0];
// const title = document.querySelector('h2');
// console.log('Category: ' +title.innerHTML);
// const number = animals.querySelectorAll('li');
// console.log('Elements: ' +number.length);

// const animals = cat[1];
// const title = document.querySelector('h2');
// console.log('Category: ' +title.innerHTML);
// const number = animals.querySelectorAll('li');
// console.log('Elements: ' +number.length);

// const animals = cat[2];
// const title = document.querySelector('h2');
// console.log('Category: ' +title.innerHTML);
// const number = animals.querySelectorAll('li');
// console.log('Elements: ' +number.length);


// const arr = [];
// const catarr = arr.push(cat);
// catarr.forEach(item) {
// return ''


// }
// console.log(arr);