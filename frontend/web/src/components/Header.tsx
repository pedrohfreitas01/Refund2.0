import logoSvg from "../assets/logo.svg";
import logoOutSvg from "../assets/logout.svg";
import { useAuth } from "../hooks/useAuth";

export function Header() {
  const auth = useAuth();

  return (
    <header className="w-full flex justify-between">
      <img src={logoSvg} alt="" className="my-8" />

      <div className="flex items-center gap-3">
        <span className="text-sm font-semibold text-gray-200">
          Ola , {auth.session?.user.name}
        </span>

        <img
          src={logoOutSvg}
          alt="ícone de sair"
          className="my-8 cursor-pointer hover:opacity-75 transition ease-in"
          onClick={() => auth.remove()}
        />
      </div>
    </header>
  );
}
