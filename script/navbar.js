document.getElementById("navButton").addEventListener("click", function() {
    let colors = ["#FF0000", "#00FF00", "#0000FF", "#FFFF00", "#FF00FF", "#00FFFF", "#F4F7FF"];
    let randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.getElementById("body").style.backgroundColor = randomColor;
})
let numberNav = parseInt(document.getElementById("navNumber").innerText);

function navIncrement() {
    numberNav++;
    document.getElementById("navNumber").innerText = numberNav;
}
