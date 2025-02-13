import { useParams,Link } from "react-router-dom";
import estatesData from "../Data";

export default function FloorDetail() {
    const { estateId, blockId, floorId,roomId } = useParams();

    const estate = estatesData.find(e => e.id === estateId);
    const block = estate.blocks.find(b => b.id === blockId);
    const floor = block.floors.find(f => f.id === floorId);
    console.log(floor)

    return (
        <div>
            <h2>Estate {estateId} - Block {blockId} - Floor {floorId}</h2>
            <h3>Rooms:</h3>
            <ul>
            {
                floor.rooms.map(room=>(
                    <div key={room.id}>
                        <Link  to={`/estate/${estateId}/block/${blockId}/floor/${floorId}/room/${room.id}`}>
                            <button style={{width:'60px'}}>Room {room.number}</button>
                        </Link>
                        <p>{room.description}</p>
                        <h3>Amenities:</h3>
                        <ul>
                            {room.amenities.map(a => <li key={a}>{a}</li>)}
                            
                        </ul>
                        <h3>Booking Terms:</h3>
                        <p>{room.booking}</p>
                    </div>
                ))
            }
            </ul>
        </div>
    );
}



