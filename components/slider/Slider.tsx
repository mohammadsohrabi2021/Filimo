import { useCallback, useEffect, useRef, useState } from 'react'

import { Swiper, SwiperSlide } from 'swiper/react';
import { dataSlider } from '../../data/dataSlider';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
// Import Swiper styles
import 'swiper/css';
// import 'swiper/css/navigation'
// import 'swiper/css/effect-fade'
import styles from '../../styles/Slider.module.scss'
// image
import Image from 'next/image';
import { Button, Grid } from '@mui/material';

export default function Slider() {
    const [page, setPage] = useState(0)
    const swiperRef = useRef<any>(null)

    const handleNextSlide = useCallback(() => {
        page === dataSlider.length + 1 ? setPage(prev => 0) : setPage(prev => prev + 1)
    }, [page])
    const handlePrevSlide = useCallback(() => {
        page === 0 ? setPage(dataSlider.length - 1) : setPage(prev => prev - 1)
    }, [page])
    useEffect(()=>{
        swiperRef.current.swiper.slideTo(page)
    },[page])

    return (
        <Grid container item className={styles.container} xs={12} >
            <Swiper ref={swiperRef}>
                {dataSlider.map(slide => (<SwiperSlide key={slide.id}>
                    <Grid  width={'100%'} height={400} position={'relative'}>
                        <Image style={{ width: '100%', height: '100%' }} src={slide.image} alt={slide.title} />
                        <Grid display={{ xs: 'none', md: 'flex' }} bottom={50} left={80} position={'absolute'}>
                            <Grid display={'flex'} alignItems={'center'} justifyContent={'center'} width={40} height={40} bgcolor={'common.black'} borderRadius={'50%'} color={'common.white'}>
                                <Button onClick={handleNextSlide}><ArrowForwardIosIcon /></Button>
                            </Grid>
                            <Grid display={'flex'} alignItems={'center'} justifyContent={'center'} width={40} height={40} bgcolor={'common.black'} borderRadius={'50%'} color={'common.white'}>
                                <Button onClick={handlePrevSlide}><ArrowBackIosIcon /></Button>
                            </Grid>
                        </Grid>
                    </Grid>
                </SwiperSlide>))}
                {/* <SwiperSlide className={styles.swiperslide}>
                    <Grid width={'100%'} height={400} position={'relative'}>
                        <Image className={styles.img} src={ } alt={'slideimage1'} />
                        <Grid display={'flex'} bottom={50} left={80} position={'absolute'}>

                        </Grid>
                    </Grid>
                </SwiperSlide> */}
                {/* <SwiperSlide className={styles.swiperslide}>
                    <Image className={styles.img} src={image8} alt={'slideimage2'} />
                </SwiperSlide>
                <SwiperSlide className={styles.swiperslide}>
                    <Image className={styles.img} src={image9} alt={'slideimage3'} />
                </SwiperSlide>
                <SwiperSlide className={styles.swiperslide}>
                    <Image className={styles.img} src={image10} alt={'slideimage4'} />
                </SwiperSlide>
                <SwiperSlide className={styles.swiperslide}>
                    <Image className={styles.img} src={image5} alt={'slideimage5'} />
                </SwiperSlide> */}
            </Swiper>
        </Grid>
    )
}
