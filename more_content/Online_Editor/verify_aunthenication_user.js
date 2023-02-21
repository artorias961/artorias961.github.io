// Assuming these are the correct username and password
const correctUsername = "artorias961";
const correctPassword = "arty";

// Creating an authenticate function
function authenticate() {
    // Get the input elements from the login form
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Check if username and password are correct
    if (username === correctUsername && password === correctPassword) {
        // Redirect to default page
        window.location.href = "default_online_editor_script.html";
    } else {
        alert("Incorrect username or password.");
    }
}

/*
// Get the input elements from the login form
const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");

// Add an event listener to the login button
const loginButton = document.getElementById("login-button");
loginButton.addEventListener("click", function () {
    // Check if the username and password are correct
    if (usernameInput.value === correctUsername && passwordInput.value === correctPassword) {
        // Redirect to the default page
        window.location.href = "default_online_editor_script.html";
    } else {
        // Show an error message if the username and password are incorrect
        alert("Invalid username or password!");
    }
});
*/


