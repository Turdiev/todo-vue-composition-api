const LOCAL_STORAGE_KEY = 'todoapp_todos'
const initialData = [
    {
        title: 'Заголовок',
        tasks: []
    }
]
const localStore = JSON.parse(window.localStorage.getItem(LOCAL_STORAGE_KEY) ?? '[]')

export const loadTodos = () => localStore.length !== 0 ? localStore : initialData
export const storeTodos = (todos:Todo):void => {
    window.localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
}

interface Todo {
    title: string,
    task: object[]
}