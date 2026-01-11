import { useEffect, useState } from "react";
import "./App.css";

import CrosshairCursor from "./components/Crosshair";
import PageLoader from "./components/PageLoader";
import { PageTransition } from "./components/PageTransition";

import {
  createBrowserRouter,
  RouterProvider,
  useOutlet,
} from "react-router-dom";

import HomePage from "./pages/Homepage/HomePage";
import Robowar from "./pages/Events/Robowar";
import Accommodation from "./pages/Accommodation/Accommodation";
import ContactUs from "./pages/Contact/ContactUs";

/* ===============================
   LAYOUT (SAFE, NO LOADER)
================================ */
const Layout = () => {
  const currentOutlet = useOutlet();

  useEffect(() => {
    document.body.style.overflow = "auto";
    document.body.style.pointerEvents = "auto";
  });

  return (
    <>
      <CrosshairCursor />
      <PageTransition>
        {currentOutlet}
      </PageTransition>
    </>
  );
};

// Track if loader has run this session (resets on refresh)
let hasAppLoaded = false;

const HomeWithLoader = () => {
  const [loading, setLoading] = useState(!hasAppLoaded);

  const handleLoaderComplete = () => {
    setLoading(false);
    hasAppLoaded = true;
  };

  return (
    <>
      {loading && <PageLoader onComplete={handleLoaderComplete} />}
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
        { path: "/events", element: <Robowar /> },
        { path: "/accommodation", element: <Accommodation /> },
        { path: "/contact", element: <ContactUs /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
