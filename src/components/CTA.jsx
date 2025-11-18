export default function CTA() {
  return (
    <section id="contact" className="relative py-24">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <div className="rounded-3xl border border-white/10 bg-gradient-to-tr from-white/10 via-white/5 to-white/10 p-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">Let’s build your AI service desk</h2>
          <p className="mt-3 text-slate-300">
            Tell us about your goals and systems. We’ll propose a roadmap and a quick pilot to prove value.
          </p>

          <form className="mt-8 grid sm:grid-cols-3 gap-3">
            <input className="col-span-2 rounded-xl bg-white/10 border border-white/10 px-4 py-3 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-white/30" placeholder="Work email" />
            <button type="submit" className="rounded-xl bg-white text-slate-900 px-5 py-3 font-semibold hover:bg-slate-100 transition">Get a demo</button>
          </form>

          <p className="mt-3 text-xs text-slate-400">We’ll get back within one business day.</p>
        </div>
      </div>
    </section>
  );
}
