import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import dotenv from 'dotenv';
import path from 'path';

export default defineConfig(({ mode }) => {
  try {
    const envFiles: Record<string, string> = {
      development: path.resolve(__dirname, 'src/environments/.env.dev'),
      production: path.resolve(__dirname, 'src/environments/.env.prod'),
    };

    const envFile = envFiles[mode] || path.resolve(__dirname, 'src/environments/.env');

    const envConfig = dotenv.config({ path: envFile }).parsed;

    if (!envConfig) {
      throw new Error(`Failed to parse ${envFile}`);
    }

    process.env = {
      ...process.env,
      ...envConfig,
    };

    const port = parseInt(process.env.VITE_PORT || '', 10) || 5173;

    if (isNaN(port) || port < 0 || port > 65535) {
      throw new Error(`Invalid port number specified in ${envFile}. Using default port 3000.`);
    }

    return {
      plugins: [react(),
      ],
      build: {
        outDir: 'dist',
        chunkSizeWarningLimit: 3000,
      },
      publicDir: 'public',
      server: {
        port,
      },
    };
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error('Error in Vite configuration:', error.message);
    }
    process.exit(1);
  }
});
