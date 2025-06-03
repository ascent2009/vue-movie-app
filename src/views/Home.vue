<script setup>
import Header from '@/components/Header.vue'
import Main from '@/components/Main.vue'
import { ref } from 'vue'

import { useGetMovies } from '@/hooks/useGetMovies'
const { movies, flagman, showComp, handleShowComponent } = useGetMovies()
import { useDark, useToggle } from '@vueuse/core'
const isDark = useDark()
const toggleDark = useToggle(isDark)
const model = ref('')
const search = ref([])
// const inputValue = ref('')
const handleChange = (event) => {
  model.value = event.target.value
  console.log(model.value)
  const searchResult = movies.filter((movie) =>
    !model.value ? null : movie.title.toLowerCase().includes(model.value),
  )
  search.value = searchResult
  // console.log(search)
}
</script>

<template>
  <Header
    :showComp="showComp"
    @toggleDark="toggleDark"
    :isDark="isDark"
    :movies="movies"
    :search="search"
    @handleChange="handleChange"
  />
  <Main
    :flagman="flagman"
    :movies="movies"
    :search="search"
    :showComp="showComp"
    @handleShowComponent="handleShowComponent"
  />
</template>
