import { createBrowserRouter, Outlet } from "react-router-dom";
// import { Suspense, lazy } from "react";
import {
  Analytics,
  Features,
  Footer,
  Header,
  HeroSection,
  MeetOurTeam,
} from "../components";

// const HeroSection = lazy(() => import("../components/HeroSection/HeroSection"));
// const FeatureSection = lazy(() => import("../components/FeatureSection/FeatureSection"));
// const MeetOurTeam = lazy(() => import("../components/MeetOurTeam/MeetOurTeam"));

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Header />
        <Outlet />
        <Footer />
      </>
    ),
    children: [
      {
        index: true,
        element: (
          <>
            <HeroSection />
            <Features />
            <MeetOurTeam />
          </>
        ),
      },
      {
        path: "analytics",
        element: <Analytics />,
      },
    ],
  },
]);
