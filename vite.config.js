import { defineConfig } from 'vite';
import { glob } from 'glob';
import injectHTML from 'vite-plugin-html-inject';
import FullReload from 'vite-plugin-full-reload';

export default defineConfig({
	root: 'src',
	build: {
		outDir: '../dist',
		emptyOutDir: true,
		sourcemap: true,
		rollupOptions: {
			input: glob.sync('./src/*.html'),
			output: {
				entryFileNames: '[name].js',
				assetFileNames: '[name][extname]',
			},
		},
	},
	css: {
		devSourcemap: true,
		preprocessorOptions: {
			scss: {},
		},
	},
	plugins: [injectHTML(), FullReload(['./src/**/**.html'])],
	server: {
		open: true,
	},
});
