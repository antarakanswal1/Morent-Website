import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
// import {
//   Chart as ChartJS,
//   ArcElement,
//   Tooltip,
//   Legend
// } from 'chart.js';

// ChartJS.register(ArcElement, Tooltip, Legend);

// https://vite.dev/config/
export default defineConfig({
  plugins: [ tailwindcss(),react()],
})
