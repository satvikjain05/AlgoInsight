# AlgoInsight

A small web app for comparing and visualizing classic sorting algorithms.

## Overview

AlgoInsight includes a Node.js backend that implements several sorting algorithms and a Vite-powered React frontend for visualization and comparison.

## Features

- Implementations of common sorting algorithms:
  - Bubble Sort
  - Selection Sort
  - Insertion Sort
  - Merge Sort
  - Quick Sort
  - Heap Sort
  - Counting Sort
  - Radix Sort
  - Bucket Sort
- API to run and compare sorts
- Interactive frontend comparator built with Vite + React

## Project Structure

- `backend/` — Express API and algorithm implementations
  - `server.js` — Express server
  - `routes/sortRoutes.js` — API routes (mounted at `/api`)
  - `controllers/sortController.js` — request handling
  - `algorithms/` — individual sort implementations
- `frontend/` — Vite + React UI
  - `src/` — React source files

## Getting Started

Prerequisites

- Node.js (>=14)

Backend

```bash
cd backend
npm install
# start the server
node server.js
# or, if a start script exists
npm start
```

The backend listens on port `5000` by default and mounts routes under `/api`.

Frontend

```bash
cd frontend
npm install
# start the dev server (Vite)
npm run dev
# or, if a start script exists
npm start
```

Open the frontend dev URL (usually `http://localhost:5173`) to view the comparator UI.

## API

- POST `/api/sort`
  - Body: JSON describing the array and selected algorithms. Example:

```json
{
  "array": [5, 3, 8, 1, 2],
  "algorithms": ["mergeSort", "quickSort"]
}
```

- Response: algorithm results and comparison data (timings/steps) returned by the server.

See `backend/routes/sortRoutes.js` and `backend/controllers/sortController.js` for implementation details.

## Development Notes

- Algorithms live in `backend/algorithms/` and are invoked from the controller.
- The route for sorting is defined at `POST /api/sort` and mounted in `server.js`.

## Contributing

Contributions welcome. Open issues or pull requests to add algorithms, improve visualizations, or enhance API payloads.

## License

MIT — see LICENSE file if present.

**Run: `cd backend && npm start` & `cd frontend && npm run dev`**