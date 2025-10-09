// Login functionality
const loginScreen = document.getElementById('loginScreen');
const mainPage = document.getElementById('mainPage');
const loginBtn = document.getElementById('loginBtn');
const passwordInput = document.getElementById('passwordInput');
const loginMsg = document.getElementById('loginMsg');

loginBtn.addEventListener('click', ()=>{
  if(passwordInput.value === '1201200780'){
    loginScreen.classList.add('hidden');
    mainPage.classList.remove('hidden');
  } else {
    loginMsg.classList.remove('hidden');
  }
});

// Menu toggle
const menuBtn = document.getElementById('menuBtn');
const menu = document.getElementById('menu');
menuBtn.addEventListener('click', ()=> menu.classList.toggle('hidden'));

// Transfer modal
const modal = document.getElementById('modal');
const openBtn = document.getElementById('openTransfer');
const closeBtn = document.getElementById('closeModal');
const form = document.getElementById('transferForm');
const result = document.getElementById('result');

openBtn.addEventListener('click', ()=> modal.classList.remove('hidden'));
closeBtn.addEventListener('click', ()=> modal.classList.add('hidden'));

// Transfer form
form.addEventListener('submit', e=>{
  e.preventDefault();
  const to = document.getElementById('to').value;
  const amount = document.getElementById('amountInput').value;
  const currency = document.getElementById('currency').value;
  result.textContent = `Transfer Successful: ${amount} ${currency} to ${to} (Demo)`;
  result.classList.remove('hidden');
  form.reset();
});
