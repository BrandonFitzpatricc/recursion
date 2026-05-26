function fibs(number) {
  if (number <= 1) return number === 1 ? [0] : [];

  const fibonacci = [0, 1];

  for (let i = 2; i < number; i++) {
    fibonacci.push(fibonacci[i - 2] + fibonacci[i - 1]);
  }

  return fibonacci;
}

for(let i = 0; i <= 8; i++) {
  console.log(fibs(i));
}
