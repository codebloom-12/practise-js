let seconds = 0;
let timer = null;

const display = document.getElementById("display");
const playBtn = document.getElementById("playBtn");
const pauseBtn = document.getElementById("pauseBtn");
const resetBtn = document.getElementById("resetBtn");

//Time Display Function
function updateDisplay() {
    let hours = Math.floor(seconds / 3600);
    let minutes = Math.floor((seconds % 3600)/ 60);
    let secs = seconds % 60;
display.textContent =
   String(hours).padStart(2, "0") + ":" +
   String(minutes).padStart(2, "0") + ":" +
   String(secs).padStart(2, "0");
}

//playbutton
playBtn.addEventListener("click", function(){
    if(timer === null){
        timer = setInterval(function() {

        seconds++;
        updateDisplay();
    }, 1000);

   }
});
//pause button
pauseBtn.addEventListener("click", function(){
    clearInterval(timer);
    timer = null;
})
//reset button
resetBtn.addEventListener("click", function(){   
    clearInterval(timer);
    timer = null;
    seconds = 0;
    updateDisplay();
});


//initialDisplay
updateDisplay();
