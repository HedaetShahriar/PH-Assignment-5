//current time
function getTIme(){
    const currentTime= new Date().toLocaleTimeString();
    return currentTime;
}

const activityList = document.getElementById("activity");

function addActivity(title){
    const currentTime= getTIme();
    const div= document.createElement("div");
    div.className= "activity";
    div.innerHTML= `<p>You have completed the Task ${title} at ${currentTime}</p>`;
    activityList.appendChild(div);
}

document.getElementById("btnClear").addEventListener("click", function(){
    activityList.innerHTML= "";
})

