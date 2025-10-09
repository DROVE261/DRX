const modal = document.getElementById('modal');
const openBtn = document.getElementById('openTransfer');
const closeBtn = document.getElementById('closeModal');
const form = document.getElementById('transferForm');
const result = document.getElementById('result');

openBtn.addEventListener('click',()=>modal.classList.remove('hidden'));
closeBtn.addEventListener('click',()=>modal.classList.add('hidden'));

form.addEventListener('submit',e=>{
  e.preventDefault();
  const to = document.getElementById('to').value;
  const amount = document.getElementById('amountInput').value;
  result.textContent = `تم التحويل بنجاح إلى ${to} بمبلغ ${amount} ر.س (مظهر فقط)`;
  result.classList.remove('hidden');
  form.reset();
});
