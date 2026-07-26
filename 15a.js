import dayjs from 'https://unpkg.com/supersimpledev@8.5.0/dayjs/esm/index.js';

let today=dayjs();
today=today.add(1,"M");
console.log(today);
let yesterday=dayjs();

yesterday=yesterday.subtract(1,"M");
console.log(yesterday);

let dayweek=dayjs();
dayweek=dayweek.format('dddd');
console.log(dayweek)

function isWeekend(date){
    const day =date.format('dddd');
    return day==='Saturday' || day==='Sunday';
}

let date =dayjs();
console.log(date.format('dddd, MMMM D'));
console.log(isWeekend(date));

date = dayjs().add(2, 'day');
console.log(date.format('dddd, MMMM D'));
console.log(isWeekend(date));

date = dayjs().add(4, 'day');
console.log(date.format('dddd, MMMM D'));
console.log(isWeekend(date));

date = dayjs().add(6, 'day');
console.log(date.format('dddd, MMMM D'));
console.log(isWeekend(date));