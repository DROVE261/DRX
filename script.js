<script>
// الدخول: إخفاء شاشة الدخول مباشرة وإظهار المحتوى الرئيسي
document.getElementById("google-login").onclick = () => {
  document.getElementById("login-screen").classList.add("hidden");
  document.getElementById("main-content").classList.remove("hidden");
};
document.getElementById("twitter-login").onclick = () => {
  document.getElementById("login-screen").classList.add("hidden");
  document.getElementById("main-content").classList.remove("hidden");
};
document.getElementById("apple-login").onclick = () => {
  document.getElementById("login-screen").classList.add("hidden");
  document.getElementById("main-content").classList.remove("hidden");
};

// إظهار/إخفاء نموذج تسجيل الدخول اليدوي
const manualToggle = document.getElementById("show-login-form");
const manualForm = document.getElementById("manual-login");
manualToggle && manualToggle.addEventListener('click', () => {
  manualForm.style.display = manualForm.style.display === 'none' ? 'block' : 'none';
});

// تسجيل الدخول اليدوي
const manualBtn = document.getElementById("manual-login-btn");
manualBtn && manualBtn.addEventListener('click', () => {
  document.getElementById("login-screen").classList.add("hidden");
  document.getElementById("main-content").classList.remove("hidden");
});

// تغيير اللغة
function changeLang(lang) {
  const title = document.getElementById("title");
  if(lang === "ar") title.textContent = "مرحباً بك في Kuveyt Türk";
  if(lang === "tr") title.textContent = "Kuveyt Türk'e Hoş Geldiniz";
  if(lang === "en") title.textContent = "Welcome to Kuveyt Türk";
}
</script>

<style>
/* للتأكد من أن الكلاس hidden يخفي العنصر */
.hidden {
  display: none !important;
}
</style>
