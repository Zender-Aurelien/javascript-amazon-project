import formatCurrency from "../../scripts/utils/money.js";

console.log('test_suite: formatCurrency');

console.log('convert cents into dollars');
if(formatCurrency(2095) ==='20.95'){
    console.log('passed');
}else{
    console.log('failed');
}
console.log('converts 0 into dollar format');
if(formatCurrency(0)==='0.00'){
    console.log('passed');
}else{
    console.log('failed');
}


console.log('rounds up');
if(formatCurrency(2000.5)==='20.01'){
    console.log('passed');
}else{
    console.log('fail');
}
console.log('rounds down');
if(formatCurrency(2000.4)==='20.00'){
    console.log('passed');
}else{
    console.log('fail');
}

console.log('handle negative');
if(formatCurrency(-2000)==='0.00'){
    console.log('pass');
}else{
    console.log('fail');
}