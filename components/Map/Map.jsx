import { TileLayer, Marker } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useEffect, useState } from "react";
import { Devices } from "./MapData";
import deviceIcon from "./deviceIcon";
import dynamic from "next/dynamic";
import MapContainer from "./MapContainer";

function Map() {
  const [open, setOpen] = useState(false);
  const [devices, setDevices] = useState();

  useEffect(() => {
    const x = Devices;
    setDevices(x);
  }, []);

  return (
    <div className="Hero min-h-screen min-w-screen bg-slate-900 bg-opacity-80">
      <div className="grid grid-cols-1 grid-rows-1 items-center justify-center">
        <div className="flex  py-2">
          <div className="w-screen flex self-center justify-between items-center m-auto">
            <input
              className="rounded-full self-center flex max-w-lg p-2 bg-transparent border-2 border-zinc-600"
              placeholder="search..."
            />
          </div>
        </div>

        <div >
          <MapContainer
            width="800"
            height="400"
            center={[6.44943, 7.49281]}
            zoom={3}
            scrollWheelZoom={true}
          >
            {({ TileLayer, Marker, Popup }) => {
              <>
                <TileLayer
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                />
                {devices?.map((device, key) => (
                  <Marker
                    key={key}
                    position={device.position}
                    icon={deviceIcon}
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
          className={`relative z-2 bg-white max-w-80 sm:max-w-96 md:max-w-md  ${
            open ? "left-0" : "left-[-100vh]"
          }`}
        >
          <div className="">
            <div>
              <h1>Devices</h1>
            </div>
            <button onClick={() => setOpen(false)}>close</button>
          </div>
          <div className="content"></div>
        </div>
      </div>
    </div>
  );
}

export default Map;
