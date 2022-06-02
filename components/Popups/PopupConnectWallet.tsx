import React, {useEffect, useState} from 'react'
import {useWallet} from "use-wallet"
import {storage} from "../../utils";

interface PopupConnectWalletProps {
    onClose: () => void
}

const PopupConnectWallet: React.FC<PopupConnectWalletProps> = ({onClose}) => {
    const [lastSelectedMethod, setLastSelectedMethod] = useState('injected')
    const wallet = useWallet()

    const connectWallet = async (method: 'injected' | 'walletconnect') => {
        await wallet.connect(method)
        setLastSelectedMethod(method)
    }

    useEffect(() => {
        if (wallet.account && wallet.ethereum) {
            storage("connectorId", lastSelectedMethod)
            onClose()
        }
    }, [wallet.account, wallet.ethereum])

    return (
        <div className='popup popup__connect'>
            <img
                onClick={() => connectWallet('injected')}
                className='popup__button-method metamask'
                src="/images/hover-metamask.png"
                alt="Metamask"
            />
            <img
                onClick={() => connectWallet('walletconnect')}
                className='popup__button-method trustwallet'
                src="/images/hover-trustwallet.png"
                alt="Metamask"
            />
        </div>
    )
}

export default PopupConnectWallet;