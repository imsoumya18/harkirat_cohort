function total(x) {
  let sum = 0;

  for (let i = 1; i <= x; i++) {
    sum += i;
  }

  return sum;
}

console.log(total(3));
