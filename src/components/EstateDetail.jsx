import './EstateListingStyles.css'
// import estate data
import estateData from "../Data.js"

import{Link,useParams} from "react-router-dom"



export default function EstateDetail() {
    
    const { estateId } = useParams();
    const estate = estateData.find(e => e.id === estateId);
    

    return (
        <div className='estate-details'>
            <h2>{estate.name}</h2>
            <p><span>Description</span>: {estate.description}</p>
            <h3>Blocks</h3>
            <div className='block-item'>
            {estate.blocks.map(block => (
                <div className='block-container' key={block.id}>
                    
                    <Link  to={`/estate/${estateId}/block/${block.id}`}>
                        <button className='block-btn' style={{width:'60px'}}>{block.name}</button>
                    </Link>
                    <h2><span>description</span>:ie first floor</h2>
                    
                    </div>
                
            
            ))}
            </div>
        </div>
    );
}

