// الدخول
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

// تغيير اللغة
function changeLang(lang) {
  const title = document.getElementById("title");
  if(lang==="ar") title.textContent="مرحباً بك في Kuveyt Türk";
  if(lang==="tr") title.textContent="Kuveyt Türk'e Hoş Geldiniz";
  if(lang==="en") title.textContent="Welcome to Kuveyt Türk";
}
