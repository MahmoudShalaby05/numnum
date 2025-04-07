const container = document.getElementById("container");
const registerBtn = document.getElementById("register");
const loginBtn = document.getElementById("login");

// Handles register & login button clicks for the sliding effect
registerBtn.addEventListener("click", () => {
    container.classList.add("active");
});

loginBtn.addEventListener("click", () => {
    container.classList.remove("active");
});

// Wait until the DOM is fully loaded
document.addEventListener("DOMContentLoaded", function () {
    const forgotPasswordLink = document.getElementById("forgot-password");
    const loginForm = document.querySelector(".login");
    const resetPasswordForm = document.getElementById("reset-password");
    const backToLoginBtn = document.getElementById("back-to-login"); // New button to go back

    // Show Reset Password Form
    forgotPasswordLink.addEventListener("click", function (event) {
        event.preventDefault(); // Prevent default link behavior
        loginForm.style.display = "none"; // Hide login form
        resetPasswordForm.style.display = "block"; // Show reset password form
    });

    // Show Login Form Again
    loginBtn.addEventListener("click", function () {
        resetPasswordForm.style.display = "none"; // Hide reset password form
        loginForm.style.display = "block"; // Show login form
    });

    // Optional: Add a back button inside the reset password form
    if (backToLoginBtn) {
        backToLoginBtn.addEventListener("click", function () {
            resetPasswordForm.style.display = "none"; // Hide reset form
            loginForm.style.display = "block"; // Show login form
        });
    }
});
