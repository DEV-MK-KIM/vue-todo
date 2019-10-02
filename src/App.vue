<template>
  <div id="app">
    <TodoHeader></TodoHeader>
    <TodoInput></TodoInput>
    <TodoList></TodoList>
    <TodoFooter></TodoFooter>
  </div>
</template>

<script>
import TodoHeader from "./components/TodoHeader.vue";
import TodoInput from "./components/TodoInput.vue";
import TodoList from "./components/TodoList.vue";
import TodoFooter from "./components/TodoFooter.vue";

export default {
  // data() {
  //   return {
  //     // todoItems는 모든 컴퍼넌트에서 동일하게 쓰는 데이터
  //     todoItems: []
  //   };
  // },
  
  // 실질적인 데이터 처리는 app.vue 에서 한다
  // methods: {
    // addOneItem(todoItem) {
    //   const obj = { completed: false, item: todoItem };
    //   // 로컬 스토리지 저장 (key, value)
    //   // obj를 바로 넣는 대신 stringify 메서드를 이용해서 obj값을 string으로 변환, 저장한다
    //   localStorage.setItem(todoItem, JSON.stringify(obj));
    //   // todoitems array에 저장
    //   this.todoItems.push(obj);
    //   // 로컬스토리지 저장 동시에 todoiTEMS에도 저장. 동기화.
    // },
    // removeOneItem(todoItem, index) {
    //   // 로컬스토리지에 있는 아이템을 삭제한다 (removeitem(key값)) 여기서 key값과 todoItem.item의 값은 동일
    //   localStorage.removeItem(todoItem.item);
    //   // 인덱스(index)에 위치한 아이템을 하나(1) 삭제한다
    //   this.todoItems.splice(index, 1);
    // },
    // toggleOneItem(todoItem, index) {
    //   //todoItem.completed = !todoItem.completed;
    //   // this.todoItems[index].completed = !this.todoItems[index].completed;
    //   // localStorage.removeItem(todoItem.item);
    //   // localStorage.setItem(todoItem.item, JSON.stringify(todoItem));
    // },
    // clearAllItems() {
    //   localStorage.clear();
    //   this.todoItems = [];
    // }
  // },
  
  components: {
    //컴포넌트 태그명: 컴포넌트 내용
    TodoHeader,
    TodoInput,
    TodoList,
    TodoFooter
  }
};
</script>

<style>
body {
  text-align: center;
  background-color: #f6f6f6;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
}

input {
  border-style: groove;
  width: 200px;
}
button {
  border-style: groove;
}
.shadow {
  box-shadow: 5px 10px 10px rgba(0, 0, 0, 0.3);
}
</style>

