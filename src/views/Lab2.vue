<template>
  <h1>lab2 : <strong>vue crud</strong></h1>
  <div class="mt-3 container">
    <h1>todolist</h1>

    <label for="title" class="form-label">title</label>
    <input
      type="text"
      id="title"
      class="form-control"
      placeholder="title text here"
      v-model="inputTitle"
    />
    <label for="content" class="form-label">content</label>
    <input
      type="text"
      id="content"
      class="form-control"
      placeholder="content text here"
      v-model="inputText"
    />
    <button class="mt-3 btn btn-success" v-on:click="handleAddBtn">add</button>

    <div class="mt-3">
      <Todo v-for="(todo,index) in todoList" :key="todo.title" :data="todo" @handle = "handleModalBtn(todo)" @handleRemove = "handleRemove(index)"></Todo>
    </div>

    <div class="modal fade" tabindex="-1" id="myModal">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">{{modalTitle}}</h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <p>{{modalContent}}</p>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Todo from "../components/Todo";

export default {
  data() {
    return {
      todoList : [],
      inputTitle: "",
      inputText: "",
      modalTitle : "",
      modalContent : ""
    };
  },
  components: {
    Todo: Todo,
  },
  methods: {
    handleModalBtn(data) {
      this.modalTitle = data.title;
      this.modalContent = data.content;
    },
    handleRemove(index) {
      let newTodo = [...this.todoList];
      newTodo.splice(index,1);
      this.todoList = newTodo;
    },
    handleAddBtn() {
      let newTodo = [...this.todoList,{title: this.inputTitle,content: this.inputText}];
      this.todoList = newTodo;

      this.inputTitle = "";
      this.inputText = "";
    }
  },
};
</script>