let x=document.getElementById('input');
let btns=document.querySelectorAll('button');

let string="";
let array=Array.from(btns);


array.forEach(button => {
    button.addEventListener('click' , (e) => {
        if(e.target.innerHTML=='='){
            try{
            string=eval(string);
            x.value=string; 
        } catch(error){
           x.value="Syntax Error";
        }
        }
        else if(e.target.innerHTML=='AC' || e.target.innerHTML=='C'){
            
            if(e.target.innerHTML=='AC'){
            string="";
            x.value=string;
            }
            else{
                string=string.substring(0,string.length-1);
                x.value=string;
            }
        }
        else{
            string+=e.target.innerHTML;
            x.value=string;
        }
        
    })
})

