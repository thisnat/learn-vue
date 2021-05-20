<template>
  <h1>lab1 : <strong>axios get but vue</strong><span v-if="fetched" class="ms-3 badge bg-success">fetched</span></h1>
  <div ref="loading">loading...</div>
  <ul>
    <li v-for="comment in comments" :key="comment.id">
      <p>{{ comment.title }}</p>
    </li>
  </ul>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      comments: [],
      fetched: false,
    };
  },
  created() {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => {
        this.$refs.loading.remove();

        this.comments = res.data;
        this.fetched = true;
      })
      .catch((err) => {
        console.log(err);
      });
  },
};
</script>