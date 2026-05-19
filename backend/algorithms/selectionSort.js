function selectionSort(arr) {
  const n = arr.length;
  let comparisons = 0;
  const start = performance.now();

  for (let i = 0; i < n - 1; i++) {
    let minIdx = i;
    for (let j = i + 1; j < n; j++) {
      comparisons++;
      if (arr[j] < arr[minIdx]) {
        minIdx = j;
      }
    }
    [arr[i], arr[minIdx]] = [arr[minIdx], arr[i]];
  }

  const end = performance.now();
  return {
    sorted: [...arr],
    comparisons,
    time: end - start
  };
}

module.exports = selectionSort;

