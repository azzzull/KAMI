import { clients } from '../data/site';
import { Marquee } from '../components/Marquee';

export function ClientsSection() {
  return (
    <section className="relative overflow-hidden bg-white py-12 sm:py-14">
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <p className="mb-8 text-center text-xs font-semibold uppercase tracking-[0.34em] text-slate-400">
          Trusted across sectors
        </p>
        <Marquee>
          {clients.map((client) => (
            <div
              key={client.name}
              className="flex min-h-16 min-w-40 items-center justify-center rounded-full border border-slate-200 bg-slate-50 px-4 py-4 text-center text-sm font-semibold text-slate-500 grayscale transition-all duration-300 hover:-translate-y-0.5 hover:scale-[1.02] hover:grayscale-0 hover:bg-white hover:text-slate-900 hover:shadow-[0_16px_36px_rgba(17,24,39,0.08)]"
            >
              {client.image ? (
                <img src={client.image} alt={client.name} className="max-h-8 w-auto object-contain opacity-70 transition duration-300 hover:opacity-100" />
              ) : (
                client.name
              )}
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
}
