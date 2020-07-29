const menuButton = document.querySelector('.toggle-btn');
const imgGallery = document.querySelector('.image-gallery');
const link1 = document.querySelector('#link1');
const navLinks = document.querySelectorAll('.nav__link');
let navOpened = false

menuButton.addEventListener('click', ()=>{
    if(navOpened){
        closeNav();
    }else{
        openNav();
    }
   
});


navLinks.forEach(link =>{
    link.addEventListener('click', ()=>{
        document.body.classList.remove('nav-open');
    })
})

function changeImage(){
    document.getElementById('bg-img').style.backgroundImage = "url('images/img-2.jpg') no-repeat 50% 50%";
}

function openNav() {
    document.getElementById('image--gallery').style.display = "none";
    document.getElementById('menu--panel').style.width = "100%";
    document.getElementById('menu--panel').style.overflowX = "auto";
    navOpened = true;
  }

function closeNav(){
    document.getElementById('image--gallery').style.display = "grid";
    document.getElementById('menu--panel').style.width = "0";
    document.getElementById('menu--panel').style.overflowX = "hidden";
    navOpened = false;
}