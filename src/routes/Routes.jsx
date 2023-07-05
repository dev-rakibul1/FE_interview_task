import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Fights from "../pages/fights/Fights";
import Home from "../pages/home/Home";

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
    ],
  },
]);

export default router;
