import { acceptHMRUpdate, defineStore } from "pinia"

export const useNotificationsStore = defineStore("NotificationsStore", {
  state: () => ({
    notifications: [] as string[]
  }),
  actions: {
    showNotifications(message: string) {
      console.log(message)
    },
    clearNotifications() {
    }
  },
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useNotificationsStore, import.meta.hot))
}
