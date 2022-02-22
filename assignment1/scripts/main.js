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
        //console.log('ptd display not defined')
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


/*
function updateDateTime_helper(date_or_time){
    if(date_or_time == 'date'){
        p_td_display.textContent = getCurrentDate();
        localStorage.setItem("td_selection", "date");
    } else if (date_or_time == 'time'){
        p_td_display.textContent = getCurrentTime();
        localStorage.setItem("td_selection", "time");
    }
}*/

//following function & calls set a time/date selector on right corner of the page 
var glob_timer;
const monthNames = ["January", "February", "March", "April", "May", "June","July", "August", "September", "October", "November", "December"];
const weekdayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const radios=document.querySelectorAll('input[name="time-date-btn"]'); 
const timer_section = document.querySelector('.theme-date-time-section');

for(let rad of radios){
    //console.log("into rads")
    rad.addEventListener('change', displayTimeDate);
}
displayTimeDate_helper();

function displayTimeDate(event){
    //console.log(event)
    clearInterval(glob_timer);
    if (event != undefined){
        if (event.target.value === "time"){
            console.log('time selected');
            
            localStorage.setItem("td_selection", "time");
            updateDateTime('time');
            glob_timer = setInterval("updateDateTime('time')", 1000);  // display the current Time and update every 1s 

        } else if (event.target.value === "date"){
            console.log('date selected')
            
            localStorage.setItem("td_selection", "date");
            updateDateTime('date');
            glob_timer = setInterval("updateDateTime('date')", 1000); // display the current Date and update every 1s 
        } else {
            p_time.textContent = "Select to display the date and time";
        }
    }
}
//following function is a helper function to read local storage and 
//select the user's preference of time & date selection
function displayTimeDate_helper(){
    if (localStorage.getItem("td_selection") == "date"){
        const date_btn = document.querySelector('#date');
        date_btn.setAttribute("checked", "checked");
        updateDateTime('date');
        glob_timer = setInterval("updateDateTime('date')", 1000);
    }else if (localStorage.getItem("td_selection") == "time"){
        const time_btn = document.querySelector('#time');
        time_btn.setAttribute("checked", "checked");
        updateDateTime('time');
        glob_timer = setInterval("updateDateTime('time')", 1000);
    }
}


//
// following for change theme & store local theme preference 
function changeThemeBtn_helper(){
    if (localStorage.getItem("themeBtnText") != undefined){
        console.log('local is defined as ', localStorage.getItem("themeBtnText"))
        if (localStorage.getItem("themeBtnText") === 'Change to Dark Mode'){
            body.classList.remove("body-dark-mode");
            main.classList.remove("main-dark-mode");
            btn.classList.remove("theme-switch-button-dark")
        } else{
            btn.innerText = localStorage.getItem("themeBtnText");
            btn.classList.add("theme-switch-button-dark");
            body.classList.add("body-dark-mode");
            main.classList.add("main-dark-mode");
        }
    }else{
        console.log('local NOT defined')
        btn.innerText = "Change to Dark Mode";
        body.classList.remove("body-dark-mode");
        main.classList.remove("main-dark-mode");
        btn.classList.remove("theme-switch-button-dark")

    }
}
function changeThemeBtn(event){
    if (btn.textContent === "Change to Dark Mode") {
        btn.textContent = "Change to Light Mode";
        localStorage.setItem("themeBtnText", "Change to Light Mode");
        btn.classList.add("theme-switch-button-dark");
        body.classList.add("body-dark-mode");
        main.classList.add("main-dark-mode");

    } else {
        btn.textContent = "Change to Dark Mode";
        localStorage.setItem("themeBtnText", "Change to Dark Mode");
        btn.classList.remove("theme-switch-button-dark")
        body.classList.remove("body-dark-mode");
        main.classList.remove("main-dark-mode");
    }
}

const btn=document.querySelector(".theme-switch-button")
const body=document.querySelector("body");
const main=document.querySelector("main");
btn.addEventListener("click", changeThemeBtn);
changeThemeBtn_helper();