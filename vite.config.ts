import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// Resolve '@' to the src directory for clean imports
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
