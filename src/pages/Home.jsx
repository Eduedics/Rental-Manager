import HeroImgSlider from "../components/HeroImgSlider"
import EstateList from '../components/EstateListing'

export default function Home(){
    return(
        <>
        
        <div className="container" >
            
            <HeroImgSlider url="https://picsum.photos/v2/list" limit={'10'} page={'1'} />
        </div>
        <section className="Estate-Listing">
            <EstateList />
        </section>
        </>
    )
}