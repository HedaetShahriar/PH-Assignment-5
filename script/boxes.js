let count = 0;
document.getElementById("btn1").addEventListener("click", function() {
    alert("Board updated successfully");
    navIncrement();
    taskDecrement();
    addActivity(fixMobile);
    count++;
    const button = document.getElementById("btn1");
    button.disabled = true;
    button.style.backgroundColor = "rgba(55, 82, 253, 0.2)";
    if(count === 6){
        alert("Congrats!!! You have completed all the tasks");
    }
})
document.getElementById("btn2").addEventListener("click", function() {
    alert("Board updated successfully");
    navIncrement();
    taskDecrement();
    addActivity(darkMode);
    count++;
    const button = document.getElementById("btn2");
    button.disabled = true;
    button.style.backgroundColor = "rgba(55, 82, 253, 0.2)";
    if(count === 6){
        alert("Congrats!!! You have completed all the tasks");
    }
})
document.getElementById("btn3").addEventListener("click", function() {
    alert("Board updated successfully");
    navIncrement();
    taskDecrement();
    addActivity(homePage);
    count++;
    const button = document.getElementById("btn3");
    button.disabled = true;
    button.style.backgroundColor = "rgba(55, 82, 253, 0.2)";
    if(count === 6){
        alert("Congrats!!! You have completed all the tasks");
    }
})
document.getElementById("btn4").addEventListener("click", function() {
    alert("Board updated successfully");
    navIncrement();
    taskDecrement();
    addActivity(addEmoji);
    count++;
    const button = document.getElementById("btn4");
    button.disabled = true;
    button.style.backgroundColor = "rgba(55, 82, 253, 0.2)";
    if(count === 6){
        alert("Congrats!!! You have completed all the tasks");
    }
})
document.getElementById("btn5").addEventListener("click", function() {
    alert("Board updated successfully");
    navIncrement();
    taskDecrement();
    addActivity(openAI);
    count++;
    const button = document.getElementById("btn5");
    button.disabled = true;
    button.style.backgroundColor = "rgba(55, 82, 253, 0.2)";
    if(count === 6){
        alert("Congrats!!! You have completed all the tasks");
    }
})
document.getElementById("btn6").addEventListener("click", function() {
    alert("Board updated successfully");
    navIncrement();
    taskDecrement();
    addActivity(jobSearching);
    count++;
    const button = document.getElementById("btn6");
    button.disabled = true;
    button.style.backgroundColor = "rgba(55, 82, 253, 0.2)";
    if(count === 6){
        alert("Congrats!!! You have completed all the tasks");
    }
})