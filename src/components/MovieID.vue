<script setup>
import { useGetMoviesByID } from '@/hooks/useGetMoviesByID'
import { useGetMovies } from '@/hooks/useGetMovies'
import {
  StyledMovie,
  StyledBackLink,
  StyledMovieContentBlock,
  StyledMovieContent,
  StyledTitle,
  StyledURL,
  StyledSlogan,
  StyledList,
  StyledListItem,
} from '@/styled-components/Movie'
const { movie } = useGetMoviesByID()
const { handleShowComponent } = useGetMovies()
import { SRC_URL } from '@/constants'
</script>

<template>
  <StyledMovie>
    <StyledBackLink href="/home" @click="handleShowComponent" :key="$route.fullPath">
      < Back to Main Page</StyledBackLink
    >
    <StyledSlogan>{{ movie.tagline }}</StyledSlogan>
    <StyledMovieContentBlock>
      <img :src="SRC_URL + '/' + 'w500' + '/' + movie.poster_path" alt="poster" />

      <StyledMovieContent>
        <StyledTitle>
          <!-- The current route is accessible as $route in the template -->

          {{ movie.overview }}
        </StyledTitle>

        <StyledURL :href="movie.homepage" target="_blank">"{{ movie.title }}" web-page</StyledURL>
        <StyledList>
          Genres:
          <StyledListItem v-for="{ name } in movie.genres" :key="name"> {{ name }}</StyledListItem>
        </StyledList>
        <StyledList>
          Country:
          <StyledListItem v-for="{ name } in movie.production_countries" :key="name">
            {{ name }}
          </StyledListItem>
        </StyledList>
        <StyledTitle>Release date: {{ movie.release_date }}</StyledTitle>
        <StyledTitle v-if="budget">Budget: ${{ movie.budget }}</StyledTitle>
        <StyledTitle v-if="revenue">Revenue: ${{ movie.revenue }}</StyledTitle>
        <StyledTitle>Runtime: {{ movie.runtime }} min</StyledTitle>
        <StyledList>
          <StyledListItem v-for="{ name, logo_path } in movie.production_companies" :key="name">
            <img
              v-if="logo_path"
              :src="SRC_URL + '/' + 'w200' + '/' + logo_path"
              alt="company's logo"
              :title="name"
            />
          </StyledListItem>
        </StyledList>
      </StyledMovieContent>
    </StyledMovieContentBlock>
  </StyledMovie>

  <router-view />
</template>
