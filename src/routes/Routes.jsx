import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Activities from "../pages/activities/Activities";
import Cars from "../pages/cars/Cars";
import FightHotel from "../pages/fightHotel/FightHotel";
import Fights from "../pages/fights/Fights";
import Home from "../pages/home/Home";
import Tours from "../pages/tours/Tours";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/fights",
        element: <Fights />,
      },
      {
        path: "/fight-hotel",
        element: <FightHotel />,
      },
      {
        path: "/cars",
        element: <Cars />,
      },
      {
        path: "/activities",
        element: <Activities />,
      },
      {
        path: "/tours",
        element: <Tours />,
      },
    ],
  },
]);

export default router;
