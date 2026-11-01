import React from "react";



const sections = [

  {

    title: "1. Introduction",

    body: (

      <p>

        Welcome to Codox. We value your privacy and are committed to protecting your personal data. This Privacy Policy explains how we collect, use, and safeguard your information when you visit our website or use our services.

      </p>

    ),

  },

  {

    title: "2. Data Collection",

    body: (

      <>

        <p className="mb-8">

          We collect information that you provide directly to us, as well as information collected automatically through your use of our services:

        </p>

        <ul className="ml-2 space-y-4">

          <li className="flex items-start gap-4"><span className="mt-2.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-white/20" /><span><strong className="font-semibold text-on-surface">Personal Information:</strong> Name, email address, and contact details provided via forms.</span></li>

          <li className="flex items-start gap-4"><span className="mt-2.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-white/20" /><span><strong className="font-semibold text-on-surface">Usage Data:</strong> IP address, browser type, and interaction patterns on our site.</span></li>

          <li className="flex items-start gap-4"><span className="mt-2.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-white/20" /><span><strong className="font-semibold text-on-surface">Device Information:</strong> Operating system and hardware model.</span></li>

        </ul>

      </>

    ),

  },

  {

    title: "3. How We Use Your Data",

    body: (

      <>

        <p className="mb-8">Your data helps us provide and improve our services. Specifically, we use it to:</p>

        <ul className="ml-2 space-y-4">

          <li className="flex items-start gap-4"><span className="mt-2.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-white/20" /><span>Personalize your experience and respond to individual needs.</span></li>

          <li className="flex items-start gap-4"><span className="mt-2.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-white/20" /><span>Improve our website based on the information and feedback we receive.</span></li>

          <li className="flex items-start gap-4"><span className="mt-2.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-white/20" /><span>Send periodic emails regarding your inquiries or other products and services.</span></li>

        </ul>

      </>

    ),

  },

  {

    title: "4. Cookies",

    body: (

      <p>

        We use cookies to enhance your experience. Cookies are small files that a site or its service provider transfers to your computer&apos;s hard drive through your web browser that enables the site&apos;s systems to recognize your browser and capture certain information.

      </p>

    ),

  },

  {

    title: "5. Third-Party Sharing",

    body: (

      <p>

        We do not sell, trade, or otherwise transfer your personally identifiable information to outside parties. This does not include trusted third parties who assist us in operating our website, so long as those parties agree to keep this information confidential.

      </p>

    ),

  },

  {

    title: "6. Security",

    body: (

      <p>

        We implement a variety of security measures to maintain the safety of your personal information. However, no method of transmission over the Internet is 100% secure, and we cannot guarantee absolute security.

      </p>

    ),

  },

];



