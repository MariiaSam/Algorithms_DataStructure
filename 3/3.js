// Масиви (Arrays)

const arr = [1, 2, 3, 4, 5];
console.log(arr); // Output: [1, 2, 3, 4, 5]

const result = arr.map((element) => element + 2);
console.log(result); // Output: [3, 4, 5, 6, 7]

// Dictionaries
const myObject = { name: "John", age: 25, city: "New York" };
delete myObject.city;
console.log(myObject); // Output: { name: 'John', age: 25 }

// Множини (Sets)

const mySet = new Set([1, 2, 3, 4, 5]);
console.log(mySet); // Вивід: Set { 1, 2, 3, 4, 5 }

mySet.add(6);
console.log(mySet); // Вивід: Set { 1, 2, 3, 4, 5, 6 }

mySet.delete(1);
console.log(mySet); // Вивід: Set { 2, 3, 4, 5 }

const set1 = new Set([1, 2, 3, 4, 5]);
const set2 = new Set([4, 5, 6, 7, 8]);

// Об'єднання
const unionSet = new Set([...set1, ...set2]);
console.log(unionSet); // Вивід: Set { 1, 2, 3, 4, 5, 6, 7, 8 }

// Перетин
const intersectionSet = new Set([...set1].filter((x) => set2.has(x)));
console.log(intersectionSet); // Вивід: Set { 4, 5 }

// Різниця
const differenceSet = new Set([...set1].filter((x) => !set2.has(x)));
console.log(differenceSet); // Вивід: Set { 1, 2, 3 }

// Симетрична різниця
const symmetricDifferenceSet = new Set(
  [...set1]
    .filter((x) => !set2.has(x))
    .concat([...set2].filter((x) => !set1.has(x)))
);
console.log(symmetricDifferenceSet); // Вивід: Set { 1, 2, 3, 6, 7, 8 }

// ===============================================
// stack

const stack = [];
stack.push("a");
stack.push("b");
stack.push("c");
console.log(stack); // Вивід: ['a', 'b', 'c']

console.log(stack.pop()); // Вивід: 'c'
console.log(stack); // Вивід: ['a', 'b']
