// Arquivo: app/page.tsx
import GraficoTradingView from '@/components/GraficoTradingView';
import AnaliseTecnica from '@/components/AnaliseTecnica';
import AnaliseMilhoCME from '@/components/AnaliseMilhoCME';
import AnaliseSojaCME from '@/components/AnaliseSojaCME';
import AnaliseTaxaCambio from '@/components/AnaliseTaxaCambio';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bgt-gray-100 max-w-10xl">
      <div>
      <header className="text-center p-1 bg-amber-50 rounded-lg shadow-2xl  mb-4 w-313 h-20  justify-self-center-safe">
          <AnaliseTecnica />
      </header>
      </div>
      <div className="text-center p-1 bg-amber-50 bg-gradient-to-l rounded-lg shadow-lg  w-313 h-159 max-w-10xl">

      <h1 className="text-4xl font-bold text-blue-600">
        Commodities de Grãos - Chicago - CME
      </h1>
        <GraficoTradingView />
      </div>
      <div className="flex gap-4 justify-center w-full mt-4">
        <div className='text-center p-1 bg-amber-50 bg-gradient-to-l rounded-lg shadow-lg h-50'>
          <AnaliseMilhoCME />
        </div>
        <div className='text-center p-1 bg-amber-50 bg-gradient-to-l rounded-lg shadow-lg h-50'>
          <AnaliseSojaCME />
        </div>
        <div  className='text-center p-1 bg-amber-50 bg-gradient-to-l rounded-lg shadow-lg h-50'>
          <AnaliseTaxaCambio />
        </div>
      </div>
    </main>
  );
}