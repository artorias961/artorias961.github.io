/*
Checklist for verification (airs lin advice):
- Restrict IP address (within the country/state)
- Add a firewall
- Add a framework server language (for JS, PHP is different)
- Don't store password or username in ANY JS file's
- Add server side validation
- Add SQL injection prevention
- (Optional) Add a multi-factor authorization
- Security must require constant updates and monitoring (activity in the server)
- HIDE ALL ERRORS (to prevent hackers to use the errors agains't the website)
- Add rate limiting
- Add login attempts
- (Optional) Create a white list in the server side language
*/

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

    // Checking if the user forget to submit one of the boxes
    if (!name || !password) {
		res.status(400).send('Please fill in all fields.');

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


