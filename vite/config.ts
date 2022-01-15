import {resolve} from 'path';
import {defineConfig} from 'vite';
import reactRefresh from '@vitejs/plugin-react-refresh'
import react from '@vitejs/plugin-react'

import {NodeGlobalsPolyfillPlugin} from '@esbuild-plugins/node-globals-polyfill'

// See guide on how to configure Vite at: https://vitejs.dev/config/
const viteConfig = defineConfig({
    plugins: [reactRefresh(), react()],
    build: {
        rollupOptions: {
            input: {
                main: resolve('index.html'),
            },
        },
    },
    clearScreen: false,
    optimizeDeps: {
        esbuildOptions: {
            // Node.js global to browser globalThis
            define: {
                global: 'globalThis'
            },
            // Enable esbuild polyfill plugins
            plugins: [
                NodeGlobalsPolyfillPlugin({
                    buffer: true
                })
            ]
        }
    }
});

export default viteConfig;
