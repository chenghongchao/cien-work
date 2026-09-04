import { projects, type Project } from "@/data/projects";

const styles: Record<Project["accent"], string> = {
  red: "bg-[#c23f4c] text-white",
  dark: "bg-[#111111] text-white",
  sand: "bg-[#d9cfbf] text-ink",
  paper: "bg-[#eceae5] text-ink",
};

const panelStyles: Record<Project["accent"], string> = {
  red: "border-white/25 bg-white/10",
  dark: "border-white/20 bg-white/[0.04]",
  sand: "border-black/15 bg-white/30",
  paper: "border-black/15 bg-white/45",
};

const visualMap: Record<
  string,
  { label: string; title: string; steps: string[] }
> = {
  "us-creator-pipeline": {
    label: "OPERATING MODEL",
    title: "Creator Pipeline",
    steps: ["Source", "Review", "Negotiate", "Seed", "Publish", "Settle"],
  },
  "north-america-audience-repositioning": {
    label: "AUDIENCE SYSTEM",
    title: "Signal Repositioning",
    steps: ["Audit", "Reset", "Test", "Measure", "Refine"],
  },
  "multi-platform-social-system": {
    label: "CHANNEL SYSTEM",
    title: "Multi-platform Operations",
    steps: ["TikTok", "Instagram", "Facebook", "YouTube", "Pinterest"],
  },
  "creator-publishing-tracking-operations": {
    label: "DELIVERY SYSTEM",
    title: "Partnership Delivery",
    steps: ["Product", "Logistics", "Review", "Tracking", "Live", "Payment"],
  },
  "facebook-community-member-day": {
    label: "COMMUNITY SYSTEM",
    title: "Community Loop",
    steps: ["Content", "Group", "Campaign", "Repeat Reach", "Orders"],
  },
};

function getDisplayEvidence(project: Project) {
  if (project.slug === "facebook-community-member-day") {
    return [
      { value: "0→14" },
      { value: "Orders" },
      { value: "Recurring" },
    ];
  }

  return project.evidence.slice(0, 3).map((item) => ({ value: item.value }));
}

export function ProjectVisual({ project }: { project: Project }) {
  const visual = visualMap[project.slug] ?? {
    label: "OPERATING MODEL",
    title: "Case System",
    steps: project.tags.slice(0, 5),
  };
  const evidence = getDisplayEvidence(project);

  return (
    <div
      className={`relative min-h-80 overflow-hidden p-5 sm:min-h-[22rem] sm:p-7 ${styles[project.accent]}`}
      aria-hidden="true"
    >
      <div className="flex items-center justify-between border-b border-current/20 pb-4 text-[9px] font-bold uppercase tracking-[0.2em]">
        <span>Case Study / {project.number}</span>
        <span>Cien · 2026</span>
      </div>

      <div className="grid gap-4 pt-5 sm:grid-cols-[1.12fr_0.88fr]">
        <div className={`flex min-h-56 flex-col justify-between border p-4 sm:p-5 ${panelStyles[project.accent]}`}>
          <div>
            <p className="text-[9px] font-bold uppercase tracking-[0.2em] opacity-55">
              {visual.label}
            </p>
            <p className="mt-2 max-w-[18ch] text-xl font-semibold leading-tight tracking-[-0.04em] sm:text-2xl">
              {visual.title}
            </p>
          </div>

          <div className="mt-8 grid grid-cols-2 gap-2">
            {visual.steps.map((step, index) => (
              <div
                key={`${project.slug}-${step}`}
                className="flex items-center gap-2 border-t border-current/20 pt-2.5"
              >
                <span className="text-[8px] font-bold opacity-45">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="text-[9px] font-bold uppercase tracking-[0.12em]">
                  {step}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="grid gap-4">
          <div className={`border p-4 ${panelStyles[project.accent]}`}>
            <p className="text-[8px] font-bold uppercase tracking-[0.18em] opacity-55">
              Verified signals
            </p>

            <div className="mt-6 grid gap-4">
              {evidence.map((item, index) => (
                <div
                  key={`${project.slug}-${item.value}-${index}`}
                  className="border-t border-current/20 pt-3"
                >
                  <div className="flex items-end justify-between gap-3">
                    <strong className="text-2xl font-semibold tracking-[-0.055em] sm:text-3xl">
                      {item.value}
                    </strong>
                    <span className="text-[8px] font-bold uppercase tracking-[0.14em] opacity-45">
                      Signal {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className={`flex items-center justify-between border px-4 py-3 ${panelStyles[project.accent]}`}>
            <span className="text-[8px] font-bold uppercase tracking-[0.18em] opacity-55">
              Operational case
            </span>
            <span className="text-sm font-semibold">
              {project.number} / {String(projects.length).padStart(2, "0")}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
