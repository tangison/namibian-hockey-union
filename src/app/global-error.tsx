"use client";

import { Container } from "@/components/container";
import { Button } from "@/components/button";
import { Bug } from "@phosphor-icons/react";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html>
      <body>
        <Container className="py-24 md:py-32">
          <div className="max-w-xl">
            <Bug size={32} className="text-ink mb-6" aria-hidden="true" />
            <p className="text-xs font-mono uppercase tracking-wider text-ink-muted mb-4">
              500
            </p>
            <h1 className="font-display text-4xl md:text-5xl font-semibold tracking-tight leading-[1.1]">
              Something went wrong
            </h1>
            <p className="mt-6 text-lg text-ink-muted leading-relaxed">
              Something went wrong on our side. Your information was not lost. Try again, or contact the existing federation at namibiahockey.org if the problem continues.
            </p>
            {error.digest && (
              <p className="mt-4 text-xs font-mono text-ink-muted">
                Reference: {error.digest}
              </p>
            )}
            <Button onClick={() => reset()} variant="secondary" size="md" className="mt-8">
              Try again
            </Button>
          </div>
        </Container>
      </body>
    </html>
  );
}
