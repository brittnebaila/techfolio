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
      <div className="mx-auto w-full max-w-[980px] px-4 py-6 sm:px-6 sm:py-8 md:px-8 lg:px-10 lg:py-9">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <Link
            href="/#projects"
            className="rounded-full border border-[#0F4C45]/15 bg-[#F7F1E8] px-3.5 py-1.5 text-[0.82rem] font-semibold text-[#0F4C45] transition hover:bg-[#0F4C45] hover:text-white sm:px-4 sm:text-[0.88rem]"
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
                className="rounded-full bg-[#043439] px-3.5 py-1.5 text-[0.82rem] font-semibold text-white transition hover:opacity-90 sm:px-4 sm:text-[0.88rem]"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        <header className="mt-7 max-w-[680px]">
          <p className="text-[0.68rem] font-semibold uppercase tracking-[0.26em] text-[#0F4C45] sm:text-[0.74rem]">
            Project Detail
          </p>

          <h1 className="mt-3 text-[1.9rem] font-extrabold leading-[0.98] tracking-tight sm:text-[2.3rem] lg:text-[2.8rem]">
            {project.title}
          </h1>

          <p className="mt-4 max-w-[640px] text-[0.94rem] leading-7 text-[#3E514D] sm:text-[0.98rem]">
            {project.summary}
          </p>
        </header>

        <div className="mt-6 flex flex-wrap gap-2.5">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-[#0F4C45]/15 bg-[#F7F1E8] px-3 py-1.5 text-[0.76rem] font-semibold text-[#0F4C45] sm:text-[0.82rem]"
            >
              {tag}
            </span>
          ))}
        </div>

        <section className="mt-8 rounded-[1.25rem] border border-dashed border-[#0F4C45]/18 bg-[#F7F1E8] px-4 py-10 text-center text-[0.92rem] font-semibold text-[#6B7B77] sm:py-12">
          Project image gallery placeholder
        </section>

        <div className="mt-8 grid grid-cols-1 gap-5 lg:gap-6">
          {project.sections.map((section) => (
            <section
              key={section.title}
              className="rounded-[1.25rem] border border-[#0F4C45]/12 bg-[#DDE7DE] p-5 shadow-[0_12px_28px_rgba(22,43,38,0.05)] sm:p-6"
            >
              <h2 className="text-[1.22rem] font-extrabold tracking-tight sm:text-[1.4rem]">
                {section.title}
              </h2>

              {section.type === "text" ? (
                <div className="mt-3.5 space-y-3.5 text-[0.9rem] leading-6.5 text-[#3E514D] sm:text-[0.94rem] sm:leading-7">
                  {section.body.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              ) : (
                <div className="mt-4">
                  {section.intro ? (
                    <p className="text-[0.9rem] leading-6.5 text-[#3E514D] sm:text-[0.94rem] sm:leading-7">
                      {section.intro}
                    </p>
                  ) : null}

                  <ul className="mt-4 space-y-2.5 text-[0.9rem] leading-6.5 text-[#3E514D] sm:text-[0.94rem] sm:leading-7">
                    {section.items.map((item) => (
                      <li key={item} className="flex gap-3">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#0F4C45]" />
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
