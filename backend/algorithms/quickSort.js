function quickSort(arr) {
  let comparisons = 0;
  
  function partition(low, high, array) {
    const pivot = array[high];
    let i = low - 1;
    
    for (let j = low; j < high; j++) {
      comparisons++;
      if (array[j] <= pivot) {
        i++;
        [array[i], array[j]] = [array[j], array[i]];
      }
    }
    [array[i + 1], array[high]] = [array[high], array[i + 1]];
    return i + 1;
  }
  
  function sort(low, high, array) {
    if (low < high) {
      const pi = partition(low, high, array);
      sort(low, pi - 1, array);
      sort(pi + 1, high, array);
    }
  }
  
  const inputCopy = [...arr];
  const start = performance.now();
  sort(0, inputCopy.length - 1, inputCopy);
  const end = performance.now();
  
  return {
    sorted: inputCopy,
    comparisons,
    time: end - start
  };
}

module.exports = quickSort;
