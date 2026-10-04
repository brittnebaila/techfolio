import Image from "next/image";
import type { ProjectDetail, ProjectImage } from "./project-data";

const dailyFlow: ProjectImage = {
  src: "/stormwater-runoff-analyzer/daily-streamflow.png",
  alt: "Daily Mercer Creek streamflow with winter peaks, lower summer flows, and a dashed 43.56 cfs high-flow threshold",
  width: 1200,
  height: 600,
  caption: "Daily streamflow, October 2025–September 2026. The dashed line marks the dataset’s 90th percentile (43.56 cfs), a comparison threshold rather than a flood designation.",
};

const rainfallScatter: ProjectImage = {
  src: "/stormwater-runoff-analyzer/rainfall-vs-streamflow.png",
  alt: "Scatterplot of same-day rainfall and Mercer Creek streamflow showing a positive association with substantial variation",
  width: 800,
  height: 600,
  caption: "Each point pairs rainfall and streamflow from the same date. The spread of the points shows why rainfall on that day alone does not explain every flow observation.",
};

function AnalysisFigure({ image, number }: { image: ProjectImage; number: string }) {
  return (
    <figure className="mt-6 overflow-hidden rounded-2xl border border-[#0F4C45]/15 bg-white shadow-[0_8px_24px_rgba(22,43,38,0.04)]">
      <a
        href={image.src}
        target="_blank"
        rel="noreferrer"
        aria-label={`Open full-size image: ${image.alt}`}
        className="block focus-visible:outline-2 focus-visible:-outline-offset-4 focus-visible:outline-[#0F4C45]"
      >
        <Image src={image.src} alt={image.alt} width={image.width} height={image.height} sizes="(max-width: 980px) 92vw, 900px" className="h-auto w-full" />
      </a>
      <figcaption className="border-t border-[#0F4C45]/10 bg-[#FCFAF6] px-5 py-4 sm:px-6">
        <div className="flex items-center justify-between gap-4 text-[0.65rem] font-bold uppercase tracking-[0.15em] text-[#0F4C45]">
          <span>Figure {number}</span>
          <a href={image.src} target="_blank" rel="noreferrer" className="rounded-sm underline decoration-[#0F4C45]/30 underline-offset-4 focus-visible:outline-2 focus-visible:outline-offset-4">View full size <span aria-hidden="true">↗</span></a>
        </div>
        <p className="mt-2 text-[0.76rem] leading-6 text-[#3E514D]">{image.caption}</p>
      </figcaption>
    </figure>
  );
}

function SectionHeading({ number, label, title }: { number: string; label: string; title: string }) {
  return (
    <>
      <p className="text-[0.68rem] font-bold uppercase tracking-[0.18em] text-[#0F4C45]">{number} / {label}</p>
      <h2 className="mt-3 max-w-[740px] text-[1.45rem] font-extrabold leading-tight tracking-tight sm:text-[1.9rem]">{title}</h2>
    </>
  );
}

