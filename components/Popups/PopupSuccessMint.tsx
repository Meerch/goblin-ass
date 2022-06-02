import React from 'react'

interface PopupPopupSuccessMintProps {
    amountMintNft: number
}

const PopupPopupSuccessMint: React.FC<PopupPopupSuccessMintProps> = ({amountMintNft}) => {


    return (
        <div className='popup popup__success-mint'>
            <img className='popup__image' src="/images/success.gif" alt="???"/>
            <div className="popup__title">Conflatulations!!!</div>
            <div className="popup__info">You just minted {amountMintNft} ASSES!</div>
            <div className="popup__description">Now wait for the Ass Opening (reveal). BRRRACK!</div>
        </div>
    )
}

export default PopupPopupSuccessMint