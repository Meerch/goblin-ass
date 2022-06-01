import React from 'react'
import Poster from '../Poster'


const Intro = () => {
    return (
        <header className='intro'>
            <Poster />
            <img
                className='intro__logo intro__element'
                src="/images/logo.png"
                alt="logo"
            />
            <img
                className='intro__goblins intro__element'
                src="/images/goblins.png"
                alt="goblins"
            />
            <div className="intro__links">
                <img
                    className='intro__link'
                    src="/images/idunno.png"
                    alt="idunno"
                />
                <img
                    className='intro__link'
                    src="/images/twitter.png"
                    alt="idunno"
                />
                <img
                    className='intro__link'
                    src="/images/opensea.png"
                    alt="idunno"
                />
            </div>
        </header>
    )
}

export default Intro