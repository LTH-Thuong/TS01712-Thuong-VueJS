<template>
  <div class="col-md-4 mx-auto">
    <h3 class="text-center">Đăng nhập</h3>

    <form @submit.prevent="login">
      <input v-model="email" class="form-control mb-2" placeholder="Email">
      <input v-model="password" type="password" class="form-control mb-2" placeholder="Password">
      <button class="btn btn-dark w-100">Login</button>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const email = ref('')
const password = ref('')

const login = () => {
  alert(`Login với email: ${email.value}`)
}
</script>
