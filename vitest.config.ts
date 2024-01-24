/// <reference types="vitest" />

import Vue from '@vitejs/plugin-vue'
import { defineConfig, loadEnv } from 'vite'
import type { UserConfig } from 'vite'

import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'

import type { InlineConfig } from 'vitest'

interface VitestConfigExport extends UserConfig {
  test: InlineConfig;
}

export default ({ mode }: any) => {
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) }
  return defineConfig({
    plugins: [
      Vue(),
      AutoImport({ imports: ['vue'], dts: 'types/auto-imports.d.ts' }),
      Components({
        resolvers: [

        ]
      })
    ],
    test: {
      global: true,
      environment: 'jsdom'
    },
    resolve: {
      alias: {
        '@': '/'
      }
    }
  } as VitestConfigExport)
}
