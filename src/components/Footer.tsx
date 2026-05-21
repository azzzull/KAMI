import { motion } from 'framer-motion';
import { ArrowUpRight, Instagram, Linkedin, Mail, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-slate-950 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(236,25,139,0.18),transparent_28%),radial-gradient(circle_at_top_right,rgba(30,63,174,0.16),transparent_26%),linear-gradient(180deg,rgba(255,255,255,0.03),transparent)]" />
      <div className="noise-overlay opacity-20" />
      <div aria-hidden="true" className="absolute left-0 right-0 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(236,25,139,0.8),rgba(107,31,175,0.8),rgba(30,63,174,0.8),transparent)] opacity-70" />
      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr_0.8fr_1fr]">
          <div className="space-y-5">
            <Link to="/" className="inline-flex items-center gap-3 no-underline">
              <div className="grid h-11 w-11 place-items-center rounded-2xl bg-white text-slate-950">
                <span className="font-extrabold">K</span>
              </div>
              <div>
                <div className="font-display text-sm font-extrabold tracking-[0.24em]">KAMI</div>
                <div className="text-[11px] uppercase tracking-[0.26em] text-slate-400">Event Management</div>
              </div>
            </Link>
            <p className="max-w-md text-sm leading-7 text-slate-300">
              Corporate professionalism meets creative event experience. We design and deliver premium moments that feel clear, smooth, and memorable.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.22em] text-slate-400">Quick Links</h3>
            <div className="mt-5 grid gap-3 text-sm text-slate-200">
              <Link to="/#about" className="no-underline flex items-center gap-2 transition hover:text-white">
                <ArrowUpRight className="h-4 w-4 text-fuchsia-400" /> About
              </Link>
              <Link to="/#services" className="no-underline flex items-center gap-2 transition hover:text-white">
                <ArrowUpRight className="h-4 w-4 text-fuchsia-400" /> Services
              </Link>
              <Link to="/#portfolio" className="no-underline flex items-center gap-2 transition hover:text-white">
                <ArrowUpRight className="h-4 w-4 text-fuchsia-400" /> Portfolio
              </Link>
              <Link to="/contact" className="no-underline flex items-center gap-2 transition hover:text-white">
                <ArrowUpRight className="h-4 w-4 text-fuchsia-400" /> Contact
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.22em] text-slate-400">Contact</h3>
            <div className="mt-5 grid gap-3 text-sm text-slate-200">
              <a href="tel:+6281234567890" className="no-underline inline-flex items-center gap-2 transition hover:text-white">
                <Phone className="h-4 w-4 text-fuchsia-400" /> +62 812 3456 7890
              </a>
              <a href="mailto:hello@kami-event.com" className="no-underline inline-flex items-center gap-2 transition hover:text-white">
                <Mail className="h-4 w-4 text-fuchsia-400" /> hello@kami-event.com
              </a>
              <p className="text-slate-400">Jakarta, Indonesia</p>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.22em] text-slate-400">Social</h3>
            <div className="mt-5 flex gap-3">
                <a href="/" aria-label="Instagram" className="no-underline grid h-11 w-11 place-items-center rounded-full border border-white/10 bg-white/5 transition hover:bg-white/10">
                <Instagram className="h-4 w-4" />
              </a>
                <a href="/" aria-label="LinkedIn" className="no-underline grid h-11 w-11 place-items-center rounded-full border border-white/10 bg-white/5 transition hover:bg-white/10">
                <Linkedin className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-white/10 pt-6 text-sm text-slate-400 sm:flex-row sm:items-center sm:justify-between">
          <p>(c) 2026 KAMI Event Management. All rights reserved.</p>
          <p>Premium event production, strategy, and creative direction.</p>
        </div>
      </div>
    </footer>
  );
}
