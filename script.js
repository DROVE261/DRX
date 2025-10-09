document.getElementById("google-login").onclick = () => {
  document.getElementById("login-screen").classList.add("hidden");
  document.getElementById("main-content").classList.remove("hidden");
};

document.getElementById("signup-btn").onclick = () => {
  alert("ميزة إنشاء الحساب قيد التطوير ❤️");
};

function changeLang(lang) {
  if (lang === "tr") document.getElementById("title").textContent = "Kuveyt Türk'e Hoş Geldiniz";
  if (lang === "en") document.getElementById("title").textContent = "Welcome to Kuveyt Türk";
  if (lang === "ar") document.getElementById("title").textContent = "مرحباً بك في Kuveyt Türk";
}
