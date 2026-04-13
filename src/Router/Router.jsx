import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Home/Home";
import Timeline from "../Home/Timeline";
import Stats from "../Home/Stats";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        index: true,
        element: <Home></Home>

      },

      {
        path: "/Timeline",
        element: <Timeline></Timeline>
      },
      {
        path: "/Stats",
        element: <Stats></Stats>
      }
    ]
   },
]);