export default function PrivacyPolicyPage() {

  return (

    <main className="min-h-screen overflow-hidden bg-black text-on-surface" style={{ fontFamily: '"Hanken Grotesk", sans-serif' }}>

      <section className="relative flex min-h-[420px] items-center overflow-hidden bg-[#0e0e0e] px-margin-mobile py-24 pt-32 md:px-margin-desktop" style={{ backgroundColor: "rgb(14, 14, 14)" }}>

        <div className="pointer-events-none absolute -bottom-32 -right-32 z-0 h-[800px] w-[800px] rounded-full bg-primary/10 opacity-40 blur-[120px]" />

        <div className="pointer-events-none absolute -top-12 left-0 z-0 h-[600px] w-[600px] rounded-full bg-primary/20 opacity-30 blur-[120px]" />

        <div className="pointer-events-none absolute inset-0 z-0 opacity-[0.15]" style={{ backgroundImage: "linear-gradient(to right, rgb(65, 71, 85) 1px, transparent 1px), linear-gradient(rgb(65, 71, 85) 1px, transparent 1px)", backgroundSize: "40px 40px" }} />

        <div className="pointer-events-none absolute inset-0 z-0">

          <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: "linear-gradient(to right, rgba(173,198,255,0.2) 1px, transparent 1px), linear-gradient(rgba(173,198,255,0.2) 1px, transparent 1px)", backgroundSize: "60px 60px", maskImage: "radial-gradient(ellipse at center, black, transparent 80%)" }} />

          <div className="absolute inset-0 opacity-30" style={{ backgroundImage: "radial-gradient(circle at 2px 2px, rgba(173,198,255,0.15) 1px, transparent 0px)", backgroundSize: "40px 40px" }} />

          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#0e0e0e]" />

        </div>

        <header className="absolute left-0 top-0 z-50 w-full bg-transparent px-margin-mobile pt-8 md:px-margin-desktop">

          <nav className="mx-auto flex max-w-container-max items-center justify-between rounded-full bg-transparent px-gutter py-2 backdrop-blur-xl transition-all duration-300">

            <a href="/" aria-label="Codox home" className="flex flex-shrink-0 items-center">

              <img alt="Codox logo" className="h-12 w-auto object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCDWclpyHfRyXLWpeA4eRsRCh_PFFHFxTzioJgWiQbX47IHvBot6WHgQpTYjZl5jZ2a0autUR9A_Vl-uo2GiDSFVl28SRSV4o-EB6heCfjwrs_iPshiq56vcERU860ryO9kepnsjIhpv5I621z6CziuOoOK_zaAB2U7anoWmq503lLLzLwFkzR8b27mP_U2zV2gp5kW1M132DneiGbtWyjavGJ3u1SUUElF0aJHOzSLwmy5W09HmGnYwy45L2UxkNbC4Q6GBjVcgmMd" />

            </a>

            <div className="hidden items-center rounded-full border border-white/5 bg-surface-container/40 px-6 py-4 shadow-[inset_0_1px_1px_rgba(255,255,255,0.1),0_4px_20px_rgba(0,0,0,0.4)] backdrop-blur-xl transition-all duration-300 md:flex" style={{ boxShadow: "rgba(255,255,255,0.15) 0px 1px 1px inset, rgba(0,0,0,0.4) 0px -1px 1px inset, rgba(0,0,0,0.6) 0px 4px 20px, rgba(255,255,255,0.05) 0px 0px 12px inset" }}>

              <ul className="flex items-center space-x-1">

                <li><a href="/#services" className="relative cursor-pointer px-5 py-2 transition-all duration-300 hover:-translate-y-0.5 hover:text-primary">Services</a></li>

                <li><a href="/#projects" className="relative cursor-pointer px-5 py-2 text-secondary transition-all duration-300 hover:-translate-y-0.5 hover:text-primary">Work</a></li>

                <li><a href="/#pricing" className="relative cursor-pointer px-5 py-2 text-secondary transition-all duration-300 hover:-translate-y-0.5 hover:text-primary">Pricing</a></li>

                <li><a href="/#contact" className="relative cursor-pointer px-5 py-2 text-secondary transition-all duration-300 hover:-translate-y-0.5 hover:text-primary">Contact</a></li>

              </ul>

            </div>

            <a href="/#contact" className="flex items-center gap-2 rounded-full px-6 py-2.5 font-body-md font-bold text-surface transition-all duration-300 hover:scale-105" style={{ boxShadow: "rgba(255,255,255,0.4) 0px 1px 1px inset, rgba(0,0,0,0.2) 0px -1px 1px inset, rgba(173,198,255,0.15) 0px 4px 12px", background: "linear-gradient(rgb(226,226,226) 0%, rgb(198,198,199) 100%)" }}>

              Let's Chat <span className="material-symbols-outlined text-[18px]">north_east</span>

            </a>

          </nav>

        </header>

          <div className="mx-auto flex max-w-4xl flex-col items-center pt-8 text-center">

            <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 backdrop-blur-xl">

              <span className="relative flex h-2 w-2"><span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" /><span className="relative inline-flex h-2 w-2 rounded-full bg-primary" /></span>

              <span className="font-mono text-[10px] font-bold uppercase tracking-[0.3em] text-secondary">Legal Documentation</span>

            </div>

            <h1 className="mb-8 text-4xl font-bold leading-[0.95] tracking-tighter text-on-surface md:text-7xl">Privacy Policy</h1>

            <div className="flex flex-wrap justify-center gap-8">

              <span className="font-mono text-[12px] uppercase tracking-widest text-secondary/50">Version 2.1</span>

              <span className="font-mono text-[12px] uppercase tracking-widest text-secondary/50">Last Updated: May 24, 2024</span>

            </div>

          </div>

      </section>



      <section className="relative bg-black px-margin-mobile py-24 font-body-md text-on-surface md:px-margin-desktop">

        <div className="mx-auto max-w-5xl">

          <div className="space-y-24">

            {sections.map((section) => (

              <section key={section.title} className="border-b border-white/5 pb-12 last:border-0">

                <h2 className="mb-6 text-headline-lg font-bold tracking-tight text-on-surface">{section.title}</h2>

                <div className="text-[18px] leading-relaxed text-secondary/80">{section.body}</div>

              </section>

            ))}

            <section className="pb-12">

              <h2 className="mb-6 text-headline-lg font-bold tracking-tight text-on-surface">7. Contact Information</h2>

              <p className="mb-8 text-[18px] leading-relaxed text-secondary/80">

                If you have any questions regarding this Privacy Policy, you may contact us using the information below:

              </p>

              <div className="group relative overflow-hidden rounded-xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur-md transition-all duration-300 hover:border-primary/30">

                <div className="pointer-events-none absolute -right-24 -top-24 h-48 w-48 rounded-full bg-primary/10 blur-[60px] transition-colors duration-300 group-hover:bg-primary/20" />

                <div className="relative z-10 space-y-8">

                  <div>

                    <p className="mb-2 text-[22px] font-bold tracking-tight text-primary">Codox Legal Team</p>

                    <div className="h-px w-16 bg-gradient-to-r from-primary/40 to-transparent" />

                  </div>

                  <div className="flex flex-col items-start gap-8 sm:flex-row sm:gap-24">

                    <div className="flex flex-col">

                      <span className="mb-0.5 font-mono text-[12px] uppercase tracking-widest text-secondary/50">Email</span>

                      <a href="mailto:privacy@codox.design" className="text-[18px] font-medium text-on-surface hover:text-primary">privacy@codox.design</a>

                    </div>

                    <div className="flex flex-col">

                      <span className="mb-0.5 font-mono text-[12px] uppercase tracking-widest text-secondary/50">Office</span>

                      <p className="text-[18px] leading-relaxed text-on-surface">123 Design Street,<br />Creative Suite 101</p>

                    </div>

                  </div>

                </div>

              </div>

            </section>

          </div>

          <div className="mt-12 border-t border-white/5 pt-8 text-center text-xs text-secondary/40">© {new Date().getFullYear()} Codox. All rights reserved.</div>

        </div>

      </section>

    </main>

  );

}
