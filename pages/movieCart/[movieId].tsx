import React from 'react'
import { Grid, Typography } from '@mui/material'
import { api } from '../../api/api'
import { GetServerSidePropsContext } from 'next'
import Image from 'next/image';
import ThumbUpRoundedIcon from '@mui/icons-material/ThumbUpRounded';
import { readBuilderProgram } from 'typescript';

export default function SingleMovie({ movies }: { movies: { title: string, image: string, imdbid: string, rank: number, genre: [] | string, director: string | [], writers: string } }) {

    return (
        <Grid width={'100%'} height={'auto'} container item xs={12} display={'flex'}  flexDirection={{ xs: 'column', sm: 'row' }}  pt={{xs:'30px'}}   px={{ xs: '0px', sm: '25px' }}bgcolor={'rgba(154,188,203,0.3)'} borderRadius={2}>
            <Grid  display={'flex'} alignItems={'center'} justifyContent={'center' } item xs={12} sm={3}>
                <Image style={{cursor:'pointer'}} src={movies.image} alt={movies.title} width={200}
                    height={250}
                    layout=""
                />
            </Grid>
            <Grid xs={12} sm={9} container item display={'flex'}alignItems={{xs:'center',sm:'flex-start'}}  flexDirection={'column'}  mb={8}pt={5}  color={'#000'} fontWeight={900} pr={2} >
                <Grid item >
                    <Typography variant='h3' fontWeight={900}>{movies.title}</Typography>
                </Grid>
                <Grid container item display={'flex'} justifyContent={{xs:'center',sm:'flex-start'}}  py={1}>
                    <Grid display={'flex'}
                    
                        alignItems={'center'}
                        justifyContent={'center'}
                        width={50}
                        height={25}
                        bgcolor={'#33BD71'}
                        sx={{ borderRadius: '0 10px 10px 0',cursor:'pointer' }}
                        color={'common.white'}>
                        <ThumbUpRoundedIcon />
                    </Grid>
                    <Grid item display={'flex'}
                        gap={2}
                        alignItems={'center'}
                        justifyContent={'center'}
                        width={120}
                        height={25}
                        bgcolor={'#1CB561'}
                        sx={{ borderRadius: '10px 0 0 10px' }}
                    >
                        <Typography color={'common.white'} >
                            %{movies.rank}
                        </Typography>
                        <Typography color={'common.white'} >
                            {movies.imdbid}
                        </Typography>
                    </Grid>
                </Grid>
                <Grid item py={2}>
                    <Typography color={'#ff9800'}  fontWeight={900}>{`مناسب برای بالای ${movies.rank} سال`}</Typography>
                </Grid>
                <Grid item display={'flex'}  flexDirection={'column'} alignItems={{xs:'center',sm:'flex-start'}} gap={2}>
                    <Typography color={'#2962ff'}  fontWeight={900}>{`کارگردان : ${movies.director}`}</Typography>
                    <Typography color={'#e65100'} textAlign={'center'}  fontWeight={900}>{`نویسنده : ${movies.writers}`}</Typography>
                </Grid>
            </Grid>
        </Grid>
    )
}

export async function getStaticPaths() {
    const allData = await api('/premiummovies')
    const movies: { rank: number }[] = allData.data

    return {
        paths: movies.map(m => ({ params: { movieId: m.rank.toString() } })),
        fallback: 'blocking'
    }
}

export async function getStaticProps(context: GetServerSidePropsContext) {
    const data = await api(`/premiummovies/top${context.params?.movieId}`)
    const movies = data.data
    console.log(movies)
    return {
        props: {
            movies
        }
    }
}
