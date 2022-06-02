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


const bscUrl = isTestNet
    ? "https://data-seed-prebsc-1-s1.binance.org:8545/"
    : "https://bsc-dataseed1.defibit.io/"
const bscChainId = isTestNet ? 97 : 56

function MyApp({Component, pageProps}: AppProps) {
    return <>
        <Head>
            <title>Goblins Ass</title>
            <link rel='shortcut icon' href='/favicon.ico'/>
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
