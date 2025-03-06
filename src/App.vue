<script setup>
import { ref } from "vue";
const todoArray = ref([
  {
    id: "1",
    text: "未完成1",
    done: false,
  },
]);
const text = ref("");
const addTodo = () => {
  todoArray.value.push({
    id: crypto.randomUUID(),
    text: text.value,
    done: false,
  });
  text.value = "";
};

const removeTodo = () =>{
  
}
const changeState = (id) =>{
  const todo = todoArray.value.find((item =>{
    return item.id === id
  }))
  todo.value.done
  console.log("todo:",todo);
}
</script>

<template>
  <h1>TODOLIST</h1>
  <div class="flex gap-2">
    <input type="text" v-model="text" />
    <button @click="addTodo">新增</button>
  </div>
  <div class="flex flex-col">
    <div class="flex justify-between items-center" v-for="item in todoArray" :key="item.id">
      <div class="flex gap-2">
        <input type="checkbox" v-model="item.done" @click="changeState(item.id)">
        <label :id='item.id' :class="{ 'line-through': item.done }">{{ item.text }}</label>
      </div>
      <button @click="removeTodo">刪除</button>
    </div>
  </div>
</template>

<style scoped></style>
