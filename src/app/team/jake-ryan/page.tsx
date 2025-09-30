"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ExternalLink, Mail, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import Nav from "../../components/Nav";
import Footer from "../../components/Footer";
import { jake } from "@/lib/jake-ryan";

export default function JakeRyanProfile() {
  return (
    <div className="relative min-h-screen bg-slate-900 text-white">
      <Nav />
      
      <main className="min-h-screen bg-[#0B0F14] text-white px-6 py-32">
        <div className="mx-auto w-full max-w-6xl">
          {/* Back Button */}
          <div className="mb-8">
            <Link href="/#team">
              <Button variant="outline" className="border-cyan-400/50 text-cyan-400 hover:bg-cyan-400/10">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Team
              </Button>
            </Link>
          </div>

          {/* HERO */}
          <section className="rounded-3xl border border-slate-800 bg-slate-900/60 p-6 md:p-10 shadow-[0_35px_120px_-40px_rgba(34,211,238,0.25)]">
            <div className="h-1.5 w-full rounded-t-2xl -mt-6 mb-6 bg-gradient-to-r from-[#22D3EE] via-[#C084FC] to-[#C3FF5E]" />
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
              <div className="max-w-3xl">
                <h1 className="text-3xl md:text-4xl font-semibold font-space">{jake.hero.name}</h1>
                <p className="mt-2 text-cyan-200">{jake.hero.title}</p>
                <p className="mt-4 text-slate-300">{jake.hero.tagline}</p>
              </div>
              {jake.hero.headshot && (
                <div className="relative h-32 w-32 overflow-hidden rounded-2xl ring-1 ring-slate-700">
                  <Image
                    src={jake.hero.headshot}
                    alt={`${jake.hero.name} headshot`}
                    fill
                    className="object-cover"
                  />
                </div>
              )}
            </div>
          </section>

          {/* SUMMARY */}
          <section className="mt-10 grid gap-6">
            {jake.summary.map((p, i) => (
              <p key={i} className="text-slate-300 leading-relaxed text-lg">{p}</p>
            ))}
          </section>


          {/* EXPERTISE */}
          <section className="mt-12">
            <h2 className="text-2xl font-semibold font-space mb-6">Expertise</h2>
            <div className="grid gap-6 md:grid-cols-2">
              {jake.expertise.map((e, i) => (
                <div
                  key={i}
                  className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6"
                >
                  <div className="text-cyan-200 font-medium text-lg mb-4">{e.title}</div>
                  <ul className="space-y-3 text-slate-200">
                    {e.bullets.map((b, idx) => (
                      <li key={idx} className="flex gap-3">
                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-cyan-300/80 flex-shrink-0" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* SELECTED WORK */}
          <section className="mt-12">
            <h2 className="text-2xl font-semibold font-space mb-6">Selected Work</h2>
            <div className="grid gap-6">
              {jake.selected.map((item, i) => (
                <div
                  key={i}
                  className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6"
                >
                  <div className="text-cyan-200 font-medium text-lg">{item.heading}</div>
                  <div className="text-sm text-slate-400 mb-4">{item.sub}</div>
                  <ul className="space-y-3 text-slate-200">
                    {item.details.map((d, idx) => (
                      <li key={idx} className="flex gap-3">
                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-cyan-300/80 flex-shrink-0" />
                        <span>{d}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* TESTIMONIALS */}
          {jake.testimonials?.length ? (
            <section className="mt-12">
              <h2 className="text-2xl font-semibold font-space mb-6">Testimonials</h2>
              <div className="grid gap-6 md:grid-cols-2">
                {jake.testimonials.map((t, i) => (
                  <div key={i} className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
                    <blockquote className="text-slate-200 text-lg italic mb-4">"{t.quote}"</blockquote>
                    <div className="text-sm text-slate-400">— {t.author}</div>
                  </div>
                ))}
              </div>
            </section>
          ) : null}

          {/* PERSONAL SECTION */}
          <section className="mt-12">
            <h2 className="text-2xl font-semibold font-space mb-2">The man, who's not just a machine</h2>
            <p className="text-cyan-400 font-medium text-lg mb-6">TASTE LIFE</p>
            <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 mb-8">
              <p className="text-slate-300 leading-relaxed text-lg">
                Outside of business, Jake lives by the mantra, "life should be so good you can taste it." A globe-trotting adrenaline junkie, he thrives on snow skiing, extreme sports, immersive travel, and relentless self-development—fueling a life of impact, adventure, and giving back to those less fortunate.
              </p>
            </div>
            
            {/* Lifestyle Images */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="aspect-[4/3] rounded-xl overflow-hidden border border-slate-700 flex items-center justify-center bg-slate-800">
                <Image
                  src="/images/jake-lifestyle/adventure-1.jpg"
                  alt="Jake Ryan adventure lifestyle"
                  width={400}
                  height={300}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="aspect-[4/3] rounded-xl overflow-hidden border border-slate-700 flex items-center justify-center bg-slate-800">
                <Image
                  src="/images/jake-lifestyle/adventure-2.jpg"
                  alt="Jake Ryan giving back and community"
                  width={400}
                  height={300}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="aspect-[4/3] rounded-xl overflow-hidden border border-slate-700 flex items-center justify-center bg-slate-800">
                <Image
                  src="/images/jake-lifestyle/adventure-3.jpg"
                  alt="Jake Ryan extreme sports"
                  width={400}
                  height={300}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
          </section>

        </div>
      </main>

      <Footer />
    </div>
  );
}
