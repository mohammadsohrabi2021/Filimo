import { Grid } from '@mui/material'
import { GetStaticPropsContext } from 'next'
import { api } from '../api/api'
import MovieCard from '../components/common/MovieCard'
import MoviesContainer from '../components/common/MoviesContainer'
import { dataCart } from '../data/dataCart'
import Slider from '../components/slider/Slider'


export default function Home({ movies }: { movies: { image: string, title: string, rating: string, year: number }[] }) {
  console.log(movies)
  return (
    <>
      <Slider/>
    <Grid container p={2} >
      <MoviesContainer title={'ویژه'} link={'/animation'}>
        <Grid display={'flex'} gap={1} sx={{ overflow: 'auto' }}>
          {dataCart.map(item => <MovieCard title={item.title} image={item.image} rating={item.rating} year={item.year} size={'Horizontal'} />)}
        </Grid>
      </MoviesContainer>
      <MoviesContainer title={'تازه ها'} link={'drama'}>
        <Grid display={'flex'} gap={1} sx={{ overflow: 'auto' }}>
          {movies.slice(9, 17).map(movie => <MovieCard image={movie.image} title={movie.title} rating={movie.rating} year={movie.year} size={'Vertical'} />)}
        </Grid>
      </MoviesContainer>
      <MoviesContainer title={'داغ ترین ها'} link={'drama'}>
        <Grid display={'flex'} gap={1} sx={{ overflow: 'auto' }}>
          {movies.slice(17, 25).map(movie => <MovieCard image={movie.image} title={movie.title} rating={movie.rating} year={movie.year} size={'Vertical'} />)}
        </Grid>
      </MoviesContainer>
    </Grid>
    </>
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
