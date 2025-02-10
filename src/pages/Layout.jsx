import HeroImgSlider from "../components/HeroImgSlider";
import {Outlet} from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'


export default function Layout(){
    return(
        <div>
            <Navbar />
            <HeroImgSlider url="https://picsum.photos/v2/list" limit={'10'} page={'1'} />

            <Outlet />
            <Footer />
        </div>
    )
}