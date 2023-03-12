import * as ReactLeaflet from "react-leaflet";

import "leaflet/dist/leaflet.css";

const { MapContainer } = ReactLeaflet;

const Map = ({ children, className, width, height, ...rest }) => {
  return (
    <MapContainer
      className={`w-[100%] h-[80vh] md:min-h-[500px] md:h-full z-0 ${className}`}
      {...rest}
    >
      {children}
    </MapContainer>
  );
};

export default Map;
