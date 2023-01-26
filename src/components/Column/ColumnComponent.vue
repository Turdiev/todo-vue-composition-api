<template>
  <div class="bg-gray-200 shadow-lg rounded-lg column">
    <ColumnHead
      :index="props.index"
      :title="props.list.title"
      placeholder="Введите название ..."
      @update="handleUpdateHead"
      @remove="handleRemoveColumn"
    />
    <div class="column__wrapper">
      <div class="flex flex-col items-center px-2">
        <ColumnBtn
          title="Добавить"
          @click="onAddTask"
        />
        <Draggable
            :list="props.list.tasks"
            group="task"
            itemKey="id"
            ghost-class="ghost"
            class="list-group"
        >
          <template #item="{ element, index }">
            <ColumnTask
              :name="element.name"
              :taskID="index"
              :index="props.index"
              class="list-group-item move-draggable"
              @update="handleUpdateTask"
              @remove="handleRemoveTask"
            />
          </template>
        </Draggable>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

import {useTodos} from "@/store/todos";
import ColumnTask from "@/components/Column/ColumnTask.vue";
import ColumnBtn from "@/components/Column/ColumnBtn.vue";
import ColumnHead from "@/components/Column/ColumnHead.vue";
import Draggable from "vuedraggable";

interface Props {
  list: {
    index: string | number,
    title: string,
    tasks: string[] | number[]
  }
  index: number
}
const props = defineProps<Props>()

const store = useTodos()
const onAddTask = () => {
  store.addTask(props.index,{
    id: Math.floor(100 + Math.random() * 900),
    name: 'Введите название'
  })
}
const handleUpdateHead = (todo: any) => {
  store.updateTodo(todo)
}

const handleRemoveColumn = (id:number) => {
  store.removeTodo(id)
}

const handleUpdateTask = (task: any) => {
  store.updateTask(task)
}

const handleRemoveTask = (task: any) => {
  store.removeTask(task.index, task.taskId)
}
</script>

<style lang="scss" scoped>
.column {
  min-width: 16rem;
  height: calc(100vh - 80px);

  &__wrapper {
    height: calc(100% - 56px);
    overflow: auto;
  }
}

.ghost {
  background: #c8ebfb;
  opacity: 0.5;
}

.move-draggable {
  cursor: move;
}
</style>