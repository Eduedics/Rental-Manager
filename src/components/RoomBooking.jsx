import { useOutletContext } from "react-router-dom";
import { Link } from "react-router-dom";

export default function RoomDescription(){
    const context = useOutletContext()

    return(
        <div className="booking">
            <p>{context.booking}</p>
            <button className="btn book"><Link>Book now</Link></button>
        </div>
    )
}