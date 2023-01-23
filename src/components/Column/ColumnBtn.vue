<template>
  <div
      class="flex justify-start items-center min-w-full px-2 cursor-pointer hover:font-medium transition-all"
      @click="handleAdd()"
  >
    <p class="text-blue-500">{{ props.title }}</p>
    <svg class="w-5 h-5 mt-1 stroke-blue-500" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
    </svg>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  title: string
}>()
const emit = defineEmits(['click'])

const handleAdd = () => {
  emit('click')
}
</script>

<style scoped>

</style>