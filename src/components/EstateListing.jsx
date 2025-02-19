import img from '../assets/mediamodifier-8pc4Z3XEBO8-unsplash.jpg'
import './EstateListingStyles.css'
// import estate data
import estateData from "../Data.js"

import React from 'react'

import{Link} from "react-router-dom"

export default function EstateListing(){
    // add state to keep data fetched from api
    // inside api fetch update state of filtered estate to data from api
    const[searchValue,setSearchValue] = React.useState('')
    // added estatedata to aavoid rendering empty state on first render but later on using api data we shall initialize state as empty array ,and set setEstateFiltered(data from api) to remove the error
    const[EstateFilterd,setEstateFiltered] =React.useState(estateData)
    
    const FilterByName=(e)=>{
        const searchedEstate =e.target.value
        setSearchValue(searchedEstate)
        // console.log(searchValue)
        const filteredEstate = estateData.filter(estate=>estate.name.toLowerCase().includes(searchedEstate.toLowerCase()))
        console.log(filteredEstate)
        setEstateFiltered(filteredEstate)

        // const displayEstate = EstateFilterd?EstateFilterd:estateData
        
    }
    return(
        <div>
            <section className='Listing-container'>
                <aside className='search-filter'>
                    <form>
                        <input type='text' placeholder='Enter Name of Estate..' value={searchValue} onChange={FilterByName}/>
                    </form>    
                </aside>
                <aside className='estates'>
                    <h2>Available Estates</h2>
                    <div className='estate-listing'>
                        {EstateFilterd.length===0?<p>No estate found...</p>:EstateFilterd.map(
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

