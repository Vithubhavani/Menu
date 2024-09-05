const all=document.querySelector(".all");
const breakfast=document.querySelector(".Breakfastt");
const lunch=document.querySelector(".Lunchh");
const shakes=document.querySelector(".Shakess");
const dinner=document.querySelector(".Dinnerr");


images=document.querySelectorAll(".menu-item");


all.addEventListener("click",function(){

    images.forEach(image=>{
        image.style.display="block";
    })
})



breakfast.addEventListener("click",function(){
  
    images.forEach(image=>{
        if(image.classList.contains("breakfast")){
            image.style.display="block";
        }
        else{
            image.style.display="none";
        }
    })  
})


lunch.addEventListener("click",function(){

    images.forEach(image=>{
        if(image.classList.contains("lunch")){
            image.style.display="block";
        }
        else{
            image.style.display="none";
        }
    })    
})


shakes.addEventListener("click",function(){
    images.forEach(image=>{
        if(image.classList.contains("shakes")){
     image.style.display="block";
        }
        else{
            image.style.display="none";
        }
    })
})


dinner.addEventListener("click",function(){
    images.forEach(image=>{
        if(image.classList.contains("dinner")){
            image.style.display="block";
        }
        else{
            image.style.display="none";
        }
    })
})