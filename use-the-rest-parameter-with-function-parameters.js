const sum = (...args) => {
  // const args = [x, y, z]; // commented this line of code out and i passed the challenge
  let total = 0;
  for (let i = 0; i < args.length; i++) {
    total += args[i];
  }
  return total;
}