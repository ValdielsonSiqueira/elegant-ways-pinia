import { acceptHMRUpdate, defineStore} from 'pinia'
import { useRoute } from 'vue-router'
const { ref } from 'vue'

interface User {
  uid: string,
  name: string,
  photoUrl: string
}

export const useAuthSetupStore = defineStore('auth-store', () => {
  const router = useRoute()

  const user = ref<User |  null>(null)

  async function login(email: string, password: string) {
    user.value = await verifyCredentials(email, password)
  }

  function logout() {
    user.value = null
    router.push('/login')
  }

  return { user, login, logout }

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