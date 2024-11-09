import { useField } from "vee-validate";

export function useFormValidation(name: string, rules: string) {
  const { value, errorMessage, meta } = useField(name, rules);
  return { value, errorMessage, meta };
}
