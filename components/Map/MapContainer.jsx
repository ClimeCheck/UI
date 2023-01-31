import dynamic from "next/dynamic";

const DynamicMap = dynamic(() => import("./dynamicMap"), {
  ssr: false,
});

// Set default sizing to control aspect ratio which will scale responsively
// but also help avoid layout shift

const DEFAULT_WIDTH = 600;
const DEFAULT_HEIGHT = 600;

const MapContainer = (props) => {
  const { width = DEFAULT_WIDTH, height = DEFAULT_HEIGHT } = props;
  return (
    <div style={{ aspectRatio: 16 / 9 }}>
      <DynamicMap {...props} />
    </div>
  );
};

export default MapContainer;
