import {
  ReactLocation,
  Router as LocationRouter,
  Route,
  createHashHistory,
  createMemoryHistory,
  Outlet,
} from "@tanstack/react-location";
import { UsersView } from "../views/users";

const routes: Route[] = [
  {
    path: "users",
    element: <UsersView />,
  },
  {
    path: "*",
    element: "Not found",
  },
];

const reactLocation = new ReactLocation();

export const Routes = () => {
  return (
    <LocationRouter location={reactLocation} routes={routes}>
      <Outlet />
    </LocationRouter>
  );
};
