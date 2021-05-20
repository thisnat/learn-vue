<template>

  <div class="card my-3">
    <div class="card-body">
      <h2 class="card-title" ref="titleTd">{{ data.title }}</h2>
      <h4 class="card-text">
        {{ data.content }}
      </h4>
      <div style="float: right">
        <button :disabled="this.done" class="me-3 btn btn-success" v-on:click="handleDoneBtn">
          done
        </button>
        <button class="me-3 btn btn-primary" data-bs-toggle="modal" data-bs-target="#myModal" v-on:click="handleInfoBtn">
          info
        </button>
        <button class="btn btn-danger" v-on:click="handleRemoveBtn">
          remove
        </button>
      </div>
    </div>
  </div>

</template>

<script>

export default {
  data() {
    return {
      done : false
    };
  },
  methods: {
    handleInfoBtn(e) {
      e.preventDefault();

      this.$emit('handle');
    },
    handleRemoveBtn(e) {
      e.preventDefault();

      this.$emit('handleRemove');
    },
    handleDoneBtn(e) {
      e.preventDefault();

      this.done = true;
      this.$refs.titleTd.innerHTML = `✔️ ${this.$refs.titleTd.innerHTML}`
    }
  },
  props: ["data"],
};
</script>