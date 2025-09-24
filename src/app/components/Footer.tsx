"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative bg-slate-800/50 border-t border-slate-800">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-6"
            >
              <h3 className="text-2xl font-space font-semibold text-white mb-2">
                Kinetix <span className="text-cyan-400">Quantum</span>
              </h3>
              <p className="text-slate-400 max-w-md leading-relaxed">
                Capital in motion. Where energy meets opportunity, and clarity drives returns.
              </p>
            </motion.div>
          </div>

          {/* Contact Info */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <h4 className="text-white font-medium mb-4">Contact</h4>
              <div className="space-y-3 text-sm text-slate-400">
                <div className="flex items-center gap-3">
                  <Mail size={16} className="text-cyan-400" />
                  <span>investors@kinetixquantum.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone size={16} className="text-cyan-400" />
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin size={16} className="text-cyan-400" />
                  <span>New York, NY</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Legal */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <h4 className="text-white font-medium mb-4">Legal</h4>
              <div className="space-y-2 text-sm text-slate-400">
                <div>
                  <button className="hover:text-cyan-400 transition-colors">
                    Privacy Policy
                  </button>
                </div>
                <div>
                  <button className="hover:text-cyan-400 transition-colors">
                    Terms of Service
                  </button>
                </div>
                <div>
                  <button className="hover:text-cyan-400 transition-colors">
                    Compliance
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-12 pt-8 border-t border-slate-800 flex flex-col md:flex-row 
                     justify-between items-center gap-4"
        >
          <div className="text-sm text-slate-500">
            © 2024 Kinetix Quantum Fund. All rights reserved.
          </div>
          
          <div className="text-xs text-slate-600 max-w-md text-center md:text-right leading-relaxed">
            Investment opportunities are limited to qualified investors. 
            Past performance does not guarantee future results.
          </div>
        </motion.div>
      </div>

      {/* Subtle background glow */}
      <div className="absolute inset-0 bg-gradient-to-t from-cyan-400/5 via-transparent to-transparent pointer-events-none" />
    </footer>
  );
}
