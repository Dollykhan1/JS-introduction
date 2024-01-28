var fruits =['apple','orange','banana','mango','pineapple'];
console.log(fruits[3]);
fruits[2]='jambura';
console.log(fruits);
var tourist=['new york','ronkonkoma','long island'];
tourist.push('jamaica');
tourist.push('queens');
tourist.push('rode island');
var new_tourist =tourist.slice(0,5);
console.log(new_tourist);
var books=['jyoti', 'bala obala','java'];
var chack=books.includes('javaseript');
console.log(chack);
var chack_array=Array.isArray(fruits);
var chack_array1=Array.isArray(chack_array);
var num="book2";
var chack_array2=Array.isArray(num);
sconsole.log(chack_array2);

var addtwo_array=fruits.concat(books);

console.log(fruits);
console.log(books);
console.log(addtwo_array);



