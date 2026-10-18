// // app/poster/page.tsx
// import Image from "next/image";
// import { Valis } from "@/config/businesses/Valis";

// // Generate WhatsApp URL from config
// const whatsappNumber = Valis.contact.whatsapp.replace(/\D/g, "");
// const whatsappUrl = `https://wa.me/${whatsappNumber}?text=Hi%20Valis%20Tech%2C%20I%27m%20interested%20in%20a%20website%20for%20my%20business.`;

// // QR code URL (using a QR code API - replace with your own if needed)
// const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(
//   whatsappUrl
// )}&bgcolor=0a0a0a&color=ffffff&margin=10`;

// export default function PosterPage() {
//   return (
//     <main className="min-h-screen bg-slat-950 flex items-center justify-center p-4 print:p-0">
//       {/* Poster Container - A4 aspect ratio approximation */}
//       <div className="relative w-full max-w-[794px] aspect-[1/1.414] bg-zinc-950 text-white overflow-hidden flex flex-col shadow-2xl print:shadow-none print:max-w-none print:w-[210mm] print:h-[297mm]">
        
//         {/* Decorative gradient accent bar */}
//         <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-500" />
        
//         {/* Decorative background elements */}
//         <div className="absolute inset-0 pointer-events-none">
//           <div className="absolute -top-20 -right-20 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl" />
//           <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
//           <div className="absolute top-1/3 right-0 w-64 h-64 bg-cyan-500/5 rounded-full blur-2xl" />
//         </div>

//         {/* Main content */}
//         <div className="relative z-10 flex flex-col h-full p-8 sm:p-10 md:p-12 print:p-10">
          
//           {/* Header - Logo and tagline */}
//           <header className="flex items-center justify-between mb-6">
//             <div className="flex items-center gap-3">
//               <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-emerald-400 to-cyan-500 flex items-center justify-center">
//                 <Image
//                               src={Valis.logoImage}
//                               alt={`${Valis.name} Logo`}
//                               width={40}
//                               height={40}
//                               className="h-14 w-auto object-contain"
//                               priority
//                             />
//               </div>
//               <div>
//                 <p className="font-bold text-lg tracking-tight">{Valis.name}</p>
//                 <p className="text-xs text-zinc-400 tracking-wide uppercase">
//                   {Valis.tagline}
//                 </p>
//               </div>
//             </div>
//             <div className="hidden sm:block text-right">
//               <p className="text-[10px] text-zinc-500 uppercase tracking-widest">Harare, Zimbabwe</p>
//             </div>
//           </header>

//           {/* Hero Section - Headline */}
//           <section className="mb-8">
//             <h1 className="text-4xl sm:text-5xl md:text-6xl font-black leading-[1.05] tracking-tight mb-4">
//               Is your business{" "}
//               <span className="bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
//                 easy to find
//               </span>{" "}
//               online?
//             </h1>
//             <p className="text-zinc-400 text-base sm:text-lg leading-relaxed max-w-lg">
//               A professional website that works for you — day and night.
//             </p>
//           </section>

//           {/* Offer Badge - Prominent */}
//           <section className="mb-8">
//             <div className="inline-flex items-center gap-3 bg-gradient-to-r from-emerald-500 to-cyan-500 text-zinc-950 px-5 py-3 rounded-full">
//               <span className="relative flex h-3 w-3">
//                 <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-zinc-950 opacity-40"></span>
//                 <span className="relative inline-flex rounded-full h-3 w-3 bg-zinc-950"></span>
//               </span>
//               <span className="font-bold text-sm sm:text-base tracking-wide uppercase">
//                 First month of hosting — free
//               </span>
//             </div>
//           </section>

//           {/* What we do - Features list */}
//           <section className="mb-8 flex-1">
//             <ul className="space-y-3">
//               {[
//                 "Websites for shops, lodges, and services",
//                 "Found on Google when it matters",
//                 "WhatsApp button so customers reach you instantly",
//                 "Built to work on slow connections",
//               ].map((item, i) => (
//                 <li key={i} className="flex items-start gap-3">
//                   <span className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-emerald-500/20 flex items-center justify-center">
//                     <svg
//                       className="w-3 h-3 text-emerald-400"
//                       fill="none"
//                       viewBox="0 0 24 24"
//                       stroke="currentColor"
//                       strokeWidth={3}
//                     >
//                       <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
//                     </svg>
//                   </span>
//                   <span className="text-sm sm:text-base text-zinc-200 leading-snug">
//                     {item}
//                   </span>
//                 </li>
//               ))}
//             </ul>
//           </section>

//           {/* Trust line */}
//           <section className="mb-6">
//             <div className="flex items-center gap-2 text-zinc-500 text-xs sm:text-sm">
//               <svg className="w-4 h-4 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
//                 <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
//               </svg>
//               <span>Your domain. Your ownership. No lock-in.</span>
//             </div>
//           </section>

