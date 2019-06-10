export const state = () => ({
  todoList: [
    {
      id: 1,
      name: 'hello',
      status: 'done'
    },
    {
      id: 2,
      name: 'world',
      status: 'undone'
    }
  ]
})

export const mutations = {
  removeTodo(state, id) {
    state.todoList = state.todoList.filter(item => item.id !== id)
  },
  addTodo(state, name) {
    const id = state.todoList[state.todoList.length - 1].id + 1
    state.todoList = [...state.todoList, { id, name, status: 'undone' }]
  }
}
