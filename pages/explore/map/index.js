import Head from "next/head";
import "leaflet/dist/leaflet.css";
// import { useEffect, useState } from "react";
// import { Devices } from "../../components/Map/MapData";
// import deviceIcon from "../../components/Map/deviceIcon";
// import { TileLayer, Marker, Popup } from "react-leaflet";
// import MapContainer from "../../components/Map/MapContainer";
// import { mapSideContent } from "../../components/Map/MapData";
// import MapContentCard from "../../components/Map/MapContentCard";
// import MapSideBar from "../../components/Map/mapSideBar";
// import MapDownBar from "../../components/Map/mapDownBar";
import dynamic from 'next/dynamic';

const MapComponents = dynamic(() => import('../../../components/Map/Map'), {
  ssr: false
});


function Map() {
  // const [open, setOpen] = useState(true);
  // const [devices, setDevices] = useState();

  // useEffect(() => {
  //   const x = Devices;
  //   setDevices(x);
  // }, []);

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
      <MapComponents />
    </div>
  );
}

export default Map;
