<template>
  <div>
    <button @click="counter.increment()">{{ counter.n }}</button>
    <pre>{{ counter.files }}</pre>

    <button @click="counter.open()">Open file</button>
  </div>
</template>

<script setup lang="ts">
import { useCounterStore } from "../store/counter"

const counter = useCounterStore()

</script>