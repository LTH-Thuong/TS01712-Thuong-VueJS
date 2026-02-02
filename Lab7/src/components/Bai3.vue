<template>
  <div class="container mt-4">
    <div class="row">

      <!-- ===== FORM ===== -->
      <div class="col-sm-6">
        <h4>Form Đăng Ký</h4>

        <div class="mb-3">
          <label>Họ tên:</label>
          <input class="form-control" v-model="form.name">
        </div>

        <div class="mb-3">
          <label>Email:</label>
          <input type="email" class="form-control" v-model="form.email">
        </div>

        <div class="mb-3">
          <label>Mật khẩu:</label>
          <input type="password" class="form-control" v-model="form.password">
        </div>

        <div class="mb-3">
          <label>Ngày sinh:</label>
          <input type="date" class="form-control" v-model="form.birth">
        </div>

        <div class="mb-3">
          <label>Giới tính:</label><br>

          <input type="radio" value="Nam" v-model="form.gender"> Nam
          <input type="radio" value="Nữ" v-model="form.gender"> Nữ
          <input type="radio" value="Khác" v-model="form.gender"> Khác
        </div>

        <div class="mb-3">
          <label>Ngôn ngữ:</label><br>

          <input type="checkbox" value="Tiếng Việt" v-model="form.languages"> Tiếng Việt
          <input type="checkbox" value="Tiếng Anh" v-model="form.languages"> Tiếng Anh
          <input type="checkbox" value="Tiếng Nhật" v-model="form.languages"> Tiếng Nhật
        </div>

        <button class="btn btn-primary" @click="register">
          Đăng ký
        </button>
      </div>

      <!-- ===== KẾT QUẢ ===== -->
      <div class="col-sm-6">
        <h4>Thông tin đã đăng ký:</h4>

        <p><b>Họ tên:</b> {{ result.name }}</p>
        <p><b>Email:</b> {{ result.email }}</p>
        <p><b>Ngày sinh:</b> {{ result.birth }}</p>
        <p><b>Giới tính:</b> {{ result.gender }}</p>
        <p><b>Ngôn ngữ:</b> {{ result.languages.join(', ') }}</p>
      </div>

    </div>
  </div>
</template>

<script setup>
import { reactive, ref } from 'vue'

const form = reactive({
  name: '',
  email: '',
  password: '',
  birth: '',
  gender: 'Nam',
  languages: []
})

const result = ref({
  name: '',
  email: '',
  birth: '',
  gender: '',
  languages: []
})

function register() {
  result.value = {
    name: form.name,
    email: form.email,
    birth: form.birth,
    gender: form.gender,
    languages: [...form.languages]
  }
}
</script>