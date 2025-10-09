// فتح/غلق القائمة الثلاث نقاط
const menuBtn = document.getElementById('menuBtn');
const menu = document.getElementById('menu');
menuBtn.addEventListener('click', ()=> menu.classList.toggle('hidden'));

// فتح/غلق نافذة التحويل
const modal = document.getElementById('modal');
const openBtn = document.getElementById('openTransfer');
const closeBtn = document.getElementById('closeModal');
const form = document.getElementById('transferForm');
const result = document.getElementById('result');

openBtn.addEventListener('click', ()=> modal.classList.remove('hidden'));
closeBtn.addEventListener('click', ()=> modal.classList.add('hidden'));

// تنفيذ التحويل (مظهر فقط)
form.addEventListener('submit', e=>{
  e.preventDefault();
  const to = document.getElementById('to').value;
  const amount = document.getElementById('amountInput').value;
  const currency = document.getElementById('currency').value;
  result.textContent = `Transfer Successful: ${amount} ${currency} to ${to} (Demo)`;
  result.classList.remove('hidden');
  form.reset();
});
