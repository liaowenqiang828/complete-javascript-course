// let js = "amazing";
// // if (js === "amazing") alert("javascript is FUN");

// console.log(js);

// let javascriptIsFun = true;

// let age = 23;

// console.log(javascriptIsFun);
// console.log(typeof javascriptIsFun);
// console.log(typeof js);
// console.log(typeof age);

// javascriptIsFun = "string";

// console.log(typeof javascriptIsFun);

// console.log("data type undefine");

// let year;
// console.log("year", year);
// console.log(" type of year", typeof year);

// console.log("data type null console");
// console.log("null: ", null);
// console.log(typeof null);

// console.log(typeof null === "null");
// console.log(typeof null === null);
// console.log(typeof null === "object");

let age = 30;
age = 31;
console.log("age", age);

const birthYear = 1990;
// birthYear = 1991;

console.log("birthYear", birthYear);

const aNumber = 12;
const aString = "" + aNumber;

console.log("aNumber", aNumber);
console.log("typeof aNumber", typeof aNumber);
console.log("aString", aString);
console.log(" typeof aString", typeof aString);

const markMass = 78;
const markHeight = 1.69;
const johnMass = 95;
const johnHeight = 1.88;

const markBMI = markMass / markHeight ** 2;
const johnBMI = johnMass / (johnHeight * johnHeight);

const markHeigherBMI = markBMI > johnBMI;

console.log("markHeigherBMI", markHeigherBMI);

console.log("funny emoji: CMD + Ctrl + Space : 🥸");

const inputYear = "1990";

console.log("inputYear", inputYear, "inputYearNumberValue:", Number(inputYear));

const nameStr = "james";
const numberValueOfNameStr = Number(nameStr);
console.log("numberValueOfNameStr", numberValueOfNameStr);

// typeof a NaN is number, we can conside this is a invalid number, cause the type of it is a number indeed
console.log("type of numberValueOfNameStr", typeof numberValueOfNameStr);

console.log("23" + "10" + 2);
console.log("23" - "10" - 2);

console.log("23" * "2");
console.log("23" / "2");
console.log("23" * 2);
console.log("23" / 2);

console.log(2 + 3 + 4 + "");
console.log(2 + 3 + 4 + "5");

console.log("10" - "5" - "2" - 2 + "");
console.log("10" - "5" - "2" - 2 + "5");

// falsy value : 0, "", undefined, null, NaN
console.log("0: -> boolean", Boolean(0));
console.log("'': -> boolean", Boolean(""));
console.log("undefined): -> boolean", Boolean(undefined));
console.log("null: -> boolean", Boolean(null));
console.log("NaN: -> boolean", Boolean(NaN));

const money = 0;

// money value is 0, and in the execution context, in if statement, will transfer value into a boolean
if (money) {
  console.log("you should sepend your money");
} else {
  console.log("you should get a job first");
}

let height;
// undefind value was transfered into false
if (height) {
  console.log("I am growth");
} else {
  console.log("No you did not");
}

const dolphinsSocreOne = 96;
const dolphinsSocreTwo = 108;
const dolphinsSocreThree = 89;

const koalasScoreOne = 88;
const koalasScoreTwo = 91;
const koalasScoreThree = 110;

const dolphinsAverageScore =
  (dolphinsSocreOne + dolphinsSocreTwo + dolphinsSocreThree) / 3;

const koalasAverageScore =
  (koalasScoreOne + koalasScoreTwo + koalasScoreThree) / 3;

if (dolphinsAverageScore > koalasAverageScore) {
  console.log("dolphins is winner");
  const hasBonusOne =
    dolphinsSocreOne > 100 ||
    dolphinsSocreTwo > 100 ||
    dolphinsSocreThree > 100;
} else {
  console.log("koalas is the wnner");
  const hasBonusOne =
    koalasScoreOne > 100 || koalasScoreTwo > 100 || koalasScoreThree > 100;
}

// ternary expression (will return a value)

const bill = 275;
const tipRate = bill > 50 && bill < 300 ? 0.15 : 0.2;
const tip = bill * tipRate;

console.log(
  `The bill was ${bill}, the tip was ${tip}, and the total value was ${
    bill + tip
  }`
);
