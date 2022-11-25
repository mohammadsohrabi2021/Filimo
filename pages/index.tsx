import { Grid } from '@mui/material'
import { GetStaticPropsContext } from 'next'
import { api } from '../api/api'
import MovieCard from '../components/common/MovieCard'
import MoviesContainer from '../components/common/MoviesContainer'

import image1 from '../assets/image/flash35.jpg'
import image2 from '../assets/image/share.jpg'
import image3 from '../assets/image/image.jpg'
import image4 from '../assets/image/share.jpg'


export default function Home({movies} : {movies: {image:string}[]}) {
  console.log(movies)
  return (
    <Grid container p={2}>
      <MoviesContainer title={'ویژه'} link={'/animation'}>
        <MovieCard image={image1} size={'Horizontal'} />
        <MovieCard image={image2} size={'Horizontal'} />
        <MovieCard image={image3} size={'Horizontal'} />
        <MovieCard image={image4} size={'Horizontal'} />
      </MoviesContainer>
      <MoviesContainer title={'تازه ها'} link={'drama'}>
        {movies.slice(9, 17).map(movie => <MovieCard image={movie.image} size={'Vertical'} />)}
      </MoviesContainer>
    </Grid>
  )
}
export async function getStaticProps(context: GetStaticPropsContext) {
  const data = await api('/premiummovies')
  const movies = data.data
  return {
    props: {
      movies
    },
  }
}
