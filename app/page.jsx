import { UserCircle, Code, FolderSimple, GraduationCap, Certificate, EnvelopeSimple, GameController, MusicNotes, Heart, BookOpen, Student, MapPin, GithubLogo } from "@phosphor-icons/react/dist/ssr";
import Window from "@/components/molecules/Window";
import TagList from "@/components/molecules/TagList";
import TechBox from "@/components/molecules/TechBox";
import ListRow from "@/components/molecules/ListRow";
import Button from "@/components/atoms/Button";
import Polaroid from "@/components/molecules/Polaroid";
import TwoColumns from "@/components/templates/TwoColumns";
import SocialCard from "@/components/organisms/SocialCard";
import ProjectGrid from "@/components/organisms/ProjectGrid";
import ContactForm from "@/components/organisms/ContactForm";
import { prefs, loc, T } from "@/lib/i18n";
import { linksSocialMedia, programmingLanguages, frameworks, databases, tools, cloud, tagsVideogames, tagsMusica, projects, education, certifications, tagsLikes } from "@/lib/content";

const sidebar = (t, lang) => (
  <>
    <SocialCard title={t.social} />
    <Window title={t.likes} icon={Heart} small>
      <div className="p-3 pt-4">
        <Polaroid src="https://i.pinimg.com/736x/3c/82/8e/3c828eaa9a013beb12e19d09c1ec7887.jpg" className="mb-3" />
        <TagList items={loc(tagsLikes, lang)} />
      </div>
    </Window>
    <Window title={t.videogames} icon={GameController} small>
      <div className="p-3 pt-4">
        <Polaroid src="https://media1.tenor.com/m/dNLdIIk6QdIAAAAC/gawr-gura-gura.gif" className="mb-3" />
        <TagList items={tagsVideogames} />
      </div>
    </Window>
    <Window title={t.music} icon={MusicNotes} small>
      <div className="p-3 pt-4">
        <Polaroid src="https://i.pinimg.com/736x/2d/15/95/2d1595dcf6dc546e737f15ed166340fc.jpg" className="mb-3" />
        <TagList items={tagsMusica} />
      </div>
    </Window>
    <Window title={t.fanfic} icon={BookOpen} small>
      <div className="p-3 pt-4">
        <Polaroid src="https://media.tenor.com/lnhPz-DFjf4AAAAj/osaka-azumanga-daioh.gif" className="mb-3" />
        <strong>Foundation (Build It Higher, Bury It Deeper)</strong><br />
        {t.by} RayShippouUchiha
      </div>
    </Window>
    <Window title={t.learning} icon={Student} small>
      <div className="p-3 pt-4">
        <Polaroid src="https://i.pinimg.com/736x/71/79/ec/7179ecd698ecc1bd123f5bdd27ddddf3.jpg" className="mb-3" />
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
      <Window title={t.intro} icon={UserCircle}>
        <div className="grid grid-cols-1 items-center gap-8 p-5 sm:p-6 xl:grid-cols-[1fr_340px] xl:p-8">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-ok/12 px-3 py-1 text-xs font-medium text-ok">
              <span className="size-2 animate-pulse rounded-full bg-ok" />{t.open}
            </span>
            <h3 className="mt-4 text-3xl font-semibold tracking-tight text-hi md:text-4xl">Juan Diego <span className="text-muted">&ldquo;Jud&rdquo;</span></h3>
            <p className="mt-1 text-lg text-ink">{t.role}</p>
            <p className="mt-2 flex items-center gap-1.5 text-sm text-muted"><MapPin size={16} weight="duotone" aria-hidden="true" />Colombia</p>
            <div className="mt-5 grid gap-3 text-[15px]">
              <p>{t.p1}</p>
              <p>{t.p2}</p>
              <p>{t.p3}</p>
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button href="#contact"><EnvelopeSimple size={16} weight="bold" />{t.contactMe}</Button>
              <Button look="ghost" href={linksSocialMedia[0].url} target="_blank" rel="noopener noreferrer"><GithubLogo size={16} weight="bold" />GitHub</Button>
            </div>
          </div>
          <Polaroid src="https://media1.tenor.com/m/QgT0IE5kUhsAAAAC/bye-bye-yamada-ryo.gif" alt="Anime girl with cat ears" caption={t.hello} className="mx-auto w-full max-w-72 sm:max-w-sm xl:max-w-sm" imgClass="aspect-[4/5] object-cover" />
        </div>
      </Window>

      <Window title={t.stack} icon={Code}>
        <div className="divide-y divide-line">
          <TechBox title={t.languages} items={programmingLanguages} />
          <TechBox title={t.frameworks} items={frameworks} />
          <TechBox title={t.databases} items={databases} />
          <TechBox title={t.tools} items={tools} />
          <TechBox title={t.cloud} items={cloud} />
        </div>
      </Window>

      <Window title={t.projects} icon={FolderSimple} meta={projs.length} bare><ProjectGrid projects={projs} t={t} /></Window>

      <Window title={t.education} icon={GraduationCap}>
        <div className="divide-y divide-line">
          {edu.map((e) => (
            <ListRow key={e.name} icon={GraduationCap} title={e.name} subtitle={e.organization}>
              <span className="max-w-[40%] shrink-0 text-right text-xs text-muted sm:max-w-56">{e.start} → {e.end}</span>
            </ListRow>
          ))}
        </div>
      </Window>

      <Window title={t.certs} icon={Certificate}>
        <div className="divide-y divide-line">
          {certs.map((c) => (
            <ListRow key={c.name} icon={Certificate} title={c.name} subtitle={c.organization}>
              {c.imgHref && <img src={c.imgHref} alt="" className="h-10 w-16 shrink-0 rounded-md object-cover" />}
            </ListRow>
          ))}
        </div>
      </Window>

      <Window title={t.contact} icon={EnvelopeSimple} last id="contact"><ContactForm t={t} /></Window>
    </TwoColumns>
  );
}
