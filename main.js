// main.js

function loadNavbar() {
  fetch("navbar.html")
    .then(res => res.text())
    .then(data => {
      document.getElementById("navbar-placeholder").innerHTML = data;

      const isLoggedIn = sessionStorage.getItem("username") !== null;
      const guestNav = document.querySelector(".nav-guest");
      const userNav = document.querySelector(".nav-user");

      if (guestNav && userNav) {
        guestNav.style.display = isLoggedIn ? "none" : "flex";
        userNav.style.display = isLoggedIn ? "flex" : "none";
      }

      // ✅ عرض اسم المستخدم بعد الإدراج
      const userGreeting = document.getElementById("user-greeting");
      const username = sessionStorage.getItem("username");
      if (userGreeting && username) {
        userGreeting.textContent = `👋 أهلًا ${username}`;
        userGreeting.style.fontWeight = "bold";
      }

      // تفعيل زر تسجيل الخروج
      const logoutBtn = document.querySelector('.nav-user a[onclick]');
      if (logoutBtn) {
        logoutBtn.addEventListener("click", (e) => {
          e.preventDefault();
          sessionStorage.clear();
          window.location.href = "login.html";
        });
      }
    })
    .catch(err => console.error("فشل تحميل navbar.html:", err));
}


// ✅ 2. تحميل الفوتر
function loadFooter() {
  fetch("footer.html")
    .then(res => res.text())
    .then(data => {
      document.getElementById("footer-placeholder").innerHTML = data;
    })
    .catch(err => console.error("فشل تحميل footer.html:", err));
}

// ✅ 3. منع الدخول بدون تسجيل دخول
function checkAuthRedirect() {
  const isLoggedIn = sessionStorage.getItem("username") !== null;
  if (!isLoggedIn) {
    window.location.href = "login.html";
  }
}

// ✅ 4. تنفيذ عند تحميل الصفحة
document.addEventListener("DOMContentLoaded", () => {
  if (document.getElementById("navbar-placeholder")) {
    loadNavbar();
  }
  if (document.getElementById("footer-placeholder")) {
    loadFooter();
  }
});
// عرض اسم المستخدم بعد تسجيل الدخول
const userGreeting = document.getElementById("user-greeting");
const username = sessionStorage.getItem("username");

if (userGreeting && username) {
  userGreeting.textContent = `👋 أهلًا ${username}`;
  userGreeting.style.fontWeight = "bold";
}
