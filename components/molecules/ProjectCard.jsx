import TagList from "./TagList";

export default function ProjectCard({ project, onOpen }) {
  return (
    <button type="button" onClick={onOpen} className="group flex h-full w-full flex-col cursor-pointer border-3 border-brand-dark bg-white text-left transition hover:-translate-y-1 hover:shadow-hard-lg focus-visible:outline-3 focus-visible:outline-brand-mid">
      <span className="block overflow-hidden border-b-3 border-brand-dark bg-brand-pale">
        <img src={project.images[0]} alt={`${project.name} screenshot`} className="mx-auto aspect-video w-full bg-white object-contain object-center transition duration-300 group-hover:scale-[1.02] group-hover:saturate-100" />
      </span>
      <span className="flex flex-1 flex-col p-4">
        <span className="block font-display text-2xl leading-tight text-black">{project.name}</span>
        <span className="mt-1 block text-sm text-muted">{project.desc}</span>
        <TagList items={project.tags} className="mt-3" />
        <span aria-hidden="true" className="mt-3 block overflow-hidden whitespace-nowrap text-brand-dark/50">{"- ".repeat(40)}</span>
        <span className="mt-auto block pt-2 text-xs font-bold text-accent">~~&gt; click for details</span>
      </span>
    </button>
  );
}
