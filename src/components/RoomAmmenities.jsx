
import { useOutletContext } from "react-router-dom";
export default function RoomPhotos(){
    const context = useOutletContext()
    console.log(context.amenities)

    return(
        <div className="amenities">
            {
                context.amenities.map((amenity,index)=>(
                    <p key={index}>{amenity}</p>
                ))
            }
            
        </div>
    )
}