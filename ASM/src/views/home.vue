<template>
  <div>
    <section class="row">
                <div class="col-sm-4">
                    <h3 class="text-info mt-2">Danh mục</h3>
                    <ul class="list-group">
                        <li class="list-group-item d-flex justify-content-between align-items-center">
                            <a class="nav-link" href="#">Danh mục 1</a>
                            <span class="badge bg-primary rounded-pill"></span>
                        </li>

                        <li class="list-group-item d-flex justify-content-between align-items-center">
                            <a class="nav-link" href="#">Danh mục 2</a>
                            <span class="badge bg-primary rounded-pill"></span>
                        </li>

                        <li class="list-group-item d-flex justify-content-between align-items-center">
                            <a class="nav-link" href="#">Danh mục 3</a>
                            <span class="badge bg-primary rounded-pill"></span>
                        </li>
                    </ul>
                </div>
                <div class="col-sm-8 p-5">
                  <h3>Danh sách bài viết</h3>

    <div class="card mb-3" v-for="post in posts" :key="post.id">
  <router-link
    :to="`/detail/${post.id}`"
    class="text-decoration-none text-dark"
  >
    <div class="card-body">
      <h5 class="card-title">{{ post.title }}</h5>
      <p class="card-text">{{ post.content }}</p>
    </div>
  </router-link>
</div>
  </div>
    </section>
  </div>
</template>
<script setup>
import { posts } from '@/data/post'
</script>

