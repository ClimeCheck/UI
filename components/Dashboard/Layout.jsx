import { MdOutlineNotificationsNone } from "react-icons/md";
import { RxAvatar } from "react-icons/rx";
import Sidebar from "./Sidebar";

const Layout = ({ children, title, showSearch }) => {
  return (
    <div className=" flex font-Grotesk flex-row justify-start">
      <Sidebar />
      <div className="bg-white-400 flex-col flex-1 justify-between py-4 pr-12 pl-6  text-black">
        <div className="flex justify-between items-center w-full mb-12 ">
          <div className="font-bold">{title}</div>
          <div>
            <input
              type="text"
              className={`rounded-md border p-2 ${!showSearch && "hidden"}`}
              placeholder="Search by cities, countries,"
            />
          </div>
          <div className="flex items-center justify-between gap-x-2 ">
            <MdOutlineNotificationsNone size="32" />
            <div className="flex items-center justify-between gap-x-2 border p-2 rounded-lg">
              <RxAvatar size="32" />
              <span>Ayomide</span>
              <select>
                <option value="base"></option>
              </select>
            </div>
          </div>
        </div>
        {children}
      </div>
    </div>
  );
};

export default Layout;
