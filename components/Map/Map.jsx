import { TileLayer, Marker, Popup, useMapEvent } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useEffect, useState, useRef } from "react";
import { Devices } from "./MapData";
import deviceIcon from "./deviceIcon";

import MapContainer from "./MapContainer";
import MapDownBar from "./mapDownBar";
import MapSideBar from "./mapSideBar";
import RecenterAutomatically from "./RecenterMapAutomatically";

function SetViewOnClick({ animateRef }) {
  const map = useMapEvent("click", (e) => {
    map.flyTo(e.latlng, map.getZoom(), {
      animate: animateRef.current,
    });
  });

  return null;
}

function Map({ continent, data }) {
  const [open, setOpen] = useState(true);
  const [country, setCountry] = useState("");
  const [geoDetails, setGeoDetails] = useState([continent[0], continent[1]]);

  const animateRef = useRef(true);

  const getCountry = async (e) => {
    console.log("searching");
    const result = `/api/getCountry?e=${e}`;
    const { data } = await (await fetch(result)).json();
    const location = data[0];
    const { latitude, longitude } = location;
    console.log([latitude, longitude]);

    setGeoDetails(() => [latitude, longitude]);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      getCountry(country);
    }
  };

  return (
    <div className="w-full h-full bg-slate-900 bg-opacity-80  ">
      <div className="items-stretch bg-white h-full flex justify-start  ">
        <MapSideBar open={open} setOpen={setOpen} continent={continent[2]} />

        <div className="relative flex flex-col ">
          <div className="flex  justify-center py-2 z-20 left-1/2 transform -translate-x-1/2 absolute top-12">
            <input
              type="search"
              className="rounded-full flex  p-2 bg-transparent border-2 border-zinc-600"
              placeholder="search..."
              value={country}
              spellCheck="true"
              autoCorrect="on"
              onKeyUp={handleKeyPress}
              onChange={(e) => setCountry(e.target.value)}
            />
          </div>
          <div className="z-0 relative">
            <MapContainer
              width="100%"
              height="600"
              center={geoDetails}
              zoom={1}
              scrollWheelZoom={true}
            >
              <TileLayer
                id="mapbox/streets-v11"
                accessToken="pk.eyJ1IjoiaWtlbWhvb2QiLCJhIjoiY2xjaW90Z2phMGNtMzNxcDZzeXhlazg5cSJ9.lDfPg9kf5ngiRxjIk6pLdA"
                url="https://api.mapbox.com/styles/v1/callynnamani/cks6qgrvv9uah17o5njktvof4/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoiaWtlbWhvb2QiLCJhIjoiY2xjaW90Z2phMGNtMzNxcDZzeXhlazg5cSJ9.lDfPg9kf5ngiRxjIk6pLdA"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              />
              {data?.map((e, key) => (
                <Marker
                  key={key}
                  position={[e.latitude, e.longitude]}
                  icon={deviceIcon}
                  onClick={() => setOpen(!open)}
                >
                  <Popup>Device Details</Popup>
                </Marker>
              ))}
              <SetViewOnClick animateRef={animateRef} />
              <RecenterAutomatically lat={geoDetails[0]} lng={geoDetails[1]} />
            </MapContainer>
          </div>
          <div className="mt-auto ">
            <MapDownBar open={open} setOpen={setOpen} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Map;
