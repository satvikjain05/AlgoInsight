function countingSort(arr) {
  if (arr.length <= 1) return { sorted: arr, comparisons: 0, time: 0 };

  const start = performance.now();
  const min = Math.min(...arr);
  const max = Math.max(...arr);
  const range = max - min + 1;
  const count = new Array(range).fill(0);
  let comparisons = 0;

  // Count occurrences
  arr.forEach(num => {
    count[num - min]++;
    comparisons++;
  });

  // Cumulative count
  for (let i = 1; i < range; i++) {
    count[i] += count[i - 1];
    comparisons++;
  }

  const sorted = new Array(arr.length);
  for (let i = arr.length - 1; i >= 0; i--) {
    sorted[count[arr[i] - min] - 1] = arr[i];
    count[arr[i] - min]--;
    comparisons += 2; // index + decrement
  }

  const end = performance.now();
  return {
    sorted,
    comparisons,
    time: end - start
  };
}

module.exports = countingSort;

