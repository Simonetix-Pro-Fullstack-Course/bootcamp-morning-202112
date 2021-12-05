// variables // 

// ECMASCRIPT ES5//

// var userData; // camelCase
// var user_data; // underscore

// var userData = 123; //Number
// var userData1 = '123'; //String

// var firstName = 'Omer',
// lastName = 'Yahalom';

// console.log(firstName);
// console.log(lastName);

// console.log(userData + userData1);


// ECMASCRIPT 6 //

// let;
// const;

// let firstName = 'Tal';
// console.log(firstName);

// const userId = 318573383;


// ES5 // 

// function loadData(x,y){
//     alert(x);
//     console.log(y);
// }

// loadData(100, 'Omer the king!!!!');

// function userData(f){
//     fname = prompt('Ename, lname, email, phonenter your name');
//     lname = prompt('Enter your last name');
//     email = prompt('Enter your email');
//     phone = prompt('Enter your phone number');
//     console.log(fname + ' ' + ' ' + lname +  ' ' + ' ' + email + ' ' + phone);

// }

// userData();

// let talExample = prompt('How old are you tal?');
// console.log(talExample);


// Conditions //

// let example1 = 100;
// let example2 = 'Omer';

//  = 
//  == - loose equality
//  === - strict equality
//  !== - not equal (strict)
// != not equal = (loose);

// if(example1 == '100'){
//     console.log('we are equal');
// }else{
// console.log('Nah, we are different');
// }

// if(example1 === '100'){
//     console.log('we are equal');
// }else{
// console.log('Nah, we are different');
// }

// if(example1 !== '100'){
//     console.log('we are equal');
// }else{
// console.log('Nah, we are different');
// }

//switch// // ternary //

// let bankBalance = prompt('Enter your bank balance');


// if(bankBalance >= 100){
//     console.log('You are in a good balance');
// }
// else if(bankBalance < 5000){
//     console.log('Talk to your accountant');
// }

// else if(bankBalance == -1000){
// console.log('Your account have -1000 USD');    
// }else{
//     console.log('Error');
// }

// let bankBalance = prompt('Enter your bank balance');

// if(bankBalance > 5000){
// console.log('1');
// }
// if(bankBalance > 5000){
//     console.log('2');
// }
// if(bankBalance == 0){
//     console.log('3');
// }else{
//     console.log('Else');
// }

// Switch Case //


// let fname = 'Tal';

// switch(fname){
//     case 'Omer':
//         console.log('Fname is not Omer');
//         break;
//     case 'Amit':
//         console.log('First name is not Amit');
//         break;
        
//     case 'Hani':
//         console.log('Tal the king!');
//         break;

//     default:
//         console.log('Tal lo kayam');
//         break;
// }

// Arrays //

// let arr = ['Tal', 'Amit', 'Mikey', 'Alex'];

// console.log(arr);

// arr[2] = 'Hani';

// // Push // 
// arr.push('Omer');
// console.log(arr);

// // pop //
// arr.pop();
// arr.pop();

// unshift() //

// arr.unshift('Omer', 'Tal', 'Mitzi');
// console.log(arr);


// shift // 
// arr.shift();

// let x = arr.shift();
// console.log(x);



// Objects //

// let shoppingSite = {
//     category: 'Underwear',
//     id:100,
//     amountOfProducts:50000,
// } 

// console.log(shoppingSite.amountOfProducts);


// Loop // 

// for() //

// for(var i = 1; i <= 5; i++){
//     console.log(i);
//     alert('Home alone 2022 - coming this year');
// }

// While // 

// let x = 1;

// while(x <= 5){
//  console.log('Your current value is.. ' + x);
//  x++;
// }


// Do while //

// let j = 1;

// do{
//     console.log('Do while test');
//     alert('Do while');
//     j++;
// } while(j <= 5);


// for..in //

// for(variable in array/object){
    
// }

// let nameList = ['AmitKapit', 'HaniBanani', 'GilHaMagil', 'AlexPolska', 'Tultul'];

// for(let nickname in nameList){
//     console.log(nameList[nickname]);
// }

// for(var x = 0; x < nameList.length; x++){
//     console.log(nameList[x]);
// }


// for...of() // 

// let nameList = ['AmitKapit', 'HaniBanani', 'GilHaMagil', 'AlexPolska', 'Tultul'];

// for(let nickname of nameList){
//     console.log(nickname);
// }




// break; continue; //

// break; //

// let nameList = ['AmitKapit', 'HaniBanani', 'GilHaMagil', 'AlexPolska', 'Tultul'];

// let i = 5;

// while(i <=10 ){
//     if(i === 5){
//         console.log('Using the if statement');
//         break;
//     }
//     console.log(i);
//     i++;

    
// }

// break + continue //

// for(var i =0; i < 10; i++){
//     if(i === 3){
//         console.log('Okay buddy! lets continue');
//         continue;
//     }

//     if(i === 5){
//         console.log('Okay buddy! lets break!');
//         break;
//     }
//     console.log(i);
// }



// foreach() // 

let nameList = ['AmitKapit', 'HaniBanani', 'GilHaMagil', 'AlexPolska', 'Tultul'];


// nameList.forEach(function(i){
//     console.log(i);
// })

nameList.forEach(function(names){
    document.write("<h1>" + names + "</h1>");
})


// DOM + BOM //

// Document Object Model // 
// console.log(window);

let h1 = document.getElementsByTagName('h1');
let btn = document.getElementsByTagName('button')[0];
console.log(h1);
function useEffect(){
h1[0].textContent = "Alex <3 JS";
h1[0].style.color = "blue";
h1[0].style.fontSize = "100px";
}
// Brower Object Model // 