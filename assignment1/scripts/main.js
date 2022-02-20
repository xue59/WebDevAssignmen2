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

function getCurrentDate(){
    let date = new Date();
    let weekday = weekdayNames[date.getDay()].slice(0,3);
    let month = monthNames[date.getMonth()].slice(0,3);
    let monthdate = date.getDate()<10? `0${date.getDate()}` : date.getDate(); 
    let year = date.getFullYear();

    let final_date = `${weekday} ${month} ${monthdate} ${year}`; 

    return final_date;
}

function updateDateTime(date_or_time){
    //console.log("in to date time")
    const p_td_display = document.querySelector('#td_display');
    if (p_td_display == undefined){
        let p_td_display=document.createElement('p');
        p_td_display.setAttribute('id','td_display')
        if(date_or_time == 'date'){
            p_td_display.textContent = getCurrentDate();
        } else if (date_or_time == 'time'){
            p_td_display.textContent = getCurrentTime();
        }
        timer_section.appendChild(p_td_display);
    }else{
        if(date_or_time == 'date'){
            p_td_display.textContent = getCurrentDate();
        } else if (date_or_time == 'time'){
            p_td_display.textContent = getCurrentTime();
        }
    }
}


var glob_timer;
const monthNames = ["January", "February", "March", "April", "May", "June","July", "August", "September", "October", "November", "December"];
const weekdayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const radios=document.querySelectorAll('input[name="time-date-btn"]'); 
const timer_section = document.querySelector('.date-time-section');

for(let rad of radios){
    rad.addEventListener('change', displayTimeDate);
}

function displayTimeDate(event){
    //console.log(event)
    clearInterval(glob_timer);
    if (event != undefined){
        if (event.target.value === "time"){
            updateDateTime('time');
            glob_timer = setInterval("updateDateTime('time')", 1000);  // display the current Time and update every 1s 

        } else if (event.target.value === "date"){
            updateDateTime('date');
            glob_timer = setInterval("updateDateTime('date')", 1000); // display the current Date and update every 1s 
        } else {
            p_time.textContent = "Select to display the date and time";
        }
    }
}







