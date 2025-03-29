//(1) java script console API
console.clear();
console.log("maan dhirendra jain ", 4 * 6, "another of it ");
// alert("alert!!!");
console.error("error is here ");
console.warn("waring is here ");
document.write("this is writing in page as an ulternative to HTML");
console.assert(4 == 6);

//(2)variables
var no = 23;
var no2 = 32;
var no3 = no + no2;
console.log(no + no2);
console.log(no3);

//(3) data types

//numbers
var num = 23;
//string
var strr = "in double quotes";
var str = 'in single quotes';
//object
var object = {
    maan: 21,
    nagesh: 12,
    sahil: 32
}

console.log(object);
//boolean
var a = true;
var b = false;
//undefine
var und;
var n = null;

// data types
//primitive- undefine , null , bolean , string , number , symbol
//referncing : array , object
var array = [5, 4, 3, "babu", 1, 0]

// operator in java script(+  - * /)
// assignment in java script( , ++, +=)
// comparision in java script( =< , >=, >>)
// logical - && , || , !

//fumction (DRY - do not repeat your self)
function add(a, b) {
    var c = a + b;
    return c;
}

a1 = add(2, 3);
console.log(a1);
console.log("is it ok ");

//conditional operator:
var i = 23;
if (i > 4) {
    console.log("you are bigger")
}
else {
    console.log("i am small ");
}

// for loop
for (var i = 0; i < array.length; i++) {
    console.log('maan jain')
}
// array function to print each term 
array.forEach(function (element) {
    console.log(element)
})


// let is use for higher memory management:
let j = 100;
const ac = 0;

console.log(j);

//methods in array 
array.length
array.pop//last eliment 
array.push//last eliment added up
array.shift// first eliment
array.unshift("add some thing")//return array of new thing
array.sort// sort into string . so firdt digit based
array.toString//convert into string
array.slice;
array.values;

//string method
let my_string = "you are a bad boy bad";
console.log(my_string.length)
console.log(my_string.indexOf("bad"))
console.log(my_string.lastIndexOf("bad"))
my_string.slice(1, 20);
console.log(my_string.replace("you", "your"))//only first one

//dates

let mydate = new Date();
console.log(mydate)
console.log(mydate.getFullYear())
console.log(mydate.getTime())// in seconds
console.log(mydate.getDay())// 0 means sunday


// dom (document object model)manupulation 
//doc.script - js used 
//doc.linkes - collection 
// document.images -all images on site
// document.domain- domain 
// document.removeChild(element)
// .title
// .url
// .forms

document.getElementById("btn").click();//gebi
document.getElementById("btn").style.border = "solid 2px red";
document.getElementById("btn").style.border = "solid 2px red";
let em = document.getElementById('btn');
console.log(em)


let emclass = document.getElementsByClassName('container')
console.log(emclass);
// emclass[0].style.background = "yellow";//change in css

// adding class in in it
emclass[0].classList.add("bg");
emclass[0].classList.add("text");//adding a new css class in it 
console.log(em.innerHTML)
console.log(em.innerText)
//use to print inside an html tag 
console.log(emclass[0].innerText)
console.log(emclass[0].innerHTML)
let tn = document.getElementsByTagName("button")
console.log(tn)
//add child inside a tag 
//create child:
// create=document.createElement('p');//p for paragraph
// create.innerText="hey "
// tn[0].appendChild(create)

// now replace it--*
// create2=document.createElement('b');//b for bold
// create2.innerText="you "
// tn2[0].replace(create2 , create)
console.log(document.getElementsByTagName("div"))


//selecting quary selector - return first element of container tag 
let sel = document.querySelector(".container")
console.log(sel);
let sel2 = document.querySelectorAll(".container")// all tags
console.log(sel2);

//events in js
//click function --*
function click() {
    console.log("the button was clicked")
}
//on loading page give
window.onload = function () {
    console.log("loaded")
}
//event listner 
firstcontainer.addEventListener('click ', function () {
    // change font after clicking it
    document.querySelectorAll('.container')[1].innerHTML = "<b>you have clicked</b>"
    console.log("click hua")
})
//on mouse over
firstcontainer.addEventListener('mouseover', function () {
    console.log("mover over hua")
})
//mouse out
firstcontainer.addEventListener('mouseout', function () {
    console.log("mover out hua")
})

//
// let preHTML = document.querySelector('.container')[1].innerHTML= preHTML
// firstcontainer.addEventListener('mouseup ', function(){
//     // document.querySelectorAll('.container')[1].innerHTML=preHTML;
//     console.log("up hua")
// })
// firstcontainer.addEventListener('mousedown', function(){
//     // document.querySelectorAll('.container')[1].innerHTML="<b>you have clicked</b>"
//     console.log("dowm hua")
// })

//arrow function
function sum() {
    return 5;
}
sum = (a, b) => {
    return a - b;
}


//set timeout  function and set interval - done after FEW durations
// clr =setTimeout(into , 5000)
// clr2=setInterval(out,2000)

//use clrinterval(clr)/cleartimout(clr) to cancel it 

//local storage - to store local things on it 
localStorage.setItem('name', 'maan')
localStorage.getItem('name')

//json - convert object into string
var obj = { name: 'harry', length: 1 }
js = JSON.stringify(obj);
console.log(js);
parsed = JSON.parse(`{"name":"harry","length":12,"a":{"this":"that"}}`)
console.log(parsed);


//templets : using differnt versions
aone = 23;
console.log(`this is ${aone} `)
console.log(" ")
//string function
//(function of it - indexof , replace , concat ,lastindex of , trim , slice , substr , LOWERletter , UPPERletter,  )
//index of fumction..add space as one
//first
var posi = str.indexOf("r");
console.log(posi);

//last
posi = str.lastIndexOf("r")
console.log(posi);

//slicing from string
var subs = str.slice(1, 9);
console.log(subs);

//substring - no negative value
var subs1 = str.substr(1, 4);
console.log(subs1);

//replace - change (staring to maan )
var replace = str.replace('string', 'maan');
console.log(str);
console.log(replace);

//upper case
console.log(replace.toLocaleUpperCase());

//lower case 
console.log(replace.toLocaleLowerCase());

//contact
var newstr = str.concat(" new        ");
console.log(newstr);

//trim-white spaces- starring and end 
console.log(newstr.trim());

//return char at index - char code too 
var char5 = str.charAt(5);
console.log(char5);

//let -to overwrite string
let aa = 'a';
{
    let aa = b;
    console.log(aa);

}
console.log(aa);





/*
using
1)inner html;
2)document.getElementsByTagName("").style.fontsize;
.visiblity=hidden 
and none
{return a collection of it in an array formate and }
3)
*/

