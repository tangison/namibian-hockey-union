import { Clock } from "@phosphor-icons/react/dist/ssr";

/**
 * "Coming soon" notice — used on dynamic-data sections of the demo.
 *
 * Renders a premium inline card letting the visitor know that live data
 * (fixtures, results, news, club directory, squads) is pending and will
 * be populated when the site goes into production.
 */
export function ComingSoon({
  title = "Coming soon",
  description = "Live data will populate here when the site moves into production.",
  compact = false,
}: {
  title?: string;
  description?: string;
  compact?: boolean;
}) {
  if (compact) {
    return (
      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-surface-alt border border-border text-[10px] font-mono uppercase tracking-[0.18em] text-ink-muted">
        <Clock size={11} weight="regular" aria-hidden="true" />
        {title}
      </span>
    );
  }

  return (
    <div className="rounded-2xl border border-dashed border-border bg-surface-alt/60 p-6 md:p-8">
      <div className="flex items-start gap-3">
        <span className="grid place-items-center h-10 w-10 rounded-full bg-surface border border-border shrink-0">
          <Clock size={18} weight="regular" className="text-ink-muted" aria-hidden="true" />
        </span>
        <div>
          <p className="font-display text-lg font-semibold tracking-tight text-ink">
            {title}
          </p>
          <p className="mt-1 text-sm text-ink-muted leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}
