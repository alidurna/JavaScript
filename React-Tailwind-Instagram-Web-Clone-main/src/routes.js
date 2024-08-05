import PrivateRoute from "components/PrivateRoute";
import AuthLayout from "components/pages/auth";
import Login from "components/pages/login";

//---------------------------------------------------------------------

const { default: Home } = require("components/pages/home");

const routes = [
  {
    path: "/",
    element: <Home />,
    auth: true,
  },
  {
    path: "/auth",
    element: <AuthLayout />,
    children: [
      {
        path: "login",
        element: <Login />,
      },
    ],
  },
];

//---------------------------------------------------------------------

const authCheck = (routes) =>
  routes.map((route) => {
    if (route?.auth) {
      route.element = <PrivateRoute>{route.element}</PrivateRoute>;
    }

    if (route?.children) {
      route.children = authCheck(route.children);
    }

    return route;
  });

export default authCheck(routes);
