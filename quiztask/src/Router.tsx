
import { createBrowserRouter, RouteElement } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import HomePage from "./Components/home/HomePage";

interface PrivateRouteProps {
  isAuthenticated: boolean;
  authenticationPath: string;
  children: RouteElement[];
}
const PrivateRoute: React.FC<PrivateRouteProps> = ({
  isAuthenticated,
  authenticationPath,
  children,
}) => {
  if (!isAuthenticated) {
    // If not authenticated, redirect to the login page
    return <HomePage />;
  }

  return <>{children}</>;
};


const router = createBrowserRouter([
  {
    path: "/",
    element: <Login/>,
    children: [
        {
            index:true,
            element:<HomePage/>
        },
      {
        path: "/home",
        element: (
          <PrivateRoute isAuthenticated={true} authenticationPath="/home">
            <Home />
          </PrivateRoute>
        ),
      },
    ],
  },
]);

export default router;
