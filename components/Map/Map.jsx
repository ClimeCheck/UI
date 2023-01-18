import { TileLayer, Marker } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useEffect, useState } from "react";
import { Devices } from "./MapData";
import deviceIcon from "./deviceIcon";
import dynamic from "next/dynamic";
import MapContainer from "./MapContainer";

function Map() {
  const [open, setOpen] = useState(true);
  const [devices, setDevices] = useState();

  useEffect(() => {
    const x = Devices;
    setDevices(x);
  }, []);

  return (
    <div className="Hero min-h-screen min-w-screen bg-slate-900 bg-opacity-80 ">
      <div className="grid grid-cols-1 grid-rows-1 items-center justify-center ">
        <div className="flex justify-center py-2">
          <div className="w-screen flex self-center justify-between items-center m-auto">
            <input
              className="rounded-full self-center flex max-w-2xl p-2 bg-transparent border-2 border-zinc-600"
              placeholder="search..."
            />
          </div>
        </div>

        <div className="z-0 relative">
          <MapContainer
            width="800"
            height="400"
            center={[6.44943, 7.49281]}
            zoom={12.8}
            scrollWheelZoom={true}
          >
            {({ TileLayer, Marker, Popup }) => {
              <>
                <TileLayer
                  id="mapbox/streets-v11"
                  accessToken="pk.eyJ1IjoiaWtlbWhvb2QiLCJhIjoiY2xjaW90Z2phMGNtMzNxcDZzeXhlazg5cSJ9.lDfPg9kf5ngiRxjIk6pLdA"
                  // url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  url="https://api.mapbox.com/styles/v1/callynnamani/cks6qgrvv9uah17o5njktvof4/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoiaWtlbWhvb2QiLCJhIjoiY2xjaW90Z2phMGNtMzNxcDZzeXhlazg5cSJ9.lDfPg9kf5ngiRxjIk6pLdA"
                  //  url="https://api.mapbox.com/styles/v1/ikemhood/clcu8liry003l14qzd03l1t6j/wmts?access_token=pk.eyJ1IjoiaWtlbWhvb2QiLCJhIjoiY2xjaW90Z2phMGNtMzNxcDZzeXhlazg5cSJ9.lDfPg9kf5ngiRxjIk6pLdA"
                  attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                />
                {devices?.map((device, key) => (
                  <Marker
                    key={key}
                    position={device.position}
                    icon={deviceIcon}
                    onClick={() => setOpen(!open)}
                  ></Marker>
                ))}
                <Popup>Device Details</Popup>
              </>;
            }}
            {/* <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            />*/}
          </MapContainer>
        </div>

        <div
          className={`z-20 absolute bg-white max-w-80 h-full w-96 sm:max-w-96 md:max-w-md ease-in-out transition-all  ${
            open ? "left-0" : "left-[-100vh]"
          }`}
        >
          <div className="">
            <div>
              <h1>Devices</h1>
            </div>
            <button onClick={() => setOpen(!open)}>close</button>
          </div>
          <div className="content"></div>
        </div>
      </div>
    </div>
  );
}

export default Map;
