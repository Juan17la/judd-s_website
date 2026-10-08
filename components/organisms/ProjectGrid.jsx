"use client";
import { useRef, useState } from "react";
import ProjectCard from "../molecules/ProjectCard";
import TechChip from "../atoms/TechChip";
import TitleBar from "../atoms/TitleBar";
import Button from "../atoms/Button";
import { X, ArrowUpRight } from "@phosphor-icons/react";


// the cards, plus one popup (native <dialog>: blurred backdrop, Esc to close)
export default function ProjectGrid({ projects, t }) {
  const dialog = useRef(null);
  const [project, setProject] = useState(null);
  const [image, setImage] = useState(0);

  const open = (p) => { setProject(p); setImage(0); dialog.current.showModal(); };

  return (
    <>
      <div className="grid grid-cols-[repeat(auto-fill,minmax(260px,1fr))] gap-5">
        {projects.map((p) => <ProjectCard key={p.name} project={p} onOpen={() => open(p)} label={t.details} />)}
      </div>

      <dialog ref={dialog} onClick={(e) => e.target === dialog.current && dialog.current.close()}
        className="m-auto max-h-[92vh] w-[min(94vw,880px)] overflow-y-auto rounded-2xl bg-surface p-0 text-ink shadow-2xl backdrop:bg-black/50 backdrop:backdrop-blur-md">
        {project && (
          <>
            <TitleBar className="sticky top-0 z-10" end={<button onClick={() => dialog.current.close()} aria-label={t.close} className="grid size-8 cursor-pointer place-items-center rounded-full bg-brand-light text-muted transition hover:bg-raise hover:text-hi"><X size={16} weight="bold" /></button>}>
              <h2>{project.name}</h2>
            </TitleBar>
            <div className="grid gap-6 p-4 md:p-6">
              <div>
                <img src={project.images[image]} alt="" className="mx-auto block aspect-video w-full rounded-xl bg-brand-pale object-contain object-center" />
                <div className="mt-3 flex justify-center gap-2 overflow-x-auto pb-1">
                  {project.images.map((src, n) => (
                    <button key={src} onClick={() => setImage(n)} aria-label={`Image ${n + 1}`} className={`shrink-0 cursor-pointer overflow-hidden rounded-lg ring-2 transition ${n === image ? "ring-accent" : "ring-transparent opacity-60 hover:opacity-100"}`}>
                      <img src={src} alt="" className="h-16 w-28 bg-brand-pale object-contain object-center" />
                    </button>
                  ))}
                </div>
              </div>
              <div className="grid gap-3 md:text-[17px]">{project.about.map((t) => <p key={t}>{t}</p>)}</div>
              <div><h3 className="mb-2 text-sm font-semibold tracking-wider text-muted uppercase">{t.builtWith}</h3><div className="flex flex-wrap gap-2">{project.tags.map((n) => <TechChip key={n} name={n} />)}</div></div>
              <div>
                <h3 className="mb-2 text-sm font-semibold tracking-wider text-muted uppercase">{t.links}</h3>
                <div className="flex flex-wrap gap-3">
                  {["repo", "site", "preview"].filter((key) => project.links[key]).map((key) => (
                    <Button key={key} look={key === "repo" ? "primary" : "ghost"} href={project.links[key]} target="_blank" rel="noopener noreferrer">{t[key]} <ArrowUpRight size={14} /></Button>
                  ))}
                </div>
              </div>
            </div>
          </>
        )}
      </dialog>
    </>
  );
}
