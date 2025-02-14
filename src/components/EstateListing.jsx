import img from '../assets/mediamodifier-8pc4Z3XEBO8-unsplash.jpg'
import './EstateListingStyles.css'
// import estate data
import estateData from "../Data.js"


import{Link} from "react-router-dom"

export default function EstateListing(){


    

    return(
        <div>
            <section className='Listing-container'>
                <aside className='search-filter'>
                    <form>
                        <input type='text' placeholder='Enter your search here'/>
                        <button>search</button>
                    </form>    
                </aside>
                <aside className='estates'>
                    <h2>Available Estates</h2>
                    <div className='estate-listing'>
                        {estateData.map(
                            estate=>(
                                <div className='estate-item' key={estate.id}>
                                    <h1>{estate.name}</h1>
                                    <img className='estate-img' src={img} alt='estate_img'/>
                                    <h3 className='location'><span>Location</span>:{estate.location}</h3>
                                    <p className='description'> <span>Description</span>:{estate.description}</p>
                                    <Link className='link-EST' to={`/estate/${estate.id}`}>View Estate</Link>
                                </div>
                            )
                        )}
                    </div>
                </aside>

            </section>
        </div>
    )
}

