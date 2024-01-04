import { acceptHMRUpdate, defineStore } from "pinia"

interface User {
  uid: string,
  name: string,
  photoUrl: string
}

export const useUserStore = defineStore("UserStore", {
  state: () => ({
    user: null as User || null,
  }),
  actions: {
    async login(user: string, password: string) {
      this.user = await verifyCredentials(user, password)
    },

    logout() {
      this.user = null;
      this.router.push('/login')
    },
  },
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