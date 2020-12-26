const timeForMilkAndCookies = (date) => date.getMonth() === 11 && date.getDate() === 24;

console.log(timeForMilkAndCookies(new Date(3000, 11, 24)));
