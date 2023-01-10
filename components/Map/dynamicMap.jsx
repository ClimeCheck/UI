import { useEffect } from 'react';
import Leaflet from 'leaflet';
// import {MapContainer} from 'react-leaflet';
import * as ReactLeaflet from 'react-leaflet';

import 'leaflet/dist/leaflet.css';


const { MapContainer } = ReactLeaflet;

const Map = ({ children, className, width, height, ...rest }) => {


  return (
    <MapContainer  {...rest}>
      {children(ReactLeaflet, Leaflet)}
    </MapContainer>
  )
}

export default Map;