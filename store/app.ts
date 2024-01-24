import { defineStore } from 'pinia'

export const useAppStore = defineStore('appStore', {
  state: () => ({
    isLoadingFullPage: false
  }),
  actions: {
    setLoadingFullPage (data: boolean): void {
      this.isLoadingFullPage = data
    }
  }
})
