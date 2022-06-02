import useSound from "use-sound"
// @ts-ignore
import soundPukane1 from '../public/sounds/pukane-1.mp3'
// @ts-ignore
import soundPukane2 from '../public/sounds/pukane-2.mp3'
// @ts-ignore
import soundPukane3 from '../public/sounds/pukane-3.mp3'
// @ts-ignore
import soundPukane4 from '../public/sounds/pukane-4.mp3'



const useSounds = ({
                       settingSoundPukane1 = {},
                       settingSoundPukane2 = {},
                       settingSoundPukane3= {},
                       settingSoundPukane4 = {}
                   }: any) => {
    const [playSoundPukane1] = useSound(soundPukane1, settingSoundPukane1)
    const [playSoundPukane2] = useSound(soundPukane2, settingSoundPukane2)
    const [playSoundPukane3] = useSound(soundPukane3, settingSoundPukane3)
    const [playSoundPukane4] = useSound(soundPukane4, settingSoundPukane4)


    return {
        playSoundPukane1,
        playSoundPukane2,
        playSoundPukane3,
        playSoundPukane4,
    }

}

export default useSounds