<script setup lang="ts">
import { useUserStore }  from "./store/userStore"
import Counter from './pages/counter.vue'

const store = useUserStore()

</script>

<template>
  <div>
    <p>Main content</p>

    <pre>{{ store.user }}</pre>
    <button @click="store.login('Valdi', '123456')">Login</button>
    <button @click="store.logout()">Logout</button>
    <Counter/>
  </div>
</template>

<style scoped>
</style>