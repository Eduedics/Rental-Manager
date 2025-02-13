import { useOutletContext } from "react-router-dom";
import { Link } from "react-router-dom";

export default function RoomDescription(){
    const context = useOutletContext()

    return(
        <div className="booking">
            <p>{context.booking}</p>
            <Link>Book now</Link>
        </div>
    )
}