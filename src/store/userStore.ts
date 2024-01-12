import { acceptHMRUpdate, defineStore } from "pinia"
import { useNotificationsStore } from "./notification"
import { ref } from 'vue'

interface User {
  uid: string,
  name: string,
  photoUrl: string
}

export const useUserStore = defineStore("UserStore", () =>  {
  const user = ref<User | null>(null);
  const notification = useNotificationsStore()
  
  async function login(user: string, password: string) {

    user.value = await verifyCredentials(user, password)
  }

  function logout() {
    user.value = null;

    notification.showNotifications('test')
  }

  return { user, login, logout }
  // getters: {
  //   firstName() {
  //     return this.user.split(" ")[0]
  //   },
  // },
})

if(import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useUserStore, import.meta.hot))
}

async function verifyCredentials(user: User): Promise<User> {
  return {
    uid: 1,
    name: "Valdi",
    photoUrl: "https://avatars.githubusercontent.com/u/35588487?v=4",
  }
}