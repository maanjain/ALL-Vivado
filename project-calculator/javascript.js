// main logic
let string="";

// to select all button
let buttons= document.querySelectorAll(`button`);

//click -getting recorded
Array.from(buttons).forEach((buttons)=>{
buttons.addEventListener(`click`,(e)=>{
// for = then evaluate the equation 
if(e.target.innerHTML == '='){
    string=eval(string);
    // line for 
    document.querySelector(`input`).value=string;
}
else if(e.target.innerHTML == 'C'){
    string="";
    // line for 
    document.querySelector(`input`).value=string;
}
else{

    console.log(e.target)
    // save that into string 
    string =string+ e.target.innerHTML;
    // value of intput tag
    document.querySelector(`input`).value=string;
}


})
})

/**
 * make M+
 * M-
 * MC
 *  */