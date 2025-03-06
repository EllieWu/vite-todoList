<script setup>
import { computed, ref } from "vue";
const tab = ref(null);
const tabList = ref([
  {
    text: "全部",
    value: "all",
  },
  {
    text: "進行中",
    value: "ing",
  },
  {
    text: "已完成",
    value: "done",
  },
]);
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
  console.log("filteredTodos",filteredTodos.value)
};

const removeTodo = (id) => {
  console.log("id", id);
  todoArray.value = todoArray.value.filter((item) => item.id !== id);
};

// **計算篩選後的待辦清單**
const filteredTodos = computed(() => {
  console.log("tab.value",tab.value)
  if (tab.value === "all") return todoArray.value;
  if (tab.value === "ing") return todoArray.value.filter((item) => !item.done);
  if (tab.value === "done") return todoArray.value.filter((item) => item.done);
  return [];
});
</script>

<template>
  <h1>TODOLIST</h1>
  <div class="flex gap-2 items-center mb-2">
    <v-text-field
      variant="outlined"
      v-model="text"
      type="text"
      hide-details="auto"
    ></v-text-field>
    <v-btn @click="addTodo">新增</v-btn>
  </div>
  <!-- <div class="flex flex-col">
    <div
      class="flex justify-between items-center"
      v-for="item in todoArray"
      :key="item.id"
    >
      <div class="flex gap-2 items-center">
        <v-checkbox
          :label="item.text"
          v-model="item.done"
          :class="{ 'line-through': item.done }"
          hide-details="auto"
        ></v-checkbox>
      </div>
      <v-btn variant="outlined" @click="removeTodo(item.id)">刪除</v-btn>
    </div>
  </div> -->
  <v-card>
    <v-tabs v-model="tab" bg-color="primary">
      <v-tab v-for="item in tabList" :key="item" :value="item.value">{{
        item.text
      }}</v-tab>
    </v-tabs>

    <v-card-text>
      <v-tabs-window v-model="tab">
        <v-tabs-window-item
          v-for="tab in tabList"
          :key="tab"
          :value="tab.value"
          ><div class="flex flex-col">
            <div
              class="flex justify-between items-center"
              v-for="item in filteredTodos"
              :key="item.id"
            >
              <div class="flex gap-2 items-center">
                <v-checkbox v-if="tab.value === 'all'"
                  :label="item.text"
                  v-model="item.done"
                  :class="{ 'line-through': item.done }"
                  hide-details="auto"
                ></v-checkbox>
                <p v-else :class="{ 'line-through': item.done }">{{ item.text }}</p>
              </div>
              <v-btn variant="outlined" @click="removeTodo(item.id)"
                >刪除</v-btn
              >
            </div>
          </div></v-tabs-window-item
        >
      </v-tabs-window>
    </v-card-text>
  </v-card>
</template>

<style scoped></style>
