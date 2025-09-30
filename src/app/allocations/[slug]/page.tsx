"use client";

import { motion } from "framer-motion";
import { ArrowLeft, TrendingUp, Target, Shield, Zap } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Nav from "../../components/Nav";
import Footer from "../../components/Footer";
import Section, { Container } from "../../components/Section";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import ContactDialog from "../../components/ContactDialog";
import { useState, use } from "react";

// Detailed allocation data
const allocationDetails = {
  commodities: {
    name: "Commodities & Arbitrage",
    roi: "50%+",
    allocation: "15–20%",
    image: "/images/commodities.jpg",
    description: "Via our internal Kinetix Group partner Omniscope, we operate an institutional-grade OTC desk infrastructure that deploys capital into two primary streams: Arbitrage plays — capturing discounted opportunities across currencies and commodities. Liquidity provision — facilitating large-scale, cross-border transactions with precision.",
    keyPoints: [
      "Institutional-grade OTC desk infrastructure via Omniscope",
      "Arbitrage plays across currencies and commodities",
      "Large-scale cross-border transaction facilitation",
      "Strict criteria for risk-adjusted returns"
    ],
    strategy: "We are inundated with opportunities daily, yet remain highly selective, focusing only on the transactions that meet our strict criteria for risk-adjusted return and counterpart reliability. Our network includes royal families, sovereign wealth funds, and global institutions, positioning us at the intersection of capital flows across borders and markets. This sleeve is less about speculation, and more about engineering consistent profit from inefficiencies others cannot access.",
    riskProfile: "Medium",
    timeHorizon: "6-18 months",
    advantages: [
      "Access to royal families and sovereign wealth funds",
      "Institutional-grade counterpart network",
      "Engineering profit from exclusive inefficiencies",
      "Cross-border capital flow positioning"
    ]
  },
  tokenization: {
    name: "Tokenization of Real-World Assets",
    roi: "~20–35%",
    allocation: "15–20%",
    image: "/images/tokenization.jpg",
    description: "Turn illiquid assets into liquid rail-ready value by creating tokenized ownership of real estate, mines, and infrastructure.",
    keyPoints: [
      "Tokenize real estate, mines, infrastructure",
      "Create liquidity rails for illiquid assets",
      "Own the rails, not just the assets",
      "Fractional ownership democratization"
    ],
    strategy: "We transform traditionally illiquid assets into tokenized, tradeable instruments, creating new liquidity markets while capturing both the underlying asset appreciation and the technology infrastructure value.",
    riskProfile: "Medium",
    timeHorizon: "2-5 years",
    advantages: [
      "Unlocks trapped liquidity in real assets",
      "Creates new revenue streams from infrastructure",
      "Enables fractional ownership models",
      "First-mover advantage in emerging markets"
    ]
  },
  primefx: {
    name: "Prime Trader — FX Algo",
    roi: "~70–75%",
    allocation: "10–15%",
    image: "/images/primefx.jpg",
    description: "Precision velocity through automated, risk-controlled execution with scalable performance across all liquidity regimes.",
    keyPoints: [
      "3-yr history: 73.68% avg annual return",
      "Automated, risk-controlled execution",
      "Scalable across liquidity regimes",
      "24/7 market monitoring and execution"
    ],
    strategy: "Our proprietary FX algorithm leverages high-frequency trading patterns, currency arbitrage, and volatility harvesting to generate consistent returns while maintaining strict risk controls.",
    riskProfile: "Low-Medium",
    timeHorizon: "Daily compounding",
    advantages: [
      "Proven track record of consistent returns",
      "Automated execution reduces human error",
      "Scalable across market conditions",
      "Daily liquidity and transparency"
    ]
  },
  pe: {
    name: "Private Equity Roll-Ups",
    roi: "~25–45%",
    allocation: "15–20%",
    image: "/images/pe.jpg",
    description: "Revalue resilient, labor-centric businesses with AI optimization, operational systems, and sales psychology enhancements.",
    keyPoints: [
      "Blue-collar businesses (HVAC, logistics, trades)",
      "Revalue with AI, ops systems, sales psychology",
      "Margin expansion + multiple arbitrage",
      "Recession-resistant service sectors"
    ],
    strategy: "We acquire and consolidate fragmented blue-collar service businesses, then enhance their operations with AI tools, systemized processes, and proven sales methodologies to drive margin expansion.",
    riskProfile: "Medium",
    timeHorizon: "3-7 years",
    advantages: [
      "AI-resistant business models",
      "Essential services with recurring revenue",
      "Operational improvement opportunities",
      "Multiple expansion through consolidation",
      "Founder with decade of experience scaling blue-collar businesses for PE exits"
    ]
  },
  insurance: {
    name: "Insurance Arbitrage",
    roi: "~20–35%",
    allocation: "10–15%",
    image: "/images/insurance.jpg",
    description: "Convert time into cash-flow certainty through discounted death benefit purchases with actuarial predictability.",
    keyPoints: [
      "Purchase death benefits at discount",
      "Carrier-paid, actuarial predictability",
      "Low-volatility ballast",
      "Institutional-grade life settlements"
    ],
    strategy: "We purchase life insurance policies at significant discounts to their death benefits, providing predictable returns based on actuarial science while offering portfolio stability.",
    riskProfile: "Low",
    timeHorizon: "1-10 years",
    advantages: [
      "Actuarially predictable returns",
      "Low correlation to market volatility",
      "Institutional backing and oversight",
      "Steady cash flow generation"
    ]
  },
  realestate: {
    name: "Real Estate",
    roi: "~15–25%",
    allocation: "15–20%",
    image: "/images/realestate.jpg",
    description: "Hard-asset spine of the fund providing income, appreciation, and inflation hedge through multifamily, data centers, and land investments + our Quantum factor: Kinetix-Exclusive pre-construction allocations accessible through our elite network of UAE developers.",
    keyPoints: [
      "Multifamily, data centers, guaranteed income, land",
      "Income + appreciation + inflation hedge",
      "Hard-asset spine of the fund",
      "Strategic geographic diversification",
      "Kinetix-Exclusive Pre-Construction Access"
    ],
    strategy: "We focus on income-producing real estate in growing markets, with emphasis on essential housing, technology infrastructure, and land banking in development corridors.",
    riskProfile: "Low-Medium",
    timeHorizon: "5-10 years",
    advantages: [
      "Tangible asset backing",
      "Inflation protection through rent increases",
      "Tax advantages and depreciation benefits",
      "Steady cash flow from operations",
      "Exclusive pre-construction allocations accessible through our elite network of UAE developers"
    ]
  },
  mineralwater: {
    name: "Mineral & Water Rights",
    roi: "~10–18%",
    allocation: "5–10%",
    image: "/images/mineralwater.jpg",
    description: "Own the scarcity bedrock of civilization through direct rights exposure and hydrology/minerals optionality.",
    keyPoints: [
      "Direct rights exposure",
      "Optionality in hydrology & minerals",
      "Real-asset convexity",
      "Climate-resilient investments"
    ],
    strategy: "We acquire mineral and water rights in strategic locations, providing long-term optionality on essential resources while generating current income through leasing arrangements.",
    riskProfile: "Low",
    timeHorizon: "10+ years",
    advantages: [
      "Scarcity value appreciation over time",
      "Essential resource backing",
      "Low maintenance, passive income",
      "Climate change beneficiary"
    ]
  },
  venture: {
    name: "Venture — Kinetix Collaborative Partners",
    roi: "~25–40% +5–10% pooled upside",
    allocation: "≈5%",
    image: "/images/venture.jpg",
    description: "Shared-upside founders only, with venture returns cycling back to the LP pool through collective prosperity mechanisms.",
    keyPoints: [
      "Invest only in aligned partners",
      "Pool: slice of venture upside cycles back to LPs",
      "Shared prosperity mechanism",
      "Founder-market fit focus"
    ],
    strategy: "We invest exclusively in Kinetix owned and/or Kinetix Collaborative partner companies that align with our values and vision, creating a collaborative ecosystem where venture wins benefit all fund participants through our unique profit-sharing model.",
    riskProfile: "High",
    timeHorizon: "5-10 years",
    advantages: [
      "Aligned founder partnerships",
      "Shared upside with all LPs",
      "Collaborative ecosystem benefits",
      "High-growth potential investments"
    ]
  }
};

