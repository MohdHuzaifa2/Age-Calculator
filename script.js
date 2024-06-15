let from = document.querySelector('#from');
let to = document.querySelector('#to');
let calculate = document.querySelector('.calculate');
let share = document.querySelector('.share');
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
let calculated;

let form = document.querySelector('form');

form.onsubmit = (e) => {
  e.preventDefault();
}

const today = new Date();

// Format the date as YYYY-MM-DD
const todayYear = today.getFullYear();
const todayMonth = String(today.getMonth() + 1).padStart(2, '0'); // Months are zero-based
const todayDay = String(today.getDate()).padStart(2, '0');

const formattedDate = `${todayYear}-${todayMonth}-${todayDay}`;

to.value = formattedDate;

calculate.addEventListener('click', calculateAge);
share.addEventListener('click', shareResults);

function calculateAge() {
  if(from.value != '' && to.value != '') {
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

    day.innerText = formatNumber(Math.abs(Math.floor(days)));
    
    tYear.innerText = formatNumber(new Intl.NumberFormat('en-US').format(Math.abs(Math.floor(diff/(1000*60*60*24*365)))));
    tMonth.innerText = formatNumber(new Intl.NumberFormat('en-US').format(Math.abs(Math.floor(diff/(1000*60*60*24*30)))));
    tWeek.innerText = formatNumber(new Intl.NumberFormat('en-US').format(Math.abs(Math.floor(diff/(1000*60*60*24*7)))));
    tDay.innerText = formatNumber(new Intl.NumberFormat('en-US').format(Math.abs(Math.floor(diff/(1000*60*60*24)))));
    tHour.innerText = formatNumber(new Intl.NumberFormat('en-US').format(Math.abs(Math.floor(diff/(1000*60*60)))));
    tMin.innerText = formatNumber(new Intl.NumberFormat('en-US').format(Math.abs(Math.floor(diff/(1000*60)))));
    tSec.innerText = formatNumber(new Intl.NumberFormat('en-US').format(Math.abs(Math.floor(diff/(1000)))));
    
    document.querySelector('.dob').innerText = `For DOB ${from.value}`;

    document.querySelector(".results").scrollIntoView();
    calculated = true;
  }
  else {
    alert("Input is invalid!")
  }
}

function formatNumber(num) {
  if (num < 10) {
    return '0'+num;
  } else {
    return num;
  }
}

function shareResults() {
  let years = year.innerText,
      months = month.innerText,
      weeks = week.innerText,
      days = day.innerText;

  const shareText = `I just used the Age Calculator and found out my age is: \n
    - Years: ${years} \n
    - Months: ${months} \n
    - Weeks: ${weeks} \n
    - Days: ${days} \n
    Try it yourself at: https://mohdhuzaifa2.github.io/Age-Calculator/`;

    // Use the Web Share API if available
    if(calculated) {
      if (navigator.share) {
          navigator.share({
              title: 'Age Calculator Results',
              text: shareText,
              url: 'https://mohdhuzaifa2.github.io/Age-Calculator/'
          }).then(() => {
              console.log('Thanks for sharing!');
          }).catch(console.error);
      } else {
          // Fallback for browsers that don't support the Web Share API
          alert('Your browser does not support the Web Share API. Please copy and share manually:\n' + shareText);
      }
    } else {
      alert('Please calculate your age first!');
      form.scrollIntoView();
    }
}

function reset() {
  form.reset();
  year.innerText = '00';
  month.innerText = '00';
  week.innerText = '00';
  day.innerText = '00';
  tSec.innerText = '00';
  tMin.innerText = '00';
  tHour.innerText = '00';
  tDay.innerText = '00';
  tWeek.innerText = '00';
  tMonth.innerText = '00';
  tYear.innerText = '00';
  document.querySelector('.dob').innerText = 'For DOB YYYY-MM-DD';
  from.value = '';
  to.value = '';
  form.scrollIntoView();
  calculated = false;
}