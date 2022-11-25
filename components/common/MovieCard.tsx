import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import ThumbUpRoundedIcon from '@mui/icons-material/ThumbUpRounded';

import Image, {StaticImageData} from 'next/image'

interface MovieCardPropsType {
    image: string | StaticImageData,
    size: 'Horizontal' | 'Vertical'
}

const MovieCard = ({image, size}: MovieCardPropsType) => {
    return (
        <Grid item xs={size === 'Horizontal' ? 3 : 1.5} borderRadius={1} p={1}>
            <Grid position={'relative'} borderRadius={1} sx={{cursor:'pointer'}}>
                <Image width={200}
                       height={size === 'Horizontal' ? 200 : 250}
                       layout=""
                       style={{width: '100%', borderRadius: '4px'}}
                       src={image}
                       alt={'مختار جان'}
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
                        <Grid display={'flex'}>
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
                                <Typography>
                                    96%
                                </Typography>
                            </Grid>
                        </Grid>
                        <Grid color={'common.white'}>
                            <Typography>
                                مختارنامه
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default MovieCard