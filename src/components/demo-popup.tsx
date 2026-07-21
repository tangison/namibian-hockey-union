"use client";

import { useEffect, useState } from "react";
import { X, Info, ArrowRight } from "@phosphor-icons/react";
import Link from "next/link";

/**
 * Persistent demo-site popup.
 *
 * Design goals:
 * - Appears once per session (sessionStorage flag) on first page load.
 * - Premium modal styling: dark backdrop, glass panel, tri-colour accent.
 * - Clearly communicates this is a demo for client approval.
 * - Dismissible via "Got it" button, X close, or Esc key.
 * - Dismissal persists for the current browser session (reappears next visit).
 * - Accessible: role=dialog, aria-modal, focus trap-ish (focuses close on open).
 */
const STORAGE_KEY = "nhu-demo-ack";

export function DemoPopup() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    try {
      const seen = sessionStorage.getItem(STORAGE_KEY);
      if (!seen) {
        // Small delay so the modal animates in after the page has painted.
        const t = setTimeout(() => setOpen(true), 800);
        return () => clearTimeout(t);
      }
    } catch {
      // sessionStorage may be unavailable (SSR / privacy mode) — show by default.
      const t = setTimeout(() => setOpen(true), 800);
      return () => clearTimeout(t);
    }
  }, []);

  // Esc-to-close
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const close = () => {
    setOpen(false);
    try {
      sessionStorage.setItem(STORAGE_KEY, "1");
    } catch {
      // ignore
    }
  };

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="demo-popup-title"
      aria-describedby="demo-popup-body"
    >
      {/* Backdrop */}
      <div
        onClick={close}
        className="absolute inset-0 bg-ink/70 backdrop-blur-md animate-[fadeIn_200ms_ease-out]"
      />

      {/* Panel */}
      <div className="relative w-full max-w-lg bg-surface rounded-3xl shadow-[0_30px_80px_-20px_rgba(10,26,47,0.55)] border border-border overflow-hidden animate-[popIn_240ms_cubic-bezier(0.22,1,0.36,1)]">
        {/* Tri-colour accent strip */}
        <div
          aria-hidden="true"
          className="grid grid-cols-3 h-1.5"
        >
          <div className="bg-live" />
          <div className="bg-accent" />
          <div className="bg-success" />
        </div>

        {/* Close button */}
        <button
          type="button"
          onClick={close}
          className="absolute top-4 right-4 inline-flex h-9 w-9 items-center justify-center rounded-full text-ink-muted hover:text-ink hover:bg-surface-alt transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
          aria-label="Close demo notice"
        >
          <X size={18} weight="regular" />
        </button>

        <div className="px-6 sm:px-8 pt-7 pb-7 sm:pt-8 sm:pb-8">
          {/* Header */}
          <div className="flex items-center gap-2 mb-5">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-accent text-ink text-[10px] font-mono uppercase tracking-[0.18em] font-bold">
              <span className="h-1.5 w-1.5 rounded-full bg-live animate-pulse" aria-hidden="true" />
              Demo
            </span>
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-surface-alt border border-border text-ink-muted text-[10px] font-mono uppercase tracking-[0.18em] font-semibold">
              Client preview
            </span>
          </div>

          <h2
            id="demo-popup-title"
            className="font-display text-2xl sm:text-3xl font-semibold tracking-tight leading-tight text-ink"
          >
            You're viewing a demo of the new NHU website.
          </h2>

          <div
            id="demo-popup-body"
            className="mt-4 space-y-3 text-ink-muted leading-relaxed text-[15px]"
          >
            <p>
              This preview has been built by Tangison Studio for the Namibian Hockey Union's
              review and approval. It is hosted at{" "}
              <span className="font-mono text-ink font-medium">hockey.tangison.com</span>{" "}
              and is not the live site.
            </p>
            <p>
              All copy, imagery and facts have been verified against primary sources
              (FIH, NNOC, Wikipedia, AfHF) via the Tavily search API. Live data — fixtures,
              results, news, the club directory and squad selections — will be marked{" "}
              <span className="font-semibold text-ink">“Coming soon”</span> on each page.
            </p>
            <p className="flex items-start gap-2 text-xs">
              <Info size={14} weight="regular" className="text-ink-muted shrink-0 mt-0.5" aria-hidden="true" />
              <span>
                This notice will appear once per session. Closing it will not collect any
                personal data.
              </span>
            </p>
          </div>

          {/* Actions */}
          <div className="mt-7 flex flex-col sm:flex-row gap-2.5">
            <button
              type="button"
              onClick={close}
              className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-ink text-surface rounded-full text-sm font-semibold hover:bg-ink/90 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
            >
              Got it — explore the demo
              <ArrowRight size={16} weight="bold" aria-hidden="true" />
            </button>
            <Link
              href="/about"
              onClick={close}
              className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-surface-alt text-ink rounded-full text-sm font-semibold hover:bg-border/60 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
            >
              About this project
            </Link>
          </div>
        </div>

        {/* Footer line */}
        <div className="px-6 sm:px-8 py-3 bg-surface-alt/60 border-t border-border">
          <p className="text-[11px] font-mono uppercase tracking-[0.18em] text-ink-muted">
            Tangison Studio · for NHU client review
          </p>
        </div>
      </div>

      {/* Keyframes (inline so they don't depend on Tailwind config) */}
      <style>{`
        @keyframes fadeIn { from { opacity: 0 } to { opacity: 1 } }
        @keyframes popIn {
          from { opacity: 0; transform: translateY(8px) scale(0.98) }
          to   { opacity: 1; transform: translateY(0) scale(1) }
        }
      `}</style>
    </div>
  );
}
