/// <reference types="vitest" />
/// <reference types="vite/client" />
/// <reference types="vite-plugin-svgr/client" />

import { configDefaults, defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react(), svgr()],
    test: {
        exclude: [
            ...configDefaults.exclude,
            'src/setupTests.ts',
            'src/test-utils',
            'src/constants',
        ],
        globals: true,
        environment: 'jsdom',
        setupFiles: './src/setupTests.ts',
        deps: {
            inline: ['vitest-canvas-mock'],
        },
        coverage: {
            reporter: ['text', 'json', 'html'],
            exclude: ['src/setupTests.ts', 'src/test-utils', 'src/constants'],
        },
    },
});
