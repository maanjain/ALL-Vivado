// creating logic for it 
(function(){
//select all of it :
const button = document.querySelectorAll('.btn')
let count =0;

//to taget each of them;
button.forEach(function(element , index){
    //statement
    button.addEventListener('click',function(){
        // body
        //condition for buttons
        if (button.ClassList.contains('lower')) {
            // decrease the value of it
            count--;
            
        }
        else if (button.ClassList.contains('upper')) {
            // decrease the value of it
            count++;

        }
        const counter =document.querySelector('#count')
        counter.textContent=count


        // chnange colors
        if (count<0) {
            
            counter.style.color ='red'
        } 
        else if(count>0) {
            counter.style.color ='green'
            
        }
        else{
            counter.style.color ='blue'

        }
    })
})()




})