//           {/* CTA Section - Bottom third */}
//           <section className="mt-auto">
//             {/* Divider */}
//             <div className="h-px bg-gradient-to-r from-transparent via-zinc-700 to-transparent mb-6" />
            
//             <div className="flex items-end justify-between gap-4">
//               {/* Contact info */}
//               <div className="flex-1">
//                 <p className="text-[10px] sm:text-xs text-zinc-500 uppercase tracking-widest mb-2">
//                   Message us on WhatsApp
//                 </p>
//                 <a
//                   href={whatsappUrl}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="inline-flex items-center gap-3 bg-emerald-500 hover:bg-emerald-400 transition-colors text-zinc-950 font-bold text-lg sm:text-2xl px-5 sm:px-6 py-3 sm:py-4 rounded-xl"
//                 >
//                   <svg className="w-6 h-6 sm:w-7 sm:h-7" viewBox="0 0 24 24" fill="currentColor">
//                     <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
//                   </svg>
//                   <span>{Valis.contact.phone}</span>
//                 </a>
//                 <p className="mt-3 text-xs sm:text-sm text-zinc-500">
//                   Or scan the code to start a chat →
//                 </p>
//               </div>

//               {/* QR Code */}
//               <div className="flex-shrink-0">
//                 <div className="bg-white p-2 sm:p-3 rounded-xl">
//                   <Image
//                     src={qrCodeUrl}
//                     alt="Scan to message Valis Tech on WhatsApp"
//                     width={120}
//                     height={120}
//                     className="w-20 h-20 sm:w-28 sm:h-28"
//                     unoptimized
//                   />
//                 </div>
//                 <p className="text-center text-[10px] text-zinc-500 mt-2 uppercase tracking-wider">
//                   Scan to chat
//                 </p>
//               </div>
//             </div>

//             {/* Footer */}
//             <div className="mt-6 pt-4 border-t border-zinc-800 flex items-center justify-between text-[10px] sm:text-xs text-zinc-600">
//               <span className="font-semibold text-zinc-400">{Valis.name}</span>
//               <span>{Valis.description}</span>
//             </div>
//           </section>
//         </div>
//       </div>
//     </main>
//   );
// }

"use client"
import Image from "next/image";
import { QRCodeSVG } from "qrcode.react";
import { use } from "react";

const whatsappNumber = "263778935618";

const whatsappMessage = encodeURIComponent(
  "Hi Valis Tech! I'm interested in getting a website for my business. Could you tell me more about your services and the free first month of hosting offer?"
);

