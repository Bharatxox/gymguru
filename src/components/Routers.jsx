import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import * as ReactDOM from "react-dom";
import Layout from "./Layout";
import ErrorPage from "../pages/ErrorPage";
import Home from "../pages/Home";
import Exercise from "../pages/Exercise";
import ExercisePage from "../pages/ExercisePage";
import ExerciseByBodypartName from "../pages/ExerciseByBodypartName";
import SearchExercise from "../pages/SearchExercise";

const router = createBrowserRouter([
  {
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "home",
        element: <Home />,
      },
      {
        path: "/exercise",
        element: <Exercise />,
      },
      {
        path: "/exercise/:Id",
        element: <ExercisePage />,
      },
      {
        path: "/bodyPart/:BodyPart",
        element: <ExerciseByBodypartName />,
      },
      {
        path: "/name/:Name",
        element: <SearchExercise />,
      },
    ],
  },
]);
function Routers() {
  return <RouterProvider router={router} />;
}
export default Routers;
