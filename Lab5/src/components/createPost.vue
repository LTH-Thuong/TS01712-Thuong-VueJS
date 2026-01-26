<template>
    <div>
        <h2>Tao bai viet moi</h2>
        <input v-model="title" placeholder="tieu de bai viet"/>
        <input v-model="author" placeholder="ten tac gia"/>
        <textarea v-model="content" placeholder="noi dung bai viet"></textarea>
        <button @click="submitPost">Dang bai viet</button>
    </div>
</template>
<script setup>
import { ref } from 'vue';

const title = ref('');
const author = ref('');
const content = ref('');

function submitPost() {
    if(title.value && author.value && content.value) {
        const newPost = {
            title: title.value,
            author: author.value,
            content: content.value
        };
        emit('addPost', newPost);
        title.value = '';
        author.value = '';
        content.value = '';
    } 
}
</script>
<style>
input, textarea {
    display: block;
    width: 100%;
    margin: 10px 0;
    padding: 10px;
    border-radius: 5px;
    border: 1px solid #ddd;
}
button {
    padding: 10px 20px;
    background-color: #4c98af;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
}
</style>