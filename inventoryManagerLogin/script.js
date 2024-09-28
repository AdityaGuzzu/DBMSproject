// Hardcoded credentials (you can replace this with database integration)
const validUsername = "staff";
const validPassword = "12345";

function validateCredentials() {
    
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const loginMessage = document.getElementById("login-message");

    if (username === validUsername && password === validPassword) {
        // Redirect to the management system page on successful login
        window.location.href = "http://127.0.0.1:5500/inventorypage/frontpage.html";
        
    } else {
        loginMessage.textContent = "WRONG";
        loginMessage.style.color = "red";
    }
};



