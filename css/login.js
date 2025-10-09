// عناصر الشاشة
const loginScreen = document.getElementById('login-screen');
const mainContent = document.getElementById('main-content');
const googleLogin = document.getElementById('google-login');
const twitterLogin = document.getElementById('twitter-login');
const appleLogin = document.getElementById('apple-login');
const signupBtn = document.getElementById('signup-btn');

// دالة لتفعيل الدخول
function enterSite() {
  loginScreen.classList.add('hidden');
  mainContent.classList.remove('hidden');
}

// أزرار تسجيل الدخول (تعمل نفس الوظيفة حالياً كمحاكاة)
googleLogin.addEventListener('click', enterSite);
twitterLogin.addEventListener('click', enterSite);
appleLogin.addEventListener('click', enterSite);

// زر إنشاء حساب (يعمل نفس الفكرة مؤقتاً)
signupBtn.addEventListener('click', () => {
  alert('ميزة إنشاء الحساب الحقيقي قيد التطوير 😊');
  enterSite();
});

// زر اختيار اللغة (يغير النص فقط كمثال)
document.querySelectorAll('.language-select button').forEach(btn => {
  btn.addEventListener('click', () => {
    const lang = btn.dataset.lang;
    const title = document.getElementById('title');
    if (lang === 'ar') title.textContent = 'تسجيل الدخول أو إنشاء حساب';
    if (lang === 'tr') title.textContent = 'Giriş Yap veya Hesap Oluştur';
    if (lang === 'en') title.textContent = 'Login or Create Account';
  });
});
