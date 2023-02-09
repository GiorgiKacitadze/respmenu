let burgeri = document.querySelector('.burgeri');
let navbar_link = document.querySelector('.navbar_link');


burgeri.addEventListener('click', menuopen)


function menuopen(){
    navbar_link.classList.toggle('change');
    
}


