"use client";

import { motion } from "framer-motion";
import { ArrowLeft, TrendingUp, Heart, Shield, Users } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Section, { Container } from "../components/Section";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import ContactDialog from "../components/ContactDialog";
import { useState } from "react";

export default function FlowModelPage() {
  const [contactDialogOpen, setContactDialogOpen] = useState(false);

  return (
    <div className="relative min-h-screen bg-slate-900 text-white">
      <Nav />

      {/* Hero Section */}
      <Section className="pt-32 pb-16 relative overflow-hidden">
        {/* Background Video */}
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="/videos/flow-model-background.mp4" type="video/mp4" />
          </video>
          {/* Dark overlay for text readability */}
          <div className="absolute inset-0 bg-black/70" />
        </div>
        
        <Container className="relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            {/* Back Button */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-8 text-left"
            >
              <Link href="/#impact">
                <Button variant="outline" className="border-cyan-400/50 text-cyan-400 hover:bg-cyan-400/10">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back to Main Page
                </Button>
              </Link>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-6xl font-space font-bold mb-6"
            >
              The Kinetix <span className="text-cyan-400">Flow Model</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl md:text-2xl text-cyan-400 font-medium mb-12 glow-text"
            >
              Aligned Incentives. Shared Prosperity. Universal Reciprocity.
            </motion.p>
          </div>
        </Container>
      </Section>

      {/* Introduction */}
      <Section className="py-16">
        <Container>
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-lg text-slate-300 leading-relaxed space-y-6 text-center"
            >
              <p>
                At Kinetix Quantum, we've restructured the very way capital flows between Limited Partners and the fund. Instead of burdening LPs with fixed management fees, the traditional <span className="text-red-400 font-medium">"2 & 20" structure</span> that extracts value before any return is realized, we charge <span className="font-semibold text-white">zero fixed fees</span>.
              </p>
              
              <p className="text-center text-xl font-medium text-white">
                Our model is simple and profound:
              </p>
              
              <div className="text-center space-y-4">
                <p className="text-2xl font-bold text-cyan-400">
                  We only participate when profits are generated.
                </p>
                <p className="text-2xl font-bold text-lime-400">
                  We win together, or not at all.
                </p>
              </div>
              
              <p>
                This eliminates the misalignment that plagues traditional funds, where managers collect regardless of performance. In the Kinetix Flow Model, capital only moves in harmony with results.
              </p>
            </motion.div>
          </div>
        </Container>
      </Section>

      {/* Charitable Participation */}
      <Section className="py-16 bg-slate-800/50">
        <Container>
          <div className="max-w-4xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-space font-semibold mb-8 text-center"
            >
              Charitable Participation: <span className="text-cyan-400">The Flow Beyond Profit</span>
            </motion.h2>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-lg text-slate-300 leading-relaxed space-y-6 mb-12 text-center"
            >
              <p>
                Where a typical fund would insert a fixed management fee, we instead redirect <span className="text-lime-400 font-medium">2–3% of committed capital</span> into charitable ventures.
              </p>
              
              <p className="text-center text-xl font-medium text-white">
                This achieves three powerful outcomes:
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="text-center p-6 rounded-xl bg-slate-900/60 border border-slate-700"
              >
                <Heart className="h-12 w-12 text-red-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-4 text-red-400">Reciprocity in Action</h3>
                <p className="text-slate-300 leading-relaxed">
                  As capital grows within the fund, it simultaneously flows outward into causes that uplift society. This is not an afterthought or CSR initiative, but baked into the DNA of the fund.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="text-center p-6 rounded-xl bg-slate-900/60 border border-slate-700"
              >
                <Shield className="h-12 w-12 text-lime-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-4 text-lime-400">Tax-Efficient Contribution</h3>
                <p className="text-slate-300 leading-relaxed">
                  Rather than paying a fee to us, LPs make a charitable donation that is tax-deductible under U.S. and many international frameworks. This turns what is traditionally a sunk cost into a strategic, reputation-enhancing deduction.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="text-center p-6 rounded-xl bg-slate-900/60 border border-slate-700"
              >
                <Users className="h-12 w-12 text-cyan-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-4 text-cyan-400">Investor Choice & Legacy Alignment</h3>
                <p className="text-slate-300 leading-relaxed">
                  LPs can designate causes that matter most to them, from education to environment, health, or community development. This ensures every partner is not only investing capital, but also anchoring their legacy.
                </p>
              </motion.div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Universal Law */}
      <Section className="py-16 relative overflow-hidden">
        {/* Background Video */}
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="/videos/cta-background.mp4" type="video/mp4" />
          </video>
          {/* Dark overlay for text readability */}
          <div className="absolute inset-0 bg-black/60" />
        </div>
        
        <Container className="relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-space font-semibold mb-8"
            >
              The Law of <span className="text-cyan-400">Reciprocity</span>: A Universal Principle Applied to Capital
            </motion.h2>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-lg text-slate-300 leading-relaxed space-y-6"
            >
              <p>
                The Kinetix Flow Model is built on the Universal Law of Reciprocity:
              </p>
              
              <p className="text-2xl font-bold text-cyan-400 italic">
                That which flows outward with intention returns multiplied.
              </p>
              
              <p>
                When capital is committed, a portion immediately flows into the broader world, creating positive impact. This initiates a cycle of abundance:
              </p>
              
              <div className="text-xl font-medium text-white space-y-2">
                <p><span className="text-lime-400">Give freely</span> → <span className="text-cyan-400">Receive fully</span> → <span className="text-violet-400">Grow collectively</span>.</p>
              </div>
              
              <p>
                This energetic structure is rare in finance, but timeless in truth: prosperity compounds when it serves more than the self.
              </p>
            </motion.div>
          </div>
        </Container>
      </Section>

      {/* Differentiation */}
      <Section className="py-16">
        <Container>
          <div className="max-w-4xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-space font-semibold mb-12 text-center"
            >
              How This <span className="text-cyan-400">Differentiates</span> Us
            </motion.h2>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="p-6 rounded-xl bg-red-900/20 border border-red-400/30"
              >
                <h3 className="text-xl font-semibold mb-4 text-red-400">Traditional Funds</h3>
                <p className="text-slate-300">
                  Fees extracted whether or not returns are delivered.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="p-6 rounded-xl bg-cyan-900/20 border border-cyan-400/30"
              >
                <h3 className="text-xl font-semibold mb-4 text-cyan-400">Kinetix Quantum</h3>
                <p className="text-slate-300">
                  No fixed fees. No misalignment. Charitable flow replaces cost with impact.
                </p>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-lg text-slate-300 leading-relaxed space-y-6"
            >
              <p className="text-center text-xl font-medium text-white">
                Investors don't pay us to manage their money. They participate in a cycle where:
              </p>
              
              <ul className="space-y-4 max-w-2xl mx-auto">
                <li className="flex items-start gap-3">
                  <span className="h-2 w-2 rounded-full bg-cyan-400 mt-3 flex-shrink-0" />
                  <span>Every dollar is tied to results.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="h-2 w-2 rounded-full bg-lime-400 mt-3 flex-shrink-0" />
                  <span>Every commitment expands into social good.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="h-2 w-2 rounded-full bg-violet-400 mt-3 flex-shrink-0" />
                  <span>Every LP leaves both a financial and philanthropic legacy.</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </Container>
      </Section>

      {/* Bottom Line */}
      <Section className="py-16 bg-slate-800/50">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-space font-semibold mb-12"
            >
              The Bottom Line for <span className="text-cyan-400">LPs</span>
            </motion.h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="p-6 rounded-xl bg-slate-900/60 border border-slate-700"
              >
                <TrendingUp className="h-8 w-8 text-lime-400 mx-auto mb-3" />
                <h3 className="font-semibold mb-2 text-lime-400">No management fee drag</h3>
                <p className="text-slate-300 text-sm">We don't get paid on promises, we get paid on results</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="p-6 rounded-xl bg-slate-900/60 border border-slate-700"
              >
                <Shield className="h-8 w-8 text-cyan-400 mx-auto mb-3" />
                <h3 className="font-semibold mb-2 text-cyan-400">Exclusive Access</h3>
                <p className="text-slate-300 text-sm">Gain access to the exclusive invite only Kinetix Club to expand your network of high value investors</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="p-6 rounded-xl bg-slate-900/60 border border-slate-700"
              >
                <Heart className="h-8 w-8 text-red-400 mx-auto mb-3" />
                <h3 className="font-semibold mb-2 text-red-400">2–3% commitment becomes charitable donation with tax benefits</h3>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="p-6 rounded-xl bg-slate-900/60 border border-slate-700"
              >
                <Users className="h-8 w-8 text-violet-400 mx-auto mb-3" />
                <h3 className="font-semibold mb-2 text-violet-400">Causes chosen by you</h3>
                <p className="text-slate-300 text-sm">LPs can choose which charitable causes they wish to participate in</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="p-6 rounded-xl bg-slate-900/60 border border-slate-700"
              >
                <div className="flex justify-center mb-3">
                  <div className="h-8 w-8 rounded-full bg-orange-400 flex items-center justify-center">
                    <span className="text-slate-900 font-bold text-sm">?</span>
                  </div>
                </div>
                <h3 className="font-semibold mb-2 text-orange-400">What's the Catch?</h3>
                <p className="text-slate-300 text-sm">We charge 23% of profits. Plain, Simple, Transparent</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
                className="p-6 rounded-xl bg-slate-900/60 border border-slate-700"
              >
                <div className="flex justify-center mb-3">
                  <div className="h-8 w-8 rounded-full bg-gradient-to-r from-cyan-400 to-lime-400 flex items-center justify-center">
                    <span className="text-slate-900 font-bold text-sm">2x</span>
                  </div>
                </div>
                <h3 className="font-semibold mb-2 text-white">Your capital creates dual ROI: financial and societal</h3>
              </motion.div>
            </div>
          </div>
        </Container>
      </Section>

      {/* CTA Section */}
      <Section className="py-20 relative overflow-hidden">
        {/* Background Video */}
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="/videos/cta-background.mp4" type="video/mp4" />
          </video>
          {/* Dark overlay for text readability */}
          <div className="absolute inset-0 bg-black/60" />
        </div>
        
        <Container className="relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-space font-semibold mb-6"
            >
              Ready to Join the <span className="text-cyan-400">Flow</span>?
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-xl text-slate-300 mb-8"
            >
              Experience a fund structure that aligns with your values and amplifies your impact.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <Dialog open={contactDialogOpen} onOpenChange={setContactDialogOpen}>
                <DialogTrigger asChild>
                  <Button className="bg-cyan-400 hover:bg-cyan-400/90 text-slate-900 font-medium px-12 py-4 rounded-full text-lg glow-effect">
                    Request Access to the Flow Model
                  </Button>
                </DialogTrigger>
                <ContactDialog open={contactDialogOpen} onOpenChange={setContactDialogOpen} />
              </Dialog>
            </motion.div>
          </div>
        </Container>
      </Section>

      <Footer />
    </div>
  );
}
