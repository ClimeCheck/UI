import "./guage.css";

function SensorGuage({ value }) {
  const gaugeElement = document.querySelector(".gauge");

  function setGaugeValue(gauge, value) {
    if (value < 0 || value > 1) {
      return;
    }

    gauge.querySelector(".gauge__fill").style.transform = `rotate(${
      value / 2
    }turn)`;
    gauge.querySelector(".gauge__cover").textContent = `${Math.round(
      value * 100
    )}%`;
  }

  setGaugeValue(gaugeElement, value);
  return (
    <>
      <Guage />
    </>
  );
}

export default SensorGuage;

function Guage() {
  return (
    <div className="container">

    <div class="circle" style="--clr:#ffffff;" id="sc"><i></i></div>
    <div class="gauge">
      <span style="--i:1;">
        <b>0</b>
      </span>
      <span style="--i:2;">
        <b>50</b>
      </span>
      <span style="--i:3;">
        <b>100</b>
      </span>
      <span style="--i:4;">
        <b>150</b>
      </span>
      <span style="--i:5;">
        <b>200</b>
      </span>
      <span style="--i:6;">
        <b>250</b>
      </span>
      <span style="--i:7;">
        <b>300</b>
      </span>
      <span style="--i:8;">
        <b>350</b>
      </span>
      <span style="--i:9;">
        <b>400</b>
      </span>
      <span style="--i:10;">
        <b>500</b>
      </span>
      <span style="--i:11;">
        <b>550</b>
      </span>
      <span style="--i:12;">
        <b>600</b>
      </span>
    </div>
    </div>
  );
}
