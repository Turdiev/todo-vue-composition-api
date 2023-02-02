<template>
  <div
      class="flex justify-between task bg-gray-400 rounded-lg mt-2 px-2 pt-2 transition-all hover:bg-slate-400"
      :class="{'bg-gray-500': props.task.completed}"
  >
    <div
        class="cursor-pointer"
        @click="handleCompleted"
    >
      <svg class="w-6 h-6" :class="{'stroke-green-600': props.task.completed}" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    </div>
    <div class="w-48 h-full ">
      <span
        v-if="editing"
        class="block px-3 text-gray-900 whitespace-normal cursor-pointer sm:text-base"
        :class="{'line-through text-gray-600': props.task.completed}"
        @dblclick="handleEdit(false)"
      >
          {{ props.task.name }}
      </span>
      <input
        v-show="!editing"
        ref="input"
        :value="nameInput"
        type="text"
        :disabled="editing"
        placeholder="Введите название задачи ..."
        class="relative block w-full appearance-none rounded-none text-white rounded-b-md bg-transparent px-3 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-base"
        @input="handleChange"
        @blur="handleBlur"
      />
    </div>
    <DropDowns
      :key="taskID"
      color="black"
      @change="handleEdit"
      @remove="handleRemove"
    />
  </div>
</template>
<script setup lang="ts">
import {ref} from "vue";
import DropDowns from "@/components/DropDowns.vue";

const props = defineProps<{
  task: {
    name: string,
    completed: boolean
  },
  taskID: number,
  index: number
}>()
const emit = defineEmits(['update', 'remove'])

const nameInput = ref(props.task.name)
const editing = ref(true)
const input = ref(null)

const handleChange = (event: { target: { value: string; }; }) => (nameInput.value = event.target.value)
const handleBlur = () => {
  if(nameInput.value !== '') {
    emit('update',  {
      index:props.index,
      id: props.taskID,
      name: nameInput.value,
      completed: props.task.completed
    })
  }
  else {
    nameInput.value = props.task.name
  }
  editing.value = true
}
const handleRemove = () => {
  emit('remove', {index:props.index, taskID:props.taskID})
}
const handleCompleted = () => {
  emit('update',  {
    index:props.index,
    id: props.taskID,
    name: props.task.name,
    completed: !props.task.completed
  })
}
const handleEdit = (isEdit: boolean) => {
  editing.value = isEdit
  let inputNode = input.value
  setTimeout(() => inputNode.focus(), 0)
}
</script>

<style scoped>
.task {
  width: 100%;
  height: 100%;
  min-height: 80px;
}
</style>