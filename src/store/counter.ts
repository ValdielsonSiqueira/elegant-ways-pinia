import {acceptHMRUpdate, defineStore } from 'pinia'
import { useLocalStorage, useFileDialog } from '@vueuse/core'

export const useCounterStore = defineStore('counter', () => {
  const n = useLocalStorage('my-counter', 0)

  const { files, open} = useFileDialog()

  function increment(amount = 1) { n.value+=amount }

  return { increment, n, files, open }
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useCounterStore, import.meta.hot))
}