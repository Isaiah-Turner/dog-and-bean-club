import { useState } from 'react';
import { HelloWorld } from './components/HelloWorld';
import { GoodbyeWorld } from './components/GoodbyeWorld';

export default function App() {
  const [currentPage, setCurrentPage] = useState<'hello' | 'goodbye'>('hello');

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <div className="flex gap-4">
            <button
              onClick={() => setCurrentPage('hello')}
              className={`px-4 py-2 rounded-lg transition-colors ${
                currentPage === 'hello'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Hello Page
            </button>
            <button
              onClick={() => setCurrentPage('goodbye')}
              className={`px-4 py-2 rounded-lg transition-colors ${
                currentPage === 'goodbye'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Goodbye Page
            </button>
          </div>
        </div>
      </nav>

      <main className="max-w-4xl mx-auto px-4 py-12">
        {currentPage === 'hello' ? <HelloWorld /> : <GoodbyeWorld />}
      </main>
    </div>
  );
}
