function findMax(numbers) {
    if (numbers.length === 0) {
      return undefined; // Return undefined if the array is empty
    }
  
    let max = numbers[0]; // Assume the first number is the maximum
  
    for (let i = 1; i < numbers.length; i++) {
      if (numbers[i] > max) {
        max = numbers[i]; // Update max if a larger number is found
      }
    }
  
    return max;
  }
  const numbers = [5, 2, 9, 1, 7];
const maximum = findMax(numbers);
console.log(maximum); // Output: 9
