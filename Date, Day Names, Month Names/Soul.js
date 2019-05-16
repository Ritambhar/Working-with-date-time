var today = new Date();
var monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
var dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

var month = monthNames[today.getMonth()];
var day = dayNames[today.getDay()];
var date = today.getDate();
date += 'th';

console.log(date, month, day);
