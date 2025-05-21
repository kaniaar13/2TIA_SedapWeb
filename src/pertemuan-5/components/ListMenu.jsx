import { MdOutlinePeopleOutline } from "react-icons/md"; 
import { FaClipboardList } from "react-icons/fa"; 
import { RiDashboardFill } from "react-icons/ri";
import { Link } from "react-router-dom";
export default function ListMenu() {
    return (
<div id="sidebar-menu" className="mt-10">
        <ul id="menu-list" className="space-y-3">
          <Link id="menu-1"to="/" className="hover:text-hijau flex cursor-pointer items-center rounded-xl p-4 font-medium text-gray-600 hover:bg-green-200 hover:font-extrabold">
            <RiDashboardFill className="mr-4 text-xl"/>
            <span>Dashboard</span>
          </Link>
          <Link id="menu-2"to="/order"className="hover:text-hijau flex cursor-pointer items-center rounded-xl p-4 font-medium text-gray-600 hover:bg-green-200 hover:font-extrabold">
           <FaClipboardList className="mr-4 text-xl"/>
           <span>Order</span>
          </Link >
          <Link id="menu-3" to="/customer" className="hover:text-hijau flex cursor-pointer items-center rounded-xl p-4 font-medium text-gray-600 hover:bg-green-200 hover:font-extrabold">
            <MdOutlinePeopleOutline className="mr-4 text-xl" />
            <span>Customer</span>
          </Link>
        </ul>
      </div>
    )
}