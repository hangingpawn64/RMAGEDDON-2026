import { useEffect, useState } from "react";
import "./App.css";

import CrosshairCursor from "./components/Crosshair";
import PageLoader from "./components/PageLoader";

import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
} from "react-router-dom";

import HomePage from "./pages/HomePage";
import Events from "./pages/Events";
import Accommodation from "./pages/Accommodation";
import ContactUs from "./pages/ContactUs";

/* ===============================
   LAYOUT (SAFE, NO LOADER)
================================ */
const Layout = () => {
  useEffect(() => {
    document.body.style.overflow = "auto";
    document.body.style.pointerEvents = "auto";

    // document
    //   .querySelectorAll(
    //     ".overlay, .loader-root, .loader-overlay, .counter"
    //   )
    //   .forEach((el) => el.remove());
  });

  return (
    <>
      <CrosshairCursor />
      <Outlet />
    </>
  );
};

/* ===============================
   HOME WRAPPER (LOADER ONLY HERE)
================================ */
const HomeWithLoader = () => {
  const [loading, setLoading] = useState(true);

  return (
    <>
      {loading && <PageLoader onComplete={() => setLoading(false)} />}
      {!loading && <HomePage />}
    </>
  );
};

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { path: "/", element: <HomeWithLoader /> },
        { path: "/events", element: <Events /> },
        { path: "/accommodation", element: <Accommodation /> },
        { path: "/contact", element: <ContactUs /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
