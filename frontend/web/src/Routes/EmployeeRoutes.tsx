import { Route, Routes } from "react-router";
import { Refund } from "../Pages/Refund";
import { NotFound } from "../Pages/NotFound";
import { AppLayout } from "../components/AppLayout";

export function EmployeeRoutes() {
  return (
    <Routes>
      <Route path="/" element={<AppLayout />}>
        <Route path="/" element={<Refund />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
