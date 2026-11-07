
import {
  createBrowserRouter,
  RouterProvider,
  ScrollRestoration,
} from "react-router-dom";

import "./App.css";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import ContactUs from "./pages/ContactUs";
import Service from "./pages/Service";


function AppLayout() {
  return (
    <>
      <ScrollRestoration />
      <Layout />
    </>
  );
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        index: true,
        element: (
            <Home />
        ),
      },
      {
        path: "about",
        element: (
            <About />
        ),
      },
      {
        path: "contact",
        element: (
            <ContactUs />
        ),
      },
      {
        path: "services",
        element: (
            <Service />
        ),
      },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
