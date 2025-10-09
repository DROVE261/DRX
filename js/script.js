// شاشة الدخول
const loginScreen=document.getElementById('loginScreen');
const homeScreen=document.getElementById('homeScreen');
const loginBtn=document.getElementById('loginBtn');
const passwordInput=document.getElementById('passwordInput');
const loginMsg=document.getElementById('loginMsg');

loginBtn.addEventListener('click',()=>{
  if(passwordInput.value==='1201200780'){
    loginScreen.classList.add('hidden');
    homeScreen.classList.remove('hidden');
  }else{
    loginMsg.classList.remove('hidden');
  }
});

// Hero Slider
let currentSlide=0;
const slides=document.querySelectorAll('.hero-slider .slide');
const nextBtn=document.querySelector('.hero-slider .next');
const prevBtn=document.querySelector('.hero-slider .prev');

function showSlide(index){
  slides.forEach((slide,i)=>slide.classList.remove('active'));
  slides[index].classList.add('active');
}

nextBtn.addEventListener('click',()=>{
  currentSlide=(currentSlide+1)%slides.length;
  showSlide(currentSlide);
});
prevBtn.addEventListener('click',()=>{
  currentSlide=(currentSlide-1+slides.length)%slides.length;
  showSlide(currentSlide);
});

// Auto-slide
setInterval(()=>{
  currentSlide=(currentSlide+1)%slides.length;
  showSlide(currentSlide);
},5000);
