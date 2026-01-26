<template>
    <div>
        <h2>Danh sach bai viet</h2>
        <div v-for="(post, index) in posts" :key="index" :class="{'highlighted': post.title.length >20}">
            <h3 class="text-success">{{ post.title }}</h3>
            <h4 class="text-danger"> {{ post.author }}</h4>
            <p>{{ post.content }}</p>
            <hr/>
    </div>
    </div>
</template>
<script setup>
import { defineProps } from 'vue';
defineProps({
    posts: {
        type: Array,
        required: true
    }
});
</script>
<style>
.post{
    padding: 20px;
    margin: 10px 0;
    border: 1px solid #ccc;
    border-radius: 10px;
}
.highlighted{
    border: 2px solid lightgray;
}
</style>