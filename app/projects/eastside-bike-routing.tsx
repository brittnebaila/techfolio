import Image from "next/image";
import type { ProjectDetail } from "./project-data";

const repository = "https://github.com/brittnebaila/Eastside-Bike-Routing";

const repositoryNotes = [
  {
    title: "Data & analysis notes",
    description: "Dataset exploration, slope analysis, and the NE 24th Street findings.",
    path: "notes/data-notes.md",
  },
  {
    title: "Schema & data decisions",
    description: "Candidate routing fields, coded values, and questions to resolve.",
    path: "notes/schema-notes.md",
  },
  {
    title: "Development roadmap",
    description: "The plan from QGIS foundations to a route-comparison prototype.",
    path: "notes/projecttimeline.md",
  },
];

const analysisImages: Record<
  string,
  { src: string; alt: string; width: number; height: number; caption: string }
> = {
  "A Nearly Flat Route Can Still Have a Climb": {
    src: "/eastside-bike-routing/ne24th-elevation-profile.png",
    alt: "QGIS map of NE 24th Street with an elevation profile rising from about 43 meters to 57 meters before descending",
    width: 1595,
    height: 794,
    caption:
      "NE 24th Street in QGIS Profile Tool. Similar endpoint elevations conceal a climb and descent within the test segment. Basemap: © OpenStreetMap contributors.",
  },
  "Turning Terrain into Useful Route Information": {
    src: "/eastside-bike-routing/redmond-slope-classification.png",
    alt: "QGIS displaying a detailed terrain slope raster over the Redmond study area alongside street, trail, and bicycle facility layers",
    width: 976,
    height: 972,
    caption:
      "Exploratory terrain slope classification from USGS 3DEP elevation data. These terrain values are not bicycle route grades.",
  },
};

export function EastsideBikeRoutingPage({ project }: { project: ProjectDetail }) {
  return (
    <>
      <header className="mt-7 max-w-[760px]">
        <p className="text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-[#0F4C45] sm:text-[0.74rem]">
          GIS + Software Engineering · {project.status}
        </p>
        <h1 className="mt-3 text-[1.9rem] font-extrabold leading-[1.05] tracking-tight sm:text-[2.3rem] lg:text-[2.8rem]">
          {project.title}
        </h1>
        <p className="mt-4 max-w-[700px] text-[0.94rem] leading-7 text-[#3E514D] sm:text-[0.98rem]">
          {project.summary}
        </p>
        <div className="mt-6 flex flex-wrap gap-2.5">
          {project.tags.map((tag) => (
            <span key={tag} className="rounded-full border border-[#0F4C45]/15 px-3 py-1.5 text-[0.76rem] font-semibold text-[#0F4C45] sm:text-[0.82rem]">
              {tag}
            </span>
          ))}
        </div>
      </header>

      <section aria-labelledby="github-heading" className="mt-8 rounded-[1.25rem] bg-[#043439] p-5 text-[#F7F1E8] shadow-[0_12px_28px_rgba(22,43,38,0.08)] sm:p-7">
        <p className="text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-[#DDE7DE]">Follow the project on GitHub</p>
        <h2 id="github-heading" className="mt-3 text-[1.4rem] font-extrabold tracking-tight sm:text-[1.65rem]">The work behind the routes.</h2>
        <p className="mt-3 max-w-[650px] text-[0.9rem] leading-7 text-[#DDE7DE]">
          My repository documents the project as it develops: the QGIS project,
          data investigations, screenshots, and decisions that will shape the
          routing prototype.
        </p>
        {project.links?.map((link) => (
          <a key={link.href} href={link.href} target="_blank" rel="noreferrer" className="mt-5 inline-flex items-center gap-3 rounded-full bg-[#F7F1E8] px-5 py-3 text-[0.86rem] font-bold text-[#043439] transition hover:bg-[#DDE7DE] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#F7F1E8]">
            {link.label} <span aria-hidden="true">↗</span>
          </a>
        ))}
        <div className="mt-6 grid gap-4 border-t border-white/20 pt-5 sm:grid-cols-3">
          {repositoryNotes.map((note) => (
            <a key={note.path} href={`${repository}/blob/main/${note.path}`} target="_blank" rel="noreferrer" className="rounded-md focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#F7F1E8]">
              <span className="text-[0.8rem] font-bold underline decoration-white/40 underline-offset-4">{note.title} <span aria-hidden="true">↗</span></span>
              <p className="mt-2 text-[0.74rem] leading-6 text-[#DDE7DE]">{note.description}</p>
            </a>
          ))}
        </div>
      </section>

      <div className="mt-8 grid grid-cols-1 gap-5 lg:gap-6">
        {project.sections.map((section) => {
          const image = analysisImages[section.title];
          return (
            <section key={section.title} className="min-w-0 rounded-[1.25rem] border border-[#0F4C45]/12 bg-[#DDE7DE] p-5 shadow-[0_12px_28px_rgba(22,43,38,0.05)] sm:p-6">
              <h2 className="text-[1.22rem] font-extrabold tracking-tight sm:text-[1.4rem]">{section.title}</h2>
              <div className="mt-3.5 space-y-3.5 text-[0.9rem] leading-7 text-[#3E514D] sm:text-[0.94rem]">
                {section.type === "text" ? (
                  section.body.map((paragraph) => <p key={paragraph}>{paragraph}</p>)
                ) : (
                  <>
                    {section.intro ? <p>{section.intro}</p> : null}
                    <ul className="list-disc space-y-2.5 pl-5 marker:text-[#0F4C45]">
                      {section.items.map((item) => <li key={item}>{item}</li>)}
                    </ul>
                  </>
                )}
              </div>
              {image ? (
                <figure className="mt-5">
                  <a href={image.src} target="_blank" rel="noreferrer" aria-label={`Open full-size image: ${section.title}`} className="block overflow-hidden rounded-[0.8rem] border border-[#0F4C45]/12 bg-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#0F4C45]">
                    <Image src={image.src} alt={image.alt} width={image.width} height={image.height} sizes="(max-width: 980px) 90vw, 850px" className="h-auto max-h-[540px] w-full object-contain" />
                  </a>
                  <figcaption className="mt-3 text-[0.76rem] leading-6 text-[#3E514D]">{image.caption} Select the image to view it full size.</figcaption>
                </figure>
              ) : null}
            </section>
          );
        })}
      </div>
    </>
  );
}
