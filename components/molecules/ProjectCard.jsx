import { ArrowRight } from "@phosphor-icons/react";
import TechChip from "../atoms/TechChip";

export default function ProjectCard({ project, onOpen, label }) {
  return (
    <button type="button" onClick={onOpen} className="card lift group flex h-full w-full cursor-pointer flex-col text-left focus-visible:outline-2 focus-visible:outline-accent">
      <span className="block overflow-hidden border-b border-line bg-brand-pale">
        <img src={project.images[0]} alt={`${project.name} screenshot`} className="mx-auto aspect-video w-full object-contain object-center transition duration-500 group-hover:scale-[1.03]" />
      </span>
      <span className="flex flex-1 flex-col p-4">
        <span className="block text-lg font-semibold leading-tight text-hi">{project.name}</span>
        <span className="mt-1 block text-sm text-muted">{project.desc}</span>
        <span className="mt-3 flex flex-wrap gap-1.5">{project.tags.map((n) => <TechChip key={n} name={n} small />)}</span>
        <span className="mt-auto flex items-center gap-1 pt-4 text-sm font-medium text-accent">{label}<ArrowRight size={14} className="transition-transform duration-200 group-hover:translate-x-0.5" /></span>
      </span>
    </button>
  );
}
