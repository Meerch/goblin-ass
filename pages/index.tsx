import type {NextPage} from 'next'
import {Intro} from '../components/'
import Gallery from "../components/Gallery";
import {useWallet} from "use-wallet";
import PopupConnectWallet from "../components/Popups/PopupConnectWallet";
import React, {useEffect, useState} from "react";
import { TypeWallet } from '../blockchain/utils';
import { storage } from '../utils';
import PopupSelectAmountNft from "../components/Popups/PopupSelectAmountNft";
import PopupPopupSuccessMint from "../components/Popups/PopupSuccessMint";


const Home: NextPage = () => {
    const wallet = useWallet()
    const [activePopup, setActivePopup] = useState<null | string>(null)
    const [amountMintNft, setAmountMintNft] = useState<number>(0)

    const changePopup = (typePopup: string) => {
        setActivePopup(typePopup)
    }

    useEffect(() => {
        if (activePopup) {
            window.scrollTo(0, 0)
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = 'visible'
        }
    }, [activePopup])


    const checkWallet = async (wallet: TypeWallet) => {
        const getConnectorId: boolean | string = storage("connectorId")
        if (getConnectorId === "injected" || getConnectorId === "bsc" || getConnectorId === "walletconnect") {
            await wallet.connect(getConnectorId)
        } else {
            localStorage.removeItem("connectorId")
        }
    }

    const onAfterMint = (amountNft: number) => {
        setAmountMintNft(amountNft)
        setActivePopup('success')
    }

    useEffect(() => {
        void checkWallet(wallet)
    }, [])


    return (
        <div className='main'>
            <Intro changePopup={changePopup}/>
            <Gallery wallet={wallet}/>

            {
                activePopup &&
                <div onClick={() => setActivePopup(null)} className="shadow-background"/>

            }

            {
                activePopup === 'connect' &&
                <PopupConnectWallet onClose={() => setActivePopup(null)}/>
            }

            {
                activePopup === 'mint' &&
                <PopupSelectAmountNft onSuccess={onAfterMint}/>
            }

            {
                activePopup === 'success' &&
                <PopupPopupSuccessMint amountMintNft={amountMintNft}/>
            }
        </div>
    )
}

export default Home
