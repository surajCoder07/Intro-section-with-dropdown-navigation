const feature = document.getElementById("feature");
const company= document.getElementById("company");
const  arrowDown= document.querySelectorAll(".arrow-down");
const menuOpen=document.getElementById("menu-icon");
const rightNav =document.getElementById("right-nav");

feature.addEventListener("click",function(){
    feature.classList.toggle("active");
    

    if(this.classList.contains("active")){
    arrowDown[0].setAttribute("src","images/icon-arrow-up.svg");
    }else{
        arrowDown[0].setAttribute("src","images/icon-arrow-down.svg");
    }
})


company.addEventListener("click",function(){
    company.classList.toggle("active");
    if(this.classList.contains("active")){
        arrowDown[1].setAttribute("src","images/icon-arrow-up.svg");
        }else{
            arrowDown[1].setAttribute("src","images/icon-arrow-down.svg");
        }
})
menuOpen.addEventListener("click",function(){
rightNav.classList.toggle("active2");

if(rightNav.classList.contains("active2")){
menuOpen.setAttribute("src","images/icon-close-menu.svg");
}
else{
    menuOpen.setAttribute("src","images/icon-menu.svg");
}
})

// for mouse over drop-down

// feature.addEventListener("mouseover",function(){
//     feature.classList.add("active");
//     arrowDown[0].setAttribute("src","images/icon-arrow-up.svg");

// })
// feature.addEventListener("mouseleave",function(){
//     feature.classList.remove("active");
//     arrowDown[0].setAttribute("src","images/icon-arrow-down.svg");
// })


// company.addEventListener("mouseover",function(){
//     company.classList.add("active");
//     arrowDown[1].setAttribute("src","images/icon-arrow-up.svg");

// })
// company.addEventListener("mouseleave",function(){
//     company.classList.remove("active");
//     arrowDown[1].setAttribute("src","images/icon-arrow-down.svg");
// })