import Window from "@/components/molecules/Window";
import TagList from "@/components/molecules/TagList";
import TechBox from "@/components/molecules/TechBox";
import Polaroid from "@/components/molecules/Polaroid";
import TwoColumns from "@/components/templates/TwoColumns";
import SocialCard from "@/components/organisms/SocialCard";
import ProjectGrid from "@/components/organisms/ProjectGrid";
import ContactForm from "@/components/organisms/ContactForm";
import { programmingLanguages, frameworks, databases, tools, cloud, tagsVideogames, tagsMusica, projects, education, certifications, tagsLikes } from "@/lib/content";

const sidebar = (
  <>
    <SocialCard />
    <Window title="Videogames" small center>
      <div className="p-3 pt-4">
        <Polaroid src="https://media1.tenor.com/m/dNLdIIk6QdIAAAAC/gawr-gura-gura.gif" className="mb-3 rotate-2" />
        <TagList items={tagsVideogames} />
      </div>
    </Window>
    <Window title="Music" small center>
      <div className="p-3 pt-4">
        <Polaroid src="https://media1.tenor.com/m/QgT0IE5kUhsAAAAC/bye-bye-yamada-ryo.gif" className="mb-3 -rotate-2" />
        <TagList items={tagsMusica} />
      </div>
    </Window>
    <Window title="Likes" small center>
      <div className="p-3 pt-4">
        <Polaroid src="https://media1.tenor.com/m/eXtSyyoGgmAAAAAd/bocchi-the-rock-ryo-yamada.gif" className="mb-3 -rotate-2" />
        <TagList items={tagsLikes} />
      </div>
    </Window>
    <Window title="Last Fanfic Read" small center>
      <div className="p-3 pt-4">
        <Polaroid src="https://media.tenor.com/lnhPz-DFjf4AAAAj/osaka-azumanga-daioh.gif" className="mb-3 rotate-2" />
        <strong>Foundation (Build It Higher, Bury It Deeper)</strong><br />
        by RayShippouUchiha 
      </div>
    </Window>
    <Window title="Learning" small center>
      <div className="p-3 pt-4">
        <Polaroid src="https://media1.tenor.com/m/etfl8OlhPIYAAAAC/studying-anime-girl.gif" className="mb-3" />
        <strong>Adam's Song By Blink182</strong><br />
        In Bass
      </div>
    </Window>
  </>
);

export default function Home() {
  return (
    <TwoColumns sidebar={sidebar}>
      <Window title="Introduction ~ About me">
        <div className="grid grid-cols-1 items-start gap-8 p-5 sm:grid-cols-[1fr_270px] md:p-7">
          <div className="font-bold">
            <p className="mb-3">I'm Juan (Jud), a software engineer and full stack developer focus on System Design and slowly learning more deeply about infrastructure and Software Architecture. </p>
            <p className="mb-3">Lately I've been making my skill using AI to go wider than just writing prompts but also keeping up with the last news, discussions and trends. Currently interested in Agentic Coding and more strategies with AI.</p>
            <p>Something else about me, I love Linux personalization and apps that require the less amount of complexity on them. I have some silly dreams sometimes, like becoming Tony Stark and getting my own Jarvis working with me 24/7 :P</p>
          </div>
          <Polaroid src="https://media1.tenor.com/m/_cIbOsCtx_sAAAAd/reze-chainsaw-man.gif" alt="reze from chainsaw man" caption="hi! hello! Hola! Alo!" className="mx-auto w-full max-w-72 rotate-2 sm:mt-2" />
        </div>
      </Window>

      <Window title="Tech Stack">
        <div className="grid grid-cols-1 gap-4 p-4 sm:grid-cols-2 md:grid-cols-4">
          <TechBox title="Programming Languages" items={programmingLanguages} className="md:col-span-2 md:row-start-1" />
          <TechBox title="Frameworks & Libraries" items={frameworks} className="md:col-span-2 md:row-start-2" />
          <TechBox title="Databases" items={databases} className="md:col-start-3 md:row-start-1" />
          <TechBox title="Tools & AI" items={tools} className="md:col-start-4 md:row-start-1" />
          <TechBox title="Cloud & Infrastructure" items={cloud} className="sm:col-span-2 md:col-start-3 md:row-start-2" />
        </div>
      </Window>

      <Window title="Projects"><ProjectGrid projects={projects} /></Window>

      <Window title="Education & Courses">
        <div className="px-4 py-1">
          {education.map((e) => (
            <div key={e.name} className="border-b-2 border-dashed border-brand-dark/40 py-3 last:border-0">
              <h3 className="font-display text-xl text-black">{e.name} <span className="font-body text-base font-medium text-muted">- {e.organization}</span></h3>
              <h4 className="mt-1 inline-block border-2 border-brand-dark bg-brand-light px-2 text-sm font-semibold">{e.start} → {e.end}</h4>
            </div>
          ))}
        </div>
      </Window>

      <Window title="Certifications">
        <div className="grid grid-cols-[repeat(auto-fill,minmax(240px,1fr))] gap-4 p-4">
          {certifications.map((c) => (
            <div key={c.name} className="flex flex-col items-center gap-3 border-3 border-brand-dark bg-white/80 pb-4 text-center">
              <h4 className="w-full border-b-3 border-brand-dark bg-brand px-2 py-1.5 font-display text-base tracking-wide text-black">{c.name}</h4>
              {c.imgHref && <img src={c.imgHref} alt={c.name} className="h-24 w-40 border-2 border-brand-dark object-cover saturate-50" />}
              <p className="px-4 text-sm font-semibold text-muted">{c.organization}</p>
            </div>
          ))}
        </div>
      </Window>

      <Window title="Send me a message ✉" last id="contact"><ContactForm /></Window>
    </TwoColumns>
  );
}
