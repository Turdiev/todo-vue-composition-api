<template>
  <div class="flex justify-between w-full h-10 bg-slate-600 rounded-t-lg text-left px-4 py-1">
    <span class="text-white font-bold ">
      <input
        ref="input"
        :value="titleInput"
        type="text"
        :disabled="editing"
        :placeholder="props.placeholder"
        class="relative block w-full appearance-none rounded-none rounded-b-md bg-transparent text-white placeholder-slate-300 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500"
        @input="handleChange"
        @blur="handleBlur"
      >
    </span>
    <Dropdowns
      color="white"
      @change="handleEdit"
      @remove="handleRemove"
    />
  </div>
</template>

<script setup lang="ts">
import {ref} from "vue";
import Dropdowns from "@/components/DropDowns.vue";

const props = defineProps<{
  index: string | number,
  title: string,
  placeholder: string
}>()
const emit = defineEmits(['update', 'remove'])

const titleInput = ref(props.title)
const editing = ref(true)
const input = ref(null)

const handleChange = (event: { target: { value: string; }; }) => (titleInput.value = event.target.value)
const handleBlur = () => {
  if(titleInput.value !== '') {
    emit('update', { id: props.index, name: titleInput.value })
  }
  else {
    titleInput.value = props.title
  }
  editing.value = true
}
const handleEdit = (isEdit: boolean) => {
  editing.value = isEdit
  let inputNode = input.value
  setTimeout(() => inputNode.focus(), 0)
}
const handleRemove = () => {
  emit('remove', props.index)
}
</script>

<style scoped>

</style>