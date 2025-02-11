import './EstateListingStyles.css'
// import estate data
import estateData from "../Data.js"

import{Link,useParams} from "react-router-dom"



export default function EstateDetail() {
    
    const { estateId } = useParams();
    const estate = estateData.find(e => e.id === estateId);
    

    return (
        <div>
            <h2>{estate.name}</h2>
            <p>{estate.description}</p>
            <h3>Blocks</h3>
            {estate.blocks.map(block => (
                <Link key={block.id} to={`/estate/${estateId}/block/${block.id}`}>
                    <button style={{width:'60px'}}>{block.name}</button>
                </Link>
            
            ))}
        </div>
    );
}

