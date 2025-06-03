<script setup>
import { StyledHeader, StyledModeButton } from '@/styled-components/Header'
import { StyledInputBlock, StyledInput } from '@/styled-components/Input'

defineProps(['showComp', 'isDark', 'movies'])
defineEmits(['toggleDark', 'handleChange'])
const model = defineModel()
</script>

<template>
  <StyledHeader v-show="showComp">
    <a href="https://www.themoviedb.org/" target="_blank">
      <img src="@/assets/tmdblogo.png" alt="logo" width="150" />
    </a>
    <StyledInputBlock>
      <img src="@/assets/search.svg" alt="search" width="30" />
      <StyledInput placeholder="search" borderColor="white" v-model="model" />
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
</style>
