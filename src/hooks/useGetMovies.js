import { onMounted, ref } from 'vue'
import axios from 'axios'

import { API_KEY, BASE_URL } from '@/constants'

export const useGetMovies = () => {
  const movies = ref([])
  const flagman = ref({})
  const showComp = ref(true)

  const fetchPopularMovies = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/movie/popular?api_key=${API_KEY}`)
      movies.value = await response.data.results
      flagman.value = await response.data.results[0]
    } catch (e) {
      console.error('Error fetching data from TMDB: ', e)
    }
  }

  const handleShowComponent = () => {
    showComp.value = !showComp.value
  }

  onMounted(() => {
    fetchPopularMovies()
  })
  return { movies, flagman, showComp, handleShowComponent }
}
