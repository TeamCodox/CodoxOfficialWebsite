import React, { useState } from "react";
import { ArrowDownRight, ArrowRight, ArrowUpRight, Plus, Sparkles } from "lucide-react";
import { SectionHeader } from "../ui";
import { FAQS } from "../../constants/faqs";

export default function FaqSection() {
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <section
      id="faq"
      className="relative overflow-hidden bg-[#000000] px-margin-mobile py-20 md:px-margin-desktop md:py-28"
      style={{ fontFamily: "Poppins, sans-serif" }}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 right-1/4 h-96 w-96 rounded-full bg-primary/[0.07] blur-[120px]"
      />
      <div className="relative z-10 mx-auto max-w-container-max">
        <SectionHeader
          badge="frequently asked"
          titlePrefix="Good questions,"
          titleHighlight="answers"
          titleSuffix="."
          subtitleEyebrow="No guesswork"
          subtitleDescription="A little more clarity before you get started. And if something’s still on your mind, we’re just a message away."
        />

        <div className="grid grid-cols-1 gap-5 md:grid-cols-12 md:gap-6">
          <aside className="md:col-span-4">
            <div className="group/contact relative flex h-full min-h-[340px] flex-col overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.07] via-white/[0.035] to-white/[0.015] p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 hover:border-primary/30 hover:shadow-[0_20px_60px_rgba(0,0,0,0.28),inset_0_1px_0_rgba(255,255,255,0.1)] md:p-7">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-primary/[0.12] blur-3xl transition-opacity duration-500 group-hover/contact:opacity-100"
              />
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -bottom-8 -right-2 select-none text-[120px] font-bold leading-none tracking-tighter text-white/[0.035]"
              >
                ?
              </div>

              <div className="relative z-10 flex items-center justify-between">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-primary/15 bg-primary/[0.08] text-primary">
                  <Sparkles aria-hidden="true" size={21} strokeWidth={1.7} />
                </span>
                <span className="font-mono text-[10px] tracking-[0.12em] text-secondary/55">
                  // let’s talk()
                </span>
              </div>

              <div className="relative z-10 mt-auto pt-12">
                <div className="mb-4 flex w-fit items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#4ade80] opacity-60" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-[#4ade80]" />
                  </span>
                  <span className="text-[10px] font-semibold uppercase tracking-[0.14em] text-secondary/75">
                    Available for new projects
                  </span>
                </div>

                <h3 className="max-w-sm text-2xl font-semibold leading-tight tracking-tight text-white md:text-3xl">
                  Still curious?
                  <br />
                  <span
                    className="font-medium italic text-primary"
                    style={{ fontFamily: '"Playfair Display", serif' }}
                  >
                    Let’s make it clear.
                  </span>
                </h3>
                <p className="mt-3 max-w-sm text-sm leading-6 text-secondary/70">
                  Tell us what you’re imagining. We’ll help you figure out the best next step—no pressure, just a good conversation.
                </p>

                <div className="mt-6 flex flex-col gap-3">
                  <a
                    href="#contact"
                    className="group/btn inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-gradient-to-b from-[#e2e2e2] to-[#c6c6c7] px-5 py-3 text-sm font-semibold text-black shadow-[inset_0_1px_1px_rgba(255,255,255,0.4),0_4px_18px_rgba(173,198,255,0.12)] transition-all duration-300 hover:scale-[0.98] hover:shadow-[0_0_25px_rgba(173,198,255,0.25)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
                  >
                    Start a conversation
                    <ArrowUpRight
                      aria-hidden="true"
                      size={16}
                      className="transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5"
                    />
                  </a>
                  <a
                    href="#services"
                    className="group/services inline-flex min-h-10 items-center justify-center gap-2 rounded-full border border-white/10 bg-white/[0.035] px-5 py-2.5 text-sm font-medium text-secondary/80 transition-colors duration-300 hover:border-white/25 hover:bg-white/[0.07] hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
                  >
                    Explore our services
                    <ArrowRight
                      aria-hidden="true"
                      size={15}
                      className="transition-transform duration-300 group-hover/services:translate-x-1"
                    />
                  </a>
                </div>
              </div>
            </div>
          </aside>

          <div className="space-y-3 md:col-span-8 md:space-y-4">
            {FAQS.map(({ question, answer }, index) => {
              const isOpen = openFaq === index;
              const answerId = `faq-answer-${index + 1}`;

              return (
                <article
                  key={question}
                  className={`group/faq relative isolate overflow-hidden rounded-2xl border bg-gradient-to-br from-white/[0.045] to-white/[0.015] backdrop-blur-md transition-all duration-300 ${
                    isOpen
                      ? "border-primary/30 shadow-[0_12px_36px_rgba(0,0,0,0.2),inset_0_1px_0_rgba(255,255,255,0.06)]"
                      : "border-white/[0.08] hover:border-white/15 hover:from-white/[0.06]"
                  }`}
                >
                  <div
                    aria-hidden="true"
                    className={`pointer-events-none absolute inset-y-0 left-0 w-[2px] origin-top bg-gradient-to-b from-primary via-primary/45 to-transparent transition-transform duration-500 ${
                      isOpen ? "scale-y-100" : "scale-y-0 group-hover/faq:scale-y-50"
                    }`}
                  />
                  <span
                    aria-hidden="true"
                    className={`pointer-events-none absolute -right-1 -top-5 select-none font-bold text-[76px] leading-none tracking-tighter transition-colors duration-300 ${
                      isOpen ? "text-primary/[0.07]" : "text-white/[0.025]"
                    }`}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <button
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={answerId}
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                    className="relative z-10 flex min-h-[68px] w-full items-center justify-between gap-4 px-5 py-4 text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-inset focus-visible:outline-primary sm:px-6"
                  >
                    <span className="flex items-center gap-3 sm:gap-4">
                      <span className="font-mono text-[10px] tracking-[0.12em] text-primary/60">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <span
                        id={`faq-question-${index + 1}`}
                        className="text-sm font-medium leading-6 tracking-tight text-white sm:text-base"
                      >
                        {question}
                      </span>
                    </span>
                    <span
                      className={`flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full border transition-all duration-300 ${
                        isOpen
                          ? "rotate-45 border-primary/35 bg-primary/[0.12] text-primary"
                          : "border-white/10 bg-white/[0.025] text-secondary/70 group-hover/faq:border-primary/30 group-hover/faq:text-primary"
                      }`}
                    >
                      <Plus aria-hidden="true" size={16} strokeWidth={1.7} />
                    </span>
                  </button>

                  <div
                    id={answerId}
                    role="region"
                    aria-labelledby={`faq-question-${index + 1}`}
                    aria-hidden={!isOpen}
                    className={`grid transition-[grid-template-rows] duration-300 ease-out motion-reduce:transition-none ${
                      isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                    }`}
                  >
                    <div className="min-h-0 overflow-hidden">
                      <div className="ml-5 border-t border-white/[0.07] px-5 pb-5 pt-4 sm:ml-6 sm:px-6 sm:pb-6">
                        <div className="flex gap-3">
                          <ArrowDownRight
                            aria-hidden="true"
                            size={16}
                            strokeWidth={1.6}
                            className="mt-0.5 flex-shrink-0 text-primary/65"
                          />
                          <p className="max-w-2xl text-sm leading-6 text-secondary/75">
                            {answer}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
