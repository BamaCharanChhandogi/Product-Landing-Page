let btn=document.getElementById('bar');
let navbar=document.getElementById('navbar');
let close=document.getElementById('close');
if(btn){
    btn.addEventListener('click',()=>{
        navbar.classList.add('active');
        document.getElementById('close').style.display="block";
    });
}
if(close){
    close.addEventListener('click',()=>{
        navbar.classList.remove('active');
    });
}
//
window.addEventListener('scroll',function(){
    if(window.pageYOffset>=820 && window.pageYOffset <= 3500){
        document.getElementById('product').classList.add('active');
        document.getElementById('home').classList.remove('active');
        document.getElementById('about').classList.remove('active');
    }
    else if(window.pageYOffset>3500){
        document.getElementById('about').classList.add('active');
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
