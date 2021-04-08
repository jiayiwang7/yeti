<template>
  <div>
    <h1>Flux is awesome!</h1>
    <h2>Count: {{ count }}</h2>
    <button
      class="button button--decrement"
      @click="decrement"
    >
      Decrement
    </button>
    <button
      class="button button--increment"
      @click="increment"
    >
      Increment
    </button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'App',
  components: {},
  data() {
    return {
      count: 0,
    }
  },
  methods: {
    decrement() {
      this.count -= 1
    },
    increment() {
      this.count += 1
    },
  },
})
</script>
