let day = document.querySelector(".day");
let month = document.querySelector(".month");
let year = document.querySelector(".year");


let currenttime = new Date ();

console.log(currenttime);

let montharray = ["January" , "February" , "March" , "April", "May" , "June" , "July" , "August" , "September" , "October" , "November" , "December"]
day.innerHTML = ( currenttime.getDate() );
month.innerHTML = (montharray[currenttime.getMonth()]);
year.innerHTML = (currenttime.getFullYear())