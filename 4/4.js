function factorial(n) {
  console.log("Виклик функції factorial з n = ", n);
  if (n === 1) {
    console.log("Базовий випадок, n = 1, повернення 1");
    return 1;
  } else {
    const result = n * factorial(n - 1);
    console.log("Повернення результату для n = ", n, ": ", result);
    return result;
  }
}

console.log(factorial(5));

function sumIter(n) {
  let result = 0;
  for (let i = 1; i <= n; i++) {
    result += i;
  }
  return result;
}

console.log(sumIter(5)); // виведе 15

function sumRec(n) {
  if (n === 0) {
    // базовий випадок
    return 0;
  } else {
    return n + sumRec(n - 1); // рекурсивний випадок
  }
}

console.log(sumRec(5)); // виведе 15

// Мемоізація рекурсії

function fibonacciMemo(n, memo = {}) {
  if (n in memo) {
    return memo[n];
  }
  if (n <= 1) {
    return n;
  } else {
    const value = fibonacciMemo(n - 1, memo) + fibonacciMemo(n - 2, memo);
    memo[n] = value;
    return value;
  }
}

// Тестуємо функцію
console.log(fibonacciMemo(10)); // Виведе: 55
