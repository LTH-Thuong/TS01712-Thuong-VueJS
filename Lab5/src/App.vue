<script setup>
import Bai1 from './components/bai1.vue';
import Bai2 from './components/bai2.vue';
import Bai3 from './components/bai3.vue';
import CreatePost from './components/createPost.vue';
import HelloWorld from './components/HelloWorld.vue'
import PostList from './components/postList.vue';
import { ref } from 'vue';
const posts = ref([]);
function addPost(newPost) {
  posts.value.push(newPost);
}
</script>

<template>
  <div id="app">
    <h1>ung dung blog nho </h1>
    <CreatePost @add-Post="addPost" />
    <PostList :posts="posts" />
  </div>
</template>

<style scoped>
#app {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}
</style>
