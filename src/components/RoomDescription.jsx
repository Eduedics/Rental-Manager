
import { useOutletContext } from "react-router-dom";

export default function RoomDescription(){
    const context = useOutletContext()
    console.log(context)

    return(
        <div className="description">
            <p>{context.description}</p>
        </div>
    )
}