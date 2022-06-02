import React, {useEffect, useState} from 'react'
import Poster from '../Poster'
import {useWallet} from "use-wallet";
import useSounds from '../../hooks/useSounds'

interface IntroProps {
    changePopup: (typePopup: string) => void
}

const Intro: React.FC<IntroProps> = ({changePopup}) => {
    const wallet = useWallet()
    const [currentSound, setCurrentSound] = useState(0)
    const [isActiveSound, setIsActiveSound] = useState(false)
    const [isLock, setIsLock] = useState(true)
    const {
        playSoundPukane1,
        playSoundPukane2,
        playSoundPukane3,
        playSoundPukane4,
    } = useSounds(
        {
            settingSoundPukane1: {
                onend: () => {
                    setIsActiveSound(false)
                }
            },
            settingSoundPukane2: {
                onend: () => {
                    setIsActiveSound(false)
                }
            },
            settingSoundPukane3: {
                onend: () => {
                    setIsActiveSound(false)
                }
            },
            settingSoundPukane4: {
                onend: () => {
                    setIsActiveSound(false)
                }
            }
        }
    )
    const sounds = [playSoundPukane1, playSoundPukane2, playSoundPukane3, playSoundPukane4]

    const onPlaySound = () => {
        if (!isActiveSound && currentSound < 4) {
            setIsActiveSound(true)
            sounds[currentSound]()
            setCurrentSound(prev => ++prev)
        }
    }

    useEffect(() => {
        const dateNow = new Date()
        const dateMint = new Date(2022, 5, 3, 2)
        setIsLock(dateNow < dateMint)
    }, [])

    return (
        <header className='intro'>
            <Poster/>
            {
                !isLock && (
                    wallet.account && wallet.ethereum
                        ? <img
                            onClick={() => changePopup('mint')}
                            className='intro__mint intro__element'
                            src="/images/mint-button.png"
                            alt="logo"
                        />
                        : <img
                            onClick={() => changePopup('connect')}
                            className='intro__connect intro__element'
                            src="/images/connect-button.png"
                            alt="logo"
                        />
                )
            }
            <img
                className='intro__logo intro__element'
                src="/images/logo.png"
                alt="logo"
            />
            <div className='intro__goblins intro__element'>
                <img
                    src="/images/goblins-2.png"
                    alt="goblins"
                />

                <div onClick={onPlaySound} className="box-for-sound left"/>
                <div onClick={onPlaySound} className="box-for-sound right"/>
            </div>
            <div className="intro__links">
                <img
                    className='intro__link'
                    src="/images/idunno.png"
                    alt="idunno"
                />
                <a
                    target='_blank'
                    rel='noreferrer'
                    className='intro__link'
                    href="https://twitter.com/goblinasstown?s=21&t=t9p1tUFajVh-_8YXFu2vaQ"
                >
                    <img

                        src="/images/twitter.png"
                        alt="idunno"
                    />
                </a>
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