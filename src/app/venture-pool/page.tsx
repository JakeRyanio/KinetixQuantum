"use client";

import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Section, { Container } from "../components/Section";

export default function VenturePoolPage() {
  return (
    <div className="relative min-h-screen bg-slate-900 text-white">
      <Nav />
      
      <main className="pt-32 pb-16 px-6">
        <div className="mx-auto w-full max-w-6xl">
          
          {/* Back Button */}
          <Link href="/#venture-pool" className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 mb-8 relative z-10">
            <ArrowLeft className="h-4 w-4" />
            Back to Homepage
          </Link>

          {/* Hero Section */}
          <motion.section 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16 relative overflow-hidden rounded-2xl border border-slate-800"
          >
            {/* Background Video */}
            <div className="absolute inset-0 z-0">
              <video
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
              >
                <source src="/videos/kinetix-code.mp4" type="video/mp4" />
              </video>
              {/* Dark overlay for text readability */}
              <div className="absolute inset-0 bg-black/70" />
            </div>
            
            <div className="relative z-10 p-12">
            <h1 className="text-4xl md:text-6xl font-space font-bold mb-2">
              Kinetix <span className="text-violet-400">Venture Pool</span>
            </h1>
            <h2 className="text-3xl md:text-4xl font-space font-semibold mb-6 text-cyan-400">
              "The <span className="text-cyan-400">Quantum Dividend</span>"
            </h2>
            <h2 className="text-2xl md:text-3xl font-space font-semibold mb-8 text-slate-300">
              A New Model of Venture Participation
            </h2>
            <p className="text-xl text-slate-300 max-w-4xl mx-auto leading-relaxed">
              Traditional venture investing concentrates upside in a narrow sleeve of risk capital. At Kinetix Quantum, we've reimagined the model. We created the Venture Pool and its quarterly Quantum Dividend — a feature unique to our fund and designed to ensure that all capital in motion benefits all participants.
            </p>
            </div>
          </motion.section>

          {/* How It Works Section */}
          <motion.section 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-3xl font-space font-semibold mb-8 text-center">
              How It <span className="text-cyan-400">Works</span>
            </h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 backdrop-blur-sm"
              >
                <div className="text-violet-400 font-semibold text-lg mb-3">Step 1</div>
                <p className="text-slate-300 leading-relaxed">
                  <span className="text-violet-400 font-medium">5–10% of Net Profits</span> from every Kinetix Venture cycles back into a Shared Prosperity Pool.
                </p>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 backdrop-blur-sm"
              >
                <div className="text-cyan-400 font-semibold text-lg mb-3">Step 2</div>
                <p className="text-slate-300 leading-relaxed">
                  This pool is distributed <span className="text-white font-medium">pro-rata to every LP</span> in Kinetix Quantum, regardless of whether they directly invested in the venture.
                </p>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 backdrop-blur-sm"
              >
                <div className="text-lime-400 font-semibold text-lg mb-3">Step 3</div>
                <p className="text-slate-300 leading-relaxed">
                  Disbursements are made <span className="text-lime-400 font-medium">quarterly</span>, creating ongoing bonuses for all LPs.
                </p>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 backdrop-blur-sm"
              >
                <div className="text-orange-400 font-semibold text-lg mb-3">Step 4</div>
                <p className="text-slate-300 leading-relaxed">
                  Upon a venture exit or liquidity event, LPs also enjoy a <span className="text-orange-400 font-medium">phantom equity participation</span> — sharing in the sale value even if they weren't directly allocated to that company.
                </p>
              </motion.div>
            </div>
          </motion.section>

          {/* Why This Matters Section */}
          <motion.section 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-3xl font-space font-semibold mb-8 text-center">
              Why This <span className="text-cyan-400">Matters</span>
            </h2>
            <div className="grid gap-8 md:grid-cols-3">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 backdrop-blur-sm text-center"
              >
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-lime-400 to-green-400 flex items-center justify-center mx-auto mb-4">
                  <span className="text-slate-900 font-bold text-xl">C</span>
                </div>
                <h3 className="text-lime-400 font-semibold text-lg mb-3">Conservative LPs</h3>
                <p className="text-slate-300 leading-relaxed">
                  Gain exposure to breakthrough upside without having to underwrite early-stage venture risk.
                </p>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 backdrop-blur-sm text-center"
              >
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-violet-400 to-purple-400 flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">B</span>
                </div>
                <h3 className="text-violet-400 font-semibold text-lg mb-3">Bold LPs</h3>
                <p className="text-slate-300 leading-relaxed">
                  Who lean into the venture sleeve still amplify their gains, because a slice of their wins flows outward to strengthen the entire ecosystem.
                </p>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 backdrop-blur-sm text-center"
              >
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-cyan-400 to-blue-400 flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">A</span>
                </div>
                <h3 className="text-cyan-400 font-semibold text-lg mb-3">All LPs</h3>
                <p className="text-slate-300 leading-relaxed">
                  Are aligned in a cycle of reciprocity: the fund grows together, benefits together, and exits together.
                </p>
              </motion.div>
            </div>
          </motion.section>

          {/* The Quantum Dividend Section */}
          <motion.section 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16 rounded-2xl border border-slate-800 bg-slate-900/60 p-8 backdrop-blur-sm"
          >
            <div className="h-1.5 w-full rounded-t-2xl -mt-8 mb-8 bg-gradient-to-r from-[#22D3EE] via-[#C084FC] to-[#C3FF5E]" />
            <h2 className="text-3xl font-space font-semibold mb-6 text-center">
              The <span className="text-cyan-400">Quantum Dividend</span>
            </h2>
            <div className="max-w-4xl mx-auto space-y-6 text-lg text-slate-300 leading-relaxed">
              <p className="text-center">
                We call this shared payout the <span className="text-cyan-400 font-medium">Quantum Dividend</span> — a recurring expression of our philosophy that capital is energy, and energy in motion creates prosperity.
              </p>
              
              <p className="text-center">
                Unlike any traditional fund structure, the Quantum Dividend transforms venture upside into:
              </p>
              
              <div className="grid gap-6 md:grid-cols-3 mt-8">
                <div className="text-center p-6 rounded-xl border border-slate-700 bg-slate-950/60">
                  <div className="text-lime-400 font-semibold mb-2">Bonus Yield</div>
                  <p className="text-slate-300 text-sm">A bonus yield for every investor, every quarter.</p>
                </div>
                <div className="text-center p-6 rounded-xl border border-slate-700 bg-slate-950/60">
                  <div className="text-violet-400 font-semibold mb-2">Phantom Equity</div>
                  <p className="text-slate-300 text-sm">A collective phantom equity stake across the venture portfolio.</p>
                </div>
                <div className="text-center p-6 rounded-xl border border-slate-700 bg-slate-950/60">
                  <div className="text-cyan-400 font-semibold mb-2">Shared Growth</div>
                  <p className="text-slate-300 text-sm">A symbol of alignment, reciprocity, and shared growth.</p>
                </div>
              </div>
            </div>
          </motion.section>

          {/* In Plain Terms Section */}
          <motion.section 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-3xl font-space font-semibold mb-8">
              In Plain <span className="text-cyan-400">Terms</span>
            </h2>
            <div className="max-w-4xl mx-auto space-y-6 text-lg text-slate-300 leading-relaxed">
              <p>
                With Kinetix Quantum, you don't just invest in a fund — you <span className="text-cyan-400 font-medium">plug into an ecosystem</span>. Whether you prefer the steady returns of real estate and insurance or the volatility of ventures and tokenization, you still share in the breakthroughs that define tomorrow.
              </p>
              
              <div className="pt-6 space-y-4">
                <p className="text-xl font-medium text-white">
                  Every LP has a stake in the boldest bets. Every dollar in motion multiplies.
                </p>
                <p className="text-2xl font-semibold text-cyan-400 italic">
                  That is the power of the Quantum Dividend.
                </p>
              </div>
            </div>
          </motion.section>

        </div>
      </main>

      <Footer />
    </div>
  );
}
