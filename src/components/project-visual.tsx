import type { Project } from "@/data/projects";

const styles: Record<Project["accent"], string> = {
  red: "bg-accent text-white",
  dark: "bg-ink text-white",
  sand: "bg-[#d8cdbd] text-ink",
  paper: "bg-[#e9e8e2] text-ink",
};

export function ProjectVisual({ project }: { project: Project }) {
  return (
    <div
      className={`project-visual relative min-h-72 overflow-hidden p-6 sm:min-h-80 sm:p-8 ${styles[project.accent]}`}
      aria-hidden="true"
    >
      <div className="absolute inset-x-6 top-6 flex items-center justify-between text-[10px] font-bold uppercase tracking-[0.18em] sm:inset-x-8 sm:top-8">
        <span>Case / {project.number}</span>
        <span>Cien · 2026</span>
      </div>

      <div className="absolute -right-12 bottom-[-28%] size-64 rounded-full border border-current/25 sm:size-80" />
      <div className="absolute -right-2 bottom-[-18%] size-44 rounded-full border border-current/40 sm:size-56" />
      <div className="absolute bottom-7 left-6 right-6 sm:bottom-8 sm:left-8 sm:right-8">
        <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.2em] opacity-60">
          Selected work
        </p>
        <p className="max-w-[12ch] text-5xl font-semibold leading-[0.86] tracking-[-0.065em] sm:text-6xl">
          {project.number}
          <span className="opacity-30"> / 04</span>
        </p>
      </div>

      <div className="absolute left-[48%] top-[34%] grid grid-cols-3 gap-2 opacity-60">
        {Array.from({ length: 9 }).map((_, index) => (
          <span
            key={index}
            className={`block size-2 rounded-full border border-current ${
              index === 4 ? "bg-current" : ""
            }`}
          />
        ))}
      </div>
    </div>
  );
}
