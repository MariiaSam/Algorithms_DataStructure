// Алгоритм із часовою складністю O(1)O(1) — це константний час. Функція getFirstItem просто повертає перше число списку.

function getFirstItem(items) {
  // Завжди виконується одна операція, незалежно від розміру списку
  return items[0];
}

// ========================================

console.log(getFirstItem([1, 2, 3, 4, 5]));

function printAllItems(items) {
  for (const item of items) {
    // Кількість операцій прямо пропорційна кількості елементів у списку
    console.log(item);
  }
}

printAllItems([1, 2, 3, 4, 5]);

// ========================================
//Прикладом алгоритму з квадратичною часовою складністю,  де потрібно відсортувати масив чисел у порядку зростання (або спадання).
function insertionSort(arr) {
  const n = arr.length;
  for (let i = 1; i < n; i++) {
    const key = arr[i];
    let j = i - 1;
    while (j >= 0 && key < arr[j]) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = key;
  }
}

// Приклад використання:
const numbers = [12, 11, 13, 5, 6];
insertionSort(numbers);
console.log("Відсортований масив:", numbers);

// Відсортований масив: [ 5, 6, 11, 12, 13 ]

// ========================================
// Гарним прикладом алгоритму з часовою складністю є множення матриць.

function multiplyMatrices(A, B) {
  const n = A.length;
  const C = new Array(n).fill(0).map(() => new Array(n).fill(0));

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      for (let k = 0; k < n; k++) {
        C[i][j] += A[i][k] * B[k][j];
      }
    }
  }

  return C;
}

const A = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
const B = [
  [10, 11, 12],
  [13, 14, 15],
  [16, 17, 18],
];

console.log(multiplyMatrices(A, B));

//[ [ 84, 90, 96 ], [ 201, 216, 231 ], [ 318, 342, 366 ] ]

function reverseList(items) {
  return items.slice().reverse();
}

// Приклад використання
const originalList = [1, 2, 3, 4, 5];
const reversedList = reverseList(originalList);
console.log(reversedList);
// [5, 4, 3, 2, 1]

//====================================

function generatePairs(items) {
  const pairs = [];

  for (let i = 0; i < items.length; i++) {
    for (let j = i + 1; j < items.length; j++) {
      pairs.push([items[i], items[j]]);
    }
  }

  return pairs;
}

// Приклад використання
const items = [1, 2, 3, 4];
console.log(generatePairs(items));

// [
//   [1, 2],
//   [1, 3],
//   [1, 4],
//   [2, 3],
//   [2, 4],
//   [3, 4],
// ];

//
function generatePairs(items) {
  const pairs = [];

  for (let i = 0; i < items.length; i++) {
    for (let j = i + 1; j < items.length; j++) {
      pairs.push([items[i], items[j]]);
    }
  }

  return pairs;
}

// Приклад використання
const i = [1, 2, 3, 4];
console.log(generatePairs(i));
