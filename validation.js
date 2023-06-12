// window.addEventListener("load", function () {
//   var form = document.getElementById("registrationForm");
//   form.addEventListener("submit", function (event) {
//     event.preventDefault();
//     validateForm();
//   });

//   function validateForm() {
//     var username = document.getElementById("username").value;
//     var email = document.getElementById("email").value;
//     var password = document.getElementById("password").value;

//     var usernameError = document.getElementById("usernameError");
//     var emailError = document.getElementById("emailError");
//     var passwordError = document.getElementById("passwordError");

//     usernameError.textContent = "";
//     emailError.textContent = "";
//     passwordError.textContent = "";

//     if (username.length < 5) {
//       usernameError.textContent =
//         "Username must be at least 5 characters long.";
//     }

//     // Kiểm tra email hợp lệ bằng regex
//     var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     if (!emailRegex.test(email)) {
//       emailError.textContent = "Invalid email address.";
//     }

//     if (password.length < 8) {
//       passwordError.textContent =
//         "Password must be at least 8 characters long.";
//     }

//     // Kiểm tra các trường dữ liệu đã được nhập đúng không
//     if (
//       usernameError.textContent === "" &&
//       emailError.textContent === "" &&
//       passwordError.textContent === ""
//     ) {
//       // Gửi dữ liệu đăng ký lên server hoặc thực hiện hành động tiếp theo
//       alert("Registration successful!");
//     }
//   }
// });
