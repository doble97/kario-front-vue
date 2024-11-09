import { defineStore } from "pinia";
import { computed, ref } from "vue";

//setup store
export const useCOunterStore = defineStore("auth", () => {
  const isLoged = ref(false);
  const email = ref("email");

  //getters
  const getEmail = computed(() => email.value);
  //actions
  const login = (value: string) => {
    email.value = value;
  };

  return { isLoged, email, getEmail, login };
});

//option store
// export const useAuthStore = defineStore("auth", {
//   state: () => ({
//     isLoged: false,
//     email: "",
//   }),
//   getters: {
//     getLog: (state) => state.isLoged,
//     getEmail: (state) => state.email,
//   },
// });
