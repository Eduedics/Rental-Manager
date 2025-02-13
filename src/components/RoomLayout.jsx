import { NavLink } from "react-router-dom";


export default function RoomOulet(){
    return(
        <div className="navbar">
            <nav>
                <ul>
                    <li><NavLink to="description">description</NavLink></li>
                    <li><NavLink to="amenities">Amenities</NavLink></li>
                    <li><NavLink to='booking'>Booking</NavLink></li>
                    <li><NavLink to='photos'>photos</NavLink></li>
                    
                </ul>
            </nav>
        </div>
    )
}