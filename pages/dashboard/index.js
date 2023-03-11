import Layout from "../../components/Dashboard/Layout";
import { MdOutlineNotificationsNone } from "react-icons/md";
import { FiDownload } from "react-icons/fi";
import Graph from "../../components/Dashboard/Graph";
import Data from "../../components/Dashboard/data";
import Head from "next/head";
const dashboard = () => {
  return (
    <>
      <Head>
        <title>Dashboard</title>

        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, user-scalable=no, shrink-to-fit=no, viewport-fit=cover"
        ></meta>
        <link rel="icon" href="/ClimeCheck.svg" />
      </Head>
      <Layout title="Dashboard" showSearch={true}>
        <div className="flex flex-col flex-[70] items-center justify-between gap-16 text-black ">
          <div className="md:flex-row flex gap-8 flex-1 text-center justify-between flex-wrap items-stretch sm:items-center w-full">
            <div className="flex-1 border p-2 rounded-lg">
              <span>Polution: </span>
              <select name="select" id="">
                <option value="Co2">Co2</option>
              </select>
            </div>

            <div className="flex-1 border p-2 gap-x-3 justify-between  rounded-lg flex">
              <span>From: </span>
              <input
                type="date"
                name="date"
                id="from"
                value={new Date().toISOString().split("T")[0]}
                max={new Date().toISOString().split("T")[0]}
              />
            </div>
            <div className="flex-1 border p-2 gap-x-3 flex justify-between rounded-lg ">
              <span>To: </span>

              <input
                type="date"
                name="date"
                id="to"
                max={new Date().toISOString().split("T")[0]}
              />
            </div>

            <div className="flex-1 border p-2 rounded-lg flex items-center justify-between gap-x-1 px-4 bg-[#74BF44] text-white">
              <span>Download Now</span>
              <FiDownload />
            </div>
          </div>
          <div
            style={{
              color: "#fff",

              transition: "0.3s ease-in-out",
              width: "100%",
              height: "400px",
              display: "flex",
              flexDirection: "column",
              position: "relative",
            }}
          >
            <Graph data={Data} />
          </div>
        </div>
      </Layout>
    </>
  );
};

export default dashboard;
