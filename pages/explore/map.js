import Head from "next/head";
import "leaflet/dist/leaflet.css";
import { useEffect, useState } from "react";
import { Devices } from "../../components/Map/MapData";
import deviceIcon from "../../components/Map/deviceIcon";
import { TileLayer, Marker, Popup } from "react-leaflet";
import MapContainer from "../../components/Map/MapContainer";
import { mapSideContent } from "../../components/Map/MapData";
import MapContentCard from "../../components/Map/MapContentCard";
import MapSideBar from "../../components/Map/mapSideBar";
import MapDownBar from "../../components/Map/mapDownBar";

function Map() {
  const [open, setOpen] = useState(true);
  const [devices, setDevices] = useState();

  useEffect(() => {
    const x = Devices;
    setDevices(x);
  }, []);

  return (
    <div>
      <Head>
        <title>ClimeCheck | Map</title>
        <meta
          name="description"
          content="ClimeCheck is a global climate commons built through the aggregation of individuals and data from the Local  City  State  Country  Continent  . The Climecheck be all, end all is individual grassroot participation. "
        />
        <link rel="icon" href="/ClimeCheck.png" />
      </Head>
      <div className="Hero min-h-screen min-w-screen bg-slate-900 bg-opacity-80 ">
        <div className="grid grid-cols-1 grid-rows-1 items-center justify-center ">
          <div className="flex w-screen justify-center m-auto py-2 z-20 absolute top-44">
              <input
                className="rounded-full flex max-w-2xl p-2 bg-transparent w-96 border-2 border-zinc-600"
                placeholder="search..."
              />
          </div>

          <div className="z-0 relative">
            <MapContainer
              width="800"
              height="600"
              center={[6.44943, 7.49281]}
              zoom={2}
              scrollWheelZoom={true}
            >
            
                  <TileLayer
                    id="mapbox/streets-v11"
                    accessToken="pk.eyJ1IjoiaWtlbWhvb2QiLCJhIjoiY2xjaW90Z2phMGNtMzNxcDZzeXhlazg5cSJ9.lDfPg9kf5ngiRxjIk6pLdA"
                    url="https://api.mapbox.com/styles/v1/callynnamani/cks6qgrvv9uah17o5njktvof4/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoiaWtlbWhvb2QiLCJhIjoiY2xjaW90Z2phMGNtMzNxcDZzeXhlazg5cSJ9.lDfPg9kf5ngiRxjIk6pLdA"
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                  />
                  {devices?.map(({position}, key) => (
                    <Marker
                      key={key}
                      position={position}
                      icon={deviceIcon}
                      onClick={() => setOpen(!open)}
                    ><Popup>Device Details</Popup></Marker>
                  ))}
            </MapContainer>
          </div>

          <MapDownBar open={open} setOpen={setOpen} />
          <MapSideBar open={open} setOpen={setOpen} />
        </div>
      </div>
    </div>
  );
}

export default Map;
