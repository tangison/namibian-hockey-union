import { Container } from "@/components/container";
import { Wrench } from "@phosphor-icons/react/dist/ssr";

export default function MaintenancePage() {
  return (
    <Container className="py-24 md:py-32">
      <div className="max-w-xl">
        <Wrench size={32} className="text-ink mb-6" aria-hidden="true" />
        <p className="text-xs font-mono uppercase tracking-wider text-ink-muted mb-4">
          Maintenance
        </p>
        <h1 className="font-display text-4xl md:text-5xl font-semibold tracking-tight leading-[1.1]">
          Scheduled maintenance
        </h1>
        <p className="mt-6 text-lg text-ink-muted leading-relaxed">
          The Namibian Hockey Union site is performing scheduled maintenance. We will be back shortly. For urgent matters, contact the existing federation at namibiahockey.org.
        </p>
      </div>
    </Container>
  );
}
