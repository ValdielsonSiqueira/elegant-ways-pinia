import { createPinia } from "pinia"
import router from './router'
import { markRaw } from 'vue'
import { Router } from 'vue-router'
import { useUserStore } from "./store/userStore"

export const pinia = createPinia()

pinia.use(({ store }) => {
  store.router = markRaw(router);
})

pinia.use(({ store }) => {
  store.$onAction(({ store, name, args, after, onError }) => {
    console.log(`action[${store.$id}] ${name} with args: ${JSON.stringify(args)} was invoked`)

    after(result => {
      console.log(`action[${store.$id}] ${name} with args: ${JSON.stringify(args)} returned: ${JSON.stringify(result)}`)
    })

    onError(err => {
      console.log(`action[${store.$id}] ${name} with args: ${JSON.stringify(args)} failed with: ${err}`)
    })
  })
})

declare module "pinia" {
  interface PiniaCustomProperty {
    router: Router
  }

  interface DefineStoreOptions<Id, S, G, A> {
    watch?: Record<string, string>
  }
}

router.beforeEach(to => {
  if(to.meta.requiresAuth) {
    const useStore = useUserStore()

    if(!useStore.use) return '/login'
  }
})
