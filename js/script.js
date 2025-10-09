// شاشة كلمة السر
const passwordScreen = document.getElementById('passwordScreen');
const homeScreen = document.getElementById('homeScreen');
const transferScreen = document.getElementById('transferScreen');
const loginBtn = document.getElementById('loginBtn');
const passwordInput = document.getElementById('passwordInput');
const loginMsg = document.getElementById('loginMsg');

loginBtn.addEventListener('click', ()=>{
  if(passwordInput.value === '1201200780'){
    passwordScreen.classList.add('hidden');
    homeScreen.classList.remove('hidden');
  } else {
    loginMsg.classList.remove('hidden');
  }
});

// القائمة الثلاث نقاط
const menuBtn = document.getElementById('menuBtn');
const menu = document.getElementById('menu');
menuBtn.addEventListener('click', ()=> menu.classList.toggle('hidden'));

// الانتقال إلى التحويل
const transferBtn = document.getElementById('transferBtn');
transferBtn.addEventListener('click', ()=>{
  homeScreen.classList.add('hidden');
  transferScreen.classList.remove('hidden');
  menu.classList.add('hidden');
});

// نموذج التحويل
const form = document.getElementById('transferForm');
const result = document.getElementById('result');
form.addEventListener('submit', e=>{
  e.preventDefault();
  const to = document.getElementById('to').value;
  const amount = document.getElementById('amountInput').value;
  const currency = document.getElementById('currency').value;
  result.textContent = `تم التحويل بنجاح: ${amount} ${currency} إلى ${to} (تجريبي)`;
  result.classList.remove('hidden');
  form.reset();
});
