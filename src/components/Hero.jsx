import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Gradient aura background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950" />
        <div className="absolute inset-0 opacity-60" style={{
          background:
            'radial-gradient(1200px 600px at 50% 40%, rgba(124,58,237,0.25), transparent 60%), radial-gradient(800px 400px at 20% 20%, rgba(56,189,248,0.18), transparent 60%), radial-gradient(900px 450px at 80% 30%, rgba(251,191,36,0.12), transparent 60%)'
        }} />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 pt-28 grid lg:grid-cols-2 gap-10 items-center">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-200">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
            AI for customer experience
          </span>
          <h1 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white">
            Build voice and chat agents your customers actually love
          </h1>
          <p className="mt-5 text-slate-300 text-lg leading-relaxed max-w-xl">
            avenioX designs, builds and deploys AI receptionists, phone agents and chatbots that resolve issues in seconds — with your brand voice and enterprise-grade reliability.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a href="#contact" className="inline-flex justify-center items-center rounded-xl bg-white text-slate-900 px-5 py-3 font-semibold shadow-lg shadow-white/10 hover:bg-slate-100 transition">Book a discovery call</a>
            <a href="#solutions" className="inline-flex justify-center items-center rounded-xl border border-white/15 bg-white/5 px-5 py-3 text-white hover:bg-white/10 transition">See solutions</a>
          </div>

          <div className="mt-8 flex items-center gap-6 text-slate-400 text-sm">
            <div>
              <div className="text-white font-semibold">90%+</div>
              First‑contact resolution
            </div>
            <div>
              <div className="text-white font-semibold">24/7</div>
              Always on, always helpful
            </div>
            <div>
              <div className="text-white font-semibold">Minutes</div>
              to integrate
            </div>
          </div>
        </div>

        {/* Spline canvas */}
        <div className="relative h-[60vh] lg:h-[70vh]">
          <Spline scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
          {/* Subtle glass overlay for depth; doesn't block interaction */}
          <div className="pointer-events-none absolute inset-0 rounded-[2rem] border border-white/10" />
        </div>
      </div>
    </section>
  );
}
