"use client";
import { useRef, useState } from "react";
import ProjectCard from "../molecules/ProjectCard";
import TagList from "../molecules/TagList";
import TitleBar from "../atoms/TitleBar";
import Button from "../atoms/Button";

const LINKS = { repo: "Repository", site: "Official page", preview: "Preview / Download" };

// the cards, plus one popup (native <dialog>: blurred backdrop, Esc to close)
export default function ProjectGrid({ projects }) {
  const dialog = useRef(null);
  const [project, setProject] = useState(null);
  const [image, setImage] = useState(0);

  const open = (p) => { setProject(p); setImage(0); dialog.current.showModal(); };

  return (
    <>
      <div className="grid grid-cols-[repeat(auto-fill,minmax(280px,1fr))] gap-5 p-4">
        {projects.map((p) => <ProjectCard key={p.name} project={p} onOpen={() => open(p)} />)}
      </div>

      <dialog ref={dialog} onClick={(e) => e.target === dialog.current && dialog.current.close()}
        className="m-auto max-h-[92vh] w-[min(94vw,880px)] overflow-y-auto border-3 border-brand-dark bg-white p-0 text-ink shadow-hard-lg backdrop:bg-brand-dark/55 backdrop:backdrop-blur-md">
        {project && (
          <>
            <TitleBar className="sticky top-0 z-10 justify-between">
              <h2>{project.name}</h2>
              <button onClick={() => dialog.current.close()} aria-label="Close" className="grid size-8 place-items-center rounded border-2 border-white/70 text-xl leading-none hover:bg-white hover:text-black">✕</button>
            </TitleBar>
            <div className="grid gap-6 p-4 md:p-6">
              <div>
                <img src={project.images[image]} alt="" className="mx-auto block aspect-video w-full border-3 border-brand-dark bg-white object-contain object-center" />
                <div className="mt-3 flex justify-center gap-2 overflow-x-auto pb-1">
                  {project.images.map((src, n) => (
                    <button key={src} onClick={() => setImage(n)} aria-label={`Image ${n + 1}`} className={`shrink-0 border-2 border-brand-dark ${n === image ? "" : "opacity-70 hover:opacity-100"}`}>
                      <img src={src} alt="" className="h-16 w-28 bg-white object-contain object-center" />
                    </button>
                  ))}
                </div>
              </div>
              <div className="grid gap-3 md:text-[17px]">{project.about.map((t) => <p key={t}>{t}</p>)}</div>
              <div><h3 className="mb-2 font-display text-xl text-black">Built with</h3><TagList items={project.tags} className="gap-2" /></div>
              <div>
                <h3 className="mb-2 font-display text-xl text-black">Links</h3>
                <div className="flex flex-wrap gap-3">
                  {Object.entries(LINKS).filter(([key]) => project.links[key]).map(([key, label]) => (
                    <Button key={key} href={project.links[key]} target="_blank" rel="noopener noreferrer">{label} ↗</Button>
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
