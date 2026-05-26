function fibs(number) {
  if (number <= 1) return number === 1 ? [0] : [];

  const fibonacci = [0, 1];

  for (let i = 2; i < number; i++) {
    fibonacci.push(fibonacci[i - 2] + fibonacci[i - 1]);
  }

  return fibonacci;
}

function fibsRec(number) {
  if (number <= 2) return number === 2 ? [0, 1] : number === 1 ? [0] : [];

  const previousFibonacci = fibsRec(number - 1);

  return previousFibonacci.concat(
    previousFibonacci.at(-1) + previousFibonacci.at(-2),
  );
}

for (let i = 0; i <= 8; i++) {
  console.log(fibsRec(i));
}
