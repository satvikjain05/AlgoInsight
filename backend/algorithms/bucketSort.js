function bucketSort(arr, min = 0, max = 1) {
  const n = arr.length;
  if (n <= 1) return { sorted: arr, comparisons: 0, time: 0 };

  const start = performance.now();
  const bucketSize = (max - min) / n;
  const buckets = Array.from({ length: n }, () => []);
  let comparisons = 0;

  arr.forEach(num => {
    const bucketIdx = Math.min(Math.floor((num - min) / bucketSize), n - 1);
    buckets[bucketIdx].push(num);
    comparisons++;
  });

  // Sort buckets + merge
  const sorted = [];
  buckets.forEach(bucket => {
    if (bucket.length > 1) {
      bucket.sort((a, b) => {
        comparisons++;
        return a - b;
      });
    }
    sorted.push(...bucket);
  });

  const end = performance.now();
  return {
    sorted,
    comparisons,
    time: end - start
  };
}

module.exports = bucketSort;

