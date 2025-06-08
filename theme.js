// عند تحميل الصفحة، فعّل الوضع الليلي إذا كان محفوظاً
if (localStorage.getItem("theme") === "dark") {
  enableDarkMode();
}

// زر التبديل (يُستدعى من الزر الموجود في كل صفحة)
function toggleDarkMode() {
  const isDark = document.body.classList.toggle("dark-mode");
  localStorage.setItem("theme", isDark ? "dark" : "light");
  applyDarkClasses(isDark);
}

// تفعيل الوضع الليلي تلقائيًا مع العناصر الإضافية
function enableDarkMode() {
  document.body.classList.add("dark-mode");
  applyDarkClasses(true);
}

// تطبيق/إزالة الكلاسات على عناصر إضافية مثل البطاقات أو الكونتينر
function applyDarkClasses(enable) {
  const containers = document.querySelectorAll(".container, .card, .footer, .navbar");
  containers.forEach(el => {
    if (enable) el.classList.add("dark-mode");
    else el.classList.remove("dark-mode");
  });
}
