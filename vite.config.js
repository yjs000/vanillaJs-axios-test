import {defineConfig, loadEnv} from 'vite';
import path from 'path';

export default defineConfig(({command, mode}) => {
    const env = loadEnv(mode, process.cwd(), '');

    const defaultConfig = {
        resolve: {
            alias: {
                '@': path.resolve(__dirname, './src')
            }
        },
        server: {
            proxy: {
                '/api': {
                    target: env.VITE_OS_API_URL,
                    changeOrigin: true,
                    rewrite: path => path.replace(/^\/api/, ''),
                    secure: false,
                    ws: true,
                },
            }
        }
    }

    return defaultConfig;
});
