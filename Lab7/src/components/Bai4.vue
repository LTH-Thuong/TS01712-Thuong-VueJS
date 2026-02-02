<template>
  <LoginComponent
    v-if="!isLoggedIn"
    @loggedIn="handleLogin"
  />

  <CommentComponent
    v-else
    :username="username"
  />
</template>

<script setup>
import { ref } from 'vue'
import LoginComponent from './LoginComponent.vue'
import CommentComponent from './CommentComponent.vue'

const isLoggedIn = ref(false)
const username = ref('')

function handleLogin(u) {
  username.value = u
  isLoggedIn.value = true
}
</script>