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

function Map({ data }) {
  const [open, setOpen] = useState(true);
  const [country, setCountry] = useState("");
  const [geoDetails, setGeoDetails] = useState([data.latitude, data.longitude]);
  const [devices, setDevices] = useState();

  const animateRef = useRef(true);

  const getCountry = async (e) => {
    console.log("searching");
    const key = process.env.NEXT_PUBLIC_ACCESS_KEY;
    console.log(key);
    // console.log(process.env.CONTINENT_URL);

    const result =
      "http://api.positionstack.com/v1/forward?access_key=" +
      key +
      "&query=" +
      e;
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
  useEffect(() => {
    const x = Devices;
    setDevices(x);
  }, []);

  return (
    <div className="w-full h-full bg-slate-900 bg-opacity-80  ">
      <div className="items-stretch bg-white h-full flex justify-start  ">
        <MapSideBar open={open} setOpen={setOpen} continent={data.continent} />

        <div className="relative flex flex-col ">
          <div className="flex  justify-center py-2 z-20 mx-auto w-full absolute top-12">
            <input
              type="search"
              className="rounded-full flex  p-2 bg-transparent border-2 border-zinc-600"
              placeholder="search..."
              value={country}
              spellCheck="true"
              autoCorrect="on"
              onKeyUp={handleKeyPress}
              // onSearch={() => getCountry(country)}
              onChange={(e) => setCountry(e.target.value)}
            />
          </div>
          <div className="z-0 relative">
            <MapContainer
              width="100%"
              height="600"
              center={geoDetails}
              // center={[location.latitude, location.longitude]}
              zoom={3}
              scrollWheelZoom={true}
            >
              <TileLayer
                id="mapbox/streets-v11"
                accessToken="pk.eyJ1IjoiaWtlbWhvb2QiLCJhIjoiY2xjaW90Z2phMGNtMzNxcDZzeXhlazg5cSJ9.lDfPg9kf5ngiRxjIk6pLdA"
                url="https://api.mapbox.com/styles/v1/callynnamani/cks6qgrvv9uah17o5njktvof4/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoiaWtlbWhvb2QiLCJhIjoiY2xjaW90Z2phMGNtMzNxcDZzeXhlazg5cSJ9.lDfPg9kf5ngiRxjIk6pLdA"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              />
              {devices?.map(({ position }, key) => (
                <Marker
                  key={key}
                  position={position}
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
    // <div className="Hero min-h-screen min-w-screen bg-slate-900 bg-opacity-80 ">
    //   <div className="grid grid-cols-1 grid-rows-1 items-center justify-center ">
    //     <div className="flex justify-center py-2">
    //       <div className="w-screen flex self-center justify-between items-center m-auto">
    //         <input
    //           className="rounded-full self-center flex max-w-2xl p-2 bg-transparent border-2 border-zinc-600"
    //           placeholder="search..."
    //         />
    //       </div>
    //     </div>

    //     <div className="z-0 relative">
    //       <MapContainer
    //         width="800"
    //         height="400"
    //         center={[6.44943, 7.49281]}
    //         zoom={12.8}
    //         scrollWheelZoom={true}
    //       >
    //         {({ TileLayer, Marker, Popup }) => {
    //           <>
    //             <TileLayer
    //               id="mapbox/streets-v11"
    //               accessToken="pk.eyJ1IjoiaWtlbWhvb2QiLCJhIjoiY2xjaW90Z2phMGNtMzNxcDZzeXhlazg5cSJ9.lDfPg9kf5ngiRxjIk6pLdA"
    //               // url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    //               url="https://api.mapbox.com/styles/v1/callynnamani/cks6qgrvv9uah17o5njktvof4/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoiaWtlbWhvb2QiLCJhIjoiY2xjaW90Z2phMGNtMzNxcDZzeXhlazg5cSJ9.lDfPg9kf5ngiRxjIk6pLdA"
    //               //  url="https://api.mapbox.com/styles/v1/ikemhood/clcu8liry003l14qzd03l1t6j/wmts?access_token=pk.eyJ1IjoiaWtlbWhvb2QiLCJhIjoiY2xjaW90Z2phMGNtMzNxcDZzeXhlazg5cSJ9.lDfPg9kf5ngiRxjIk6pLdA"
    //               attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    //             />
    //             {devices?.map((device, key) => (
    //               <Marker
    //                 key={key}
    //                 position={device.position}
    //                 icon={deviceIcon}
    //                 onClick={() => setOpen(!open)}
    //               ></Marker>
    //             ))}
    //             <Popup>Device Details</Popup>
    //           </>;
    //         }}
    //         {/* <TileLayer
    //           url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    //           attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    //         />*/}
    //       </MapContainer>
    //     </div>

    //     <div
    //       className={`z-20 absolute bg-white max-w-80 h-full w-96 sm:max-w-96 md:max-w-md ease-in-out transition-all  ${
    //         open ? "left-0" : "left-[-100vh]"
    //       }`}
    //     >
    //       <div className="">
    //         <div>
    //           <h1>Devices</h1>
    //         </div>
    //         <button onClick={() => setOpen(!open)}>close</button>
    //       </div>
    //       <div className="content"></div>
    //     </div>
    //   </div>
    // </div>
  );
}

export default Map;
