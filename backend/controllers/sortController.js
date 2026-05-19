const bubbleSort = require('../algorithms/bubbleSort');
const mergeSort = require('../algorithms/mergeSort');
const quickSort = require('../algorithms/quickSort');
const countingSort = require('../algorithms/countingSort');
const selectionSort = require('../algorithms/selectionSort');
const heapSort = require('../algorithms/heapSort');
const bucketSort = require('../algorithms/bucketSort');
const radixSort = require('../algorithms/radixSort');

const compareSorts = (req, res) => {
  const { array } = req.body;
  
  if (!Array.isArray(array) || array.length === 0) {
    return res.status(400).json({ error: 'Valid array required' });
  }
  
  const min = Math.min(...array);
  const max = Math.max(...array);
  
  const results = {
    bubbleSort: bubbleSort(array),
    selectionSort: selectionSort(array),
    mergeSort: mergeSort(array),
    quickSort: quickSort(array),
    heapSort: heapSort(array),
    countingSort: countingSort(array),
    bucketSort: bucketSort(array, min, max),
    radixSort: radixSort(array)
  };
  
  results.bubbleSort.complexity = 'O(n²)';
  results.selectionSort.complexity = 'O(n²)';
  results.mergeSort.complexity = 'O(n log n)';
  results.quickSort.complexity = 'O(n log n) avg';
  results.heapSort.complexity = 'O(n log n)';
  results.countingSort.complexity = 'O(n+k)';
  results.bucketSort.complexity = 'O(n+k)';
  results.radixSort.complexity = 'O(d(n+k))';
  
  res.json(results);
};

module.exports = { compareSorts };
