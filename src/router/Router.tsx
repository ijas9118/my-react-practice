import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import Home from "../pages/Home";

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      // Add more question routes here, e.g., { path: '/question1', element: <Question1 /> }
    ],
  },
]);

export default router;