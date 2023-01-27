<template>
  <div class="flex justify-between task bg-gray-300 rounded-lg mt-2 px-2 transition ease-in-out hover:bg-gray-400">
    <div class="w-48 h-full ">
      <span
        v-if="editing"
        class="block px-3 py-2 text-gray-900 whitespace-normal sm:text-sm"
        @dblclick="handleEdit(false)"
      >
          {{ props.name }}
      </span>
      <input
        v-show="!editing"
        ref="input"
        :value="nameInput"
        type="text"
        :disabled="editing"
        placeholder="Введите название задачи ..."
        class="relative block w-full appearance-none rounded-none rounded-b-md bg-transparent px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
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
  name: string,
  taskID: number,
  index: number
}>()
const emit = defineEmits(['update', 'remove'])

const nameInput = ref(props.name)
const editing = ref(true)
const input = ref(null)

const handleChange = (event: { target: { value: string; }; }) => (nameInput.value = event.target.value)
const handleBlur = () => {
  if(nameInput.value !== '') {
    emit('update',  {index:props.index, name: nameInput.value, id: props.taskID })
  }
  else {
    nameInput.value = props.name
  }
  editing.value = true
}
const handleRemove = () => {
  emit('remove', {index:props.index, taskID:props.taskID})
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