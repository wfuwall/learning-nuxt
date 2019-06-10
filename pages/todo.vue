<template>
  <div class="todo-area">
    <div class="todo-area-top">
      <input v-model="todoName" type="text" class="todo-area-top-input" />
      <button class="todo-area-top-btn" @click="bindAddTodo">添加</button>
    </div>
    <ul class="todo-area-list">
      <li v-for="todo in todoList" :key="todo.id" class="todo-area-list-item">
        <span>{{ todo.name }}</span>
        <span class="close-btn" @click="bindRemoveTodo(todo.id)">X</span>
      </li>
    </ul>
  </div>
</template>
<script>
import { mapMutations } from 'vuex'
export default {
  data() {
    return {
      todoName: ''
    }
  },
  computed: {
    todoList() {
      // 获取vuex下todo命名空间下的todoList变量
      return this.$store.state.todo.todoList
    }
  },
  methods: {
    ...mapMutations({
      removeTodo: 'todo/removeTodo',
      addTodo: 'todo/addTodo'
    }),
    bindAddTodo() {
      if (!this.todoName) return
      this.addTodo(this.todoName)
      this.todoName = ''
    },
    bindRemoveTodo(id) {
      this.removeTodo(id)
    }
  }
}
</script>
<style lang="less" scoped>
.todo-area {
  margin: 20px auto;
  padding: 10px;
  width: 300px;
  height: 400px;
  background: #f4f4f4;
  box-sizing: border-box;
  &-top {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 35px;
    width: 100%;
    &-input {
      flex-grow: 1;
      border: 1px solid #ccc;
      padding-left: 10px;
      height: 100%;
      box-sizing: border-box;
      border-radius: 5px;
      outline: none;
    }
    &-btn {
      flex-shrink: 0;
      margin-left: 10px;
      border: 1px solid #666;
      padding: 0;
      height: 100%;
      width: 40px;
      line-height: 35px;
      text-align: center;
      box-sizing: border-box;
      background: #4291fe;
      border-radius: 4px;
      color: #fff;
      outline: none;
    }
  }
  &-list {
    display: flex;
    flex-direction: column;
    margin-top: 20px;
    border: 1px solid #ccc;
    width: 100%;
    box-sizing: border-box;
    &-item {
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-bottom: 1px solid #ccc;
      padding: 0 10px;
      height: 40px;
      background: #fff;
      box-sizing: border-box;
      &:last-child {
        border: none;
      }
      .close-btn {
        position: relative;
        font-size: 12px;
        color: red;
        &::after {
          position: absolute;
          content: '';
          left: -5px;
          top: -5px;
          right: -5px;
          bottom: -5px;
        }
      }
    }
  }
}
</style>
