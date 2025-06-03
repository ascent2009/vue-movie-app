<script setup>
import { StyledMain } from '@/styled-components/Main'
import { StyledFlagman, StyledRatingBlock, StyledTitle } from '@/styled-components/Flagman'
import {
  StyledList,
  StyledListItem,
  StyledRatingBlockItem,
  StyledText,
} from '@/styled-components/MovieList'
import { SRC_URL } from '@/constants'
defineProps(['flagman', 'movies', 'showComp'])
defineEmits(['handleShowComponent'])
</script>

<template>
  <StyledMain v-show="showComp">
    <router-link :to="'/movie/' + flagman.id" @click="$emit('handleShowComponent')">
      <StyledFlagman>
        <StyledRatingBlock>
          <img src="@/assets/rating.svg" alt="rating" width="35" />
          <StyledTitle>{{ flagman.popularity }}</StyledTitle>
        </StyledRatingBlock>
        <img :src="SRC_URL + '/' + 'w500' + '/' + flagman.poster_path" alt="poster" />
      </StyledFlagman>
    </router-link>

    <StyledList v-show="showComp">
      <StyledListItem v-for="{ id, overview, poster_path, popularity } in movies" :key="id">
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
