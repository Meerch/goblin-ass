import {Contract, ContractInterface, ethers, Signer} from "ethers"
import web3 from 'web3'

import abiGat, {
    address as testnetGatAddress,
    productionAddress as productionGatAddress,
} from "../contracts/contractGoblinAssTown"
import {Account, AccountType, Status} from "use-wallet/dist/cjs/types";


export const isTestNet = true
const bscUrl = isTestNet
    ? "https://data-seed-prebsc-1-s1.binance.org:8545/"
    : "https://bsc-dataseed1.defibit.io/"
const bscChainId = isTestNet ? 97 : 56

const addressGat = isTestNet ? testnetGatAddress : productionGatAddress

type TypeExternalProvider = any
type TypePropExternalProvider = TypeExternalProvider | null
type TypeContractInterface = ContractInterface
type TypeContract = Contract
type TypeProvider = any

export type TypeWallet = {
    account: Account | null;
    balance: string;
    chainId: number | undefined;
    connect: (connectorId: string) => Promise<void>;
    connector: string | null;
    connectors: object;
    error: Error | null;
    ethereum?: any;
    getBlockNumber?: () => number | null;
    isConnected: () => boolean;
    networkName: string | null;
    reset: () => void;
    status: Status;
    type: AccountType | null;
}

const createProvider = (provider: TypePropExternalProvider): TypeProvider => {
    return provider
        ? new ethers.providers.Web3Provider(provider)
        : new ethers.providers.JsonRpcProvider(bscUrl, bscChainId)
}

const createContract = (
    address: string,
    interfaceContract: TypeContractInterface,
    activeProvider: TypePropExternalProvider
): { contract: TypeContract, provider: TypeProvider } => {
    const provider = createProvider(activeProvider)
    const contract = new ethers.Contract(address, interfaceContract, provider)
    return {
        contract,
        provider
    }
}

const createSignerContract = (
    address: string,
    interfaceContract: TypeContractInterface,
    activeProvider: TypePropExternalProvider
): { signer: Signer, contract: TypeContract, signTransactions: TypeContract, provider: TypeProvider } => {
    const provider = createProvider(activeProvider)
    const signer = provider.getSigner()
    const contract = new ethers.Contract(address, interfaceContract, signer)
    const signTransactions = contract.connect(signer)
    return {signer, contract, signTransactions, provider}
}

export const mintNft = async (
    address: string,
    activeProvider: TypePropExternalProvider,
    amountNft: number
) => {
    try {
        const {signTransactions} = createSignerContract(addressGat, abiGat, activeProvider)
        return await signTransactions.EnterTheHole(amountNft)
    } catch (e) {
        return e
    }
}


export const checkAmountAvailableMintNft = async (
    address: string,
    activeProvider: TypePropExternalProvider
) => {
    try {
        const {contract} = createContract(addressGat, abiGat, activeProvider)
        return +(await contract.remainToMint(address))
    } catch (e) {
        console.log('error', e)
        return 0
    }
}