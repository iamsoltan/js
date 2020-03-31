function sumNumber(num) { 
return (num == 0) ?  0 :  num + sumNumber(num-1);
}
console.log(sumNumber(5));
console.log(sumNumber(4));

/******************************************************** */
function reverse(array) { return array.reverse() }
console.log(reverse([1, 2, 3, 4]));
/********************************************************* */

function getLastItem(array) { return array[array.length-1]}
console.log(getLastItem([1, 2, 3, 4]));
console.log(getLastItem(["HTML", "CSS", "javascript"]));

/********************************************************** */
function concat(array1,  array2) { return array1.concat(array2)}
console.log(concat([1, 2, 3, 4],["HTML", "CSS", "javascript"]));
/*********************************************************** */

function search(array,  item) { return array.concat(item)}
console.log(search([1, 2, 3, 4],"HTML"));
/******************************************************** */
function search(array,  item) { return array.indexOf(item)}
console.log(search([1, 2, 3, 4],"HTML"));
console.log(search([1, 2, 3, 4],4));
/******************************************************** */
function myFunction(value, index, array) { return value*2 ;}                           
function getMultipliedArr(array) { return  array.map(myFunction);}
console.log(getMultipliedArr([1, 1, 1]));
/***************************************************************** */
function myFunction(value, index, array) { return value.length ;}                           
function wordLengths(array) { return  array.map(myFunction);}
console.log(wordLengths(["simplon", "Tunis"]));
/*************************************************************** */
function sum(array) { return  array.reduce((x,y) => x+y );}
console.log(sum(["simplon", "Tunis"]));
console.log(sum([25,25,50]));
/************************************************************** */
function noOdds(array) { return array.filter((x) =>  x % 2 ==0 ) }
console.log(noOdds([25,25,50]));
/************************************************************** */
function findLargestNum(array) { return Math.max(...array) };
console.log(findLargestNum([25,25,50]));
/************************************************************** */
function findSmallerNum(array) { return Math.min(...array) };
console.log(findSmallerNum([25,25,50]));
/************************************************************** */
function firstLast(array) { return [array[0],array[array.length-1]] };
console.log(firstLast([25,25,50]));
/************************************************************** */
function diffMaxMin(array) { return Math.max(...array) - Math.min(...array) };
console.log(diffMaxMin([101,25,1]));
/************************************************************** */
function multiplyByLength(array) { return array.map((x)=> x*array.length ) };
console.log(multiplyByLength([101,25,1]));
/************************************************************** */
function negate(array) { return array.map( x => x>0 ? (x*=-1) : x=x )};
console.log(negate([101,25,-1]));
/************************************************************** */
function isFourLetters(array) { return array.filter( x => x.length == 4 )};
console.log(isFourLetters([101,25,-1,"abcd"]));
/************************************************************** */
function addEnding(array,ending) { return array.map( x => x += ending )};
console.log(addEnding(["khlay",25,-1,"hay"],"el"));
/************************************************************** */
function removeNull(array) { return array.filter( x => x !== null )};
console.log(removeNull(["big",25,null,-1,"hay"]));
/************************************************************** */
function unlucky(array) { return array.filter( x => x !== 13 )};
console.log(unlucky(["13",13,null,125,"hay"]));
/************************************************************** */
function transform(array) { return array.map( x => (x % 2 == 0) ? x-=1 : x+=1 )};
console.log(transform([1, 2, 3, 4, 5]));
/************************************************************** */
function filterArray(array) { return array.filter( x => (typeof(x) != "string"))};
console.log(filterArray([1, 2, 3, 4, 5,null, "hhh"]));
/************************************************************** */
function societyName(array) { return (array.map( x => ( x[0]))).sort().join("")};
console.log(societyName(["Saief", "Mouna", "Sirine"]));
/************************************************************** */
function findLargestNums(array) { return  array.map( x => Math.max(...x))  };
console.log(findLargestNums([[9, 2, 3, 1], [20, 70, 40, 90], [4, 2, 3]]));
/************************************************************** */
function shortToLong(array) { return array.sort((a, b) => a.length - b.length) };
console.log(shortToLong(["Google", "Apple", "Microsoft"]));
/************************************************************** */
function toArray(array) { return (array+"").split("") };
console.log(toArray(488));
/************************************************************** */
function toNumber(array) { return array.join("") };
console.log(toNumber([4, 8, 8]));
/************************************************************** */
function spelling(array) { let y = ""; return   (array.split("")).map(  x => y+= x ) };
console.log(spelling("abc"));
/************************************************************** */
function toArray(array) { return Object.entries(array)};
console.log(toArray({ a: 1, b: 2 }));
/************************************************************** */
function getSalaries(array) {let y=null;let array2 = (array.map( (x) => y = y + x.salary)); return array2[array2.length-1]};
console.log(getSalaries( [
    { name: "Amira", age: 21, salary: 23000 },
    { name: "Takwa",  age: 32, salary: 40000 },
    { name: "Manel",  age: 16, salary: 2700 } ] ));
/************************************************************** */
var h= [1, 2, 3];
function numOfSubbarrays(array) { return (array.filter( x => (x.constructor == h.constructor))).length};
console.log(numOfSubbarrays(["chaima", "Soltane", [1, 2, 3], [1, 2, 3], [1, 2, 3], { name: "Manel",  age: 16, salary: 2700 }]));
/************************************************************** */
function NoNamesPlease(array) { return (array.map( x => (x.name) ))};
console.log(NoNamesPlease([{ name: "Ahmed" },{ name: "Achref" },{ name: "Ayoub" }]));
/************************************************************** */
