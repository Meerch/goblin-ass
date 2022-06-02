import React, {useEffect, useState} from 'react'

const Poster = () => {
    const [isLock, setIsLock] = useState(false)

    // useEffect(() => {
    //     const dateNow = new Date()
    //     const dateMint = new Date(2022, 5, 3, 2)
    //     setIsLock(dateNow < dateMint)
    // }, [])

    return (
        <div className='poster'>
            {
                isLock
                    ?
                    <img
                        className='poster__coming el'
                        src="/images/is-coming.png"
                        alt="Mint is coming"
                    />
                    : <img
                        className='poster__coming el live'
                        src="/images/mint-is-live.png"
                        alt="Mint is LIVE"
                    />
            }
            <div className="poster__text el price">
                Mint Price: <span className="poster__text-mark green">Free</span>
            </div>
            <div className="poster__text el limit">
                Mint Limit: <span className="poster__text-mark red">5</span> per<br/>wallet
            </div>
            <div className="poster__text el supply">
                Max Supply: 8888
            </div>

        </div>
    )
}

export default Poster