
import Layout from './pages/Layout'
import Home from './pages/Home.jsx'
import EstateListing from './components/EstateListing.jsx'
import EstateDetail from './components/EstateDetail.jsx'
import BlockDetail from './components/BlockDetail.jsx'
import FloorDetail from './components/FloorDetail.jsx'
import RoomDetail from './components/RoomDetail.jsx'

import RoomLayout from './components/RoomLayout.jsx'
import RoomDescription from './components/RoomDescription.jsx'
import RoomBooking from './components/RoomBooking.jsx'
import RoomAmmenities from './components/RoomAmmenities.jsx'
import RoomPhotos from './components/RoomPhotos.jsx'

import './App.css'

import { BrowserRouter, Routes ,Route} from 'react-router-dom'

function App() {
 

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/estate" element={<EstateListing />} />
          <Route path="/estate/:estateId" element={<EstateDetail />} />
          <Route
            path="/estate/:estateId/block/:blockId"
            element={<BlockDetail />}
          />
          <Route
            path="/estate/:estateId/block/:blockId/floor/:floorId"
            element={<FloorDetail />}
          />
          <Route path="/estate/:estateId/block/:blockId/floor/:floorId/room/:roomId" element={<RoomDetail/>}>
            <Route
              index
              element={<RoomLayout />}
            />
            <Route
              path='description'
              element={<RoomDescription />}
            />
            <Route
              path='amenities'
              element={<RoomAmmenities />}
            />
            <Route
              path='booking'
              element={<RoomBooking/>}
            />
            <Route
              path='photos'
              element={<RoomPhotos/>}
            />
          </Route>
            
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App
