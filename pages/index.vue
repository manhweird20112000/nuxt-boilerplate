<script setup lang="ts">
import { useLazyAsyncData } from '#app'

import { request } from '~/services/api'
import { useAppStore } from '~/store/app'

const data = await useLazyAsyncData(() => request({ url: '', method: 'GET' }))
const { isLoadingFullPage } = useAppStore()
console.log(data)

</script>

<template>
  <div>
    <el-button type="primary">
      {{ $t('title') }}
    </el-button>
    {{ isLoadingFullPage }}
  </div>
</template>
