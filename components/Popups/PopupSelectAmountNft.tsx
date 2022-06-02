import React, {useEffect, useState} from 'react'
import {checkAmountAvailableMintNft, mintNft} from "../../blockchain/utils";
import {useWallet} from "use-wallet";

interface PopupSelectAmountNftProps {
    onSuccess: (amountNft: number) => void
}

const PopupSelectAmountNft: React.FC<PopupSelectAmountNftProps> = ({onSuccess}) => {
    const wallet = useWallet()
    const [amountNft, setAmountNft] = useState('0')
    const [maxAvailableAmount, setMaxAvailableAmount] = useState(10)

    const onChangeAmountNft = (e: React.ChangeEvent<HTMLInputElement>) => {
        const amount = +(e.target.value)
        if (amount >= 0 && amount < 11 && amount <= maxAvailableAmount) {
            setAmountNft(String(amount))
        }
    }

    // const checkAvailableAmount = async () => {
    //     if (!wallet.account || !wallet.ethereum) {
    //         return
    //     }
    //     console.log('call check')
    //     const amount = await checkAmountAvailableMintNft(wallet.ethereum)
    //     setMaxAvailableAmount(amount)
    // }
    //
    // useEffect(() => {
    //     void checkAvailableAmount()
    // }, [])

    const calcAmountNft = (value: number) => {
        const newAmountNft = +amountNft + value
        if (newAmountNft >= 0 && newAmountNft < 11 && newAmountNft <= maxAvailableAmount) {
            setAmountNft(String(newAmountNft))
        }
    }

    const onMintNft = async () => {
        if (!wallet.account || !wallet.ethereum) {
            return
        }
        const resultMint = await mintNft(wallet.account, wallet.ethereum, +amountNft)
        console.log(resultMint)
        if (resultMint?.hash) {
            onSuccess(+amountNft)
        }
    }

    return (
        <div className='popup popup__select-amount'>
            <div className='popup__title'>
                Mint is <span className='popup__title-mark'>live</span>
            </div>
            <div className="popup__description">Choose how many asses you want (max 10)</div>

            <div className="popup__form">
                <img
                    onClick={() => calcAmountNft(-1)}
                    className='popup__form-arrow'
                    src="/images/arrow-left.png"
                    alt="<-"
                />
                <div className="popup__form-input">
                    <input
                        value={amountNft}
                        onChange={onChangeAmountNft}
                        type="number"
                        className='popup__form-input-value'
                    />
                </div>
                <img
                    onClick={() => calcAmountNft(1)}
                    className='popup__form-arrow'
                    src="/images/arrow-right.png"
                    alt="->"
                />
            </div>
            <div className="popup__available">{maxAvailableAmount} available</div>
            <img
                onClick={onMintNft}
                className="popup__mint"
                src="/images/mint-button.png"
                alt="Mint"
            />
        </div>
    )
}

export default PopupSelectAmountNft;