import { Route, Routes } from "react-router";
import { SignIn } from "../Pages/SignIn";
import { AuthLayout } from "../components/AuthLayout";
import { SignUp } from "../Pages/SignUp";

export function AuthRoutes() {
  return (
    <Routes>
      <Route path="/" element={<AuthLayout />} >
        <Route path="/" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
      </Route >
      
    </Routes>
  );
}
