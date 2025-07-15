import { Route, Routes } from "react-router";
import { AppLayout } from "../components/AppLayout";
import { Dashboard } from "../Pages/Dashboard";
import { NotFound } from "../Pages/NotFound";
import { Refund } from "../Pages/Refund";


export function ManageRoutes() {
  return (
    <Routes>
      <Route path="/" element={<AppLayout />}>
        <Route path="/" element={<Dashboard />} />
        <Route path="/refund/:id" element={<Refund />} />
      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
