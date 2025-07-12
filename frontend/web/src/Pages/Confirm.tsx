import { Navigate, useLocation } from "react-router";
import okSvg from "../assets/ok.svg";

export function Confirm() {
  const location = useLocation();

  if (!location.state.fromSubmit) {
    return <Navigate to="/" />;
  }
  return (
    <div className="bg-gray-500 lg:w-[512px] rounded-xl flex flex-col items-center p-10 gap-6">
      <h1>Solicitação enviada</h1>

      <img src={okSvg} alt="confirma button" className="w-28" />

      <p className="text-sm text-gray-200 text-center">
        Agora e apenas aguardar! Sua solicitação foi enviada para o financeiro
      </p>

      <a href="/" className="w-full p-3 text-center bg-green-100 rounded-lg text-white hover:bg-green-200">
        Nova solicitação
      </a>
    </div>
  );
}
