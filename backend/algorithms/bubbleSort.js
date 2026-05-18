function bubbleSort(arr) {
  const n = arr.length;
  let comparisons = 0;
  const start = performance.now();
  
  let swapped;
  do {
    swapped = false;
    for (let i = 1; i < n; i++) {
      comparisons++;
      if (arr[i - 1] > arr[i]) {
        [arr[i - 1], arr[i]] = [arr[i], arr[i - 1]];
        swapped = true;
      }
    }
  } while (swapped);
  
  const end = performance.now();
  return {
    sorted: [...arr],
    comparisons,
    time: end - start
  };
}



module.exports = bubbleSort;
