<script setup>
import { StyledHeader, StyledModeButton } from '@/styled-components/Header'
import { StyledInputBlock } from '@/styled-components/Input'
const model = defineModel()
defineProps(['showComp', 'isDark'])
defineEmits(['toggleDark', 'update:modelValue'])

// const handleChange = (event) => {
//   model.value = event.target.value
//   console.log('model: ', model)
// }
</script>

<template>
  <StyledHeader v-show="showComp">
    <a href="https://www.themoviedb.org/" target="_blank">
      <img src="@/assets/tmdblogo.png" alt="logo" width="150" />
    </a>
    <StyledInputBlock>
      <img src="@/assets/search.svg" alt="search" width="30" />

      <input v-model="model" placeholder="search" />
    </StyledInputBlock>

    <StyledModeButton @click="$emit('toggleDark', console.log(isDark))">
      <img src="@/assets/dark.svg" alt="logo" width="30" />
    </StyledModeButton>
  </StyledHeader>
</template>

<style lang="css" scoped>
a {
  outline: none;
  padding: 0.7rem 1rem 0;
}
a:hover {
  background-color: rgb(95, 97, 100);
}
input {
  border: none;
  outline: none;
  background: transparent;
  color: white;
  font-size: 1em;
  padding: 0;
}
</style>
