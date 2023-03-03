import Head from "next/head";
import "leaflet/dist/leaflet.css";
import dynamic from "next/dynamic";

const MapComponents = dynamic(() => import("../../../components/Map/Map"), {
  ssr: false,
});

function Map({ data }) {
  console.log(data);

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
      <MapComponents data={data} />
    </div>
  );
}

export const getServerSideProps = async ({ params }) => {
  const continent = params.continent;
  const key = process.env.ACCESS_KEY;

  const result =
    "http://api.positionstack.com/v1/forward?access_key=" +
    key +
    "&query=" +
    continent;
  const { data } = await (await fetch(result)).json();
  const location = data[0];
  const { latitude, longitude } = location;

  return {
    props: {
      data: { latitude, longitude, continent },
    },
  };
};

export default Map;
