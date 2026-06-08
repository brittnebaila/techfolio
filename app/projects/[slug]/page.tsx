import Image from "next/image";
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

const lhoPrintGallery = [
  {
    src: "/LHO/Handout - Foods To Avoid.png",
    alt: '"Foods to Avoid" patient handout',
    caption: '"Foods to Avoid" handout',
  },
  {
    src: "/LHO/Handout - Initial Exam .png",
    alt: '"Initial Exam" patient handout',
    caption: '"Initial Exam" handout',
  },
  {
    src: "/LHO/LHO B2B Marketing Brochure-1.png",
    alt: "Patient brochure outside spread",
    caption: "Patient brochure outside spread",
  },
  {
    src: "/LHO/LHO B2B Marketing Brochure-2.png",
    alt: "Patient brochure inside spread",
    caption: "Patient brochure inside spread",
  },
];

const lhoVideos = [
  {
    src: "https://www.youtube.com/embed/2Ne6qNakRo4?si=RR6NHucx2Ef9PMeq",
    title: "Lake Hills Orthodontics welcome video",
  },
  {
    src: "https://www.youtube.com/embed/2vMIYsWUMjE?si=TmMNI19_os3258lo",
    title: "Lake Hills Orthodontics treatment process video",
  },
];

function LakeHillsPage({
  title,
  summary,
  tags,
}: {
  title: string;
  summary: string;
  tags: string[];
}) {
  return (
    <>
      <header className="mt-7 max-w-[720px]">
        <p className="text-[0.68rem] font-semibold uppercase tracking-[0.26em] text-[#0F4C45] sm:text-[0.74rem]">
          Project Detail
        </p>

        <h1 className="mt-3 text-[1.9rem] font-extrabold leading-[0.98] tracking-tight sm:text-[2.3rem] lg:text-[2.8rem]">
          {title}
        </h1>

        <p className="mt-4 max-w-[680px] text-[0.94rem] leading-7 text-[#3E514D] sm:text-[0.98rem]">
          {summary}
        </p>
      </header>

      <div className="mt-6 flex flex-wrap gap-2.5">
        {tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full border border-[#0F4C45]/15 bg-[#F7F1E8] px-3 py-1.5 text-[0.76rem] font-semibold text-[#0F4C45] sm:text-[0.82rem]"
          >
            {tag}
          </span>
        ))}
      </div>

      <section className="mt-8 grid grid-cols-1 gap-5 rounded-[1.25rem] border border-[#0F4C45]/12 bg-[#DDE7DE] p-5 shadow-[0_12px_28px_rgba(22,43,38,0.05)] lg:grid-cols-[minmax(0,0.78fr)_minmax(0,1fr)] lg:items-center sm:p-6">
        <div className="overflow-hidden rounded-[1rem] border border-[#0F4C45]/12 bg-[#F7F1E8]">
          <Image
            src="/LHO/LHO Homepage.png"
            alt="Lake Hills Orthodontics homepage redesign"
            width={1920}
            height={4980}
            className="h-auto w-full"
          />
        </div>

        <div>
          <h2 className="text-[1.22rem] font-extrabold tracking-tight sm:text-[1.4rem]">
            Homepage Redesign (Figma Project)
          </h2>

          <div className="mt-3.5 space-y-3.5 text-[0.9rem] leading-6.5 text-[#3E514D] sm:text-[0.94rem] sm:leading-7">
            <p>
              As the in-house designer for Lake Hills Orthodontics, I initiated
              a homepage redesign to better align the site with the brand&apos;s
              values and improve overall usability. The original homepage felt
              outdated and lacked a clear visual hierarchy.
            </p>
            <p>
              My redesign focused on simplifying the layout, making
              calls-to-action more prominent, and improving the mobile
              experience.
            </p>
            <p>
              Using Figma, I created wireframes and high-fidelity mockups with
              an updated type system, refined color palette, and more intuitive
              content flow. The design maintains the friendly, trustworthy tone
              of the practice while giving users faster access to key actions
              like scheduling appointments or learning about services.
            </p>
            <p>
              This project allowed me to apply UX design principles in a
              real-world setting while preparing the layout for future
              development. I approached it as both a designer and a future
              front-end developer, thinking through how the layout would
              translate into code and how users would interact with it across
              devices.
            </p>
          </div>
        </div>
      </section>

      <section className="mt-8 rounded-[1.25rem] border border-[#0F4C45]/12 bg-[#DDE7DE] p-5 shadow-[0_12px_28px_rgba(22,43,38,0.05)] sm:p-6">
        <h2 className="text-[1.22rem] font-extrabold tracking-tight sm:text-[1.4rem]">
          Patient-Facing Print Design
        </h2>

        <p className="mt-3.5 max-w-[760px] text-[0.9rem] leading-6.5 text-[#3E514D] sm:text-[0.94rem] sm:leading-7">
          To support the patient experience, I design a variety of print
          materials that are used in-office and digitally. These include intake
          forms, welcome brochures, and holiday cards. Each piece is designed
          to be easy to read, brand-aligned, and accessible to patients of all
          ages.
        </p>

        <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {lhoPrintGallery.map((item) => (
            <figure
              key={item.src}
              className="overflow-hidden rounded-[1rem] border border-[#0F4C45]/12 bg-[#F7F1E8]"
            >
              <Image
                src={item.src}
                alt={item.alt}
                width={3300}
                height={2550}
                className="h-auto w-full"
              />
              <figcaption className="px-4 py-3 text-[0.76rem] font-medium leading-5 text-[#4D5D59] sm:text-[0.8rem]">
                {item.caption}
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="mt-8 rounded-[1.25rem] border border-[#0F4C45]/12 bg-[#DDE7DE] p-5 shadow-[0_12px_28px_rgba(22,43,38,0.05)] sm:p-6">
        <h2 className="text-[1.22rem] font-extrabold tracking-tight sm:text-[1.4rem]">
          Seasonal Campaigns
        </h2>

        <p className="mt-3.5 max-w-[760px] text-[0.9rem] leading-6.5 text-[#3E514D] sm:text-[0.94rem] sm:leading-7">
          Throughout the year, I create custom designs for Lake Hills
          Orthodontics to support seasonal promotions and patient engagement.
          These include apparel, holiday cards, and branded visuals that
          reflect the practice&apos;s friendly, community-centered tone.
        </p>

        <div className="mt-5 grid grid-cols-1 gap-4 lg:grid-cols-[minmax(0,0.72fr)_minmax(0,1fr)]">
          <figure className="overflow-hidden rounded-[1rem] border border-[#0F4C45]/12 bg-[#F7F1E8]">
            <Image
              src="/LHO/Christmas Card 2022 - Finalized Version for Print.png"
              alt="Lake Hills Orthodontics holiday card design"
              width={1500}
              height={2100}
              className="h-auto w-full"
            />
            <figcaption className="px-4 py-3 text-[0.76rem] font-medium leading-5 text-[#4D5D59] sm:text-[0.8rem]">
              Concept, photography, and design for a custom holiday card using
              Photoshop and Illustrator.
            </figcaption>
          </figure>

          <div className="grid grid-cols-1 gap-4">
            <figure className="overflow-hidden rounded-[1rem] border border-[#0F4C45]/12 bg-[#F7F1E8]">
              <Image
                src="/LHO/Camp Smile.png"
                alt="Camp Smile seasonal campaign illustration"
                width={4168}
                height={2917}
                className="h-auto w-full"
              />
              <figcaption className="px-4 py-3 text-[0.76rem] font-medium leading-5 text-[#4D5D59] sm:text-[0.8rem]">
                Custom illustrated graphic created in Adobe Illustrator for
                Lake Hills Orthodontics&apos; summer campaign.
              </figcaption>
            </figure>

            <figure className="overflow-hidden rounded-[1rem] border border-[#0F4C45]/12 bg-[#F7F1E8]">
              <Image
                src="/LHO/Camp Smile Shirt.png"
                alt="Camp Smile T-shirt design"
                width={621}
                height={662}
                className="h-auto w-full"
              />
              <figcaption className="px-4 py-3 text-[0.76rem] font-medium leading-5 text-[#4D5D59] sm:text-[0.8rem]">
                T-shirt design featuring original vector artwork, created in
                Illustrator for a seasonal patient giveaway.
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      <section className="mt-8 rounded-[1.25rem] border border-[#0F4C45]/12 bg-[#DDE7DE] p-5 shadow-[0_12px_28px_rgba(22,43,38,0.05)] sm:p-6">
        <h2 className="text-[1.22rem] font-extrabold tracking-tight sm:text-[1.4rem]">
          Brand Video
        </h2>

        <p className="mt-3.5 max-w-[760px] text-[0.9rem] leading-6.5 text-[#3E514D] sm:text-[0.94rem] sm:leading-7">
          I created these promotional videos for Lake Hills Orthodontics as
          part of a larger in-house branding effort. The projects included
          scripting, video editing, motion timing, and visual integration with
          the existing brand identity. They were used across the practice&apos;s
          website and social media to welcome new patients and explain
          different treatment processes.
        </p>

        <div className="mt-5 grid grid-cols-1 gap-4 lg:grid-cols-2">
          {lhoVideos.map((video) => (
            <div
              key={video.src}
              className="overflow-hidden rounded-[1rem] border border-[#0F4C45]/12 bg-[#F7F1E8]"
            >
              <div className="relative w-full pt-[56.25%]">
                <iframe
                  src={video.src}
                  title={video.title}
                  allow="autoplay; picture-in-picture"
                  allowFullScreen
                  className="absolute inset-0 h-full w-full"
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-8 rounded-[1.25rem] border border-[#0F4C45]/12 bg-[#DDE7DE] p-5 shadow-[0_12px_28px_rgba(22,43,38,0.05)] sm:p-6">
        <h2 className="text-[1.22rem] font-extrabold tracking-tight sm:text-[1.4rem]">
          Reflection
        </h2>

        <p className="mt-3.5 max-w-[780px] text-[0.9rem] leading-6.5 text-[#3E514D] sm:text-[0.94rem] sm:leading-7">
          Working on the Lake Hills Orthodontics brand has given me real-world
          experience managing diverse design projects across print, digital,
          and video. From patient materials to seasonal campaigns and a
          homepage redesign in Figma, I&apos;ve strengthened my ability to create
          cohesive, user-friendly visuals that align with both brand values and
          business goals. This work deepened my understanding of how thoughtful
          design directly supports both client experience and team workflows.
        </p>
      </section>
    </>
  );
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

        {project.slug === "lake-hills-orthodontics" ? (
          <LakeHillsPage
            title={project.title}
            summary={project.summary}
            tags={project.tags}
          />
        ) : (
          <>
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
          </>
        )}
      </div>
    </main>
  );
}
