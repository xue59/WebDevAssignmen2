console.log("refer js success!") 

function getCurrentTime(){
    let time = new Date();
    let hrs=time.getHours();
    let mins=time.getMinutes();
    let secs=time.getSeconds();
    let AMPM = (hrs<12)? 'AM':'PM'; 
    hrs= (hrs<12)? hrs : (hrs-12); 

    hrs = hrs < 10 ? "0" + hrs : hrs;
    mins = mins < 10 ? "0" + mins : mins;
    secs = secs < 10 ? "0" + secs : secs;

    let final_time = `${hrs}:${mins}:${secs} ${AMPM}`;
    return final_time;
}
function updateTime(){
    const p_time = document.querySelector('#time-display');
    p_time.textContent = getCurrentTime();
}

function getCurrentDate(){
    let date = new Date();
    let weekday = weekdayNames[date.getDay()].slice(0,3);
    let month = monthNames[date.getMonth()].slice(0,3);
    let monthdate = date.getDate()<10? `0${date.getDate()}` : date.getDate(); 
    let year = date.getFullYear();

    let final_date = `${weekday} ${month} ${monthdate} ${year}`; 

    return final_date;
}
function updateDate(){
    const p_time = document.querySelector('#time-display');
    p_time.textContent = getCurrentDate();
}



var glob_timer;
const monthNames = ["January", "February", "March", "April", "May", "June","July", "August", "September", "October", "November", "December"];
const weekdayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const p_time = document.querySelector('#time-display');
const radios=document.querySelectorAll('input[name="time-date-btn"]'); 
for(let rad of radios){
    rad.addEventListener('change', displayTimeDate);
}

function displayTimeDate(event){
    //console.log(event)
    clearInterval(glob_timer);
    if (event != undefined){
        if (event.target.value === "time"){
            updateTime();
            glob_timer = setInterval(updateTime, 1000);  // display the current Time and update every 1s 

        } else if (event.target.value === "date"){
            updateDate();
            glob_timer = setInterval(updateDate, 1000); // display the current Date and update every 1s 
        } else {
            p_time.textContent = "Select to display the date and time";
        }
    }
}







