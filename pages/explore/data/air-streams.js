import Head from "next/head";
import AirStream from "../../../components/Explorer/streams/AirStreams/AirStream";

function ExploreAirStreams() {
  return (
    <div>
      <Head>
        <title>ClimeCheck | Explorer</title>
        <meta
          name="description"
          content="ClimeCheck is a global climate commons built through the aggregation of individuals and data from the Local  City  State  Country  Continent  . The Climecheck be all, end all is individual grassroot participation. "
        />
        <link rel="icon" href="/ClimeCheck.png" />
      </Head>
      <video playsInline autoPlay muted loop poster="/Cloud.png" className="absolute -z-10 w-auto h-[450vh] sm:h-[230vh] md:h-[180vh] min-w-full min-h-full max-w-none">
        <source src="/cloud.webm" type="video/webm" />
        Your browser does not support the video tag.
      </video>
      <AirStream />
    </div>
  );
}

export default ExploreAirStreams;
