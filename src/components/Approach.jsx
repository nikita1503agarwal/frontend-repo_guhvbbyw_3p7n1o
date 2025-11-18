export default function Approach() {
  const steps = [
    { title: "Discover", text: "We map goals, journeys and success metrics to design the right agent." },
    { title: "Design", text: "Conversation flows, voice, guardrails and escalation paths crafted for your brand." },
    { title: "Build", text: "We integrate LLMs, telephony, data sources and tools to deliver outcomes." },
    { title: "Launch & Improve", text: "Pilot fast, measure impact and iterate with analytics and QA loops." },
  ];

  return (
    <section id="approach" className="relative py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">A pragmatic, outcome‑first approach</h2>
            <p className="mt-4 text-slate-300 max-w-xl">
              We focus on what moves the needle: reducing handle time, deflecting tickets and boosting CSAT while keeping your brand voice intact.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            {steps.map((s, i) => (
              <div key={s.title} className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <div className="flex items-center gap-3">
                  <div className="h-8 w-8 rounded-lg bg-gradient-to-tr from-violet-500 via-sky-400 to-amber-300 text-transparent" />
                  <div className="text-sm text-slate-400">Step {i + 1}</div>
                </div>
                <h3 className="mt-3 text-white font-semibold">{s.title}</h3>
                <p className="mt-1 text-slate-300 text-sm leading-relaxed">{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
