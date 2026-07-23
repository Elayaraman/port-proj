"use client";

import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "d506a2d1-c49e-46c2-97f6-4fee00a3fbed",
          name: formData.name,
          email: formData.email,
          message: formData.message,
        }),
      });

      const result = await response.json();
      if (result.success) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
        setTimeout(() => setStatus("idle"), 5000);
      } else {
        setStatus("error");
        setTimeout(() => setStatus("idle"), 5000);
      }
    } catch (error) {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 5000);
    }
  };

  return (
    <div className="border border-[#112240] bg-[#0a192f]/40 p-8 md:p-12 rounded relative mt-8">
      {/* Top-left accent */}
      <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-[#32FFCE] rounded-tl"></div>
      {/* Bottom-right accent */}
      <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-[#32FFCE] rounded-br"></div>

      <div className="flex items-center space-x-3 mb-8">
        <div className="w-2 h-2 rounded-full bg-[#32FFCE]"></div>
        <h2 className="text-xl md:text-2xl font-bold text-white">Get in Touch</h2>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label htmlFor="name" className="block text-[#32FFCE] font-mono text-[10px] md:text-xs font-bold tracking-widest uppercase">
              [ USER_NAME ]
            </label>
            <input
              id="name"
              type="text"
              placeholder="e.g. Alan Turing"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full bg-[#070f1a] border-none text-white px-4 py-3.5 font-mono text-sm focus:outline-none focus:ring-1 focus:ring-[#32FFCE] placeholder-[#495670]"
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="email" className="block text-[#32FFCE] font-mono text-[10px] md:text-xs font-bold tracking-widest uppercase">
              [ CONTACT_EMAIL ]
            </label>
            <input
              id="email"
              type="email"
              placeholder="user@domain.com"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full bg-[#070f1a] border-none text-white px-4 py-3.5 font-mono text-sm focus:outline-none focus:ring-1 focus:ring-[#32FFCE] placeholder-[#495670]"
            />
          </div>
        </div>

        <div className="space-y-2">
          <label htmlFor="message" className="block text-[#32FFCE] font-mono text-[10px] md:text-xs font-bold tracking-widest uppercase">
            [ PACKET_DATA ]
          </label>
          <textarea
            id="message"
            placeholder="Describe your project, inquiry, or just say hello..."
            required
            rows={5}
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            className="w-full bg-[#070f1a] border-none text-white px-4 py-3.5 font-mono text-sm focus:outline-none focus:ring-1 focus:ring-[#32FFCE] placeholder-[#495670] resize-none"
          ></textarea>
        </div>

        <div className="pt-4 flex flex-col md:flex-row items-center gap-4">
          <button
            type="submit"
            disabled={status === "submitting"}
            className="bg-[#32FFCE] text-[#070f1a] font-mono text-xs font-bold tracking-[0.15em] px-8 py-4 uppercase flex items-center space-x-2 hover:bg-white transition-colors group disabled:opacity-50 disabled:cursor-not-allowed w-full md:w-auto justify-center"
          >
            <span>
              {status === "submitting" ? "TRANSMITTING..." : "SEND MESSAGE"}
            </span>
            {status !== "submitting" && (
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M8 5v14l11-7z" />
              </svg>
            )}
          </button>

          {status === "success" && (
            <p className="text-[#32FFCE] font-mono text-xs animate-pulse">
              [ PACKET TRANSMITTED ]
            </p>
          )}
          {status === "error" && (
            <p className="text-red-400 font-mono text-xs">
              [ TRANSMISSION FAILED ]
            </p>
          )}
        </div>
      </form>
    </div>
  );
}
