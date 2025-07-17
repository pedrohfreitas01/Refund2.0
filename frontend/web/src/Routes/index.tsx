import { BrowserRouter } from "react-router-dom";

import { AuthRoutes } from "./auth-routes";
import { EmployeeRoutes } from "./EmployeeRoutes";
import { ManageRoutes } from "./ManageRoutes";
import { Loading } from "../components/Loading";

const isLoading = false;
// const session = undefined

const session = {
  user: {
    role: "",
  },
};

export function Routes() {
  function Route() {
    switch (session.user.role) {
      case "employee":
        return <EmployeeRoutes />;

      case "manager":
        return <ManageRoutes />;

      default:
        return <AuthRoutes />;
    }
  }

  if (isLoading) {
    return <Loading />;
  }
  return (
    <BrowserRouter>
      <Route />
    </BrowserRouter>
  );
}
