// Hardcoded user credentials
const validUsername = "admin";
const validPassword = "1234";

function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === validUsername && password === validPassword) {
        localStorage.setItem("loggedIn", "true");
        window.location.href = "frontend/home.html";
    } else {
        document.getElementById('error-message').innerText = "Invalid Username or Password!";
    }
}

// Logout function
function logout() {
    localStorage.removeItem("loggedIn");
    window.location.href = "../index.html";
}

// Protect home page
if (window.location.pathname.includes("home.html")) {
    if (!localStorage.getItem("loggedIn")) {
        window.location.href = "index.html";
    }
}

function togglePassword() {
    let passwordField = document.getElementById("password");
    if (passwordField.type === "password") {
        passwordField.type = "text";
    } else {
        passwordField.type = "password";
    }
}
