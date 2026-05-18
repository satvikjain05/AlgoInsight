function mergeSort(arr) {
  const n = arr.length;
  let comparisons = 0;
  
  function merge(left, right) {
    let i = 0, j = 0, result = [], tempComparisons = 0;
    
    while (i < left.length && j < right.length) {
      tempComparisons++;
      if (left[i] <= right[j]) {
        result.push(left[i++]);
      } else {
        result.push(right[j++]);
      }
    }
    
    comparisons += tempComparisons;
    return result.concat(left.slice(i)).concat(right.slice(j));
  }
  
  function sort(arr) {
    if (arr.length <= 1) return arr;
    
    const mid = Math.floor(arr.length / 2);
    const left = sort(arr.slice(0, mid));
    const right = sort(arr.slice(mid));
    
    return merge(left, right);
  }
  
  const start = performance.now();
  const sorted = sort([...arr]);
  const end = performance.now();
  
  return {
    sorted,
    comparisons,
    time: end - start
  };
}

module.exports = mergeSort;
