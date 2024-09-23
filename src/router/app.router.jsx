import { Navigate, useRoutes } from "react-router-dom";
import Courses from "../pages/courses/courses";
import Detailcourse from "../pages/courses/detailcourse/detailcourse";
import Home from "../pages/home/home";
import Payments from "../pages/payments/payments";
import SchedulePage from "../pages/schedule/schedule";

const AppRouter = () => {
  const routes = [
    {
      path: "/",
      element: (
        <div className="container">
          <Home></Home>
        </div>
      ),
    },
    { path: "*", element: <Navigate to={"/"}></Navigate> },
    {
      path: "/cursos",
      element: (
        <div className="container">
          <Courses></Courses>
        </div>
      ),
    },
    {
      path: "/cursos/:id",
      element: (
        <div className="container">
          <Detailcourse></Detailcourse>
        </div>
      ),
    },
    {
      path: "/horario",
      element: (
        <div className="container">
          <SchedulePage></SchedulePage>
        </div>
      ),
    },
    {
      path: "/pagos",
      element: (
        <div className="container">
          <Payments></Payments>
        </div>
      ),
    },
  ];
  return useRoutes(routes);
};

export default AppRouter;
