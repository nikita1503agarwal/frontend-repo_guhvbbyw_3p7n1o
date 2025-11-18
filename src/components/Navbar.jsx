import { Menu } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navItems = [
    { label: "Solutions", href: "#solutions" },
    { label: "Approach", href: "#approach" },
    { label: "Clients", href: "#clients" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-7xl px-6 py-4">
        <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-slate-900/60 backdrop-blur-md px-5 py-3">
          <a href="#" className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-gradient-to-tr from-violet-500 via-sky-400 to-amber-300 shadow-[0_0_30px_rgba(124,58,237,0.4)]" />
            <span className="text-white font-semibold tracking-tight">avenioX</span>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-slate-300 hover:text-white transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:block">
            <a href="#contact" className="rounded-xl bg-white text-slate-900 px-4 py-2 text-sm font-semibold hover:bg-slate-100 transition-colors">Get a demo</a>
          </div>

          <button
            className="md:hidden inline-flex items-center justify-center text-white/80"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>

        {open && (
          <div className="md:hidden mt-2 rounded-2xl border border-white/10 bg-slate-900/80 backdrop-blur-md p-4">
            <div className="flex flex-col gap-3">
              {navItems.map((item) => (
                <a key={item.href} href={item.href} className="text-slate-200 py-2">
                  {item.label}
                </a>
              ))}
              <a href="#contact" className="mt-2 rounded-xl bg-white text-slate-900 px-4 py-2 text-sm font-semibold">Get a demo</a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
