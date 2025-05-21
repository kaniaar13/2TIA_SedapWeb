import { MdPeopleAlt } from "react-icons/md";
import { MdOutlinePeopleOutline } from "react-icons/md";
import { FaClipboardList } from "react-icons/fa";
import { RiDashboardFill } from "react-icons/ri";
import { Link, NavLink } from "react-router-dom";
import { MdPerson } from "react-icons/md";

export default function ListMenu() {
  const menuClass = ({ isActive }) =>
    `flex cursor-pointer items-center rounded-xl p-4  space-x-2
    ${
      isActive
        ? "text-hijau bg-green-200 font-extrabold"
        : "text-gray-600 hover:text-hijau hover:bg-green-200 hover:font-extrabold"
    }`;
  return (
    <div id="sidebar-menu" className="mt-10">
      <ul id="menu-list" className="space-y-3">
        <NavLink id="menu-1" to="/" className={menuClass}>
          <RiDashboardFill className="mr-4 text-xl" />
          <span>Dashboard</span>
        </NavLink>
        <NavLink id="menu-2" to="/order" className={menuClass}>
          <FaClipboardList className="mr-4 text-xl" />
          <span>Order</span>
        </NavLink>
        <NavLink id="menu-3" to="/customer" className={menuClass}>
          <MdPeopleAlt className="mr-4 text-xl" />
          <span>Customer</span>
        </NavLink>
        <NavLink to="/user" className={menuClass}>
          <MdPerson /> <span>User</span>
        </NavLink>
        <NavLink id="menu-4" to="*" className={menuClass}>
          <MdOutlinePeopleOutline className="mr-4 text-xl" />
          <span>NotFound</span>
        </NavLink>
      </ul>
    </div>
  );
}
