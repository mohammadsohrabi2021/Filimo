import { useRef } from 'react'
import { Navigation, EffectFade } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation'
import 'swiper/css/effect-fade'
import styles from '../../styles/Slider.module.scss'
// image
import Image from 'next/image';
import image7 from '../../assets/image/image7.jpg'
import image8 from '../../assets/image/image8.jpg'
import image9 from '../../assets/image/image9.jpg'
import image10 from '../../assets/image/image10.jpg'
import image5 from '../../assets/image/image5.jpg'

import { Grid } from '@mui/material';
export default function Slider() {
    return (
        <Grid className={styles.container} xs={12}>
            <Swiper
                modules={[Navigation, EffectFade]}
                navigation
                effect={'fade'}
                speed={1000}
                slidesPerView={1}
                loop
                className={styles.myswiper}
            >
                <SwiperSlide className={styles.swiperslide}>
                    <Image className={styles.img} src={image7} alt={'image7'} />
                </SwiperSlide>
                <SwiperSlide className={styles.swiperslide}>
                    <Image className={styles.img} src={image8} alt={'image8'} />
                </SwiperSlide>
                <SwiperSlide className={styles.swiperslide}>
                    <Image className={styles.img} src={image9} alt={'image9'} />
                </SwiperSlide>
                <SwiperSlide className={styles.swiperslide}>
                    <Image className={styles.img} src={image10} alt={'image10'} />
                </SwiperSlide>
                <SwiperSlide className={styles.swiperslide}>
                    <Image className={styles.img} src={image5} alt={'image5'} />
                </SwiperSlide>
            </Swiper>
        </Grid>
    )
}
