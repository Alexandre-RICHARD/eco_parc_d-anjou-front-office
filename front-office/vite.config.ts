import {defineConfig} from "vitest/config";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
    "resolve": {
        "alias": {
            "@": path.resolve(__dirname, "./src"),
            "@assets": path.resolve(__dirname, "./src/assets"),
            "@components": path.resolve(__dirname, "./src/components"),
            "@store": path.resolve(__dirname, "./src/store"),
            "@slices": path.resolve(__dirname, "./src/store/slices"),
            "@styles": path.resolve(__dirname, "./src/styles"),
            "@tests": path.resolve(__dirname, "./src/tests"),
            "@utilities": path.resolve(__dirname, "./src/utilities"),
        },
    },
    "plugins": [react()],
    "build": {
        "outDir": "./build",
        "cssCodeSplit": false,
        "rollupOptions": {"input": {"app": "./src/index.html"}},
    },
    "test": {
        "globals": true,
        "environment": "jsdom",
        "setupFiles": ["src/tests/setup.ts"],
        "env": {"IS_REACT_ACT_ENVIRONMENT": "true"},
    },
    "server": {"open": "./src/index.html"},
});
