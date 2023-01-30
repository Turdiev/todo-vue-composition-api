import { defineStore } from 'pinia'

export const useTodos = defineStore('todos', {

    state: () => ({
        todoList: [] as ToDo[]
    }),

    getters: {
      visibleTodos(state):ToDo[] {
          return state.todoList
      }
    },

    actions: {
        initTodos(localTodo: ToDo[]) {
          this.todoList = localTodo
        },

        addTodo(todo: ToDo) {
            this.todoList.push(todo)
        },

        updateTodo(todo: Tasks) {
            this.todoList[todo.id].title = todo.name
        },

        removeTodo(id: number) {
            this.todoList.splice(id, 1)
        },

        addTask(index: number, task: Tasks) {
            this.todoList[index].tasks.push(task)
        },

        updateTask(task: any) {
            this.todoList[task.index].tasks[task.id].name = task.name
        },

        removeTask(index:number, taskId: number) {
            this.todoList[index].tasks.splice(taskId, 1)
        }
    }
})

interface ToDo {
    title: string,
    tasks: Tasks[]
}

interface Tasks {
    id: number
    name: string
}