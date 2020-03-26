function sumNumber(num1,num2) { let istrue = num1+num2<100 ? true : false ;return istrue }
///////
function isEqual(num1,num2) { let isequal = (num1 == num2) ? true : false ;return isequal }
///////
function ifOneIsSum(num1,num2,num3) { let istrue =(num1*num2)>num3 ? true : false ; return istrue }
///////
function isEmpty(str) { let isempty = str=="" ? true : false ; return  isempty }
///////
function isEqualZero(num) { let isequalzero = num<=0 ? true : false ; return isequalzero }
///////
function isDevisible(num) { let isdivisible = num % 100 ==0 ? true : false ;return isdivisible }
///////
function isEqualStr(str1, str2) { let isequalstr = str1.length == str2.length ? true : false ;return isequalstr }
///////
function isDevideBy(num1,  num2) { let isdevideby = num1 % num2 == 0 ? true : false ;return isdevideby }
///////
function moodToday(mood) { let reply = arguments.length==0 ? newMood = "neuter" : newMood = mood ; return "Today, I am feeling " + newMood }
//////
function isEvenOrOdd(num) { let reply = num % 2 == 0 ? "even" : "odd" ;return reply } 
//////
function match(str1,str2) { let Match = str1.toUpperCase() == str2.toUpperCase() ? true : false ; return Match }
//////
function getCase(str) { tempStr = str ; let getcase = str == tempStr.toUpperCase() ? "upper" : "lower" ; return getcase }
//////
function swappName(Name, LastName) {  return LastName + Name }
//////
function AlphabetSoup(str){
    let s = str.split('')
    let a = s.sort()
    return a.join('')
  }
/////
function onlyCase(str) {  let onlycase = str =str.toUpperCase() || str.toLowerCase() ? true :false ; return onlycase}
////
function checkEnding(str1,  str2) { return str1.endsWith(str2) }
////
function incrementOrDecrement(num) { let x = num % 2 == 0 ? num++ : num-- ; return x}
/////
function  toString(num1, num2) {let min = num1*1 < num2*1 ? num1 : num2 ;return min }
