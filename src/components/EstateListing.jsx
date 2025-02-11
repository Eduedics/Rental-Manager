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
                    {estateData.map(
                        estate=>(
                            <div key={estate.id}>
                                <h1>{estate.name}</h1>
                                <img src={estate.img} alt='estate_img'/>
                                <h3>{estate.location}</h3>
                                <p className='description'>{estate.description}</p>
                                <Link to={`/estate/${estate.id}`}>View Estate</Link>
                            </div>
                        )
                    )}
                </aside>

            </section>
        </div>
    )
}

