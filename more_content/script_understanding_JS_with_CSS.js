// Fetching the information from the element/class/id
const root = document.querySelector(':root');

// Getting the information from the root
const rootStyles = getComputedStyle(root);
const someColor = rootStyles.getPropertyValue('--bg-color')

// Printing the information
console.log('Some Color from the CSS file: ', someColor)


// Change the value of the someColor (change "--bg-color" to "green")
root.style.setProperty('--bg-color', 'green')

// The code works just input this to the HTML file:
// <script type="text/javascript" src="script_understanding_JS_with_CSS.js"></script>