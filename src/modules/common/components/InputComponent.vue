<template>
  <label class="input input-bordered flex items-center gap-2 join-item">
    <slot></slot>
    <input
      :type="type"
      :placeholder="placeholder"
      :value="inputValue"
      :name="name"
      @input="handleChange"
      @blur="handleBlur"
    />
  </label>
  <span v-if="errorMessage && meta.touched" class="text-pink-900">{{
    errorMessage
  }}</span>
</template>

<script setup lang="ts">
import { useField } from 'vee-validate'
import { toRef } from 'vue'

interface Props {
  placeholder: string
  type?: string
  value?: string
  name: string
}

const props = withDefaults(defineProps<Props>(), {
  type: 'text',
  value: undefined,
})

const name = toRef(props, 'name')

const {
  value: inputValue,
  errorMessage,
  meta,
  handleChange,
  handleBlur,
} = useField(name, undefined, { initialValue: props.value })
</script>
import * as yup from 'yup'

<style scoped></style>
