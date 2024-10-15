// js the language 
// js dom - code likhar cheeeje banaana sekhna  var in es5 let in es6
//basics--understanding the error
// var a = 12;
// var b = 13;
//inbuilt features
//inbuilt feature ->  console alert prompt

// console.log("RISHAV")
// console.warn("RISHAV")
// console.error("RISHAV")



//variables AND constant are both containers
//har programming lang mein data se deal karna hota ha
//wo alag parkar ka data ho sakta ha


var discount = 10;
discount = 22;

const discounti = 12;
//so discount remain 12 only


//compilers and interpreters --> js lang computer know 0 and 1 like current flow and curren t by pass
//java -> compiler






//window -. collection of tool browser offer prompt document

// var v = 12;
// // console 
// // alert
// // prompt  not part of js they are part of browser

//************************************************
//DATA TYPES


//[] {} ()-> REFERENCE DATA TYPE
// 12,12.4 , HARSH ,NULL,undefined -> PRIMITIVE

// var a = 12;
// var a = 12.1;
// var a = true;
// var a = [];
// var a = null;
// var a = undefined;
// var a = function(){};


// var a= 12;
// var b = a;
// var arr= [1,2,3,4,5,6];
// var z = arr;




//spread 

// var ar = [1,2,3,4];
// var ba = [...ar];


//conditionals


//if me hamesha true ya false atta ha

//truthy and falsy value 
//falsy value nan 0 "" ' document.all false rest all are truthy



// if(12){


// }



// if(12 > 13){
//     console.log("hey")
// }
// else{
//     console.log("hello")
// }



//loops = repeatition


//for while for-each

// for(var num = 5 ; num < 10 ; num++){
//     console.log("hello")
// }


//while

// var num = 5
// while(num < 10){
//  num ++;
// }



//for each 


//for each loop array pe chalta ha bassss











//functions -> in JS 
//es5 and es6 

// function abcd(){
//     console.log('RISHAV')
//     console.log('AKANKSHA')
//     console.log('RISHAV WEEDS AKANKSHA ')
// }

// abcd();


// function happybirthday(){
//     console.log('happy birthday')
// }

// var dob = 7;
// var todaysdate = 7;
// if ( dob == todaysdate ){
//     happybirthday();
// }



// with parameter and arguments


// function abcd(val){//(val)-> parameter
//   console.log(12+ val)
// }
// abcd(12);//()-> argument




// prep for interview




// function abcd(){
//     //function statement
// }

// var z = function(){
//     //function expression 
// }


// function(){
//     //anonymous function
// }



//fat arrow

// var a  =()=>{}




    //fat arrow one parameter 
    // var g = (a)={}

    // g(12)



// function abcd(){

// }

// var abcd = ()=>{

// }


//*************RETURN*********** */



// function abcd(){
//     return 7 ;
// }
// console.log(abcd());



// var a =()=>{
//     return 12;
// }

// console.log(a())



//undefined is a value
//not define is error
//null is also a value







//arrays

// var users = ["Rishav","Akanksha","Harsh","Raghav"]

// console.log(users[1]);

// var arr = [1,2,3,4,5,6,7];

// //how to loop in array
// arr.forEach(function(elem){
//     console.log(elem);
// })
// //doing something in array
// arr.forEach(function(elem){
//     console.log(elem+1)
// })















//objects

//object to fetch detail of identity 
//k bande ka rara data - object
//{}

//  var obj = {};
//  var obj2 = new Object();

// both methods to mak object


// var obj = {
//     name : "harsh",
//     age: 25,
//     email:"rishav.com",
//     LiveIn:"India"
// };


// console.log(obj.LiveIn)


// //. obj ke andas chale jaunga



















//synchronous and asynchronous 

//synchronous code line by line
//async not line by line ek saath shuru kar diya jata ha jo pehle complete uska answer mil jayega


//THIS CALL APPLY BIND


//this keyword 

// this ki value bbar baar badal sakti ha alag alg condition me 
//saari conditions ko seek jao
// this ko samaj jaoge



//global - window
console.log(this)
//func- window
function abcd(){
    console.log(this)
}
abcd()
//method-obj 
var obj = {
    name :function(){
        console.log(this)
    },age:25,
    email:'rishav6787'
}
obj.name()
//func inside method(es5) - window


var obj2 ={
    sayname : function(){
        console.log(this.age)
        function childfunc(){
            console.log(this)

        }
        childfunc()
    },
    age:25
}
obj2.sayname()
//func inside method(es6)- obj 


var obj3 = {
    sayname : function(){
        const child = () => {
            console.log(this);
        }
        child()
    }
}
obj3.sayname()



//constructor function me this ki value - new oblank object


function add(){
    console.log(this)
}
const ans  = new add();
console.log(ans);



//event listener this value - that element jispar event listener laga ho


document.querySelector("button")
.addEventListener("click",function(){
    console.log(this);
})












//apply call bind


// const obj7 = { name : "harsh"}

// function abcd(){
//     console.log(this)
// }
// abcd.call(obj7);
// abcd.call()  applly is same as it but some change ist value thsi second value array








//PROTOTYPAL INHERITANCE

 //object create and parent constructor function ke protype me kuch add
 //karte ha 




function makehuman(name,age){
    this.name = "name";
    this.age=age;
}
const human1 = new makehuman("harsh",25);

//aisa koi bhi func jisme app this ka upyog kar rahe ho or call karte waqt app new ka upyog kare to new ka matlab waha par ek blank object ho jata ha






//closure //aea koi bhi function jo kisi function ko return kare

function counter(){
    var count = 0;
    return function(){
        count++;
        console.log(count)
    }
}
var fnc = counter();

fnc()



//event listener
