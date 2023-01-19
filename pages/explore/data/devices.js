import Head from "next/head";
import DataStream from "../../../components/Explorer/streams/DataStreams/DataStreams";

function ExploreAirStreams() {
  return (
    <div className="h-max relative">
      <Head>
        <title>ClimeCheck | Explorer</title>
        <meta
          name="description"
          content="ClimeCheck is a global climate commons built through the aggregation of individuals and data from the Local  City  State  Country  Continent  . The Climecheck be all, end all is individual grassroot participation. "
        />
        <link rel="icon" href="/ClimeCheck.png" />
      </Head>
      <video
        playsInline
        autoPlay
        muted
        loop
        poster="/Cloud.png"
        className="absolute h-full -z-10 w-auto min-w-full max-w-none"
      >
        <source src="/cloud.webm" type="video/webm" />
        Your browser does not support the video tag.
      </video>
      <DataStream />
    </div>
  );
}

export default ExploreAirStreams;
