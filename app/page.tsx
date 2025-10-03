// Arquivo: app/page.tsx
import GraficoTradingView from '@/components/GraficoTradingView';
import AnaliseTecnica from '@/components/analiseTecnica';
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bgt-gray-100">
      <div>
      <header className="text-center p-8 bg-amber-800 rounded-lg shadow-2xl  mb-8 w-3xl">
        <nav>
          <h1 className="text-4xl font-bold text-white">Meu Site Next.js</h1>
        </nav>
      </header>
      </div>
      <div className="text-center p-8 bg-amber-50 bg-gradient-to-l rounded-lg shadow-lg w-full max-w-3xl h-200 ">

      <h1 className="text-6xl font-bold text-blue-600">
        Pesquisa de Ações
      </h1>
      <AnaliseTecnica />
      <GraficoTradingView />
      </div>
    </main>
  );
}