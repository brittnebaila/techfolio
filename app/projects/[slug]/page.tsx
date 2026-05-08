import Link from "next/link";
import { notFound } from "next/navigation";
import { Montserrat } from "next/font/google";
import { getProjectBySlug, projects } from "../project-data";

const montserrat = Montserrat({
  subsets: ["latin"],
});

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <main
      className={`${montserrat.className} min-h-screen bg-[#F7F1E8] text-[#162b26]`}
    >
      <div className="mx-auto w-full max-w-[1520px] px-6 py-10 sm:px-10 sm:py-14 md:px-14 lg:px-18 lg:py-16 xl:px-24">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <Link
            href="/#projects"
            className="rounded-full border border-[#0F4C45]/15 bg-[#F7F1E8] px-6 py-3 text-base font-semibold text-[#0F4C45] transition hover:bg-[#0F4C45] hover:text-white"
          >
            Back to Projects
          </Link>

          <div className="flex flex-wrap gap-3">
            {project.links?.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="rounded-full bg-[#043439] px-6 py-3 text-base font-semibold text-white transition hover:opacity-90"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        <header className="mt-12 max-w-[920px]">
          <p className="text-base font-semibold uppercase tracking-[0.32em] text-[#0F4C45] sm:text-[1.05rem] lg:text-[1.2rem]">
            Project Detail
          </p>

          <h1 className="mt-6 text-5xl font-extrabold leading-[0.95] tracking-tight sm:text-6xl lg:text-[5.4rem]">
            {project.title}
          </h1>

          <p className="mt-8 text-xl leading-9 text-[#3E514D] lg:text-[1.42rem] lg:leading-[2.6rem]">
            {project.summary}
          </p>
        </header>

        <div className="mt-10 flex flex-wrap gap-4">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-[#0F4C45]/15 bg-[#F7F1E8] px-5 py-3 text-base font-semibold text-[#0F4C45]"
            >
              {tag}
            </span>
          ))}
        </div>

        <section className="mt-14 rounded-[2rem] border border-dashed border-[#0F4C45]/18 bg-[#F7F1E8] px-6 py-18 text-center text-lg font-semibold text-[#6B7B77] sm:py-24">
          Project image gallery placeholder
        </section>

        <div className="mt-14 grid grid-cols-1 gap-8 lg:gap-10">
          {project.sections.map((section) => (
            <section
              key={section.title}
              className="rounded-[2rem] border border-[#0F4C45]/12 bg-[#DDE7DE] p-8 shadow-[0_20px_50px_rgba(22,43,38,0.05)] sm:p-10"
            >
              <h2 className="text-3xl font-extrabold tracking-tight sm:text-[2.15rem]">
                {section.title}
              </h2>

              {section.type === "text" ? (
                <div className="mt-6 space-y-5 text-lg leading-8 text-[#3E514D] sm:text-xl sm:leading-9">
                  {section.body.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              ) : (
                <div className="mt-6">
                  {section.intro ? (
                    <p className="text-lg leading-8 text-[#3E514D] sm:text-xl sm:leading-9">
                      {section.intro}
                    </p>
                  ) : null}

                  <ul className="mt-6 space-y-4 text-lg leading-8 text-[#3E514D] sm:text-xl sm:leading-9">
                    {section.items.map((item) => (
                      <li key={item} className="flex gap-3">
                        <span className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-[#0F4C45]" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </section>
          ))}
        </div>
      </div>
    </main>
  );
}
