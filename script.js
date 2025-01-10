let button = document.querySelector(".link");
let box = document.querySelector(".modal");
let close = document.querySelector(".cross");
let over= document.querySelector(".overlay");
let con = document.querySelector(".container");


button.addEventListener('click',()=>{
 
   box.classList.add('active');
   over.classList.add("oa");
    con.style.opacity="50%";

})

close.addEventListener("click",()=>{
    box.classList.remove('active');  
    over.classList.remove("oa");  
    con.style.opacity="100%";     
})

over.addEventListener("click", ()=>{
    box.classList.remove('active');  
    over.classList.remove("oa");
    con.style.opacity="100%";      
})


