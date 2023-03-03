import { MdOutlineNotificationsNone } from "react-icons/md";
import { RxAvatar } from "react-icons/rx";
import Sidebar from "./Sidebar";

const Layout = ({ children, title, showSearch }) => {
  return (
    <div className=" flex flex-row font-Grotesk w-full justify-start h-min">
      <Sidebar />
      <div className="bg-white-400 flex-1 flex-col w-[80%] justify-between py-4 pr-12 pl-6 text-black ">
        <div className="flex justify-between flex-1 items-center w-full mb-12 ">
          <div className="font-bold">{title}</div>
          <div>
            <input
              type="text"
              className={`rounded-md border p-2 ${!showSearch && "hidden"}`}
              placeholder="Search by cities, countries,"
            />
          </div>
          <div className="flex items-center justify-between gap-x-2 ">
            {/* <MdOutlineNotificationsNone size="32" /> */}

            <div className="dropdown dropdown-end">
              <label
                tabIndex={0}
                className="btn btn-ghost btn-circle hover:bg-primary hover:text-white"
              >
                <div className="indicator">
                  <MdOutlineNotificationsNone size="32" />
                  <span className="badge badge-sm indicator-item bg-primary text-white">
                    8
                  </span>
                </div>
              </label>
              <div
                tabIndex={0}
                className="mt-4 card card-compact dropdown-content w-52 bg-base-100 shadow"
              >
                <div className="card-body">
                  <span className="font-bold text-lg">No Notification</span>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-between gap-x-2 border p-1 rounded-lg">
              <span>Ayomide</span>
              <div className="dropdown dropdown-end ">
                <label
                  tabIndex={0}
                  className="btn btn-ghost btn-circle avatar hover:bg-primary hover:text-white"
                >
                  <RxAvatar size="32" />
                </label>
                <ul
                  tabIndex={0}
                  className="menu menu-compact dropdown-content mt-4 p-2 shadow bg-base-100 rounded-box w-52"
                >
                  <li>
                    <a className="justify-between">
                      Profile
                      <span className="badge">New</span>
                    </a>
                  </li>
                  <li>
                    <a>Settings</a>
                  </li>
                  <li>
                    <a>Logout</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {children}
      </div>
    </div>
  );
};

export default Layout;
