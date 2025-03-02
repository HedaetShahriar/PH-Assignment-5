//Discover button
document.getElementById("btnDiscover").addEventListener("click", function() {
    window.location.href = "./blog.html";
})
//Task number
let numberTask = parseInt(document.getElementById("taskNumber").innerText);
function taskDecrement() {
    numberTask--;
    document.getElementById("taskNumber").innerText = numberTask;
}

//Date
const taskDate= document.getElementById("date");

const date = new Date();
const weekday = date.toLocaleString('default', { weekday: 'short' });
const day = date.getDate();
const month = date.toLocaleString('default', { month: 'short' });
const year = date.getFullYear();

taskDate.innerHTML = `<h1 class="font-medium md:font-normal lg:text-2xl">${weekday}, <br><span class="font-bold text-lg md:text-xl lg:text-2xl">${month} ${day} ${year}</span></h1>`;
