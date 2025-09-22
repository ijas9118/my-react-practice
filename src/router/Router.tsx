import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import Home from "../pages/Home";
import Challenges from "../pages/Challenges";
import ChallengeWrapper from "../components/ChallengeWrapper";

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      { path: "/challenges", element: <Challenges /> },
      { path: "challenges/:challengeId", element: <ChallengeWrapper /> },
    ],
  },
]);

export default router;
