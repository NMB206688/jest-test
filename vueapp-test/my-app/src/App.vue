<template>
  <div id="app">
  <img alt="Vue logo" src="./assets/logo.png">
  <MessageComponent msg="This is my first VUE app!"  />
  </div>
</template>

<script>
import MessageComponent from './compoents/MessageComponent.vue'

export default {
  name: 'App',
  components: {
    MessageComponent
  }
}
</script>
