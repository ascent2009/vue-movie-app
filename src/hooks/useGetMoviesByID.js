import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'
import axios from 'axios'
import { API_KEY, BASE_URL } from '@/constants'

export const useGetMoviesByID = () => {
  const route = useRoute()
  const movieID = ref(null)
  const movie = ref({})

  const fetchMovie = async (id) => {
    try {
      const response = await axios.get(`${BASE_URL}/movie/${id}?api_key=${API_KEY}`)
      movie.value = await response.data
      console.log('movie: ', movie)
    } catch (e) {
      console.error('Error fetching data from TMDB: ', e)
    }
  }

  onMounted(() => {
    movieID.value = route.params.id
    console.log(movieID)
    fetchMovie(route.params.id)
  })

  return { movie }
}
