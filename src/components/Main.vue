<script setup>
import { ref, watchEffect } from 'vue'
import { StyledMain } from '@/styled-components/Main'
import {
  StyledFlagman,
  StyledRatingBlock,
  StyledSubRatingBlock,
  StyledTitle,
} from '@/styled-components/Flagman'
import {
  StyledList,
  StyledListItem,
  StyledRatingBlockItem,
  StyledText,
} from '@/styled-components/MovieList'
import { SRC_URL } from '@/constants'
const props = defineProps(['flagman', 'movies', 'showComp', 'msg'])
defineEmits(['handleShowComponent'])
const moviesFound = ref([])

const handleSearch = () => {
  moviesFound.value = props.movies.filter((movie) => movie.title.toLowerCase().includes(props.msg))
  console.log('moviesFound: ', moviesFound.value)
  console.log(
    'movies: ',
    props.movies.filter((movie) => movie.title.toLowerCase().includes(props.msg)),
  )
  console.log(props.msg)
}
watchEffect(() => {
  // `foo` transformed to `props.foo` by the compiler
  handleSearch()
})
</script>

<template>
  <StyledMain v-show="showComp">
    <router-link :to="'/movie/' + flagman.id" @click="$emit('handleShowComponent')">
      <StyledFlagman>
        <StyledRatingBlock>
          <img src="@/assets/pioneer.png" alt="rating" width="70" />
          <StyledSubRatingBlock>
            <img src="@/assets/rating.svg" alt="rating" width="35" />
            <StyledTitle>{{ flagman.popularity }}</StyledTitle>
          </StyledSubRatingBlock>
        </StyledRatingBlock>
        <img :src="SRC_URL + '/' + 'w500' + '/' + flagman.poster_path" alt="poster" />
      </StyledFlagman>
    </router-link>

    <StyledList v-show="showComp">
      <StyledListItem v-for="{ id, overview, poster_path, popularity } in moviesFound" :key="id">
        <router-link :to="'/movie/' + id" @click="$emit('handleShowComponent')">
          <StyledText>{{ overview }}</StyledText>
          <img :src="SRC_URL + '/' + 'w300' + '/' + poster_path" alt="poster" />
          <StyledRatingBlockItem>
            <img src="@/assets/rating.svg" alt="rating" width="25" />
            <p>{{ popularity }}</p>
          </StyledRatingBlockItem>
        </router-link>
      </StyledListItem>
    </StyledList>
  </StyledMain>
  <router-view />
</template>
