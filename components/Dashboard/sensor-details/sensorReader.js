import ReactSpeedometer from "react-d3-speedometer";
import useWindowSize from "../../../utils/hook/useWindowSize";

export default function Guage({ value }) {
  const size = useWindowSize();

  const sizes = () => {
    switch (true) {
      case size.width < 414:
        return { width: 232, height: 120 };
      case size.width >= 414 && size.width < 1800:
        return { width: 300, height: 160 };
      default:
      case size.width >= 1800:
        return { width: 400, height: 220 };
    }
  };// segmentColors={["#0B8910", "#F46B08", "#800000"]}
  return (
    <div className="container ">
      <div className="flex flex-wrap justify-center items-center">
        <ReactSpeedometer
          value={value}
          maxValue={600}
          needleColor="#6C6B6B"
          needleTransitionDuration={2000}
          needleHeightRatio={0.7}
          segments={12}
          startColor="#0B8910"
          endColor="#800000"
          ringWidth={70}
          textColor="black"
          labelFontSize={"10px"}
          maxSegmentLabels={12}
          valueFormat={"~s"}
          forceRender={true}
          width={sizes().width}
          height={sizes().height}
        />
      </div>
    </div>
  );
}
