<script setup>
import { ref } from 'vue'
import Header from '@/components/Header.vue'
import Main from '@/components/Main.vue'

import { useGetMovies } from '@/hooks/useGetMovies'
const { movies, flagman, showComp, handleShowComponent } = useGetMovies()
import { useDark, useToggle } from '@vueuse/core'
const isDark = useDark()
const toggleDark = useToggle(isDark)
const msg = ref('')
</script>

<template>
  <Header
    :showComp="showComp"
    @toggleDark="toggleDark"
    :isDark="isDark"
    :movies="movies"
    v-model="msg"
  />

  <Main
    :flagman="flagman"
    :movies="movies"
    :showComp="showComp"
    @handleShowComponent="handleShowComponent"
    :msg="msg"
  />
</template>
