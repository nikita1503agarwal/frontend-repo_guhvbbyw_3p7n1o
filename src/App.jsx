import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Solutions from './components/Solutions';
import Approach from './components/Approach';
import CTA from './components/CTA';

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-200">
      {/* background subtle texture */}
      <div className="fixed inset-0 -z-[1]">
        <div className="absolute inset-0 bg-[radial-gradient(900px_500px_at_50%_-10%,rgba(124,58,237,0.15),transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(700px_400px_at_10%_10%,rgba(56,189,248,0.12),transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(700px_400px_at_90%_10%,rgba(251,191,36,0.08),transparent_60%)]" />
      </div>

      <Navbar />
      <main>
        <Hero />
        <Solutions />
        <Approach />
        <CTA />
      </main>

      <footer className="relative py-10 border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-slate-400">
          <div>© {new Date().getFullYear()} avenioX. All rights reserved.</div>
          <div className="flex items-center gap-3">
            <a href="#" className="hover:text-white">Privacy</a>
            <span>•</span>
            <a href="#" className="hover:text-white">Terms</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
