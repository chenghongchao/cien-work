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

export function ProjectVisual({ project }: { project: Project }) {
  return (
    <div
      className={`relative min-h-80 overflow-hidden p-5 sm:min-h-[22rem] sm:p-7 ${styles[project.accent]}`}
      aria-hidden="true"
    >
      <div className="flex items-center justify-between border-b border-current/20 pb-4 text-[9px] font-bold uppercase tracking-[0.2em]">
        <span>Case Study / {project.number}</span>
        <span>Cien · 2026</span>
      </div>

      <div className="grid gap-4 pt-5 sm:grid-cols-[1.15fr_0.85fr]">
        <div className={`flex min-h-48 flex-col justify-between border p-4 sm:min-h-56 sm:p-5 ${panelStyles[project.accent]}`}>
          <div>
            <p className="text-[9px] font-bold uppercase tracking-[0.2em] opacity-60">
              Project evidence
            </p>
            <p className="mt-2 max-w-[22ch] text-sm font-semibold leading-5">
              Real screenshots and analytics will be added here.
            </p>
          </div>

          <div className="grid grid-cols-3 gap-2">
            {project.evidence.slice(0, 3).map((item) => (
              <div
                key={`${project.slug}-${item.value}`}
                className="border-t border-current/20 pt-3"
              >
                <strong className="block text-xl font-semibold tracking-[-0.05em] sm:text-2xl">
                  {item.value}
                </strong>
                <span className="mt-1 block text-[8px] font-bold uppercase tracking-[0.14em] opacity-55">
                  Evidence
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="grid gap-4">
          <div className={`border p-4 ${panelStyles[project.accent]}`}>
            <div className="mb-4 flex items-center justify-between text-[8px] font-bold uppercase tracking-[0.18em] opacity-60">
              <span>Visual slot 01</span>
              <span>4:3</span>
            </div>
            <div className="grid aspect-[4/3] place-items-center border border-dashed border-current/30">
              <div className="text-center">
                <div className="mx-auto mb-3 grid size-9 place-items-center rounded-full border border-current/30 text-base">
                  +
                </div>
                <p className="text-[9px] font-bold uppercase tracking-[0.18em] opacity-60">
                  Analytics / Screenshot
                </p>
              </div>
            </div>
          </div>

          <div className={`flex items-center justify-between border px-4 py-3 ${panelStyles[project.accent]}`}>
            <span className="text-[8px] font-bold uppercase tracking-[0.18em] opacity-60">
              Real visual pending
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
