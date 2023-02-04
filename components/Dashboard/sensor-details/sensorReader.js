import ReactSpeedometer from "react-d3-speedometer";

export default function Guage({value}) {
  const sizes = () => {
    switch (true) {
      case width < 414:
        return { width: 232, height: 120 };
      case width >= 414 && width < 1800:
        return { width: 300, height: 160 };
      default:
      case width >= 1800:
        return { width: 400, height: 220 };
    }
  };

  return (
    <div className="container ">
      <div className="flex flex-wrap justify-center items-center">
        <ReactSpeedometer
          value={value}
          maxValue={600}
          needleColor="#6C6B6B"
          needleTransitionDuration={2000}
          needleHeightRatio={0.7}
          segments={3}
          segmentColors={[
            "#0B8910",
            "#F46B08",
            "#800000",
          ]}
          ringWidth={70}
          textColor='black'
          labelFontSize={textSizes["10"]}
          maxSegmentLabels={11}
          valueFormat={"~s"}
          forceRender={true}
          width={sizes().width}
          height={sizes().height}
        />
      </div>
    </div>
  );
}
