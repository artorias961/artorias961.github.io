// Get the mouse cursor current point in pixels (2D)
document.getElementById("cards").onmousemove = e => {
    // For loop to constantly get the updated mouse cursor
    for(const card of document.getElementsByClassName("card")){
        // Calculate the position of the mouse
        const rect = card.getBoundingClientRect(),
        x = e.clientX - rect.left,
        y = e.clientY - rect.top;

        // Now we got the mouse coordinates, set it ready to be used in CSS properties (CSS can call these coordinates)
        card.style.setProperty("--mouse-x", `${x}px`);
        card.style.setProperty("--mouse-y", `${y}px`);
    }
};

