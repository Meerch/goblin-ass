import React, {useEffect, useState} from 'react'
import {Swiper, SwiperSlide, useSwiper} from "swiper/react"
import {Autoplay} from "swiper"
import {v4 as randomKey} from 'uuid'

const nfts = [
    '/images/nfts/1.jpg',
    '/images/nfts/2.jpg',
    '/images/nfts/3.jpg',
    '/images/nfts/4.jpg',
    '/images/nfts/5.jpg',
    '/images/nfts/6.jpg',
    '/images/nfts/7.jpg',
    '/images/nfts/8.jpg',
    '/images/nfts/9.png',
    '/images/nfts/10.png',
    '/images/nfts/11.png',
    '/images/nfts/12.png',
    '/images/nfts/13.png',
    '/images/nfts/14.png',
    '/images/nfts/15.png',
    '/images/nfts/16.png',
    '/images/nfts/17.png',
    '/images/nfts/18.png',
    '/images/nfts/19.png',
    '/images/nfts/20.png',
    '/images/nfts/21.png',
    '/images/nfts/22.png',
    '/images/nfts/23.png',
    '/images/nfts/24.png',
    '/images/nfts/25.png',
    '/images/nfts/26.png',
    '/images/nfts/27.png',
    '/images/nfts/28.png',
    '/images/nfts/29.png',
    '/images/nfts/30.png'
]

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
            {
                nfts && nfts.map((imagePath) => (
                    <div key={randomKey()} className="gallery__item">
                        <img className="gallery__item-border" src='/images/border-nft-gallery.png'/>
                        <img className="gallery__item-image" src={imagePath}/>
                    </div>
                ))
            }
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
                loopedSlides={30}
                // rewind={true}
                slidesPerView='auto'
                className='gallery__items'
            >
                <div className="swiper-wrapper">
                    {
                        nfts && nfts.map((imagePath) => (
                            <SwiperSlide key={randomKey()} className="gallery__item">
                                <img className="gallery__item-border" src='/images/border-nft-gallery.png'/>
                                <img className="gallery__item-image" src={imagePath}/>
                            </SwiperSlide>
                        ))
                    }
                </div>
            </Swiper>
        )
    }
}

export default Slider