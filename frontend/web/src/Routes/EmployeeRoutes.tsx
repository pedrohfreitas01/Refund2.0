import { Route, Routes } from "react-router";
import { Refund } from "../Pages/Refund";
import { NotFound } from "../Pages/NotFound";
import { AppLayout } from "../components/AppLayout";
import { Confirm } from "../Pages/Confirm";

export function EmployeeRoutes() {
  return (
    <Routes>
      <Route path="/" element={<AppLayout />}>
        <Route path="/" element={<Refund />} />
        <Route path="/confirm" element={<Confirm />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
