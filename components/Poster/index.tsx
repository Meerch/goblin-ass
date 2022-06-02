import React from 'react'

const Poster = () => {
    return (
        <div className='poster'>
            <img
                className='poster__coming el'
                src="/images/is-coming.png"
                alt="Mint is coming"
            />
            <div className="poster__text el price">
                Mint Price: <span className="poster__text-mark green">Free</span>
            </div>
            <div className="poster__text el limit">
                Mint Limit: <span className="poster__text-mark red">10</span> per<br/>wallet
            </div>
            <div className="poster__text el supply">
                Max Supply: 8888
            </div>

        </div>
    )
}

export default Poster