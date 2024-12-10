let string ="";
let button =document.querySelectorAll(".operator");
Array.from(button).forEach((buttons)=>{
    buttons.addEventListener("click" , (e) =>{
        if(e.target.innerText == "="){
            string = eval(string)
            inputVarialbe=document.querySelector("input").value = string;
        }
        else if(e.target.innerText == "AC"){
            string= "";
            inputVarialbe=document.querySelector("input").value = string;
        }
        else if(e.target.innerText == "Del"){
            string = string.slice(0,-1) ;
            inputVarialbe=document.querySelector("input").value = string
        }
        else{ 
        console.log(e.target);
        string += e.target.innerText;
        inputVarialbe=document.querySelector("input").value = string;
        }
    })
})

