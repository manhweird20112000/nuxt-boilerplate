<script setup lang="ts">
import { setStorage } from '~/utils/storage'

setStorage()
</script>

<template>
  <div class="h-screen w-screen bg-primary">
    <p>
      {{ $t('title') }}
    </p>
  </div>
</template>

<style scoped>

</style>
