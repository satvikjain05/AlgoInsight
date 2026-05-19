function radixSort(arr) {
  if (arr.length <= 1) return { sorted: arr, comparisons: 0, time: 0 };

  const start = performance.now();
  let comparisons = 0;

  // Find max for digit count
  let max = Math.max(...arr);
  const maxDigits = Math.floor(Math.log10(max)) + 1;

  // LSD Radix sort
  for (let digitPos = 0; digitPos < maxDigits; digitPos++) {
    const buckets = Array.from({ length: 10 }, () => []);
    
    arr.forEach(num => {
      const digit = Math.floor(num / Math.pow(10, digitPos)) % 10;
      buckets[digit].push(num);
      comparisons++;
    });

    // Reconstruct arr
    arr = [];
    buckets.forEach(bucket => arr.push(...bucket));
  }

  const end = performance.now();
  return {
    sorted: arr,
    comparisons,
    time: end - start
  };
}

module.exports = radixSort;

