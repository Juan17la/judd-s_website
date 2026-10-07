import TagList from "./TagList";

export default function ProjectCard({ project, onOpen, label }) {
  return (
    <button type="button" onClick={onOpen} className="group flex h-full w-full flex-col cursor-pointer rounded-lg border border-line bg-surface text-left transition hover:border-accent focus-visible:outline-2 focus-visible:outline-accent">
      <span className="block overflow-hidden border-b border-line bg-surface">
        <img src={project.images[0]} alt={`${project.name} screenshot`} className="mx-auto aspect-video w-full bg-surface object-contain object-center transition duration-300 group-hover:scale-[1.02] group-hover:saturate-100" />
      </span>
      <span className="flex flex-1 flex-col p-4">
        <span className="block font-display text-xl leading-tight text-hi">{project.name}</span>
        <span className="mt-1 block text-sm text-muted">{project.desc}</span>
        <TagList items={project.tags} className="mt-3" />
        
        <span className="mt-auto block pt-2 text-xs font-semibold text-accent">{label} →</span>
      </span>
    </button>
  );
}
