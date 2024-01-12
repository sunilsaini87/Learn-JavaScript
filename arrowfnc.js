// () => expression

// param => expression

// (param) => expression

// (param1, paramN) => expression

// () => {
//   statements
// }

// param => {
//   statements
// }

// (param1, paramN) => {
//   statements
// }

const a = () => {
  console.log("hello");
};
a();

const a1 = () => {
  return "hello";
};

console.log(a1());

const a2 = () => "hello"; // when not using curly braces then never use return

console.log(a2());
