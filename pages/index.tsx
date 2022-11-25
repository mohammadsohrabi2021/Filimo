import { Grid } from '@mui/material'
import { GetStaticPropsContext } from 'next'
import { api } from '../api/api'
import MovieCard from '../components/common/MovieCard'
import MoviesContainer from '../components/common/MoviesContainer'
import { dataCart } from '../data/dataCart'



export default function Home({movies} : {movies: {image:string}[]}) {
  console.log(movies)
  return (
    <Grid container p={2}>
      <MoviesContainer title={'ویژه'} link={'/animation'}>
        {dataCart.map(item => <MovieCard title={item.title} image={item.image}  size={'Horizontal'} />)}
      </MoviesContainer>
      <MoviesContainer title={'تازه ها'} link={'drama'}>
        {movies.slice(9, 17).map(movie => <MovieCard image={movie.image} size={'Vertical'} />)}
      </MoviesContainer>
      <MoviesContainer title={'داغ ترین ها'} link={'drama'}>
        {movies.slice(17, 25).map(movie => <MovieCard image={movie.image} size={'Vertical'} />)}
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
