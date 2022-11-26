import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import ThumbUpRoundedIcon from '@mui/icons-material/ThumbUpRounded';

import Image, {StaticImageData} from 'next/image'

interface MovieCardPropsType {
    image: string | StaticImageData,
    size: 'Horizontal' | 'Vertical',
    title:string |any,
    rating:string,
    year:number
}

const MovieCard = ({image, size,title,rating,year}: MovieCardPropsType) => {
    return (
        <Grid  item   display={'flex'} xs={size === 'Vertical' ? 3: 6} borderRadius={1} >
            <Grid position={'relative'} borderRadius={1} sx={{cursor:'pointer'}} width={size === 'Vertical' ? 200 : 200}>
                <Image width={200}
                       height={size === 'Horizontal' ? 250 : 250}
                       layout=""
                       style={{width: '100%', borderRadius: '4px'}}
                       src={image}
                       alt={'image'}
                />
                <Grid position={'absolute'}
                      top={0}
                      bgcolor={'common.black'}
                      width={'100%'}
                      height={'99%'}
                      sx={{opacity: '0', '&:hover': {opacity: '0.6'}}}
                      borderRadius={1}
                >
                    <Grid display={'flex'}
                          flexDirection={'column'}
                          justifyContent={'flex-end'}
                          p={2} height={'100%'}>
                        <Grid display={'flex'}py={1}>
                            <Grid display={'flex'}
                                  alignItems={'center'}
                                  justifyContent={'center'}
                                  width={40}
                                  height={30}
                                  bgcolor={'#E0E0E0'}
                                  sx={{borderRadius: '0 10px 10px 0'}}>
                                <ThumbUpRoundedIcon/>
                            </Grid>
                            <Grid display={'flex'}
                                  alignItems={'center'}
                                  justifyContent={'center'}
                                  width={40}
                                  height={30}
                                  bgcolor={'gray'}
                                  sx={{borderRadius: '10px 0 0 10px'}}
                            >
                                <Typography color={'common.white'}>
                                    {rating}%
                                </Typography>
                            </Grid>
                        </Grid>
                        <Grid color={'common.white'}>
                            <Typography pb={1}>
                               {title}
                            </Typography>
                            <Typography>
                               {year}
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default MovieCard