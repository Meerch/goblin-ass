import React, {useEffect, useState} from 'react'
import {TypeWallet} from '../../blockchain/utils'
import Poster from '../Poster'
import Slider from './Slider'

interface GalleryProps {
    wallet: TypeWallet
}


const Gallery: React.FC<GalleryProps> = ({wallet}) => {
    const [offsetY, setOffsetY] = useState(0)
    const handlerScroll = () => setOffsetY(window.scrollY)
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
                    transform: `translate(${isMobile ? '0' : '-50%'}, ${offsetY * (isMobile ? -0.05 : -0.1) + 'px'})`
                }}
                className='gallery__grass-2'
                src="/images/full-grass-2.png"
                alt="background"
            />

            <Poster/>
            <Slider/>
        </section>
    )
}


export default Gallery