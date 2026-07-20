import { Container } from "@/components/container";

export default function Loading() {
  return (
    <Container className="py-16 md:py-24">
      <div className="max-w-2xl">
        <div className="h-4 w-24 bg-surface-alt rounded-pill mb-6 animate-pulse" />
        <div className="h-12 w-3/4 bg-surface-alt rounded-card mb-4 animate-pulse" />
        <div className="h-12 w-1/2 bg-surface-alt rounded-card mb-8 animate-pulse" />
        <div className="h-4 w-full bg-surface-alt rounded-card mb-2 animate-pulse" />
        <div className="h-4 w-5/6 bg-surface-alt rounded-card mb-2 animate-pulse" />
        <div className="h-4 w-2/3 bg-surface-alt rounded-card mb-8 animate-pulse" />
        <div className="flex gap-3">
          <div className="h-11 w-32 bg-surface-alt rounded-card animate-pulse" />
          <div className="h-11 w-32 bg-surface-alt rounded-card animate-pulse" />
        </div>
      </div>
    </Container>
  );
}
