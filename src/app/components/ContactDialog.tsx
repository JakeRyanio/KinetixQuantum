"use client";

import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

interface ContactDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export default function ContactDialog({ open, onOpenChange }: ContactDialogProps) {
  const [formData, setFormData] = useState({
    name: "",
    accreditedStatus: "",
    email: "",
    organizationType: "",
    capitalCommitment: "",
    howDidYouHear: "",
    referralName: "",
    legacyAlignment: "",
    strategicFitMessage: "",
    acknowledgment: false
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert('Thank you for your inquiry! We will be in touch shortly.');
        onOpenChange(false);
        setFormData({
          name: "",
          accreditedStatus: "",
          email: "",
          organizationType: "",
          capitalCommitment: "",
          howDidYouHear: "",
          referralName: "",
          legacyAlignment: "",
          strategicFitMessage: "",
          acknowledgment: false
        });
      } else {
        alert('There was an error sending your message. Please try again.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('There was an error sending your message. Please try again.');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    
    if (type === 'checkbox') {
      setFormData({
        ...formData,
        [name]: (e.target as HTMLInputElement).checked
      });
    } else {
      setFormData({
        ...formData,
        [name]: value
      });
    }
  };


  return (
    <DialogContent className="sm:max-w-lg bg-slate-900 border-slate-700 max-h-[90vh] overflow-y-auto">
      <DialogHeader>
        <DialogTitle className="text-white">Request Access</DialogTitle>
      </DialogHeader>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-1">
            Full Name *
          </label>
          <p className="text-xs text-slate-400 mb-2">(as it appears on legal/financial documents)</p>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full px-3 py-2 bg-slate-800 border border-slate-600 rounded-lg 
                      text-white placeholder-slate-400 focus:outline-none focus:ring-2 
                      focus:ring-cyan-400 focus:border-transparent"
            placeholder="Your full name"
          />
        </div>

        <div>
          <label htmlFor="accreditedStatus" className="block text-sm font-medium text-slate-300 mb-1">
            Accredited Investor Status *
          </label>
          <select
            id="accreditedStatus"
            name="accreditedStatus"
            required
            value={formData.accreditedStatus}
            onChange={handleChange}
            className="w-full px-3 py-2 bg-slate-800 border border-slate-600 rounded-lg 
                      text-white focus:outline-none focus:ring-2 focus:ring-cyan-400 
                      focus:border-transparent"
          >
            <option value="">Select status</option>
            <option value="Confirmed Accredited Investor">Confirmed Accredited Investor</option>
            <option value="Family Office / Institutional">Family Office / Institutional</option>
            <option value="Not Yet Accredited">Not Yet Accredited</option>
          </select>
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-1">
            Email Address *
          </label>
          <p className="text-xs text-slate-400 mb-2">(secure, primary point of contact only)</p>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full px-3 py-2 bg-slate-800 border border-slate-600 rounded-lg 
                      text-white placeholder-slate-400 focus:outline-none focus:ring-2 
                      focus:ring-cyan-400 focus:border-transparent"
            placeholder="your.email@company.com"
          />
        </div>

        <div>
          <label htmlFor="organizationType" className="block text-sm font-medium text-slate-300 mb-1">
            Organization / Entity Type *
          </label>
          <select
            id="organizationType"
            name="organizationType"
            required
            value={formData.organizationType}
            onChange={handleChange}
            className="w-full px-3 py-2 bg-slate-800 border border-slate-600 rounded-lg 
                      text-white focus:outline-none focus:ring-2 focus:ring-cyan-400 
                      focus:border-transparent"
          >
            <option value="">Select type</option>
            <option value="Family Office">Family Office</option>
            <option value="Institutional Investor">Institutional Investor</option>
            <option value="Private Fund / Partnership">Private Fund / Partnership</option>
            <option value="High-Net-Worth Individual">High-Net-Worth Individual</option>
          </select>
        </div>

        <div>
          <label htmlFor="capitalCommitment" className="block text-sm font-medium text-slate-300 mb-1">
            Minimum Capital Commitment *
          </label>
          <select
            id="capitalCommitment"
            name="capitalCommitment"
            required
            value={formData.capitalCommitment}
            onChange={handleChange}
            className="w-full px-3 py-2 bg-slate-800 border border-slate-600 rounded-lg 
                      text-white focus:outline-none focus:ring-2 focus:ring-cyan-400 
                      focus:border-transparent"
          >
            <option value="">Select range</option>
            <option value="<$250K">&lt;$250K</option>
            <option value="$250K – $500K">$250K – $500K</option>
            <option value="$500K – $1M">$500K – $1M</option>
            <option value="$1M – $5M">$1M – $5M</option>
            <option value="$5M+">$5M+</option>
          </select>
        </div>

        <div>
          <label htmlFor="howDidYouHear" className="block text-sm font-medium text-slate-300 mb-1">
            How did you hear about us? *
          </label>
          <select
            id="howDidYouHear"
            name="howDidYouHear"
            required
            value={formData.howDidYouHear}
            onChange={handleChange}
            className="w-full px-3 py-2 bg-slate-800 border border-slate-600 rounded-lg 
                      text-white focus:outline-none focus:ring-2 focus:ring-cyan-400 
                      focus:border-transparent"
          >
            <option value="">Select option</option>
            <option value="Online">Online</option>
            <option value="Personal Referral">Personal Referral</option>
            <option value="Kinetix Order">Kinetix Order</option>
            <option value="Managing Partner">Managing Partner</option>
            <option value="Publication">Publication</option>
          </select>
        </div>

        {(formData.howDidYouHear === "Personal Referral" || formData.howDidYouHear === "Managing Partner") && (
          <div>
            <label htmlFor="referralName" className="block text-sm font-medium text-slate-300 mb-1">
              {formData.howDidYouHear === "Personal Referral" ? "Referral Name *" : "Managing Partner Name *"}
            </label>
            <input
              type="text"
              id="referralName"
              name="referralName"
              required
              value={formData.referralName}
              onChange={handleChange}
              className="w-full px-3 py-2 bg-slate-800 border border-slate-600 rounded-lg 
                        text-white placeholder-slate-400 focus:outline-none focus:ring-2 
                        focus:ring-cyan-400 focus:border-transparent"
              placeholder={formData.howDidYouHear === "Personal Referral" ? "Who referred you?" : "Which managing partner?"}
            />
          </div>
        )}

        <div>
          <label htmlFor="legacyAlignment" className="block text-sm font-medium text-slate-300 mb-1">
            Legacy Alignment (optional)
          </label>
          <p className="text-xs text-slate-400 mb-2">Which causes or impact areas matter most to you for charitable alignment?</p>
          <input
            type="text"
            id="legacyAlignment"
            name="legacyAlignment"
            value={formData.legacyAlignment}
            onChange={handleChange}
            className="w-full px-3 py-2 bg-slate-800 border border-slate-600 rounded-lg 
                      text-white placeholder-slate-400 focus:outline-none focus:ring-2 
                      focus:ring-cyan-400 focus:border-transparent"
            placeholder="education, environment, health, community, other"
          />
        </div>

        <div>
          <label htmlFor="strategicFitMessage" className="block text-sm font-medium text-slate-300 mb-1">
            Strategic Fit Message *
          </label>
          <textarea
            id="strategicFitMessage"
            name="strategicFitMessage"
            required
            rows={3}
            value={formData.strategicFitMessage}
            onChange={handleChange}
            className="w-full px-3 py-2 bg-slate-800 border border-slate-600 rounded-lg 
                      text-white placeholder-slate-400 focus:outline-none focus:ring-2 
                      focus:ring-cyan-400 focus:border-transparent resize-none"
            placeholder="Tell us briefly why you believe Kinetix Quantum is the right fit for your capital strategy."
          />
        </div>

        <div>
          <label className="flex items-start space-x-2 cursor-pointer">
            <input
              type="checkbox"
              name="acknowledgment"
              required
              checked={formData.acknowledgment}
              onChange={handleChange}
              className="mt-1 rounded border-slate-600 bg-slate-800 text-cyan-400 
                        focus:ring-cyan-400 focus:ring-offset-0"
            />
            <span className="text-sm text-slate-300">
              I understand this fund accepts only a limited number of LPs per allocation cycle. *
            </span>
          </label>
        </div>

        <Button 
          type="submit" 
          className="w-full bg-cyan-400 hover:bg-cyan-400/90 text-slate-900 
                    font-medium py-3 rounded-lg text-lg"
        >
          Request Invitation
        </Button>
      </form>
    </DialogContent>
  );
}
