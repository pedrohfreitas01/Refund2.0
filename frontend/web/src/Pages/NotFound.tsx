export function NotFound() {
    return (
      <div className="w-screen h-screen flex justify-center items-center ">
        <h1 className="flex flex-col">Ops Essa pagina nao existe 😢.</h1>
        <a href="/" className="font-semibold text-center text-green-100 hover:text-green-200 transition ease-linear">Voltar para Home</a>
      </div>
    );
}