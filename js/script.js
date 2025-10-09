// شاشة الدخول
const loginScreen=document.getElementById('login-screen');
const mainContent=document.getElementById('main-content');
document.getElementById('enter-btn').addEventListener('click',()=>{
  loginScreen.style.display='none';
  mainContent.classList.remove('hidden');
});

// Hero Slider
let currentSlide=0;
const slides=document.querySelectorAll('.hero-slider .slide');
const nextBtn=document.querySelector('.hero-slider .next');
const prevBtn=document.querySelector('.hero-slider .prev');

function showSlide(index){
  slides.forEach((slide)=>slide.classList.remove('active'));
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
