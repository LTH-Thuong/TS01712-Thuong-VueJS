<template>
  <div class="container mt-4">
    <div class="col-md-6">

      <h2>Bình luận bài viết</h2>

      <!-- CARD BÀI VIẾT -->
      <div class="card mb-3">
        <img src="/src/assets/images/orange_300x300.jpg" class="card-img-top" alt="Hình ảnh">

        <div class="card-body">
          <h5 class="card-title">
            8 loại rau củ quả giàu canxi
          </h5>

          <p class="card-text">
            Canxi là khoáng chất cần thiết đối với cơ thể người.
            Có nhiều cách để bổ sung canxi, trong đó bổ sung qua
            đường ăn uống là cách tốt nhất. Có 8 loại rau củ giau canxi ...
          </p>
        </div>
      </div>

      <!-- FORM COMMENT -->
      <form @submit.prevent="submitComment">
        <div class="mb-3">
          <textarea
            class="form-control"
            rows="3"
            v-model="commentText"
            placeholder="Nhập bình luận của bạn"
          ></textarea>
        </div>

        <button class="btn btn-success">
          Gửi bình luận
        </button>
      </form>

      <!-- DANH SÁCH COMMENT -->
      <div v-if="comments.length" class="mt-4">
        <h5>Danh sách các bình luận:</h5>

        <ul class="list-group">
          <li
            class="list-group-item"
            v-for="(comment, index) in comments"
            :key="index"
          >
            <strong>{{ comment.name }}</strong>:
            {{ comment.text }}
          </li>
        </ul>
      </div>

    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

/* ===== nhận dữ liệu từ component cha ===== */
const props = defineProps({
  username: String
})

/* ===== state ===== */
const commentText = ref('')
const comments = ref([])

/* ===== submit comment ===== */
function submitComment() {
  if (!commentText.value.trim()) return

  comments.value.push({
    name: props.username || 'Ẩn danh',
    text: commentText.value
  })

  commentText.value = ''
}
</script>