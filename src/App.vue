<template>
  <div class="container">
    <div class="flex justify-start my-10 overflow-x-auto">
      <ColumnComponent
        v-for="(task, index) in visibleTodos"
        :key="`${task.title}_${index}`"
        :list="task"
        :index="index"
        class="mr-6"
      />
      <div class="app__button w-60 h-8">
        <ColumnBtn
            title="Создать колонку"
            @click="onAddTodo()"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {computed} from "vue";
import {useTodos} from "@/store/todos";
import ColumnComponent from "@/components/Column/ColumnComponent.vue"
import ColumnBtn from "@/components/Column/ColumnBtn.vue"

const store = useTodos()

const visibleTodos = computed(() => store.visibleTodos)

const onAddTodo = () => {
  store.addTodo({
    title: 'Заголовок',
    tasks: []
  })
}

</script>

<style lang="scss" scoped>
.app {
  &__button {
    min-width: 168px;
  }
}
</style>
