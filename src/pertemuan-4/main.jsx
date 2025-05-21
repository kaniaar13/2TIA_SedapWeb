import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./tailwind.css";
import FrameworkList from "./frameworkList";
import FrameworkListSearchFilter from "./FrameworkListSearchFilter";
import Responsive from "./Responsive";
import ResponsiveFrameworkList from "./ResponsiveFrameworkList"

createRoot(document.getElementById("root"))
.render(
  <div>
   {/*<FrameworkList/>*/}
   { /*<FrameworkListSearchFilter/>*/ }
   {/*<Responsive/>*/}
   <ResponsiveFrameworkList/>
  </div>
)