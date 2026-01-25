const math = "20";
const convertInt = parseInt(math);
const totalNumber = convertInt + 10;
console.log(totalNumber);

const fraction = "3.14159";
const conFractionToInt = parseInt(fraction);
console.log(conFractionToInt);

const book = "primaryBook";
console.log(parseInt(book));

const num1 = 3.456;
const num2 = 2.789;
const total = num1 + num2;
const totalNum = parseFloat(total.toFixed(2));
console.log(totalNum);

const strNum1 = "56.78";
const strNum2 = "12.34";
const parseStrNum1 = parseFloat(strNum1);
const parseStrNum2 = parseFloat(strNum2);
const totalStrNum = parseStrNum1 + parseStrNum2;
console.log(totalStrNum);

const strNumber1 = "10.5678";
const strNumber2 = "5.4321";
const parseStrNumber1 = parseFloat(strNumber1);
const parseStrNumber2 = parseFloat(strNumber2);
console.log(parseFloat(parseStrNumber1.toFixed(1)));
console.log(parseFloat(parseStrNumber2.toFixed(1)));

const moreStr = "42.45689754";
const parseMoreStr = parseFloat(moreStr);
const convertToFloat = parseFloat(parseMoreStr.toFixed(3));
console.log(convertToFloat);
