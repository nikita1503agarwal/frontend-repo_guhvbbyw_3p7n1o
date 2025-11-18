import { Bot, PhoneCall, MessageSquare, Gauge } from "lucide-react";

const cards = [
  {
    icon: Bot,
    title: "AI Receptionists",
    desc: "Natural, human‑like voice agents that greet, route, and resolve – without the wait.",
  },
  {
    icon: PhoneCall,
    title: "AI Telefonists",
    desc: "Smart phone agents that handle bookings, FAQs and escalations across languages.",
  },
  {
    icon: MessageSquare,
    title: "Chatbots",
    desc: "Omnichannel chat assistants for web, WhatsApp and social with your knowledge base.",
  },
  {
    icon: Gauge,
    title: "Analytics & QA",
    desc: "Conversation insights, redaction and continuous improvement out of the box.",
  },
];

export default function Solutions() {
  return (
    <section id="solutions" className="relative py-24">
      <div className="absolute inset-0 pointer-events-none opacity-30" style={{
        background:
          'radial-gradient(700px 400px at 20% 0%, rgba(124,58,237,0.25), transparent 60%), radial-gradient(600px 300px at 90% 10%, rgba(56,189,248,0.18), transparent 60%)'
      }} />

      <div className="relative mx-auto max-w-7xl px-6">
        <h2 className="text-center text-3xl sm:text-4xl font-bold text-white tracking-tight">
          Solutions built for customer service
        </h2>
        <p className="mt-3 text-center text-slate-300 max-w-2xl mx-auto">
          Powerful automations that feel personal. We design for empathy, speed and accuracy.
        </p>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group rounded-2xl border border-white/10 bg-white/5 p-5 hover:bg-white/10 transition relative overflow-hidden">
              <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-gradient-to-tr from-violet-500/20 via-sky-400/20 to-amber-300/20 blur-2xl" />
              <div className="h-11 w-11 rounded-xl bg-white/10 flex items-center justify-center text-white">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-white font-semibold text-lg">{title}</h3>
              <p className="mt-2 text-slate-300 text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
