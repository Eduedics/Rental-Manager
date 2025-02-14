import { Link, Outlet, useParams } from "react-router-dom";
import estatesData from "../Data";
import { BsArrowLeft } from "react-icons/bs";

export default function RoomDetails(){
    const {roomId,estateId,floorId,blockId} = useParams()

    const estate = estatesData.find(e =>e.id === estateId)
    // console.log(estate)
    // console.log(estate.name)
    const block =estate.blocks.find(b => b.id === blockId)
    // console.log(block.floors[0])
    const floors = block.floors.find(f => f.id === floorId)
    // console.log(floors.rooms)
    const room = floors.rooms.find(r => r.id === roomId)
    console.log(room.description)
    

    return(
            <>
                <div className="room" >
                    <h2>Room {room.number}</h2>
                    <Link to='.'><BsArrowLeft size={40}/></Link>
                    <Outlet context={room}/>
                </div>
               
            </>        
      
    )
}