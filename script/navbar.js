document.getElementById("navButton").addEventListener("click", function() {
    const colors = ["#E6F7FF", "#D4EDFF", "#F0F0F0", "#E4E4E4", 
                "#C2E2FF", "#E3FFE6", "#D1F8D6", "#C2F0C5"];
    let randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.getElementById("body").style.backgroundColor = randomColor;
})
let numberNav = parseInt(document.getElementById("navNumber").innerText);

function navIncrement() {
    numberNav++;
    document.getElementById("navNumber").innerText = numberNav;
}