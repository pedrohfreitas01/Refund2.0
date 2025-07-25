import { BrowserRouter } from "react-router-dom";

import { AuthRoutes } from "./auth-routes";
import { EmployeeRoutes } from "./EmployeeRoutes";
import { ManageRoutes } from "./ManageRoutes";
import { Loading } from "../components/Loading";
import { useAuth } from "../hooks/useAuth";

export function Routes() {
  const { session, isLoading } = useAuth();

  function Route() {
    switch (session?.user.role) {
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
