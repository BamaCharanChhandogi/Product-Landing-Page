let btn=document.getElementsByClassName('toggle-btn');
document.addEventListener('click',function(){
    let navbar=document.getElementById('navbar');
    navbar.classList.toggle('active');
});
//
window.addEventListener('scroll',function(){
    if(window.pageYOffset>=820 && window.pageYOffset <= 1700){
        document.getElementById('product').classList.add('active');
        document.getElementById('home').classList.remove('active');
        document.getElementById('contact').classList.remove('active');
    }
    else if(window.pageYOffset>1700){
        document.getElementById('contact').classList.add('active');
        document.getElementById('product').classList.remove('active');
        document.getElementById('home').classList.remove('active');
    }
    else{
        document.getElementById('product').classList.remove('active');
        document.getElementById('home').classList.remove('active');
        document.getElementById('home').classList.add('active');
    }
});

// button working
let value=document.getElementById('value');
let count=0;
let button=document.querySelectorAll('.btnShop');
button.forEach(btnShop =>{
    btnShop.addEventListener('click',function(){
        count=count+1; 
        btnShop.setAttribute('style','color:green;');
    });
});
//update on shopping page
