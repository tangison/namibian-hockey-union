import { Container } from "./container";
import { ButtonLink } from "./button";
import { Lock } from "@phosphor-icons/react/dist/ssr";

export function LockedPreview({
  title,
  description,
  sample,
}: {
  title: string;
  description: string;
  sample?: React.ReactNode;
}) {
  return (
    <Container className="py-16 md:py-24">
      <div className="max-w-2xl">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-surface-alt border border-border text-xs font-mono uppercase tracking-wider text-ink-muted rounded-pill mb-6">
          <Lock size={12} weight="fill" aria-hidden="true" />
          Locked in demo
        </div>
        <h1 className="font-display text-4xl md:text-5xl font-semibold tracking-tight leading-[1.1]">
          {title}
        </h1>
        <p className="mt-6 text-lg text-ink-muted leading-relaxed max-w-[55ch]">
          {description}
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <ButtonLink href="/" variant="secondary" size="md">
            Return home
          </ButtonLink>
          <ButtonLink href="/contact" variant="ghost" size="md">
            Contact NHU
          </ButtonLink>
        </div>
      </div>
      {sample && (
        <div className="mt-16">
          <p className="text-xs font-mono uppercase tracking-wider text-ink-muted mb-4">
            Layout preview
          </p>
          <div className="opacity-60 pointer-events-none">{sample}</div>
        </div>
      )}
    </Container>
  );
}
