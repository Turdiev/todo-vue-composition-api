import { defineStore } from 'pinia'

export const useTodos = defineStore('todos', {

    state: () => ({
        todoList: [
            {
                title: 'Заголовок',
                tasks: [
                    {
                        name: 'Введите название'
                    }
                ]
            },
        ]
    }),

    getters: {
      visibleTodos(state) {
          return state.todoList
      }
    },

    actions: {
        addTodo(todo: ToDo) {
            this.todoList.push(todo)
        },

        updateTodo(todo: any) {
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
    tasks: []
}

interface Tasks {
    name: string
}