export function StormwaterRunoffAnalyzerPage({ project }: { project: ProjectDetail }) {
  const question = project.sections[0];
  const workflow = project.sections[1];
  const timing = project.sections[2];
  const storm = project.sections[3];
  const reflection = project.sections[4];

  return (
    <article className="pb-6">
      <header className="mt-6">
        <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-[0.66rem] font-bold uppercase tracking-[0.16em] text-[#0F4C45]">
          <span>Environmental data + GIS</span>
          <span className="rounded-full bg-[#DDE7DE] px-3 py-1.5">{project.status}</span>
        </div>
        <h1 className="mt-5 max-w-[800px] text-[2rem] font-extrabold leading-[1.06] tracking-tight sm:text-[3rem] lg:text-[3.5rem]">{project.title}</h1>
        <p className="mt-5 max-w-[730px] text-[0.94rem] leading-7 text-[#3E514D] sm:text-base">{project.summary}</p>
        <p className="mt-4 text-[0.75rem] font-semibold leading-6 text-[#0F4C45]">Bellevue, Washington · Water year 2026 · October 2025–September 2026</p>
        <div className="mt-5 flex flex-wrap gap-2">
          {project.tags.map((tag) => <span key={tag} className="rounded-full border border-[#0F4C45]/20 px-3 py-1.5 text-[0.73rem] font-semibold text-[#0F4C45]">{tag}</span>)}
        </div>
        <a href={project.links?.[0]?.href} target="_blank" rel="noreferrer" className="mt-6 inline-flex items-center gap-5 rounded-full bg-[#043439] px-5 py-3 text-[0.84rem] font-bold text-white transition hover:bg-[#0F4C45] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#0F4C45]">Explore on GitHub <span aria-hidden="true">↗</span></a>
      </header>

      <dl className="mt-9 grid gap-px overflow-hidden rounded-2xl border border-[#0F4C45]/15 bg-[#0F4C45]/15 sm:grid-cols-3">
        {[
          { value: "0.731", label: "Previous-day rainfall correlation", note: "Strongest of three timings tested" },
          { value: "170.7 cfs", label: "Peak daily streamflow", note: "Recorded December 9, 2025" },
          { value: "19.71 cfs", label: "Mean daily streamflow", note: "Across the study water year" },
        ].map((stat) => (
          <div key={stat.label} className="flex flex-col bg-[#E8EDE5] p-5 sm:p-6">
            <dt className="mt-3 text-[0.75rem] font-bold text-[#0F4C45]">{stat.label}</dt>
            <dd className="order-first text-[1.9rem] font-extrabold tracking-tight text-[#043439]">{stat.value}</dd>
            <dd className="mt-1 text-[0.68rem] leading-5 text-[#3E514D]">{stat.note}</dd>
          </div>
        ))}
      </dl>

      <section aria-labelledby="study-question" className="mt-12 grid gap-6 border-b border-[#0F4C45]/15 pb-12 md:grid-cols-[1fr_2fr] md:gap-10">
        <h2 id="study-question" className="text-[1.25rem] font-extrabold tracking-tight">The question behind the analysis</h2>
        <div className="space-y-4 text-[0.88rem] leading-7 text-[#3E514D]">
          {question.type === "text" ? question.body.map((paragraph) => <p key={paragraph}>{paragraph}</p>) : null}
        </div>
      </section>

      <section className="mt-12">
        <SectionHeading number="01" label="Study area" title="Putting the observations on the map" />
        <p className="mt-4 max-w-[760px] text-[0.9rem] leading-7 text-[#3E514D]">I used QGIS to bring the drainage basin, stream network, and monitoring stations into one view. The map connects the time-series analysis to the places where the measurements were collected.</p>
        {project.heroImage ? <AnalysisFigure image={project.heroImage} number="01" /> : null}
        <div className="mt-5 grid gap-4 sm:grid-cols-3">
          {[
            ["Drainage basin", "The purple area provides geographic context for the local drainage system."],
            ["Stream network", "Blue lines show mapped streams across the study area."],
            ["Monitoring stations", "The rainfall gauge and stream gauge are in different locations—a key consideration when interpreting the results."],
          ].map(([title, description]) => <div key={title} className="border-l-2 border-[#0F4C45]/25 pl-4"><h3 className="text-[0.8rem] font-bold">{title}</h3><p className="mt-1 text-[0.76rem] leading-6 text-[#3E514D]">{description}</p></div>)}
        </div>
      </section>

      <section className="mt-14">
        <SectionHeading number="02" label="Seasonal patterns" title="Reading a year of streamflow" />
        <p className="mt-4 max-w-[760px] text-[0.9rem] leading-7 text-[#3E514D]">The daily record shows pronounced peaks during the wetter months and lower flows through summer. Plotting the full water year makes individual events visible within that seasonal pattern.</p>
        <AnalysisFigure image={dailyFlow} number="02" />
      </section>

      <section className="mt-14">
        <SectionHeading number="03" label="Rainfall + response" title="Timing changes the relationship" />
        <p className="mt-4 max-w-[760px] text-[0.9rem] leading-7 text-[#3E514D]">I first compared rainfall and streamflow on the same day, then shifted the rainfall series by one and two days. These two views show both the variation in individual observations and the difference between the three timings.</p>
        <h3 className="mt-7 text-base font-bold">How do same-day observations compare?</h3>
        <AnalysisFigure image={rainfallScatter} number="03" />
        <h3 className="mt-8 text-base font-bold">Previous-day rainfall had the strongest correlation</h3>
        {timing.image ? <AnalysisFigure image={timing.image} number="04" /> : null}
        <div className="mt-5 space-y-3 rounded-2xl bg-[#E8EDE5] p-5 text-[0.85rem] leading-7 text-[#3E514D] sm:p-6">
          {timing.type === "text" ? timing.body.map((paragraph) => <p key={paragraph}>{paragraph}</p>) : null}
        </div>
      </section>

      <section className="mt-14">
        <SectionHeading number="04" label="Event review" title="Following a December storm" />
        <p className="mt-4 max-w-[760px] text-[0.9rem] leading-7 text-[#3E514D]">Viewing rainfall and streamflow on a shared timeline helps explain the lag comparison. The December 8–9 event provides a concrete example: rainfall decreased while the next day’s streamflow rose sharply.</p>
        {storm.image ? <AnalysisFigure image={storm.image} number="05" /> : null}
        <div className="mt-5 grid gap-4 sm:grid-cols-2">
          {[
            { date: "December 8, 2025", rain: "1.16 in", flow: "30.87 cfs" },
            { date: "December 9, 2025", rain: "0.45 in", flow: "170.7 cfs" },
          ].map((day) => <div key={day.date} className="rounded-xl border border-[#0F4C45]/15 p-5"><h3 className="text-[0.85rem] font-bold">{day.date}</h3><dl className="mt-4 grid grid-cols-2 gap-3 text-[#3E514D]"><div><dt className="text-[0.7rem]">Rainfall</dt><dd className="mt-1 text-lg font-bold text-[#0F4C45]">{day.rain}</dd></div><div><dt className="text-[0.7rem]">Streamflow</dt><dd className="mt-1 text-lg font-bold text-[#0F4C45]">{day.flow}</dd></div></dl></div>)}
        </div>
      </section>

      <section className="mt-14 rounded-2xl bg-[#043439] p-6 text-[#F7F1E8] sm:p-8">
        <p className="text-[0.66rem] font-bold uppercase tracking-[0.18em] text-[#DDE7DE]">Behind the analysis</p>
        <h2 className="mt-3 text-[1.5rem] font-extrabold tracking-tight">From public data to documented findings</h2>
        {workflow.type === "list" ? <ol className="mt-6 space-y-4">{workflow.items.map((item, index) => <li key={item} className="flex gap-4 text-[0.83rem] leading-7 text-[#DDE7DE]"><span aria-hidden="true" className="font-bold text-[#ABC3B4]">{String(index + 1).padStart(2, "0")}</span><span>{item}</span></li>)}</ol> : null}
        <div className="mt-7 flex flex-wrap gap-x-6 gap-y-4 border-t border-white/20 pt-6">
          {project.links?.map((link) => <a key={link.href} href={link.href} target="_blank" rel="noreferrer" className="rounded-sm text-[0.8rem] font-bold underline decoration-white/40 underline-offset-4 hover:decoration-white focus-visible:outline-2 focus-visible:outline-offset-4">{link.label} <span aria-hidden="true">↗</span></a>)}
        </div>
      </section>

      <section className="mt-12">
        <h2 className="text-[1.35rem] font-extrabold tracking-tight">What I learned & where this can go next</h2>
        <div className="mt-4 max-w-[800px] space-y-4 text-[0.87rem] leading-7 text-[#3E514D]">
          {reflection.type === "text" ? reflection.body.map((paragraph) => <p key={paragraph}>{paragraph}</p>) : null}
        </div>
      </section>
    </article>
  );
}
