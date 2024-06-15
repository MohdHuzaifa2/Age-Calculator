let from = document.querySelector('#from');
let to = document.querySelector('#to');
let calculate = document.querySelector('.calculate');
let year = document.querySelector('.age .year .value');
let month = document.querySelector('.age .month .value');
let week = document.querySelector('.age .week .value');
let day = document.querySelector('.age .day .value');
let tYear = document.querySelector('.total-year .value');
let tMonth = document.querySelector('.total-month .value');
let tWeek = document.querySelector('.total-week .value');
let tDay = document.querySelector('.total-day  .value');
let tHour = document.querySelector('.total-hour .value');
let tMin = document.querySelector('.total-minute .value');
let tSec = document.querySelector('.total-second .value');

let form = document.querySelector('form');

form.onsubmit = (e) => {
  e.preventDefault();
}

calculate.addEventListener('click', calculateAge);

function calculateAge() {
  let fromTime = new Date(from.value).getTime();
  let toTime = new Date(to.value).getTime();
  let diff = Math.abs(toTime - fromTime);
  let days = (diff/(1000*60*60*24));
  
  let years = days / 365;
  
  year.innerText = formatNumber(Math.abs(Math.floor(years)));
  
  days -= (Math.abs(Math.floor(years)) * 365);
  let months = days / 30;
  month.innerText = formatNumber(Math.abs(Math.floor(months)));
  
  days -= (Math.abs(Math.floor(months)))*30;
  
  let weeks = days / 7;
  week.innerText = formatNumber(Math.abs(Math.floor(weeks)));
  
  
  
  days -= (Math.abs(Math.floor(weeks))) * 7;

  day.innerText = formatNumber(Math.abs(Math.floor(days-1)));
  
  tYear.innerText = Math.abs(Math.floor(diff/(1000*60*60*24*365)));
  tMonth.innerText = Math.abs(Math.floor(diff/(1000*60*60*24*30)));
  tWeek.innerText = Math.abs(Math.floor(diff/(1000*60*60*24*7)));
  tDay.innerText = Math.abs(Math.floor(diff/(1000*60*60*24)));
  tHour.innerText = Math.abs(Math.floor(diff/(1000*60*60)));
  tMin.innerText = Math.abs(Math.floor(diff/(1000*60)));
  tSec.innerText = Math.abs(Math.floor(diff/(1000)));
  
  document.querySelector('.dob').innerText = `For DOB ${from.value}`;
}

function formatNumber(num) {
  if (num < 10) {
    return '0'+num;
  } else {
    return num;
  }
}