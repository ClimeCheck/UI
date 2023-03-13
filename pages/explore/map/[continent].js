import Head from "next/head";
import "leaflet/dist/leaflet.css";
import dynamic from "next/dynamic";

const MapComponents = dynamic(() => import("../../../components/Map/Map"), {
  ssr: false,
});

function Map({ continent, data }) {
  return (
    <div>
      <Head>
        <title>ClimeCheck | Map Overview</title>
        <meta
          name="description"
          content="ClimeCheck is a global climate commons built through the aggregation of individuals and data from the Local  City  State  Country  Continent  . The Climecheck be all, end all is individual grassroot participation. "
        />
        <link rel="icon" href="/ClimeCheck.png" />
      </Head>
      <MapComponents continent={continent} data={data} />
    </div>
  );
}

export const getServerSideProps = async ({ params }) => {
  const continent = params.continent;
  const mapKey = process.env.ACCESS_KEY;
  const mapUrl = process.env.CONTINENT_URL;
  const xApiKey = process.env.XAPI_KEY;
  const device = process.env.DEVICE_URL;

  // First API call
  const mapResult = mapUrl + mapKey + "&query=" + continent;

  // Second API call
  let result2;

  try {
    // Make both API calls in parallel using Promise.all
    const [mapRes, purpleAirRes] = await Promise.all([
      fetch(mapResult),
      fetch(device, {
        headers: {
          "X-API-Key": xApiKey,
        },
      }),
    ]);
    const { data } = await mapRes.json();
    const location = data[0];

    const { latitude, longitude } = location;

    const response = await purpleAirRes.json();

    const result2 = data.slice(0, 8000).map((item, index) => ({
      id: index,
      latitude: item[1],
      longitude: item[2],
      parameters: [
        { name: "Temperature", value: item[3] },
        { name: "Humidity", value: item[4] },
        { name: "PM 1.0", value: item[5] },
        { name: "PM 10.0", value: item[6] },
      ],
    }));

    return {
      props: {
        continent: [latitude, longitude, continent],
        data: result2,
      },
    };
  } catch (error) {
    // Handle the error here
    console.error(error);
    return {
      props: {
        continent: {},
        data: {},
      },
    };
  }
};

export default Map;
