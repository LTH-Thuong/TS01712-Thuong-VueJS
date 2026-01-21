<script setup>
import { useRoute } from 'vue-router'
import { computed } from 'vue'
import { posts } from '@/data/post'

const route = useRoute()

const post = computed(() => {
  return posts.find(p => p.id == route.params.id)
})

const comments = [
  'Bình An: Bài viết rất hữu ích',
  'Bình An: Cảm ơn những chia sẻ bổ ích'
]
</script>

<template>
  <div v-if="post" class="row p-4">
    <div class="col-sm-8">
      <h2 class="text-info">{{ post.title }}</h2>
      <div v-html="post.fullContent"></div>
    </div>

    <div class="col-sm-4">
      <h5>Bình luận và viết tại đây</h5>
      <textarea class="form-control mb-2"></textarea>
      <button class="btn btn-success w-100">Gửi bình luận</button>

      <h6 class="mt-3">Danh sách các bình luận:</h6>
      <ul>
        <li v-for="(c, i) in comments" :key="i">{{ c }}</li>
      </ul>
    </div>
  </div>

  <p v-else>Không tìm thấy bài viết</p>
</template>

