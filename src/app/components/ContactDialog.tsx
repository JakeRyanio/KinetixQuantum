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
    email: "",
    company: "",
    investmentSize: "",
    message: ""
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
          email: "",
          company: "",
          investmentSize: "",
          message: ""
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
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <DialogContent className="sm:max-w-md bg-slate-900 border-slate-700">
      <DialogHeader>
        <DialogTitle className="text-white">Request Access</DialogTitle>
      </DialogHeader>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-1">
            Full Name *
          </label>
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
          <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-1">
            Email Address *
          </label>
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
          <label htmlFor="company" className="block text-sm font-medium text-slate-300 mb-1">
            Company/Organization
          </label>
          <input
            type="text"
            id="company"
            name="company"
            value={formData.company}
            onChange={handleChange}
            className="w-full px-3 py-2 bg-slate-800 border border-slate-600 rounded-lg 
                      text-white placeholder-slate-400 focus:outline-none focus:ring-2 
                      focus:ring-cyan-400 focus:border-transparent"
            placeholder="Your company name"
          />
        </div>

        <div>
          <label htmlFor="investmentSize" className="block text-sm font-medium text-slate-300 mb-1">
            Investment Interest Range
          </label>
          <select
            id="investmentSize"
            name="investmentSize"
            value={formData.investmentSize}
            onChange={handleChange}
            className="w-full px-3 py-2 bg-slate-800 border border-slate-600 rounded-lg 
                      text-white focus:outline-none focus:ring-2 focus:ring-cyan-400 
                      focus:border-transparent"
          >
            <option value="">Select range</option>
            <option value="$100K - $500K">$100K - $500K</option>
            <option value="$500K - $1M">$500K - $1M</option>
            <option value="$1M - $5M">$1M - $5M</option>
            <option value="$5M+">$5M+</option>
            <option value="Prefer not to disclose">Prefer not to disclose</option>
          </select>
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-1">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            value={formData.message}
            onChange={handleChange}
            className="w-full px-3 py-2 bg-slate-800 border border-slate-600 rounded-lg 
                      text-white placeholder-slate-400 focus:outline-none focus:ring-2 
                      focus:ring-cyan-400 focus:border-transparent resize-none"
            placeholder="Tell us about your investment goals and any questions you have..."
          />
        </div>

        <Button 
          type="submit" 
          className="w-full bg-cyan-400 hover:bg-cyan-400/90 text-slate-900 
                    font-medium py-2 rounded-lg"
        >
          Submit Request
        </Button>
      </form>
    </DialogContent>
  );
}
