
setInterval(()=>{
    const time = document.querySelector("#time");
let date = new Date();
let hours = date.getHours();
let minute = date.getMinutes();
let seconds = date.getSeconds();
let moment = "PM"
if (hours > 12) {
    
    moment = "PM"
    hours = hours - 1
}
if (minute < 10) {
    minute = "0" + minute
}
if(seconds < 10){
    seconds = "0" + seconds
}
time.textContent = hours + ":" + minute +":" + seconds + " " + moment
})