(function seedAdmin() {
    const adminEmail = "admin@quizplatform.com";
  
    // تحقق إذا الأدمن موجود
    if (!localStorage.getItem(adminEmail)) {
      const adminData = {
        name: "مدير المنصة",
        email: adminEmail,
        password: "Admin@123",  // ⚠️ تأكد تغييره لاحقًا
        phone: "0799999999",
        role: "admin"
      };
  
      localStorage.setItem(adminEmail, JSON.stringify(adminData));
      console.log("✅ تم إنشاء حساب الأدمن بنجاح");
    } else {
      console.log("ℹ️ حساب الأدمن موجود مسبقًا");
    }
  })();
  