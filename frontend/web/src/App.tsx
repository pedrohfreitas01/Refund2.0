import { AuthProvider } from "./contexts/AuthContext";
import { Routes } from "./Routes";

export function App() {
  return (
    <AuthProvider>
      <Routes />
    </AuthProvider>
  );
}
