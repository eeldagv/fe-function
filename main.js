// 함수 선언문
function add(x, y) {
  return x + y;
}
foo(2, 3);

// 함수 표현식
// 익명 함수
const isEven = function (number) {
  console.log(number % 2 === 0);
};
isEven(4);

// 기명함수
const greet = function sayHello(name) {
  console.log(`Hello, ${name}!`);
};
greet(Jennie);

// Function 생성자 함수
const concatStrings = new Function(
  "str1",
  "str2",
  'console.log(str1 + " " + str2)'
);
concatStrings("Hello", "World");

// 화살표 함수
const squareNumbers = (numbers) => {
  console.log(numbers.map(num => num ** 2));
};
squareNumbers([1, 2, 3, 4]);