export default function AllocationDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const [contactDialogOpen, setContactDialogOpen] = useState(false);
  const allocation = allocationDetails[slug as keyof typeof allocationDetails];

  if (!allocation) {
    return (
      <div className="min-h-screen bg-slate-900 text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Allocation Not Found</h1>
          <Link href="/">
            <Button className="bg-cyan-400 hover:bg-cyan-400/90 text-slate-900">
              Return Home
            </Button>
          </Link>
        </div>
      </div>
    );
  }

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
            <source src="/videos/kinetix-code.mp4" type="video/mp4" />
          </video>
          {/* Dark overlay for text readability */}
          <div className="absolute inset-0 bg-black/70" />
        </div>
        
        <Container className="relative z-10">
          <div className="max-w-6xl mx-auto">
            {/* Back Button */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-8"
            >
              <Link href="/#allocations">
                <Button variant="outline" className="border-cyan-400/50 text-cyan-400 hover:bg-cyan-400/10">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back to Allocations
                </Button>
              </Link>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Content */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h1 className="text-4xl md:text-5xl font-space font-bold mb-6">
                  {slug === 'tokenization' ? (
                    <>
                      Tokenization of<br />
                      Real-World Assets
                    </>
                  ) : (
                    allocation.name
                  )}
                </h1>
                
                <div className="flex flex-wrap gap-4 mb-6">
                  <div className="bg-lime-400/10 border border-lime-400/30 rounded-full px-4 py-2">
                    <span className="text-lime-400 font-semibold">ROI: {allocation.roi}</span>
                  </div>
                  <div className="bg-cyan-400/10 border border-cyan-400/30 rounded-full px-4 py-2">
                    <span className="text-cyan-400 font-semibold">Allocation: {allocation.allocation}</span>
                  </div>
                  <div className="bg-violet-400/10 border border-violet-400/30 rounded-full px-4 py-2">
                    <span className="text-violet-400 font-semibold">Risk: {allocation.riskProfile}</span>
                  </div>
                </div>

                {slug === 'commodities' ? (
                  <div className="text-xl text-slate-300 mb-8 leading-relaxed space-y-4">
                    <p>Via our internal Kinetix Group partner <span className="font-semibold text-white">Omniscope</span>, we operate an institutional-grade <span className="font-semibold text-white">OTC desk infrastructure</span> that deploys capital into two primary streams:</p>
                    <ul className="space-y-3 ml-4">
                      <li className="flex items-start gap-3">
                        <span className="h-2 w-2 rounded-full bg-cyan-400 mt-3 flex-shrink-0" />
                        <span><span className="font-semibold text-white">Arbitrage plays</span> — capturing discounted opportunities across currencies and commodities.</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="h-2 w-2 rounded-full bg-cyan-400 mt-3 flex-shrink-0" />
                        <span><span className="font-semibold text-white">Liquidity provision</span> — facilitating large-scale, cross-border transactions with precision.</span>
                      </li>
                    </ul>
                  </div>
                ) : (
                  <p className="text-xl text-slate-300 mb-8 leading-relaxed">
                    {allocation.description}
                  </p>
                )}

                <Dialog open={contactDialogOpen} onOpenChange={setContactDialogOpen}>
                  <DialogTrigger asChild>
                    <Button className="bg-cyan-400 hover:bg-cyan-400/90 text-slate-900 font-medium px-8 py-3 rounded-full glow-effect">
                      Learn More About This Allocation
                    </Button>
                  </DialogTrigger>
                  <ContactDialog open={contactDialogOpen} onOpenChange={setContactDialogOpen} />
                </Dialog>
              </motion.div>

              {/* Image */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative"
              >
                <div className="aspect-[4/3] rounded-2xl overflow-hidden border border-slate-700">
                  <Image
                    src={allocation.image}
                    alt={allocation.name}
                    fill
                    className={`transition-transform duration-500 ${
                      slug === 'tokenization' 
                        ? 'object-contain'
                        : 'object-cover'
                    }`}
                    priority
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Strategy Section */}
      <Section className="py-16 bg-slate-800/50">
        <Container>
          <div className="max-w-4xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl font-space font-semibold mb-8 text-center"
            >
              Investment <span className="text-cyan-400">Strategy</span>
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-lg text-slate-300 leading-relaxed text-center mb-12"
            >
              {allocation.strategy}
            </motion.p>

            <div className="grid md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="bg-slate-900/60 rounded-xl p-6 border border-slate-700"
              >
                <h3 className="text-xl font-semibold mb-4 text-cyan-400">Key Focus Areas</h3>
                <ul className="space-y-3">
                  {allocation.keyPoints.map((point, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="h-2 w-2 rounded-full bg-cyan-400 mt-2 flex-shrink-0" />
                      <span className="text-slate-300">{point}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="bg-slate-900/60 rounded-xl p-6 border border-slate-700"
              >
                <h3 className="text-xl font-semibold mb-4 text-lime-400">Strategic Advantages</h3>
                <ul className="space-y-3">
                  {allocation.advantages.map((advantage, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="h-2 w-2 rounded-full bg-lime-400 mt-2 flex-shrink-0" />
                      <span className="text-slate-300">{advantage}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Investment Details */}
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
            <source src="/videos/flow-model-background.mp4" type="video/mp4" />
          </video>
          {/* Dark overlay for text readability */}
          <div className="absolute inset-0 bg-black/70" />
        </div>
        
        <Container className="relative z-10">
          <div className="max-w-4xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl font-space font-semibold mb-12 text-center"
            >
              Investment <span className="text-cyan-400">Profile</span>
            </motion.h2>

            <div className="grid md:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-center p-6 rounded-xl bg-slate-800/30 border border-slate-700"
              >
                <TrendingUp className="h-12 w-12 text-lime-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Expected ROI</h3>
                <p className="text-2xl font-bold text-lime-400 mb-2">{allocation.roi}</p>
                <p className="text-sm text-slate-400">Average Annual Return</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-center p-6 rounded-xl bg-slate-800/30 border border-slate-700"
              >
                <Target className="h-12 w-12 text-cyan-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Time Horizon</h3>
                <p className="text-2xl font-bold text-cyan-400 mb-2">{allocation.timeHorizon}</p>
                <p className="text-sm text-slate-400">Investment Period</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="text-center p-6 rounded-xl bg-slate-800/30 border border-slate-700"
              >
                <Shield className="h-12 w-12 text-violet-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Risk Profile</h3>
                <p className="text-2xl font-bold text-violet-400 mb-2">{allocation.riskProfile}</p>
                <p className="text-sm text-slate-400">Risk Assessment</p>
              </motion.div>
            </div>
          </div>
        </Container>
      </Section>

      {/* CTA Section */}
      <Section className="py-20 bg-slate-800/50">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-space font-semibold mb-6"
            >
              Ready to Explore This <span className="text-cyan-400">Allocation</span>?
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-xl text-slate-300 mb-8"
            >
              Connect with our team to learn more about how this allocation fits into your investment strategy.
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
                    Request Detailed Information
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
