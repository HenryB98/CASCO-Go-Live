import { Suspense } from "react";
import { RouterProvider } from "react-router";
import { SpeedInsights } from "@vercel/speed-insights/react";
import { router } from "./routes.jsx";

export default function App() {
  return (
    <Suspense fallback={<div className="min-h-screen w-full bg-white" />}>
      <RouterProvider router={router} />
      <SpeedInsights />
    </Suspense>
  );
}
