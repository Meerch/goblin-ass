import React, {useEffect, useState} from 'react'
import Poster from '../Poster'
import {Swiper, SwiperSlide} from 'swiper/react'
import Slider from './Slider'

const Gallery = () => {
    const [offsetY, setOffsetY] = useState(0)
    // const [offsetY, setOffsetY] = useState(0)
    const handlerScroll = () => setOffsetY(window.scrollY)
    const handlerScroll2 = () => setOffsetY(window.scrollY)
    const [isMobile, setIsMobile] = useState(true)

    useEffect(() => {
        if (window !== undefined) {
            const widthScreen = window.screen.width
            setIsMobile(widthScreen < 1400)

            window.addEventListener('scroll', handlerScroll)
            return () => {
                window.removeEventListener('scroll', handlerScroll)
            }
        }
    }, [])


    return (
        <section className='gallery'>
            <img
                className='gallery__grass'
                src="/images/grass.png"
                alt="background"
            />
            <img
                style={{
                    transition: 'transform .1s linear',
                    transform: `translate(${isMobile ? '0' : '-50%'}, ${offsetY * -0.1 + 'px'})`
                }}
                className='gallery__grass-2'
                src="/images/full-grass-2.png"
                alt="background"
            />

            <Poster/>
            <Slider />

            {/*<Swiper*/}
            {/*    slidesPerView='auto'*/}
            {/*    className='gallery__items'*/}
            {/*    onSlideChange={() => console.log('slide change')}*/}
            {/*    onSwiper={(swiper) => console.log(swiper)}*/}
            {/*>*/}
            {/*    <div className="swiper-wrapper">*/}
            {/*        <SwiperSlide className="gallery__item">*/}
            {/*            <img className="gallery__item-border" src='/images/border-nft-gallery.png'/>*/}
            {/*            <img className="gallery__item-image" src='/images/nfts/1.jpg'/>*/}
            {/*        </SwiperSlide>*/}
            {/*        <SwiperSlide className="gallery__item">*/}
            {/*            <img className="gallery__item-border" src='/images/border-nft-gallery.png'/>*/}
            {/*            <img className="gallery__item-image" src='/images/nfts/2.jpg'/>*/}
            {/*        </SwiperSlide>*/}
            {/*        <SwiperSlide className="gallery__item">*/}
            {/*            <img className="gallery__item-border" src='/images/border-nft-gallery.png'/>*/}
            {/*            <img className="gallery__item-image" src='/images/nfts/3.jpg'/>*/}
            {/*        </SwiperSlide>*/}
            {/*        <SwiperSlide className="gallery__item">*/}
            {/*            <img className="gallery__item-border" src='/images/border-nft-gallery.png'/>*/}
            {/*            <img className="gallery__item-image" src='/images/nfts/4.jpg'/>*/}
            {/*        </SwiperSlide>*/}
            {/*        <SwiperSlide className="gallery__item">*/}
            {/*            <img className="gallery__item-border" src='/images/border-nft-gallery.png'/>*/}
            {/*            <img className="gallery__item-image" src='/images/nfts/5.jpg'/>*/}
            {/*        </SwiperSlide>*/}
            {/*        <SwiperSlide className="gallery__item">*/}
            {/*            <img className="gallery__item-border" src='/images/border-nft-gallery.png'/>*/}
            {/*            <img className="gallery__item-image" src='/images/nfts/5.jpg'/>*/}
            {/*        </SwiperSlide>*/}
            {/*        <SwiperSlide className="gallery__item">*/}
            {/*            <img className="gallery__item-border" src='/images/border-nft-gallery.png'/>*/}
            {/*            <img className="gallery__item-image" src='/images/nfts/5.jpg'/>*/}
            {/*        </SwiperSlide>*/}
            {/*        <SwiperSlide className="gallery__item">*/}
            {/*            <img className="gallery__item-border" src='/images/border-nft-gallery.png'/>*/}
            {/*            <img className="gallery__item-image" src='/images/nfts/5.jpg'/>*/}
            {/*        </SwiperSlide>*/}
            {/*    </div>*/}
            {/*</Swiper>*/}
            {/*<div className="gallery__items">*/}
            {/*    <div className="gallery__item">*/}
            {/*        <img className="gallery__item-border" src='/images/border-nft-gallery.png'/>*/}
            {/*        <img className="gallery__item-image" src='/images/nfts/1.jpg'/>*/}
            {/*    </div>*/}
            {/*    <div className="gallery__item">*/}
            {/*        <img className="gallery__item-border" src='/images/border-nft-gallery.png'/>*/}
            {/*        <img className="gallery__item-image" src='/images/nfts/2.jpg'/>*/}
            {/*    </div>*/}
            {/*    <div className="gallery__item">*/}
            {/*        <img className="gallery__item-border" src='/images/border-nft-gallery.png'/>*/}
            {/*        <img className="gallery__item-image" src='/images/nfts/3.jpg'/>*/}
            {/*    </div>*/}
            {/*    <div className="gallery__item">*/}
            {/*        <img className="gallery__item-border" src='/images/border-nft-gallery.png'/>*/}
            {/*        <img className="gallery__item-image" src='/images/nfts/4.jpg'/>*/}
            {/*    </div>*/}
            {/*    <div className="gallery__item">*/}
            {/*        <img className="gallery__item-border" src='/images/border-nft-gallery.png'/>*/}
            {/*        <img className="gallery__item-image" src='/images/nfts/5.jpg'/>*/}
            {/*    </div>*/}
            {/*</div>*/}
        </section>
    )
}

export default Gallery