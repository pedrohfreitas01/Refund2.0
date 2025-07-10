import { Route, Routes } from "react-router";
import { SignIn } from "../Pages/SignIn";
import { AuthLayout } from "../components/AuthLayout";
import { SignUp } from "../Pages/SignUp";
import { NotFound } from "../Pages/NotFound";

export function AuthRoutes() {
  return (
    <Routes>
      <Route path="/" element={<AuthLayout />} >
        <Route path="/" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
      </Route >

      <Route path="*" element={<NotFound/>}></Route>
      
    </Routes>
  );
}
