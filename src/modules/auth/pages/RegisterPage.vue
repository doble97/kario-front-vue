<template>
  <div class="flex justify-center"></div>
  <div class="card card-compact bg-base-100 w-96 shadow-xl glass">
    <div class="card-body">
      <h2 class="card-title justify-center">Login</h2>

      <form class="join-vertical">
        <InputComponent
          class="join-item mb-2"
          :placeholder="'Username'"
          :type="InputTypes.text"
        >
          <UserIcon></UserIcon>
        </InputComponent>
        <InputComponent
          class="join-item mb-2"
          :placeholder="'Email'"
          :type="InputTypes.text"
        >
          <EmailIcon></EmailIcon>
        </InputComponent>
        <InputComponent
          class="join-item"
          placeholder="Password"
          :type="InputTypes.password"
        >
          <PasswordIcon></PasswordIcon>
        </InputComponent>
      </form>
      <div class="card-actions justify-center">
        <button class="btn btn-primary">Glass button</button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import InputComponent from '@/modules/common/components/InputComponent.vue'
import EmailIcon from '@/modules/common/icons/EmailIcon.vue'
import PasswordIcon from '@/modules/common/icons/PasswordIcon.vue'
import UserIcon from '@/modules/common/icons/UserIcon.vue'
import { InputTypes } from '@/modules/common/interfaces/input_types'
</script>

<style scoped></style>
