/// <reference types="vitest" />

import Vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'
import type { UserConfig } from 'vite'

import AutoImport from 'unplugin-auto-import/vite'
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers'
import Components from 'unplugin-vue-components/vite'

import type { InlineConfig } from 'vitest'

interface VitestConfigExport extends UserConfig {
  test: InlineConfig;
}

export default defineConfig({
  plugins: [
    Vue(),
    AutoImport({ imports: ['vue'], dts: 'types/auto-imports.d.ts' }),
    Components({
      resolvers: [
        AntDesignVueResolver({
          importStyle: true // css in js
        })
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
