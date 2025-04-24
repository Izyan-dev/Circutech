// Hardcoded user credentials
const validUsername = "admin";
const validPassword = "1234";

// Login function
function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === validUsername && password === validPassword) {
        localStorage.setItem("loggedIn", "true");
        window.location.href = "frontend/home.html"; // Adjust path as needed
    } else {
        document.getElementById('error-message').innerText = "Invalid Username or Password!";
    }
}

// Logout function
function logout() {
    localStorage.removeItem("loggedIn");
    window.location.href = "../index.html"; // Adjust path if needed
}

// Page protection for home.html
if (window.location.pathname.includes("home.html")) {
    if (!localStorage.getItem("loggedIn")) {
        window.location.href = "index.html";
    }
}

// Toggle password visibility
function togglePassword() {
    const passwordField = document.getElementById("password");
    passwordField.type = passwordField.type === "password" ? "text" : "password";
}
