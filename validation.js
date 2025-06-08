// validation.js

// التحقق من تكرار الإيميل في localStorage
function isEmailTaken(email) {
    return localStorage.getItem(email) !== null;
  }
  
  // التحقق من تكرار رقم الهاتف لأي مستخدم
  function isPhoneTaken(phone) {
    for (let key in localStorage) {
      try {
        const user = JSON.parse(localStorage.getItem(key));
        if (user && user.phone === phone) {
          return true;
        }
      } catch (e) {
        // تجاهل الإدخالات غير الصالحة
      }
    }
    return false;
  }
  