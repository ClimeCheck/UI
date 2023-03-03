import { useEffect } from "react";
import { useMap } from "react-leaflet";

const RecenterAutomatically = ({ lat, lng }) => {
  const map = useMap();
  useEffect(() => {
    map.flyTo([lat, lng], 4);
  }, [lat, lng]);
  return null;
};

export default RecenterAutomatically;
