import { Route, Routes } from "react-router";
import { SignIn } from "../Pages/SignIn";
import { AuthLayout } from "../components/AuthLayout";

export function AuthRoutes() {
  return (
    <Routes>
      <Route path="/" element={<AuthLayout />} >
        <Route path="/" element={<SignIn />} />
      </Route >
      
    </Routes>
  );
}
