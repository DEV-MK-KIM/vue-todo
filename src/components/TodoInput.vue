<template>
  <div class="inputBox shadow">
    <input ref="text" type="text" v-on:keydown.enter="addTodo" v-model="newTodoItem">
    <span class="addContainer" v-on:click="addTodo">
      <i class="fas fa-plus addBtn"></i>
    </span>
    <Modal v-if="showModal">
      <!--
        you can use custom content here to overwrite
        default content
      -->
      <h3 slot="header">
        경고
        <i class="closeModalBtn fas fa-times" @click="showModal = false"></i>
      </h3>
      <h4 slot="body">값을 입력하세요</h4>
    </Modal>
  </div>
</template>

<script>
import Modal from "./common/Modal.vue";
export default {
  data() {
    return {
      newTodoItem: "",
      showModal: false
    };
  },

  methods: {
    addTodo() {
      if (this.newTodoItem !== "") {
        //set focus on input field.
        // send event
        // this.$emit("addTodoItem", this.newTodoItem);
        this.$store.commit("addOneItem", this.newTodoItem);
        this.clearInput();
        this.$refs.text.focus();
      } else {
        this.showModal = !this.showModal;
      }
    },
    clearInput() {
      // 인풋 클리어
      this.newTodoItem = "";
    }
  },
  components: {
    Modal
  }
};
</script>

<style scoped>
input:focus {
  outline: none;
}
.inputBox {
  background: white;
  height: 50px;
  line-height: 50px;
  border-radius: 5px;
}
.inputBox input {
  border-style: none;
  font-size: 0.9rem;
}
.addContainer {
  float: right;
  background: linear-gradient(to right, #6478fb, #8763fb);
  display: block;
  width: 3rem;
  border-radius: 0 5px 5px 0;
}
.addBtn {
  color: white;
  vertical-align: middle;
}
.closeModalBtn {
  color: #43b983;
}
</style>
