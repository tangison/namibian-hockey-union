import { Container } from "@/components/container";
import { ButtonLink } from "@/components/button";
import { Compass } from "@phosphor-icons/react/dist/ssr";

export default function NotFound() {
  return (
    <Container className="py-24 md:py-32">
      <div className="max-w-xl">
        <Compass size={32} className="text-ink mb-6" aria-hidden="true" />
        <p className="text-xs font-mono uppercase tracking-wider text-ink-muted mb-4">
          404
        </p>
        <h1 className="font-display text-4xl md:text-5xl font-semibold tracking-tight leading-[1.1]">
          This page does not exist
        </h1>
        <p className="mt-6 text-lg text-ink-muted leading-relaxed">
          The page you were looking for is not on this site. It may have been moved, renamed, or never existed. Try the home page or the sitemap.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <ButtonLink href="/" variant="secondary" size="md">Return home</ButtonLink>
          <ButtonLink href="/sitemap" variant="ghost" size="md">View sitemap</ButtonLink>
        </div>
      </div>
    </Container>
  );
}
