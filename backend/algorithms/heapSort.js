function heapSort(arr) {
  const n = arr.length;
  let comparisons = 0;
  const start = performance.now();

  // Build max heap
  for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
    heapify(arr, n, i, comparisons);
  }

  // Extract elements from heap
  for (let i = n - 1; i > 0; i--) {
    [arr[0], arr[i]] = [arr[i], arr[0]];
    heapify(arr, i, 0, comparisons);
  }

  const end = performance.now();
  return {
    sorted: [...arr],
    comparisons,
    time: end - start
  };
}

function heapify(arr, n, i, compRef) {
  let largest = i;
  let l = 2 * i + 1;
  let r = 2 * i + 2;

  compRef.value = (compRef.value || 0) + 1;
  if (l < n && arr[l] > arr[largest]) largest = l;

  compRef.value = (compRef.value || 0) + 1;
  if (r < n && arr[r] > arr[largest]) largest = r;

  if (largest !== i) {
    [arr[i], arr[largest]] = [arr[largest], arr[i]];
    heapify(arr, n, largest, compRef);
  }
}

module.exports = heapSort;

