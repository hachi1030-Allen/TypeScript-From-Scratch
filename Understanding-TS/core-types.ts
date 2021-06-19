// Define a person object with both type and value
// The problem of this is that typescript will follow strictly on the type
// which means if you want to add a key/value pair of the object,
// then you have to modify the type part as well, otherwise typescript complains.
// Therefore, the better way is just let typescript infer the type of the object.

// const person: {
//   name: string;
//   age: number;
// } = {
//   name: 'Allen Liu',
//   age: 32,
// };

// Enum
enum Role {
  ADMIN, // 0
  READ_ONLY, // 1
  AUTHOR, // 2
}

const person = {
  name: 'Allen Liu',
  age: 32,
  hobbies: ['Basketball', '8Ball'],
  role: Role.ADMIN,
};

let favoriteActivities: string[];
favoriteActivities = ['Sports'];

console.log(person.name);

person.hobbies.forEach((element) => {
  console.log(element.toUpperCase());
  //element.map()   !!! ERROR !!! because element is inferred as a string not array.
});

// Define a tuple type
// Below sample means that for the variable rule,
// I want it to be an array with exactly 2 elements,
// and the first element type is number, the second element is string
let rule: [number, string];
