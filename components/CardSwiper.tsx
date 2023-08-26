'use client';
import { useState, useEffect, useRef } from 'react';
import Card from '../components/Card'
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/free-mode';
import './styles/cardSwiper.css'



const CardSwiper = () => {
    const [slidesPerView, setSlidesPerView] = useState(2);
    const [spaceBetween, setSpaceBetween] = useState(15);
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 410) {
                setSlidesPerView(2);
            } else if (window.innerWidth < 530) {
                setSlidesPerView(3);
            } else if (window.innerWidth < 768) {
                setSlidesPerView(4);
            } else if (window.innerWidth < 1024) {
                setSlidesPerView(5);
            } else if (window.innerWidth < 1780) {
                setSlidesPerView(6);
            } else if (window.innerWidth < 2084) {
                setSlidesPerView(7);
            } else {
                setSlidesPerView(8);
            }
        };


        handleResize();
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);


    return (
        <>
            <div className="swiper-container">
                <Swiper
                    slidesPerView={slidesPerView}
                    spaceBetween={spaceBetween}
                    freeMode={true}

                    pagination={{
                        clickable: true,
                    }}
                    modules={[FreeMode]}
                    className="swiper"
                >
                    <SwiperSlide className='swiper-slide'><Card /></SwiperSlide>
                    <SwiperSlide className='swiper-slide'><Card /></SwiperSlide>
                    <SwiperSlide className='swiper-slide'><Card /></SwiperSlide>
                    <SwiperSlide className='swiper-slide'><Card /></SwiperSlide>
                    <SwiperSlide className='swiper-slide'><Card /></SwiperSlide>
                    <SwiperSlide className='swiper-slide'><Card /></SwiperSlide>
                    <SwiperSlide className='swiper-slide'><Card /></SwiperSlide>
                    <SwiperSlide className='swiper-slide'><Card /></SwiperSlide>
                    <SwiperSlide className='swiper-slide'><Card /></SwiperSlide>
                    <SwiperSlide className='swiper-slide'><Card /></SwiperSlide>
                    <SwiperSlide className='swiper-slide'><Card /></SwiperSlide>
                    <SwiperSlide className='swiper-slide'><Card /></SwiperSlide>
                </Swiper>
            </div>
        </>
    )
}

export default CardSwiper