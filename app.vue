<template>
  <a-style-provider :transformers="[legacyLogicalPropertiesTransformer]">
    <div
      id="app"
      class="bg-red-100"
    >
      <nuxt-layout>
        <nuxt-page />
      </nuxt-layout>
    </div>
  </a-style-provider>
</template>
<script setup lang="ts">
import { legacyLogicalPropertiesTransformer } from 'ant-design-vue'
</script>
