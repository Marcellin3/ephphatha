"use client";

import { useState } from "react";
import { Headphones, MessageSquare, Mail, Check } from "lucide-react";
import {
  FaFacebookF,
  FaInstagram,
  FaSnapchat,
  FaTiktok,
  FaXTwitter,
} from "react-icons/fa6";

export default function ContactPage() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phonePrefix, setPhonePrefix] = useState("+243");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <main className="min-h-screen bg-slate-50/50 py-16 lg:py-24">
      {/* Centered Top Title */}
      <div className="text-center mb-10 px-4">
        <h1 className="text-3xl font-black text-slate-900 sm:text-4xl tracking-tight">
          Contactez-nous
        </h1>
        <p className="mt-2 text-sm text-slate-500 max-w-sm mx-auto font-medium">
          Une équipe dédiée à votre écoute pour orienter, informer et collaborer.
        </p>
      </div>

      {/* Main Two-Column Outer Card */}
      <div className="mx-auto max-w-5xl px-4">
        <div className="bg-slate-100/40 rounded-[2rem] p-4 md:p-8 border border-slate-200/60 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            {/* Left Column: Form Section */}
            <div className="lg:col-span-8 bg-white rounded-2xl p-6 md:p-8 border border-slate-200/50 flex flex-col justify-between">
              {submitted ? (
                <div className="flex flex-col items-center justify-center py-16 text-center h-full">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 mb-6">
                    <Check className="h-8 w-8 font-black" />
                  </div>
                  <h3 className="text-2xl font-black text-slate-900">Message envoyé !</h3>
                  <p className="mt-3 text-slate-500 max-w-sm text-sm leading-relaxed font-semibold">
                    Merci, <strong className="text-slate-900">{firstName}</strong>. Nous avons bien reçu votre message et notre équipe vous recontactera sous 48 heures.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setSubmitted(false);
                      setFirstName("");
                      setLastName("");
                      setEmail("");
                      setPhoneNumber("");
                      setMessage("");
                    }}
                    className="mt-8 text-sm font-bold text-blue-600 hover:text-blue-800 hover:underline cursor-pointer"
                  >
                    Envoyer un autre message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                  <div>
                    <h2 className="text-xl font-black text-slate-900 leading-snug">
                      Envoyez-nous un message
                    </h2>
                    <p className="text-xs font-semibold text-slate-400 leading-relaxed mt-1.5">
                      Vous avez une question, une suggestion ou souhaitez collaborer ? Remplissez ce formulaire et nous vous répondrons rapidement.
                    </p>
                  </div>

                  {/* Row 1: First Name & Last Name */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-2">
                    <div>
                      <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1.5">
                        Prénom
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Votre prénom"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        className="w-full rounded-2xl border border-slate-200 bg-slate-50/50 px-4 py-3 text-xs font-semibold text-slate-900 focus:border-[#0d2a4a] focus:bg-white focus:outline-none transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1.5">
                        Nom
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Votre nom"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        className="w-full rounded-2xl border border-slate-200 bg-slate-50/50 px-4 py-3 text-xs font-semibold text-slate-900 focus:border-[#0d2a4a] focus:bg-white focus:outline-none transition-all"
                      />
                    </div>
                  </div>

                  {/* Row 2: Email & Phone with Selector */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1.5">
                        Adresse E-mail
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="john.doe@example.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full rounded-2xl border border-slate-200 bg-slate-50/50 px-4 py-3 text-xs font-semibold text-slate-900 focus:border-[#0d2a4a] focus:bg-white focus:outline-none transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1.5">
                        Numéro de contact
                      </label>
                      <div className="flex rounded-2xl border border-slate-200 bg-slate-50/50 overflow-hidden focus-within:border-[#0d2a4a] focus-within:bg-white transition-all">
                        <select
                          value={phonePrefix}
                          onChange={(e) => setPhonePrefix(e.target.value)}
                          className="bg-transparent border-none text-xs font-bold text-slate-700 px-3 outline-none focus:ring-0 cursor-pointer border-r border-slate-200"
                        >
                          <option value="+243">+243</option>
                          <option value="+250">+250</option>
                          <option value="+33">+33</option>
                          <option value="+32">+32</option>
                        </select>
                        <input
                          type="tel"
                          required
                          placeholder="Téléphone"
                          value={phoneNumber}
                          onChange={(e) => setPhoneNumber(e.target.value)}
                          className="w-full bg-transparent border-none px-4 py-3 text-xs font-semibold text-slate-900 focus:ring-0 outline-none"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Row 3: Message Textarea */}
                  <div>
                    <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1.5">
                      Message
                    </label>
                    <textarea
                      required
                      placeholder="Saisissez le contenu de votre message..."
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="w-full rounded-2xl border border-slate-200 bg-slate-50/50 px-4 py-3 text-xs font-semibold text-slate-900 min-h-32 focus:border-[#0d2a4a] focus:bg-white focus:outline-none transition-all"
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2 flex justify-start">
                    <button
                      type="submit"
                      className="rounded-full bg-[#0d2a4a] hover:bg-[#07192d] text-white px-8 py-3.5 text-xs font-bold shadow-md hover:shadow-lg active:scale-95 transition-all cursor-pointer"
                    >
                      Envoyer le message
                    </button>
                  </div>
                </form>
              )}
            </div>

            {/* Right Column: Dark Blue Contact details column */}
            <div className="lg:col-span-4 bg-[#0d2a4a] text-white rounded-2xl p-6 md:p-8 flex flex-col justify-between shadow-lg gap-8">
              <div className="flex flex-col gap-6">
                <h3 className="text-base font-bold leading-snug">
                  Bonjour ! Nous sommes toujours là pour vous aider.
                </h3>

                {/* Stacked contact information rows */}
                <div className="flex flex-col gap-4">
                  {/* Phone Hotline */}
                  <div className="flex items-center gap-4 rounded-xl bg-white/10 p-3.5 border border-white/5 shadow-inner hover:bg-white/15 transition-all">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white/10 text-white">
                      <Headphones className="h-4.5 w-4.5" />
                    </div>
                    <div>
                      <div className="text-[10px] text-slate-300 font-bold">Téléphone (Hotline) :</div>
                      <div className="text-xs font-bold mt-0.5">+243 997 674 407</div>
                    </div>
                  </div>

                  {/* SMS / WhatsApp */}
                  <div className="flex items-center gap-4 rounded-xl bg-white/10 p-3.5 border border-white/5 shadow-inner hover:bg-white/15 transition-all">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white/10 text-white">
                      <MessageSquare className="h-4.5 w-4.5" />
                    </div>
                    <div>
                      <div className="text-[10px] text-slate-300 font-bold">SMS / WhatsApp :</div>
                      <div className="text-xs font-bold mt-0.5">+243 901 143 004</div>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-center gap-4 rounded-xl bg-white/10 p-3.5 border border-white/5 shadow-inner hover:bg-white/15 transition-all">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white/10 text-white">
                      <Mail className="h-4.5 w-4.5" />
                    </div>
                    <div>
                      <div className="text-[10px] text-slate-300 font-bold">E-mail :</div>
                      <div className="text-xs font-bold mt-0.5 truncate max-w-[170px]">contact@ephphathagoma.org</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Connect with us segment */}
              <div className="flex flex-col gap-3">
                <h4 className="text-[10px] font-bold text-slate-300 uppercase tracking-widest">
                  Rejoignez-nous
                </h4>
                <div className="flex gap-2 items-center">
                  {[
                    { Icon: FaFacebookF, href: "https://facebook.com" },
                    { Icon: FaInstagram, href: "https://instagram.com" },
                    { Icon: FaSnapchat, href: "https://snapchat.com" },
                    { Icon: FaTiktok, href: "https://tiktok.com" },
                    { Icon: FaXTwitter, href: "https://x.com" },
                  ].map((item, idx) => (
                    <a
                      key={idx}
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 hover:bg-white text-white hover:text-slate-950 transition-all active:scale-90 cursor-pointer"
                    >
                      <item.Icon className="h-4 w-4" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
