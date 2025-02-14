import images from '../assets/mediamodifier-8pc4Z3XEBO8-unsplash.jpg'
import { useOutletContext } from "react-router-dom";

export default function RoomPhotos(){
    const context = useOutletContext()

    return(
        <div className="photos">
            {
                context.images.map((img,index )=>(
                    <img className='room-img' src={images} key={index} alt='room images'/>
                ))
            }
            
        </div>
    )
}