"use client";

import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Nav from "../../components/Nav";
import Footer from "../../components/Footer";
import { kyle } from "@/lib/kyle-jackson";

export default function KyleJacksonProfile() {
  return (
    <div className="relative min-h-screen bg-slate-900 text-white">
      <Nav />
      
      <main className="pt-32 pb-16 px-6">
        <div className="mx-auto w-full max-w-6xl">
          
          {/* Back Button */}
          <Link href="/#team" className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 mb-8">
            <ArrowLeft className="h-4 w-4" />
            Back to Team
          </Link>

          {/* HERO */}
          <motion.section 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="rounded-3xl border border-slate-800 bg-slate-900/60 p-6 md:p-10 shadow-[0_35px_120px_-40px_rgba(34,211,238,0.25)] backdrop-blur-sm"
          >
            <div className="h-1.5 w-full rounded-t-2xl -mt-6 mb-6 bg-gradient-to-r from-[#22D3EE] via-[#C084FC] to-[#C3FF5E]" />
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
              <div className="max-w-3xl">
                <h1 className="text-3xl md:text-4xl font-space font-semibold">{kyle.hero.name}</h1>
                <p className="mt-2 text-cyan-400 text-lg font-medium">{kyle.hero.title}</p>
                <p className="mt-4 text-slate-300 text-lg leading-relaxed">{kyle.hero.tagline}</p>
              </div>
              {kyle.hero.headshot && (
                <div className="relative h-32 w-32 overflow-hidden rounded-2xl ring-2 ring-cyan-400/30">
                  <Image
                    src={kyle.hero.headshot}
                    alt={`${kyle.hero.name} headshot`}
                    fill
                    className="object-cover"
                  />
                </div>
              )}
            </div>
          </motion.section>

          {/* SUMMARY */}
          <motion.section 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 grid gap-6"
          >
            {kyle.summary.map((p, i) => (
              <p key={i} className="text-slate-300 leading-relaxed text-lg">{p}</p>
            ))}
          </motion.section>

          {/* ROLES */}
          <motion.section 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 grid gap-6 md:grid-cols-2"
          >
            <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 backdrop-blur-sm">
              <div className="text-cyan-400 font-semibold text-lg mb-4">Managing Partner Of</div>
              <ul className="space-y-3 text-slate-200">
                {kyle.roles.managingPartner.map((r, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <span className="h-2 w-2 rounded-full bg-cyan-400" />
                    <span className="font-medium">{r}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 backdrop-blur-sm">
              <div className="text-cyan-400 font-semibold text-lg mb-4">Advisory Roles</div>
              <ul className="space-y-3 text-slate-200">
                {kyle.roles.advisory.map((r, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <span className="h-2 w-2 rounded-full bg-cyan-400" />
                    <span className="font-medium">{r}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.section>

          {/* EXPERTISE */}
          <motion.section 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12"
          >
            <h2 className="text-3xl font-space font-semibold mb-8">Technical <span className="text-cyan-400">Expertise</span></h2>
            <div className="grid gap-6 md:grid-cols-2">
              {kyle.expertise.map((e, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 backdrop-blur-sm hover:border-cyan-400/30 transition-colors duration-300"
                >
                  <div className="text-cyan-400 font-semibold text-lg mb-4">{e.title}</div>
                  <ul className="space-y-3 text-slate-300">
                    {e.bullets.map((b, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <span className="h-2 w-2 rounded-full bg-lime-400 mt-2 flex-shrink-0" />
                        <span className="leading-relaxed">{b}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* PRINCIPLES */}
          <motion.section 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 rounded-2xl border border-slate-800 bg-slate-900/60 p-8 backdrop-blur-sm"
          >
            <h2 className="text-3xl font-space font-semibold mb-6">Operating <span className="text-cyan-400">Principles</span></h2>
            <div className="grid gap-4 md:grid-cols-2">
              {kyle.principles.map((p, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="rounded-xl border border-slate-700 bg-slate-950/60 p-4 text-slate-200 italic"
                >
                  "{p}"
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* SELECTED WORK */}
          <motion.section 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12"
          >
            <h2 className="text-3xl font-space font-semibold mb-8">Selected <span className="text-cyan-400">Work</span></h2>
            <div className="grid gap-8">
              {kyle.selected.map((item, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 backdrop-blur-sm hover:border-cyan-400/30 transition-colors duration-300"
                >
                  <div className="text-cyan-400 font-semibold text-xl mb-2">{item.heading}</div>
                  <div className="text-slate-400 text-sm mb-4 italic">{item.sub}</div>
                  <ul className="space-y-3 text-slate-300">
                    {item.details.map((d, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <span className="h-2 w-2 rounded-full bg-lime-400 mt-2 flex-shrink-0" />
                        <span className="leading-relaxed">{d}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* TESTIMONIALS */}
          {kyle.testimonials && kyle.testimonials.length > 0 ? (
            <motion.section 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-12"
            >
              <h2 className="text-3xl font-space font-semibold mb-8">Client <span className="text-cyan-400">Testimonials</span></h2>
              <div className="grid gap-6 md:grid-cols-2">
                {kyle.testimonials.map((t, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 backdrop-blur-sm"
                  >
                    <p className="text-slate-300 italic mb-4">"{t.quote}"</p>
                    <div className="text-cyan-400 font-medium">{t.author}</div>
                    <div className="text-slate-400 text-sm">{t.role}</div>
                  </motion.div>
                ))}
              </div>
            </motion.section>
          ) : null}

          {/* PERSONAL SECTION */}
          <motion.section 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12"
          >
            <h2 className="text-3xl font-space font-semibold mb-2">The architect behind the <span className="text-cyan-400">systems</span></h2>
            <p className="text-cyan-400 font-medium text-lg mb-6">PRECISION & VISION</p>
            <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 backdrop-blur-sm space-y-4">
              {kyle.personal.map((p, i) => (
                <p key={i} className="text-slate-300 leading-relaxed text-lg">{p}</p>
              ))}
            </div>
          </motion.section>

        </div>
      </main>

      <Footer />
    </div>
  );
}
