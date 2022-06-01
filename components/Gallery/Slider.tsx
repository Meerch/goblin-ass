import React, {useEffect, useState} from 'react'
import {Swiper, SwiperSlide, useSwiper} from "swiper/react";
import {Autoplay} from "swiper";
import {delay} from "rxjs/operators";


const Slider = () => {
    const [isMobile, setIsMobile] = useState(true)
    const swiper = useSwiper()

    useEffect(() => {
        if (window !== undefined && window) {
            const widthScreen = window.screen.width
            setIsMobile(widthScreen < 834)

            swiper?.autoplay?.start()

            // const timer = setInterval(() => {
            //     swiper?.slideNext()
            // }, 1000)
            //
            // return () => {
            //     clearInterval(timer)
            // }
        }
    }, [])

    if (isMobile) {
        return <div className="gallery__items">
            <div className="gallery__item">
                <img className="gallery__item-border" src='/images/border-nft-gallery.png'/>
                <img className="gallery__item-image" src='/images/nfts/1.jpg'/>
            </div>
            <div className="gallery__item">
                <img className="gallery__item-border" src='/images/border-nft-gallery.png'/>
                <img className="gallery__item-image" src='/images/nfts/2.jpg'/>
            </div>
            <div className="gallery__item">
                <img className="gallery__item-border" src='/images/border-nft-gallery.png'/>
                <img className="gallery__item-image" src='/images/nfts/3.jpg'/>
            </div>
            <div className="gallery__item">
                <img className="gallery__item-border" src='/images/border-nft-gallery.png'/>
                <img className="gallery__item-image" src='/images/nfts/4.jpg'/>
            </div>
            <div className="gallery__item">
                <img className="gallery__item-border" src='/images/border-nft-gallery.png'/>
                <img className="gallery__item-image" src='/images/nfts/5.jpg'/>
            </div>
        </div>
    } else {
        return (
            <Swiper
                modules={[Autoplay]}
                autoplay={{
                    delay: 1000,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true
                }}

                loop={true}
                loopedSlides={8}
                // rewind={true}
                slidesPerView='auto'
                className='gallery__items'
            >
                <div className="swiper-wrapper">
                    <SwiperSlide className="gallery__item">
                        <img className="gallery__item-border" src='/images/border-nft-gallery.png'/>
                        <img className="gallery__item-image" src='/images/nfts/1.jpg'/>
                    </SwiperSlide>
                    <SwiperSlide className="gallery__item">
                        <img className="gallery__item-border" src='/images/border-nft-gallery.png'/>
                        <img className="gallery__item-image" src='/images/nfts/2.jpg'/>
                    </SwiperSlide>
                    <SwiperSlide className="gallery__item">
                        <img className="gallery__item-border" src='/images/border-nft-gallery.png'/>
                        <img className="gallery__item-image" src='/images/nfts/3.jpg'/>
                    </SwiperSlide>
                    <SwiperSlide className="gallery__item">
                        <img className="gallery__item-border" src='/images/border-nft-gallery.png'/>
                        <img className="gallery__item-image" src='/images/nfts/4.jpg'/>
                    </SwiperSlide>
                    <SwiperSlide className="gallery__item">
                        <img className="gallery__item-border" src='/images/border-nft-gallery.png'/>
                        <img className="gallery__item-image" src='/images/nfts/5.jpg'/>
                    </SwiperSlide>
                    <SwiperSlide className="gallery__item">
                        <img className="gallery__item-border" src='/images/border-nft-gallery.png'/>
                        <img className="gallery__item-image" src='/images/nfts/5.jpg'/>
                    </SwiperSlide>
                    <SwiperSlide className="gallery__item">
                        <img className="gallery__item-border" src='/images/border-nft-gallery.png'/>
                        <img className="gallery__item-image" src='/images/nfts/5.jpg'/>
                    </SwiperSlide>
                    <SwiperSlide className="gallery__item">
                        <img className="gallery__item-border" src='/images/border-nft-gallery.png'/>
                        <img className="gallery__item-image" src='/images/nfts/5.jpg'/>
                    </SwiperSlide>
                </div>
            </Swiper>
        )
    }
}

export default Slider