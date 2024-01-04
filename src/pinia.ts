import { createPinia } from "pinia"
import router from './router'
import { markRaw } from 'vue'
import { Router } from 'vue-router'
import { useUserStore } from "./store/userStore"

export const pinia = createPinia()

pinia.use(({ store }) => {
  store.router = markRaw(router);
})

declare module "pinia" {
  interface PiniaCustomProperty {
    router: Router
  }
}

router.beforeEach(to => {
  if(to.meta.requiresAuth) {
    const useStore = useUserStore()

    if(!useStore.use) return '/login'
  }
})