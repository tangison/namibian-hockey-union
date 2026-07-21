import { Container } from "@/components/container";
import { ButtonLink } from "@/components/button";
import { Lock } from "@phosphor-icons/react/dist/ssr";

export default function LockedPage() {
  return (
    <Container className="py-24 md:py-32">
      <div className="max-w-xl">
        <Lock size={32} className="text-ink mb-6" aria-hidden="true" />
        <p className="text-xs font-mono uppercase tracking-wider text-ink-muted mb-4">
          Locked in demo
        </p>
        <h1 className="font-display text-4xl md:text-5xl font-semibold tracking-tight leading-[1.1]">
          This page is locked
        </h1>
        <p className="mt-6 text-lg text-ink-muted leading-relaxed">
          This page exists in the site plan but is not yet unlocked in demo mode. The home and brand pages are the unlocked demo experience. All other pages will be unlocked in full mode after demo approval.
        </p>
        <ButtonLink href="/" variant="secondary" size="md" className="mt-8">
          Return home
        </ButtonLink>
      </div>
    </Container>
  );
}
