import { Link } from "react-router-dom";


export default function PageNotFound(){
    return(
        <div className="container">
            <p>page not Found</p>
            <Link to='/' >Go Back Home</Link>
        </div>
    )
}