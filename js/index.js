let menu = document.querySelector('#menu-bars');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('fa-time');
    navbar.classList.toggle('active');
}

function notaMem(){
    window.alert("You must sign in first to unlock this feature");
}