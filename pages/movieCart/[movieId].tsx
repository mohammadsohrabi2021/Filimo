import React from 'react'
import { Grid } from '@mui/material'
import { api } from '../../api/api'
import { GetServerSidePropsContext } from 'next'
import Image from 'next/image';

export default function SingleMovie({movies}:{ movies:{title:string,image:string}}) {
console.log(movies);
    return (
        <Grid>
           <Image src={movies.image} alt={movies.title} width={200}
                       height={250}
                       layout=""
                       />
           {/* {movies.title} */}
        </Grid>
    )
}

export async function getStaticPaths(){
    const allData = await api('/premiummovies')
    const movies:{rank:number}[] =allData.data

    return {
        paths:movies.map(m=>({params:{movieId:m.rank.toString()}})),
        fallback: false
    }
}

export async function getStaticProps(context:GetServerSidePropsContext) {
    const data = await api(`/premiummovies/top${context.params?.movieId}`)
    const movies =data.data
    console.log(movies)
    return {
        props: {
            movies
        }
    }
}
