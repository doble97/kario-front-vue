<template>
  <label class="input input-bordered flex items-center gap-2">
    <slot></slot>
    <input required :type="type" class="grow" :placeholder="placeholder" />
  </label>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { InputTypes } from '../interfaces/input_types'

interface Props {
  placeholder: string
  type: string
}
const props = defineProps<Props>()

onMounted(() => {
  console.log('Componente montado')
  console.log(props.type, typeof props.type)
  console.log(InputTypes.number)
})
</script>

<style scoped></style>
