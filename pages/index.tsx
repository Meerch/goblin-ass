import type {NextPage} from 'next'
import {Intro} from '../components/'
import Gallery from "../components/Gallery";


const Home: NextPage = () => {

    return (
        <div className='main'>
            <Intro/>
            <Gallery/>
        </div>
    )
}

export default Home
