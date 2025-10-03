// Arquivo: app/page.tsx

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bgt-gray-100">
      <header className="text-center p-8 bg-black rounded-lg shadow-lg w-full mb-100 max-w-5xl ">
        <nav>
          <h1 className="text-4xl font-bold text-white">Meu Site Next.js</h1>
        </nav>
      </header>
      <div className="text-center p-8 bg-white rounded-lg shadow-lg w-full max-w-3xl h-96">

      <h1 className="text-6xl font-bold text-blue-600">
        Minha Primeira Página com Next.js!
      </h1>
      <p className="mt-4 text-xl bg-gray p-8 rounded-lg shadow-md text-black">
        Começando minha jornada no desenvolvimento web moderno.
      </p>
      </div>
    </main>
  );
}