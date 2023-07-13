const names = ['Tatjana', 'Elena', 'Ruslan', 'Anna'];
const lengthArr = names.map((name) => name.length); // name - обращение к элементу массива
console.log(lengthArr);

const sandwiches =[
    {bread: 'white', topping: 'salami'},
    {bread: 'black', topping: 'cheese'}
]

// map - новый массив, где хлеб будет белым у всех сендвичей
const newSandwiches = sandwiches.map((sandwich) => {
 // return {bread: 'white', topping: sandwich.topping}
    return {...sandwich, bread: 'white'};
})
console.log(sandwiches);
console.log(newSandwiches);

// если захочу изменить в исходный массив sandwiches
// и добавить в каждый объект новое свойство со значением
// dressing
//forEach
sandwiches.forEach((sandwich) => {sandwich.dressing = 'ketchup'});
console.log(sandwiches);

// метод reduce
const numbers = [9, 12, 14, 16, 28];
const result = numbers.reduce((acc, number)=> acc + number, 0);
// acc currentElement
// 0    9
// 9    12
// 21   14
// 35   16
// 51   28
// reduce вернет 79

// reduce пример 2
products = [
    { title: "nike air", price: 90 },
    { title: "timberland t-shirt", price: 200 },
    { title: "adiddas", price: 110 }
  ]
  
  const sum = products
    .reduce((acc, product) => acc + product.price, 0);

const sum2 = products
.map((product)=>product.price)
.reduce((acc, price) => acc + price);

console.log(sum);
console.log(sum2);