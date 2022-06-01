import React, {useEffect, useState} from 'react'
import {Swiper, SwiperSlide} from "swiper/react";

const Slider = () => {
    const [isMobile, setIsMobile] = useState(true)

    useEffect(() => {
        if (window !== undefined && window) {
            const widthScreen = window.screen.width
            setIsMobile(widthScreen < 834)
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