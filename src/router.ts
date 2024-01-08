import { createRouter, createWebHashHistory } from "vue-router"
import App from './App.vue'
import Counter from './pages/counter.vue'

const routes = [
  {
    path: "/",
    name: "Home",
    component: App,
  },
  {
    path: "/counter",
    name: "Counter",
    component: Counter,
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
