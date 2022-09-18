var hamburger = document.querySelector(".burger");
var navlist = document.querySelector(".nav-list");
var links = document.querySelector(".nav-list li");

hamburger.addEventListener("click",function(){
    this.classList.toggle("click");
    navlist.classList.toggle("open");
});
console.log( "this.classList.toggle");