import { useParams } from "react-router-dom";
import estatesData from "../Data";

export default function RoomDetail() {
    const { estateId, blockId, floorId, roomId } = useParams();
    console.log("Params:", { estateId, blockId, floorId, roomId });

    const estate = estatesData.find(e => e.id === estateId);
    console.log("Estate found:", estate);

    if (!estate) return <p>Estate not found</p>;

    const block = estate.blocks.find(b => b.id === blockId);
    console.log("Block found:", block);

    if (!block) return <p>Block not found</p>;

    const floor = block.floors.find(f => f.id === floorId);
    console.log("Floor found:", floor);

    if (!floor) return <p>Floor not found</p>;

    const room = floor.rooms.find(r => r.id === Number(roomId));
    console.log("Room found:", room);

    if (!room) return <p>Room not found</p>;

    return (
        <div>
            <h2>Room {room.number}</h2>
            <p>{room.description}</p>
            <h3>Amenities:</h3>
            <ul>
                {room.amenities.map(a => <li key={a}>{a}</li>)}
            </ul>
            <h3>Booking Terms:</h3>
            <p>{room.booking}</p>
        </div>
    );
}
