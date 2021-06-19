// Union types
// Usage: we can define variables to be not only one type, but multiple types

// 1st: TypeScript allow us to define a new type that can use the union type,
// this is called type alias
type NumORStr = number | string;

// 2nd, we can also use literal value for some parameters,
// like the parameter of resultType below.

function combine(
  input1: NumORStr,
  input2: NumORStr,
  resultType: 'as-text' | 'as-number'
) {
  let result: NumORStr;
  if (resultType === 'as-text') {
    result = input1.toString() + input2.toString();
  } else {
    result = +input1 + +input2;
  }
  return result;
}

const combinedAge = combine(30, 25, 'as-text');
console.log(combinedAge);

const combinedNames = combine('Allen', 'Liu', 'as-text');
console.log(combinedNames);
