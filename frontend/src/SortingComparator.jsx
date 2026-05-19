import React, { useState } from 'react';
import axios from 'axios';
import './SortingComparator.css';

const SortingComparator = () => {
  const [input, setInput] = useState('');
  const [results, setResults] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setResults(null);

    try {
      const arrayStr = input.trim();
      const array = arrayStr.split(',').map(num => parseFloat(num.trim())).filter(n => !isNaN(n));
      
      if (array.length === 0) {
        setError('Enter valid comma-separated numbers');
        setLoading(false);
        return;
      }

      const response = await axios.post('/api/sort', { array });
      setResults(response.data);
    } catch (err) {
      setError('Error calling API. Is backend running?');
    } finally {
      setLoading(false);
    }
  };

  const getBest = (results, key) => {
    const values = Object.values(results).map(r => r[key]);
    const min = Math.min(...values);
    const best = Object.keys(results).find(k => results[k][key] === min);
    return best;
  };

  const formatTime = (ms) => (ms).toFixed(3) + ' ms';

  if (loading) return <div className="loading">Comparing algorithms...</div>;

  return (
    <div className="comparator">
      <h2>AlgoInsight - Sorting Algorithm Comparator</h2>
      <form onSubmit={handleSubmit} className="input-form">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter numbers separated by commas, e.g. 64,34,25,12,22,11,90"
          className="input-field"
        />
        <button type="submit" className="compare-btn">Compare Algorithms</button>
      </form>
      {error && <div className="error">{error}</div>}
      
      {results && (
        <div className="results">
          <h3>Results for [{results.bubbleSort.sorted.join(', ')}]</h3>
          <div className="cards">
            {Object.entries(results).map(([algo, data]) => (
              <div key={algo} className="card">
                <h4>{algo.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}</h4>
                <p><strong>Sorted:</strong> [{data.sorted.join(', ')}]</p>
                <p><strong>Time:</strong> {formatTime(data.time)}</p>
                <p><strong>Comparisons:</strong> {data.comparisons.toLocaleString()}</p>
                <p><strong>Complexity:</strong> {data.complexity}</p>
                {getBest(results, 'time') === algo && <span className="fastest">Fastest!</span>}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default SortingComparator;
