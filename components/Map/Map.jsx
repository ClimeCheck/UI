import {
  TileLayer,
  Marker,
  Popup,
  useMapEvent,
  ZoomControl,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useEffect, useState, useRef } from "react";

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
  const [loadedMarkers, setLoadedMarkers] = useState([]);
  const [remainingPositions, setRemainingPositions] = useState(
    data.slice(7000)
  );
  const [open, setOpen] = useState(true);
  const [country, setCountry] = useState("");
  const [geoDetails, setGeoDetails] = useState([continent[0], continent[1]]);

  const animateRef = useRef(true);
  const mapRef = useRef();

  const getCountry = async (e) => {
    console.log("searching");
    const result = `/api/getCountry?e=${e}`;
    const { data } = await (await fetch(result)).json();
    const location = data[0];
    const { latitude, longitude } = location;
    console.log([latitude, longitude]);

    setGeoDetails(() => [latitude, longitude]);
  };



  ;

 
  useEffect(() => {
    const loadMarkers = async () => {
      const markers = [];
      for (let i = 0; i < 1000; i++) {
        const position = data[i];
        const marker = (
          <Marker
            key={i}
            icon={deviceIcon}
            onClick={() => setOpen(!open)}
            position={[position.latitude, position.longitude]}
          >
            <Popup>Device Details</Popup>
          </Marker>
        );
        markers.push(marker);
      }
      setLoadedMarkers(markers);
    };
    loadMarkers();
  }, [data]);

  const handleMoveEnd = async () => {
    const map = mapRef.current;
    const bounds = map.getBounds();

    // Check if any remaining positions are visible on the map
    const visiblePositions = remainingPositions.filter((position) =>
      bounds.contains([position.lat, position.lng])
    );

    if (visiblePositions.length > 0) {
      // Load next chunk of positions
      const nextChunk = remainingPositions.slice(0, 1000);
      const nextMarkers = [];
      for (let i = 0; i < nextChunk.length; i++) {
        const position = nextChunk[i];
        const marker = (
          <Marker
            key={i + loadedMarkers.length}
            position={[position.lat, position.lng]}
          >
            <Popup>{position.name}</Popup>
          </Marker>
        );
        nextMarkers.push(marker);
      }
      setLoadedMarkers((prevMarkers) => [...prevMarkers, ...nextMarkers]);
      setRemainingPositions((prevPositions) => prevPositions.slice(1500));
    }
  };
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      getCountry(country);
    }
  };

  return (

    <div className="w-full h-full  bg-white bg-opacity-80  ">
      <div className=" h-full flex justify-start relative ">

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
              // onSearch={() => getCountry(country)}
              onChange={(e) => setCountry(e.target.value)}
            />
          </div>
          <div className="z-0 relative">
            <MapContainer
              width="100%"
              // height="600"
              // className=" h-[80vh] md:h-[600px]"
              center={geoDetails}
              zoom={13}
              scrollWheelZoom={true}
              ref={mapRef}
              onMoveend={handleMoveEnd}
              zoomControl={false}
            >
              <ZoomControl position="topright" />
              <TileLayer
                id="mapbox/streets-v11"
                accessToken="pk.eyJ1IjoiaWtlbWhvb2QiLCJhIjoiY2xjaW90Z2phMGNtMzNxcDZzeXhlazg5cSJ9.lDfPg9kf5ngiRxjIk6pLdA"
                url="https://api.mapbox.com/styles/v1/callynnamani/cks6qgrvv9uah17o5njktvof4/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoiaWtlbWhvb2QiLCJhIjoiY2xjaW90Z2phMGNtMzNxcDZzeXhlazg5cSJ9.lDfPg9kf5ngiRxjIk6pLdA"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              />

              {loadedMarkers}

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
