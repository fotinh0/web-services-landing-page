import { defineConfig } from 'vite';
import { reactRouter } from '@react-router/dev/vite';

// React Router's plugin replaces @vitejs/plugin-react (it includes React Fast Refresh).
// Routing and pre-rendering are set in react-router.config.ts.
export default defineConfig({
  plugins: [reactRouter()],
});
