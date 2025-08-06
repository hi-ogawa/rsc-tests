import inspect from "vite-plugin-inspect"
import { defineConfig } from "waku/config"

export default defineConfig({
  vite: {
    plugins: [inspect()],
    environments: {
      ssr: {
        optimizeDeps: {
          include: ['@hiogawa/test-dep-cjs/client']
        }
      }
    }
  }
})
