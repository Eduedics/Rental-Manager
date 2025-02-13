
import { useOutletContext } from "react-router-dom";

export default function RoomPhotos(){
    const context = useOutletContext()

    return(
        <div className="description">
            {
                context.images.map((img,index )=>(
                    <img src={img} key={index} alt='room images'/>
                ))
            }
            
        </div>
    )
}