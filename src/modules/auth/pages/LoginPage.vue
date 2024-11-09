<template>
  <div class="flex justify-center"></div>
  <div class="card card-compact bg-base-100 w-96 shadow-xl glass">
    <div class="card-body">
      <h2 class="card-title justify-center">Login</h2>

      <Form
        @submit="onSubmit"
        @invalid-submit="onInvalidSubmit"
        :validation-schema="schema"
        class="join join-vertical gap-2"
      >
        <InputComponent :placeholder="'Email'" name="email">
          <EmailIcon></EmailIcon>
        </InputComponent>
        <InputComponent
          placeholder="Password"
          :type="InputTypes.password"
          name="password"
        >
          <PasswordIcon></PasswordIcon>
        </InputComponent>
        <div class="card-actions justify-center">
          <button class="btn btn-primary">Glass button</button>
        </div>
      </Form>
    </div>
  </div>
</template>

<script setup lang="ts">
import InputComponent from '@/modules/common/components/InputComponent.vue'
import EmailIcon from '@/modules/common/icons/EmailIcon.vue'
import PasswordIcon from '@/modules/common/icons/PasswordIcon.vue'
import { InputTypes } from '@/modules/common/interfaces/input_types'
import { Form } from 'vee-validate'
import { object, string } from 'yup'

const schema = object().shape({
  email: string().email().required(),
  password: string().min(8).required(),
})

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const onSubmit = (values: any) => {
  console.log('valores introducidos', values)
}

const onInvalidSubmit = () => {}
</script>

<style scoped></style>
