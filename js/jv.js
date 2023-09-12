 nav=document.querySelector('#right-nav').querySelectorAll('a');
 console.log(nav);
nav.forEach(element => {
    element.addEventListener('click',function (){
        document.querySelector(".active").classList.remove("active");
        this.classList.add("active");
    });
});