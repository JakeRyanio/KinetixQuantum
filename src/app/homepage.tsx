"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { ArrowRight, ExternalLink, TrendingUp, Users, Shield, Zap } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Section, { Container } from "./components/Section";
import KineticMarquee from "./components/KineticMarquee";
import PartnerMarquee from "./components/PartnerMarquee";
import AssetMarquee from "./components/AssetMarquee";
import QuantumPlasma from "./components/QuantumPlasma";
import QuantumNetwork from "./components/QuantumNetwork";
import AllocationCard from "./components/AllocationCard";
import ContactDialog from "./components/ContactDialog";
import dynamic from "next/dynamic";

const BackgroundRibbon = dynamic(() => import("./components/BackgroundRibbon"), { ssr: false });
import { Button } from "@/components/ui/button";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";

import { allocations, manifesto, teamMembers, advantages } from "@/lib/data";

export default function KinetixQuantumSite() {
  const [contactDialogOpen, setContactDialogOpen] = useState(false);

  return (
    <div className="relative min-h-screen bg-slate-900 text-white">
      <BackgroundRibbon />
      <Nav />

      {/* Hero Section */}
      <Section className="pt-32 pb-16 overflow-hidden">
        <Container>
          <div className="relative">
            {/* Quantum Plasma Background */}
            <QuantumPlasma />
            
            <div className="text-center max-w-4xl mx-auto relative z-10">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl md:text-7xl font-space font-bold leading-tight mb-8"
            >
              Kinetix <span className="text-cyan-400">Quantum</span>
            </motion.h1>

            {/* Hero Subline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg md:text-xl font-medium text-cyan-400 mb-12 leading-relaxed glow-text"
            >
              The Fund of the Future — Accessible Today.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-lg md:text-xl text-slate-300 mb-12 leading-relaxed max-w-5xl mx-auto space-y-8"
            >
              <p className="text-center">
                We don't gamble on abstractions. We deploy capital where energy, resources, and innovation intersect—and then move that energy fluidly across domains.
              </p>
              
              <p className="text-center font-medium">
                Every dollar in motion amplifies itself.
              </p>
              
              <p className="text-center">
                Unlike most funds that hide behind exotic derivatives and opaque jargon, our strategies are:
              </p>
              
              <div className="flex justify-center px-4">
                <ul className="text-left space-y-4 text-base md:text-lg w-full max-w-md">
                  <li className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                    <div className="flex items-center gap-3">
                      <span className="h-2 w-2 rounded-full bg-cyan-400 flex-shrink-0" />
                      <span className="font-medium text-cyan-400">Simple</span>
                    </div>
                    <span className="ml-5 sm:ml-0 text-slate-300">clear and easy to understand.</span>
                  </li>
                  <li className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                    <div className="flex items-center gap-3">
                      <span className="h-2 w-2 rounded-full bg-cyan-400 flex-shrink-0" />
                      <span className="font-medium text-cyan-400">Tangible</span>
                    </div>
                    <span className="ml-5 sm:ml-0 text-slate-300">rooted in real value creation.</span>
                  </li>
                  <li className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                    <div className="flex items-center gap-3">
                      <span className="h-2 w-2 rounded-full bg-cyan-400 flex-shrink-0" />
                      <span className="font-medium text-cyan-400">Kinetic</span>
                    </div>
                    <span className="ml-5 sm:ml-0 text-slate-300">always flowing toward the highest energy and return potential.</span>
                  </li>
                </ul>
              </div>
              
              <p className="text-center leading-relaxed">
                Traditional funds treat money as something to be parked or warehoused.
              </p>
              
              <p className="text-center leading-relaxed">
                They bury it in complexity, forgetting a simple truth:
              </p>
              
              <div className="text-center pt-4">
                <p className="text-2xl md:text-3xl font-semibold text-cyan-400 italic leading-tight">
                  Capital is Energy. Energy in Motion stays in Motion. <br />
                  Capital wants to move.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex justify-center items-center"
            >
              <Dialog open={contactDialogOpen} onOpenChange={setContactDialogOpen}>
                <DialogTrigger asChild>
                  <Button 
                    size="lg" 
                    className="bg-cyan-400 hover:bg-cyan-400/90 text-slate-900 
                              font-medium px-8 py-3 rounded-full glow-effect group"
                  >
                    Request Access
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </DialogTrigger>
                <ContactDialog open={contactDialogOpen} onOpenChange={setContactDialogOpen} />
              </Dialog>
            </motion.div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Asset Flow Marquee */}
      <Section className="py-8">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <AssetMarquee speed={30} itemWidth={80} gap={32} />
          </motion.div>
        </Container>
      </Section>

      {/* Capital-in-Motion Flywheel */}
      <Section id="flywheel" className="pt-4 pb-12 min-h-screen flex items-center">
        <Container className="w-full">
          <div className="text-center mb-20">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl font-space font-semibold mb-8"
            >
              Capital in <span className="text-cyan-400">Motion</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-lg md:text-xl text-slate-300 max-w-4xl mx-auto leading-relaxed"
            >
              {manifesto}
            </motion.p>
          </div>

          {/* Partner Logos - Scrolling opposite direction */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-12"
          >
            <PartnerMarquee speed={25} itemWidth={120} gap={24} />
          </motion.div>

          {/* Main Allocation Marquee */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            <KineticMarquee speed={40} itemWidth={200} gap={32} />
          </motion.div>
        </Container>
      </Section>

      {/* Quantum Principles */}
      <Section id="quantum-principles" className="py-20 relative overflow-hidden">
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
          <div className="absolute inset-0 bg-black/70" />
        </div>
        
        <Container className="relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-space font-semibold mb-8"
            >
              <span className="text-cyan-400">Quantum</span> Principles
            </motion.h3>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-lg text-slate-300 leading-relaxed max-w-3xl mx-auto space-y-6"
            >
              <p className="text-xl font-medium text-white italic">
                "Our outcomes are entangled with our LPs — we only succeed when you do."
              </p>
              
              <p className="whitespace-nowrap">
                Kinetix Quantum maintains <span className="text-violet-400 font-medium">superposition</span> until the right moment to collapse into <span className="text-lime-400 font-medium">realized profits</span>.
              </p>
              
              <p>
                We invest where we <span className="text-cyan-400 font-medium">resonate</span>. Our expertise is not only 
                top-down typical fund insights, our team deeply understands the verticals we deploy in.
              </p>
            </motion.div>
          </div>
        </Container>
      </Section>

      {/* Allocations */}
      <Section id="allocations" className="pt-12">
        <Container>
          <div className="text-center mb-16">
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-space font-semibold mb-6"
            >
              Strategic <span className="text-cyan-400">Allocations</span>
            </motion.h3>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-lg text-slate-400 max-w-2xl mx-auto flex items-start justify-center gap-1"
            >
              <motion.svg
                width="72"
                height="36"
                viewBox="0 0 100 50"
                className="flex-shrink-0 mt-1"
              >
                <defs>
                  <linearGradient id="infinityGradientLeft" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#22D3EE" stopOpacity="0.4" />
                    <stop offset="50%" stopColor="#FFFFFF" stopOpacity="1" />
                    <stop offset="100%" stopColor="#22D3EE" stopOpacity="0.4" />
                  </linearGradient>
                  <filter id="glowLeft">
                    <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
                    <feMerge> 
                      <feMergeNode in="coloredBlur"/>
                      <feMergeNode in="SourceGraphic"/>
                    </feMerge>
                  </filter>
                </defs>
                
                {/* Outer glow */}
                <motion.path
                  d="M15,25 C15,10 25,10 35,25 C45,40 55,40 65,25 C75,10 85,10 85,25 C85,40 75,40 65,25 C55,10 45,10 35,25 C25,40 15,40 15,25 Z"
                  fill="none"
                  stroke="#22D3EE"
                  strokeWidth="5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  opacity="0.15"
                  filter="url(#glowLeft)"
                />
                
                {/* Main flowing light trail */}
                <motion.path
                  d="M15,25 C15,10 25,10 35,25 C45,40 55,40 65,25 C75,10 85,10 85,25 C85,40 75,40 65,25 C55,10 45,10 35,25 C25,40 15,40 15,25 Z"
                  fill="none"
                  stroke="url(#infinityGradientLeft)"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  initial={{ pathLength: 0 }}
                  animate={{ 
                    pathLength: [0, 1],
                    opacity: [0.7, 1, 0.7]
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                
                {/* Bright center crossover point */}
                <motion.circle
                  cx="50"
                  cy="25"
                  r="1.5"
                  fill="#FFFFFF"
                  opacity="0.8"
                  animate={{
                    scale: [1, 1.8, 1],
                    opacity: [0.8, 0.3, 0.8]
                  }}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
              </motion.svg>
              <span>Carefully orchestrated asset classes, each contributing unique kinetic forces 
              to our capital ecosystem.</span>
              <motion.svg
                width="72"
                height="36"
                viewBox="0 0 100 50"
                className="flex-shrink-0 mt-1"
              >
                <defs>
                  <linearGradient id="infinityGradientRight" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#22D3EE" stopOpacity="0.4" />
                    <stop offset="50%" stopColor="#FFFFFF" stopOpacity="1" />
                    <stop offset="100%" stopColor="#22D3EE" stopOpacity="0.4" />
                  </linearGradient>
                  <filter id="glowRight">
                    <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
                    <feMerge> 
                      <feMergeNode in="coloredBlur"/>
                      <feMergeNode in="SourceGraphic"/>
                    </feMerge>
                  </filter>
                </defs>
                
                {/* Outer glow */}
                <motion.path
                  d="M15,25 C15,10 25,10 35,25 C45,40 55,40 65,25 C75,10 85,10 85,25 C85,40 75,40 65,25 C55,10 45,10 35,25 C25,40 15,40 15,25 Z"
                  fill="none"
                  stroke="#22D3EE"
                  strokeWidth="5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  opacity="0.15"
                  filter="url(#glowRight)"
                />
                
                {/* Main flowing light trail */}
                <motion.path
                  d="M15,25 C15,10 25,10 35,25 C45,40 55,40 65,25 C75,10 85,10 85,25 C85,40 75,40 65,25 C55,10 45,10 35,25 C25,40 15,40 15,25 Z"
                  fill="none"
                  stroke="url(#infinityGradientRight)"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  initial={{ pathLength: 0 }}
                  animate={{ 
                    pathLength: [0, 1],
                    opacity: [0.7, 1, 0.7]
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 2
                  }}
                />
                
                {/* Bright center crossover point */}
                <motion.circle
                  cx="50"
                  cy="25"
                  r="1.5"
                  fill="#FFFFFF"
                  opacity="0.8"
                  animate={{
                    scale: [1, 1.8, 1],
                    opacity: [0.8, 0.3, 0.8]
                  }}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1.25
                  }}
                />
              </motion.svg>
            </motion.p>
          </div>

          <div className="relative">
            {/* Quantum Network Overlay */}
            <QuantumNetwork />
            
            <div id="allocations-grid" className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 relative z-10">
              {allocations.map((allocation, index) => (
                <AllocationCard 
                  key={allocation.key} 
                  allocation={allocation} 
                  index={index} 
                />
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* Why Kinetix Quantum */}
      <Section id="advantages">
        <Container>
          <div className="text-center mb-16">
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-space font-semibold mb-6"
            >
              Why <span className="text-cyan-400">Kinetix Quantum</span>
            </motion.h3>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {advantages.map((advantage, index) => {
              const icons = [TrendingUp, Zap, Users, Shield];
              const Icon = icons[index];
              
              return (
                <motion.div
                  key={advantage.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center group"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full 
                                 bg-cyan-400/10 border border-cyan-400/20 mb-6 
                                 group-hover:bg-cyan-400/20 transition-colors duration-300">
                    <Icon className="h-8 w-8 text-cyan-400" />
                  </div>
                  <h4 className="text-xl font-space font-medium text-white mb-4">
                    {advantage.title}
                  </h4>
                  <p className="text-slate-400 leading-relaxed">
                    {advantage.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </Container>
      </Section>

      {/* Impact Loop */}
      <Section id="impact" className="relative overflow-hidden">
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
          <div className="absolute inset-0 bg-black/60" />
        </div>
        
        <Container className="relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-space font-semibold mb-8"
            >
              Kinetix <span className="text-cyan-400">Flow Model</span>
            </motion.h3>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-lg text-slate-300 leading-relaxed max-w-3xl mx-auto mb-8"
            >
              The Kinetix Flow Model transforms the outdated fee structure into a universal cycle of reciprocity. Instead of paying management fees, our LPs direct <span className="text-lime-400 font-medium">2–3% of their capital</span> into charitable ventures — tax-deductible, impact-driven, and personally chosen. We don't extract. We align. We grow together, and the world grows with us.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="text-center"
            >
              <Link href="/flow-model">
                <Button 
                  variant="outline" 
                  className="border-cyan-400/50 text-cyan-400 hover:bg-cyan-400/10 
                            px-8 py-3 rounded-full font-medium"
                >
                  Learn about the FLOW
                </Button>
              </Link>
            </motion.div>
          </div>
        </Container>
      </Section>

      {/* Venture Pool Mechanics */}
      <Section id="venture-pool">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-space font-semibold mb-8"
            >
              Venture Pool Mechanics<br />
              <span className="text-cyan-400">The Quantum Dividend</span>
            </motion.h3>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-lg text-slate-300 leading-relaxed max-w-3xl mx-auto space-y-6"
            >
              <p>
                At Kinetix Quantum, we believe capital in motion should benefit all participants, not just a select sleeve.
              </p>
              
              <p>
                Each year, <span className="text-violet-400 font-medium">5-10% of net profits</span> from Kinetix Ventures flow into a 
                <span className="font-semibold text-white"> Shared Prosperity Bonus Pool</span>.
              </p>
              
              <p>
                This pool is distributed pro-rata to every LP in Kinetix Quantum, ensuring all investors share in the upside of our breakthrough venture wins.
              </p>
              
              <p>
                The result: <span className="text-lime-400 font-medium">conservative LPs enjoy venture upside</span>, and 
                <span className="text-cyan-400 font-medium"> bold LPs amplify their impact</span> across the ecosystem.
              </p>
              
              <p className="text-xl font-medium text-white italic">
                We call this annual payout the <span className="text-cyan-400">Quantum Dividend</span> — a symbol of alignment, reciprocity, and collective growth.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="text-center mt-12"
            >
              <Link href="/venture-pool">
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-violet-500 to-cyan-500 hover:from-violet-600 hover:to-cyan-600 
                            text-white font-medium px-8 py-3 rounded-full shadow-lg 
                            hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                >
                  Take A Deeper Dive
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </motion.div>
          </div>
        </Container>
      </Section>

      {/* Team - Temporarily Hidden */}
      <Section id="team" className="hidden">
        <Container>
          <div className="text-center mb-16">
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-space font-semibold mb-6"
            >
              The <span className="text-cyan-400">Force</span> Behind the Motion
            </motion.h3>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 max-w-2xl mx-auto justify-center">
            {teamMembers.map((member, index) => {
              const isJakeRyan = member.name === "Jake Ryan";
              const isKyleJackson = member.name === "Kyle Jackson";
              const isClickable = isJakeRyan || isKyleJackson;
              
              const CardContent = (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`text-center p-6 rounded-2xl border border-slate-800 bg-slate-900/40 
                            backdrop-blur-sm hover:border-cyan-400/30 transition-colors duration-300
                            ${isClickable ? 'cursor-pointer hover:scale-105 transform transition-transform' : ''}`}
                >
                  <div className="w-24 h-24 rounded-full mx-auto mb-4 overflow-hidden border-2 border-cyan-400/30">
                    <Image
                      src={member.image}
                      alt={member.name}
                      width={96}
                      height={96}
                      className="w-full h-full object-cover"
                      priority
                    />
                  </div>
                  <h4 className="text-xl font-medium text-white mb-2">
                    {member.name}
                    {isClickable && <ExternalLink className="inline ml-2 h-4 w-4 opacity-70" />}
                  </h4>
                  <div className="text-cyan-400 font-medium">{member.role}</div>
                </motion.div>
              );

              if (isJakeRyan) {
                return (
                  <Link key={member.name} href="/team/jake-ryan">
                    {CardContent}
                  </Link>
                );
              }

              if (isKyleJackson) {
                return (
                  <Link key={member.name} href="/team/kyle-jackson">
                    {CardContent}
                  </Link>
                );
              }

              return CardContent;
            })}
          </div>
        </Container>
      </Section>

      {/* CTA Section */}
      <Section id="contact" className="py-32 relative overflow-hidden">
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
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-space font-semibold mb-8"
            >
              Ready to Set Your Capital in <span className="text-cyan-400">Motion</span>?
            </motion.h3>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-xl text-slate-300 mb-12 leading-relaxed"
            >
              Join qualified investors who understand that capital is energy, 
              and energy creates opportunity.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <Dialog open={contactDialogOpen} onOpenChange={setContactDialogOpen}>
                <DialogTrigger asChild>
                  <Button 
                    size="lg" 
                    className="bg-cyan-400 hover:bg-cyan-400/90 text-slate-900 
                              font-medium px-12 py-4 rounded-full text-lg glow-effect group"
                  >
                    Request Access
                    <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform" />
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

