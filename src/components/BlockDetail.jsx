import './EstateListingStyles.css'
// import estate data
import estateData from "../Data.js"

import { useParams, Link } from "react-router-dom";

export default function BlockDetail() {
    const { estateId, blockId } = useParams();
    const estate = estateData.find(e => (e.id === estateId));
    const block = estate.blocks.find(b => (b.id === blockId));
    

    return (
        <div>
            <h2>Block {block.name}</h2>
            <h3>Floors</h3>
            {block.floors.map(floor => (
                <Link key={floor.id} to={`/estate/${estateId}/block/${blockId}/floor/${floor.id}`}>
                    <button>{floor.name}</button>
                </Link>
            ))}
        </div>
    );
}