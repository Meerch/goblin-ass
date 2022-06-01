import axios from "axios"

export const getWhitelist = async () => {
    const {data} = await axios.get('https://gateway.pinata.cloud/ipfs/QmYArmXCUpRnQ7JSiF3yysuWF9tG9PSKgW2tkGNEguWBxZ')
    return data
}