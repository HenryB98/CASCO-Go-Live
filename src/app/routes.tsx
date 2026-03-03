import { createBrowserRouter } from "react-router";
import { lazy } from "react";
import Root from "./components/Root.jsx";

const Home = lazy(() => import("./pages/Home.jsx"));
const About = lazy(() => import("./pages/About.jsx"));
const Services = lazy(() => import("./pages/Services.jsx"));
const Portfolio = lazy(() => import("./pages/Portfolio.jsx"));
const Contact = lazy(() => import("./pages/Contact.jsx"));
const Certifications = lazy(() => import("./pages/Certifications.jsx"));

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "about", Component: About },
      { path: "services", Component: Services },
      { path: "portfolio", Component: Portfolio },
      { path: "certifications", Component: Certifications },
      { path: "contact", Component: Contact },
    ],
  },
]);