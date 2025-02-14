import './EstateListingStyles.css'
// import estate data
import estateData from "../Data.js"

import { useParams, Link } from "react-router-dom";

export default function BlockDetail() {
    const { estateId, blockId } = useParams();
    const estate = estateData.find(e => (e.id === estateId));
    const block = estate.blocks.find(b => (b.id === blockId));
    

    return (
        <div className='block'>
            <h2>Block {block.name}</h2>
            <div className='block-floors'>
                <h3>Floors</h3>
                <div className='floors'>
                    {block.floors.map(floor => (
                        <div className='floorList' key={floor.id}>
                            <Link className='btn'  to={`/estate/${estateId}/block/${blockId}/floor/${floor.id}`}>
                                <button>{floor.name}</button>
                            </Link>
                            
                        </div>
                        
                    ))}
                </div>
            </div>
        </div>
    );
}