import '../styles/globals.scss'
import 'swiper/scss'
import 'swiper/scss/autoplay'
import type {AppProps} from 'next/app'
import Head from "next/head"

import {
    BscConnector,
    UserRejectedRequestError,
} from "@binance-chain/bsc-connector"
import {UseWalletProvider, ConnectionRejectedError} from "use-wallet"
import { isTestNet } from '../blockchain/utils'

const defaultMeta = {
    title: "Goblin Ass",
    description: "Goblin Ass. Free Mint Nft",
    url: "https://goblinass.town"
}


const bscUrl = isTestNet
    ? "https://rinkeby.infura.io/v3/"
    : "https://api.mycryptoapi.com/eth"
const bscChainId = isTestNet ? 4 : 1

function MyApp({Component, pageProps}: AppProps) {
    const {
        title,
        description,
        url,
    } = defaultMeta

    return <>
        <Head>
            <title>{title}</title>
            <link rel='shortcut icon' href='/favicon.ico'/>

            <meta
                property="og:image"
                content="https://goblinass.town/snippet.png?ref=Bx7cTe"
            />

            <meta
                name="twitter:image"
                content="https://goblinass.town/snippet.png?ref=Bx7cTe"
            />

            <meta name="description" content={description}/>
            <meta property="og:type" content="website"/>
            <meta property="og:url" content={url}/>
            <meta property="og:title" content={title}/>
            <meta property="og:description" content={description}/>

            <meta property="og:site_name" content={url}/>
            <meta name="twitter:card" content="summary_large_image"/>
            <meta name="twitter:creator" content="@goblinass"/>
            <meta name="twitter:title" content={title}/>
            <meta name="twitter:description" content={description}/>
            <meta name="twitter:site" content="@goblinass"/>
            <meta name="twitter:domain" content="goblinass.town"/>
        </Head>

        <UseWalletProvider
            connectors={{
                walletconnect: {
                    rpc: {
                        [bscChainId]: bscUrl,
                    },
                },
                injected: {
                    chainId: [bscChainId],
                },
                bsc: () => {
                    return {
                        web3ReactConnector: () => {
                            return new BscConnector({supportedChainIds: [bscChainId]});
                        },
                        handleActivationError: (err: any) => {
                            if (err instanceof UserRejectedRequestError) {
                                return new ConnectionRejectedError();
                            }
                            return null;
                        },
                    };
                }
            }}

            autoConnect={false}
            pollBalanceInterval={2000}
            pollBlockNumberInterval={5000}
        >
            <Component {...pageProps} />
        </UseWalletProvider>
    </>
}

export default MyApp
