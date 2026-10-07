import { UserCircle, Code, FolderSimple, GraduationCap, Certificate, EnvelopeSimple, GameController, MusicNotes, Heart, BookOpen, Student, ShareNetwork } from "@phosphor-icons/react/dist/ssr";
import Window from "@/components/molecules/Window";
import TagList from "@/components/molecules/TagList";
import TechBox from "@/components/molecules/TechBox";
import Polaroid from "@/components/molecules/Polaroid";
import TwoColumns from "@/components/templates/TwoColumns";
import SocialCard from "@/components/organisms/SocialCard";
import ProjectGrid from "@/components/organisms/ProjectGrid";
import ContactForm from "@/components/organisms/ContactForm";
import { prefs, loc, T } from "@/lib/i18n";
import { programmingLanguages, frameworks, databases, tools, cloud, tagsVideogames, tagsMusica, projects, education, certifications, tagsLikes } from "@/lib/content";

const sidebar = (t, lang) => (
  <>
    <SocialCard title={t.social} />
    <Window title={t.videogames} icon={GameController} tone="violet" small>
      <div className="p-3 pt-4">
        <Polaroid src="https://media1.tenor.com/m/dNLdIIk6QdIAAAAC/gawr-gura-gura.gif" className="mb-3" />
        <TagList items={tagsVideogames} />
      </div>
    </Window>
    <Window title={t.music} icon={MusicNotes} tone="rose" small>
      <div className="p-3 pt-4">
        <Polaroid src="https://media1.tenor.com/m/QgT0IE5kUhsAAAAC/bye-bye-yamada-ryo.gif" className="mb-3" />
        <TagList items={tagsMusica} />
      </div>
    </Window>
    <Window title={t.likes} icon={Heart} tone="rose" small>
      <div className="p-3 pt-4">
        <Polaroid src="https://media1.tenor.com/m/eXtSyyoGgmAAAAAd/bocchi-the-rock-ryo-yamada.gif" className="mb-3" />
        <TagList items={loc(tagsLikes, lang)} />
      </div>
    </Window>
    <Window title={t.fanfic} icon={BookOpen} tone="amber" small>
      <div className="p-3 pt-4">
        <Polaroid src="https://media.tenor.com/lnhPz-DFjf4AAAAj/osaka-azumanga-daioh.gif" className="mb-3" />
        <strong>Foundation (Build It Higher, Bury It Deeper)</strong><br />
        {t.by} RayShippouUchiha 
      </div>
    </Window>
    <Window title={t.learning} icon={Student} tone="green" small>
      <div className="p-3 pt-4">
        <Polaroid src="https://media1.tenor.com/m/etfl8OlhPIYAAAAC/studying-anime-girl.gif" className="mb-3" />
        <strong>Adam&apos;s Song By Blink182</strong><br />
        {t.inBass}
      </div>
    </Window>
  </>
);

export default async function Home() {
  const { lang } = await prefs();
  const t = T[lang];
  const { projects: projs, education: edu, certifications: certs } = loc({ projects, education, certifications }, lang);
  return (
    <TwoColumns sidebar={sidebar(t, lang)}>
      <Window title={t.intro} icon={UserCircle} tone="blue">
        <div className="grid grid-cols-1 items-start gap-8 p-5 sm:grid-cols-[1fr_270px] md:p-7">
          <div className="">
            <p className="mb-3">{t.p1}</p>
            <p className="mb-3">{t.p2}</p>
            <p>{t.p3}</p>
          </div>
          <Polaroid src="https://media1.tenor.com/m/_cIbOsCtx_sAAAAd/reze-chainsaw-man.gif" alt="reze from chainsaw man" caption={t.hello} className="mx-auto w-full max-w-72 sm:mt-2" />
        </div>
      </Window>

      <Window title={t.stack} icon={Code} tone="teal">
        <div className="grid grid-cols-1 gap-4 p-4 sm:grid-cols-2 md:grid-cols-4">
          <TechBox title={t.languages} items={programmingLanguages} className="md:col-span-2 md:row-start-1" />
          <TechBox title={t.frameworks} items={frameworks} className="md:col-span-2 md:row-start-2" />
          <TechBox title={t.databases} items={databases} className="md:col-start-3 md:row-start-1" />
          <TechBox title={t.tools} items={tools} className="md:col-start-4 md:row-start-1" />
          <TechBox title={t.cloud} items={cloud} className="sm:col-span-2 md:col-start-3 md:row-start-2" />
        </div>
      </Window>

      <Window title={t.projects} icon={FolderSimple} tone="violet"><ProjectGrid projects={projs} t={t} /></Window>

      <Window title={t.education} icon={GraduationCap} tone="amber">
        <div className="px-4 py-1">
          {edu.map((e) => (
            <div key={e.name} className="border-b-2 border-line py-3 last:border-0">
              <h3 className="font-display text-base text-hi">{e.name} <span className="font-body text-sm font-normal text-muted">- {e.organization}</span></h3>
              <h4 className="mt-1 inline-block border border-line rounded bg-brand-light px-2 py-0.5 font-mono text-xs text-ink">{e.start} → {e.end}</h4>
            </div>
          ))}
        </div>
      </Window>

      <Window title={t.certs} icon={Certificate} tone="green">
        <div className="grid grid-cols-[repeat(auto-fill,minmax(240px,1fr))] gap-4 p-4">
          {certs.map((c) => (
            <div key={c.name} className="flex flex-col items-center gap-3 rounded-lg border border-line bg-surface pb-4 text-center">
              <h4 className="w-full rounded-t-lg border-b border-line bg-brand px-2 py-1.5 text-sm font-semibold tracking-wide text-hi">{c.name}</h4>
              {c.imgHref && <img src={c.imgHref} alt={c.name} className="h-24 w-40 border border-line object-cover grayscale-60 rounded" />}
              <p className="px-4 text-sm font-semibold text-muted">{c.organization}</p>
            </div>
          ))}
        </div>
      </Window>

      <Window title={t.contact} icon={EnvelopeSimple} tone="rose" last id="contact"><ContactForm t={t} /></Window>
    </TwoColumns>
  );
}