const whatsappUrl =
  `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

const services = [
  {
    number: "01",
    title: "Professional websites",
    description: "Custom websites designed for your business.",
  },
  {
    number: "02",
    title: "Google visibility",
    description: "SEO foundations to help customers find you.",
  },
  {
    number: "03",
    title: "WhatsApp integration",
    description: "Let customers contact you in one tap.",
  },
  {
    number: "04",
    title: "Hosting and maintenance",
    description: "Keep your website online and up to date.",
  },
];

export default function PosterPage() {
  return (
    <main className="min-h-screen bg-slate-200 px-3 py-8 sm:px-8">
      {/* Print / preview controls */}
      <div className="no-print mx-auto mb-5 flex max-w-[794px] justify-end">
        <button
          onClick={() => window.print()}
          className="rounded-lg bg-blue-600 px-5 py-3
            text-sm font-semibold text-white transition
            hover:bg-blue-700"
        >
          Print or save as PDF
        </button>
      </div>

      {/* A4 poster */}
      <article
        className="poster mx-auto flex w-full max-w-[794px]
          flex-col overflow-hidden bg-[#081426] text-white
          shadow-2xl"
      >
        {/* Brand header */}
        <header className="flex items-center gap-3 px-7 pt-8 sm:px-12 sm:pt-10">
          <Image
            src="/ValisLogo.png"
            alt="Valis Tech logo"
            width={72}
            height={72}
            priority
            className="h-14 w-14 object-contain sm:h-16 sm:w-16"
          />

          <div>
            <h2 className="text-2xl font-bold tracking-[0.12em] sm:text-3xl">
              VALIS TECH
            </h2>
            <p className="mt-1 text-xs font-semibold uppercase tracking-[0.22em] text-blue-400">
              African Advancement
            </p>
          </div>

          <div className="ml-auto hidden text-right sm:block">
            <p className="text-xs font-semibold uppercase tracking-widest text-slate-400">
              Digital solutions
            </p>
            <p className="mt-1 text-sm text-slate-300">
              Harare, Zimbabwe
            </p>
          </div>
        </header>

        {/* Hero */}
        <section className="px-7 pb-7 pt-9 sm:px-12 sm:pb-9 sm:pt-12">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.25em] text-blue-400">
            YOUR BUSINESS. THE DIGITAL WORLD.
          </p>

          <h1 className="max-w-2xl text-4xl font-bold leading-[1.08]
            tracking-tight sm:text-6xl">
            Your business deserves to be{" "}
            <span className="bg-gradient-to-r from-blue-400
              via-sky-300 to-cyan-200 bg-clip-text text-transparent">
              found online.
            </span>
          </h1>

          <p className="mt-5 max-w-lg text-base leading-relaxed text-slate-300 sm:text-lg">
            Get a professional website that helps customers
            find you, trust you and contact you.
          </p>
        </section>

        {/* Main offer */}
        <section className="relative mx-5 overflow-hidden rounded-2xl
          bg-gradient-to-br from-blue-500 via-blue-600 to-blue-800
          px-6 py-7 sm:mx-12 sm:px-9 sm:py-8">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-10 -top-16
              h-48 w-48 rounded-full border-[28px] border-white/10"
          />

          <p className="relative text-xs font-bold uppercase tracking-[0.2em] text-blue-100">
            A SPECIAL OFFER FOR YOUR BUSINESS
          </p>

          <h2 className="relative mt-3 text-4xl font-black uppercase
            leading-none tracking-tight sm:text-6xl">
            First month
            <br />
            <span className="text-white">of hosting free.</span>
          </h2>

          <p className="relative mt-4 text-sm font-medium text-blue-100 sm:text-base">
            With your new website.
          </p>
        </section>

        {/* Services */}
        <section className="px-7 py-8 sm:px-12 sm:py-9">
          <div className="mb-5 flex items-center gap-3">
            <span className="h-px flex-1 bg-slate-700" />
            <h2 className="text-xs font-bold uppercase tracking-[0.22em] text-blue-300">
              WHAT WE DO
            </h2>
            <span className="h-px flex-1 bg-slate-700" />
          </div>

          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {services.map((service) => (
              <div
                key={service.number}
                className="flex gap-4 rounded-lg border border-slate-700/80
                  bg-white/[0.03] p-4"
              >
                <span className="pt-0.5 text-sm font-bold text-blue-400">
                  {service.number}
                </span>

                <div>
                  <h3 className="text-sm font-bold sm:text-base">
                    {service.title}
                  </h3>
                  <p className="mt-1 text-xs leading-relaxed text-slate-400 sm:text-sm">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Trust statement */}
        <section className="mx-7 flex items-center gap-3
          border-y border-slate-700 py-4 sm:mx-12">
          <span className="flex h-9 w-9 shrink-0 items-center
            justify-center rounded-full bg-emerald-400/10 text-lg text-emerald-400">
            ✓
          </span>
          <div>
            <p className="text-sm font-bold">
              Your domain. Your ownership.
            </p>
            <p className="mt-1 text-xs text-slate-400">
              Built for growing businesses, with care for performance and accessibility.
            </p>
          </div>
        </section>

        {/* Contact: keep this in the bottom third */}
        <footer className="mt-auto bg-[#0d1c32] px-7 pb-8 pt-7 sm:px-12 sm:pb-10 sm:pt-8">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-blue-400">
            READY TO GROW YOUR BUSINESS?
          </p>

          <div className="mt-3 grid grid-cols-1 items-center
            gap-6 sm:grid-cols-[1fr_auto]">
            <div>
              <h2 className="text-3xl font-black leading-tight sm:text-4xl">
                Let's get you online.
              </h2>

              <p className="mt-3 text-sm text-slate-300">
                Message us on WhatsApp
              </p>

              <a
                href={whatsappUrl}
                className="mt-2 inline-block text-2xl font-black
                  tracking-tight text-emerald-400 sm:text-3xl"
              >
                +263 77 893 5618
              </a>

              <p className="mt-3 text-xs text-slate-400">
                Websites · Hosting · SEO · WhatsApp
              </p>
            </div>

            <a
              href={whatsappUrl}
              aria-label="Scan QR code to start a WhatsApp conversation with Valis Tech"
              className="flex w-fit flex-col items-center gap-2 rounded-xl
                bg-white p-3 text-center"
            >
              <QRCodeSVG
                value={whatsappUrl}
                size={132}
                level="H"
                marginSize={2}
                bgColor="#ffffff"
                fgColor="#081426"
                title="Scan to message Valis Tech on WhatsApp"
              />

              <span className="text-xs font-bold text-slate-900">
                SCAN TO MESSAGE
              </span>
            </a>
          </div>

          <div className="mt-7 flex items-end justify-between
            gap-4 border-t border-slate-700 pt-4">
            <p className="max-w-xs text-xs leading-relaxed text-slate-400">
              Building the digital infrastructure
              for growing African businesses.
            </p>

            <p className="shrink-0 text-xs font-semibold text-slate-300">
              VALIS TECH
            </p>
          </div>
        </footer>
      </article>
    </main>
  );
}
