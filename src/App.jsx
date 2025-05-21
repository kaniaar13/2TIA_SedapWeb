import { Suspense, useState } from "react";
import React from "react";
import { createRoot } from "react-dom/client";
import "./assets/tailwind.css";
import { Route, Routes } from "react-router-dom";

const Dashboard = React.lazy(() => import("./Pages/Dashboard"))
const Order = React.lazy(() => import("./Pages/Order"))
const Customer = React.lazy(() => import("./Pages/Customer"))
const User = React.lazy(() => import("./Pages/User"))
const NotFound = React.lazy(() => import("./Pages/NotFound"))
const MainLayout = React.lazy(() => import("./layouts/MainLayout"))
const AuthLayout = React.lazy(() => import("./layouts/AuthLayout"))
const GuestLayout = React.lazy(() => import("./layouts/GuestLayout"))
const Login = React.lazy(() => import("./Pages/auth/Login"))
const Register = React.lazy(() => import("./Pages/auth/Register"))
const Forgot = React.lazy(() => import("./Pages/auth/Forgot"))
const Loading = React.lazy(() => import("./components/Loading"))

function App() {
  const [count, setCount] = useState(0);

  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        <Route element={<MainLayout />} >
          <Route path="*" element={<NotFound />} />
          <Route path="/" element={<Dashboard />} />
          <Route path="/order" element={<Order />} />
          <Route path="/customer" element={<Customer />} />
          <Route path="/user" element={<User />} />
        </Route>

        <Route element={<AuthLayout/>}>
          <Route path="/Login" element={<Login/>} />
          <Route path="/Register" element={<Register/>} />
          <Route path="/Forgot" element={<Forgot/>} />
        </Route>

        <Route element={<GuestLayout/>}>
        <Route path="/guest" element={<GuestLayout/>} />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;