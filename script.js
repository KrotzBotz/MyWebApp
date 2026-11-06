const btn = document.getElementById("helloBtn");
const greeting = document.getElementById("greeting");

// colors the button will go through (idea from the AI assistant)
const colors = ["red", "green", "blue", "orange", "purple"];
let colorIndex = 0;

btn.addEventListener("click", () => {
    greeting.textContent = "Hello, World!";

    // change the button color each time it is clicked
    btn.style.backgroundColor = colors[colorIndex];
    btn.style.color = "white";

    // go to the next color, and start over after the last one
    colorIndex = colorIndex + 1;
    if (colorIndex === colors.length) {
        colorIndex = 0;
    }
});
