//how datas are saved into memory and access - based on this datat types are seperated into two types
//Primitive :
    // 7 types : call by value (copy creation )
    // string , Number, Boolean , null, undefined(no value decleared to a variable) , symbol , BigInt 

// Non - Primitive (Reference type) -- > gives return type of obvject

    //Array , Objects, Functions 

//JavaScript is dynamically type language 
//eg const score = false
//const score = 1000
//const scoreValue = 1003.33
//const outsideTemp = null;
//hence we do not have to give dataype explicitely 


const id = Symbol('123');
const anotherId = Symbol('123');
console.log(id == anotherId);

const heros = ["spiderman", "superman" ,"doga"];
let myObj = {
    name:"bishal",
    age:22,
}
const myFunction = function (){
    console.log("Hello world");
}
console.log(typeof(myFunction))
console.log(typeof myObj);
console.log(typeof heros);

