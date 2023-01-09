import { MapContainer, TileLayer, Marker } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useEffect, useState } from "react";
import { Devices } from "./MapData";
import deviceIcon from "./deviceIcon";

function Map() {
  const [open, setOpen] = useState(false);
  const [devices, setDevices] = useState();

  useEffect(() => {
    const x = Devices;
    setDevices(x);
  }, []);
  
  return (
    <div className="map">
      <div className="map-header">
        <div className="search"></div>
      </div>
      <div className="map-body">
        <MapContainer
          center={[6.44943, 7.49281]}
          zoom={12.8}
          scrollWheelZoom={true}
        >
          <TileLayer
              id="mapbox/streets-v11"
              accessToken="pk.eyJ1IjoiaWtlbWhvb2QiLCJhIjoiY2xjaW90Z2phMGNtMzNxcDZzeXhlazg5cSJ9.lDfPg9kf5ngiRxjIk6pLdA"
              url="https://api.mapbox.com/styles/v1/callynnamani/cks6qgrvv9uah17o5njktvof4/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoiaWtlbWhvb2QiLCJhIjoiY2xjaW90Z2phMGNtMzNxcDZzeXhlazg5cSJ9.lDfPg9kf5ngiRxjIk6pLdA"
              attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors' />
          {devices?.map((wifi, key) => (
            <Marker key={key} position={wifi.position} icon={deviceIcon}></Marker>
          ))}
        </MapContainer>
      </div>
    </div>
  );
}

export default Map;
