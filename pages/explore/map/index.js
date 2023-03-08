import Head from "next/head";
import "leaflet/dist/leaflet.css";

import dynamic from "next/dynamic";

const MapComponents = dynamic(() => import("../../../components/Map/Map"), {
  ssr: false,
});

function Map({ data, continent }) {
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
      <MapComponents data={data} continent={continent} />
    </div>
  );
}

export const getServerSideProps = async () => {
  const key = process.env.XAPI_KEY;
  const device = process.env.DEVICE_URL;

  try {
    const res = await fetch(device, {
      headers: {
        "X-API-Key": key,
      },
    });
    const { data } = await res.json();

    const result = data.slice(0, 2000).map((item) => ({
      latitude: item[2],
      longitude: item[3],
    }));

    return {
      props: {
        data: result,
        continent: [0, 0, "Globe"],
      },
    };
  } catch (error) {
    // Handle the error here
    console.error(error);

    return {
      props: {
        data: {},
        continent: [0, 0, "World"],
      },
    };
  }
};
export default Map;
