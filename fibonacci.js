function fibs(number) {
  const fibonacci = [0, 1];

  for (let i = 2; i < number; i++) {
    fibonacci.push(fibonacci[i - 2] + fibonacci[i - 1]);
  }

  return fibonacci;
}

console.log(fibs(2));