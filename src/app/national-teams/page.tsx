import type { Metadata } from "next";
import { LockedPreview } from "@/components/locked-preview";
import { nationalTeams } from "@/data/site";
import { Users } from "@phosphor-icons/react/dist/ssr";

export const metadata: Metadata = {
  title: "National teams",
  description: "Men and women, outdoor and indoor, junior and senior national hockey squads.",
  alternates: { canonical: "/national-teams" },
  robots: { index: false, follow: true },
};

export default function NationalTeamsPage() {
  return (
    <LockedPreview
      title="National teams"
      description="National teams coverage is being prepared. Profiles will include the men and women senior outdoor squads, indoor squads, and junior squads, with selections, fixtures, and match reports."
      sample={
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border border border-border max-w-3xl">
          {nationalTeams.slice(0, 3).map((team) => (
            <li key={team.slug} className="bg-surface p-6">
              <Users size={20} className="text-ink-muted mb-3" aria-hidden="true" />
              <p className="font-display text-lg font-semibold">{team.name}</p>
              <p className="text-xs font-mono uppercase tracking-wider text-ink-muted mt-1">
                {team.status}
              </p>
            </li>
          ))}
        </ul>
      }
    />
  );
}
