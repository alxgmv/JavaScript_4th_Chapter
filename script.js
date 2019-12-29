let date = new Date ()
let options =  {
  weekday: 'long',
  year: 'numeric',
  month: 'long',
  day: 'numeric'};
let strDate = date.toLocaleDateString('ru-RU', options);
function chas() {
  let c = 'час';
  let hour = parseInt(date.getHours());
  if ( hour > 1 && hour < 5 && hour > 21) {
    c = c + 'а';
  } else if (hour > 4 && hour < 21) {
      c = c +'ов';
  } else {
    c = c + '';
  }
  return c;
}
function minut() {
  let m = 'минут';
  let minutes = parseInt(date.getMinutes());
  if (minutes > 1 && minutes < 5 ||
  	 minutes > 21 && minutes < 25 ||
  	 minutes > 31 && minutes < 35 ||
  	 minutes > 41 && minutes < 45 ||
  	 minutes > 51 && minutes < 55) {
    m = m + 'ы';
  } else if (minutes > 4 && minutes < 21 ||
  	minutes > 24 && minutes < 31 ||
  	minutes > 34 && minutes <41 ||
  	minutes > 44 && minutes < 51 ||
  	minutes > 54) {
      m = m +'';
  } else {
    m = m + 'а';
  }
  return m;
}
function secund() {
  let s = 'секунд';
  let seconds = parseInt(date.getSeconds());
  if (seconds > 1 && seconds < 5 ||
  seconds > 20 && seconds < 25 ||
  seconds > 30 && seconds < 35 ||
  seconds > 40 && seconds < 45 ||
  seconds > 50 && seconds < 55) {
   	 s = s + 'ы';
  } else if (seconds > 4 && seconds < 21 ||
  	seconds > 24 && seconds < 31 ||
  	seconds > 34 && seconds > 41 ||
  	seconds > 44 && seconds < 51 ||
  	seconds > 54) {
    	s = s +'';
  } else {
    s = s + 'а';
  }
  return s;
}
function consCreate() {
	let time = strDate + date.getHours() + ' ' + chas() + ' ' + date.getMinutes() + ' ' + minut() + ' ' + date.getSeconds() + ' ' + secund();
	console.log(time);
}
let myTimer = setInterval (consCreate, 1000);
