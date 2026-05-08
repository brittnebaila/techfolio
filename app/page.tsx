"use client";

import { gsap } from "gsap";
import Image from "next/image";
import Link from "next/link";
import { Montserrat } from "next/font/google";
import { useEffect, useRef, useState } from "react";
import { projects } from "./projects/project-data";

const montserrat = Montserrat({
  subsets: ["latin"],
});

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const focusAreas = [
  "Accessible Interfaces",
  "Front-End Engineering",
  "UX-Informed Development",
  "Mapping Experiences",
  "Digital Strategy",
  "Workflow Optimization",
];

const socialLinks = [
  {
    label: "GitHub",
    href: "https://github.com/brittnebaila",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/brittnedanielle/",
  },
];

export default function Home() {
  const [activeSection, setActiveSection] = useState("home");
  const scrollCueRef = useRef<HTMLAnchorElement>(null);
  const cueDotRef = useRef<HTMLSpanElement>(null);
  const cuePebbleRef = useRef<HTMLSpanElement>(null);
  const cueTextRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const sectionIds = navItems.map((item) => item.href.slice(1));
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter((section): section is HTMLElement => Boolean(section));

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible?.target.id) {
          setActiveSection(visible.target.id);
        }
      },
      {
        rootMargin: "-28% 0px -45% 0px",
        threshold: [0.2, 0.35, 0.5, 0.7],
      }
    );

    sections.forEach((section) => observer.observe(section));

    const cue = scrollCueRef.current;
    const cueDot = cueDotRef.current;
    const cuePebble = cuePebbleRef.current;
    const cueText = cueTextRef.current;
    const animations: gsap.core.Animation[] = [];
    let cueHidden = false;

    if (cue && cueDot && cuePebble && cueText) {
      gsap.set(cue, { autoAlpha: 1, y: 0, scale: 1 });

      animations.push(
        gsap.to(cue, {
          y: -8,
          duration: 1.8,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        })
      );

      animations.push(
        gsap.to(cueDot, {
          y: 11,
          duration: 1.15,
          repeat: -1,
          yoyo: true,
          ease: "power1.inOut",
        })
      );

      animations.push(
        gsap.to(cuePebble, {
          x: 4,
          y: 2,
          rotation: 10,
          duration: 1.6,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        })
      );

      animations.push(
        gsap.to(cueText, {
          opacity: 0.55,
          duration: 1.6,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        })
      );
    }

    const onScroll = () => {
      if (!cue) {
        return;
      }

      if (window.scrollY > 36 && !cueHidden) {
        cueHidden = true;
        gsap.to(cue, {
          autoAlpha: 0,
          y: -12,
          scale: 0.94,
          duration: 0.35,
          ease: "power2.out",
        });
      } else if (window.scrollY <= 36 && cueHidden) {
        cueHidden = false;
        gsap.to(cue, {
          autoAlpha: 1,
          y: 0,
          scale: 1,
          duration: 0.45,
          ease: "power2.out",
        });
      }
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      animations.forEach((animation) => animation.kill());
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <main
      className={`${montserrat.className} min-h-screen overflow-x-hidden bg-[#F7F1E8] text-[#162b26]`}
    >
      <header className="fixed inset-x-0 top-0 z-50 px-4 pt-7 sm:px-6 sm:pt-8 lg:px-8">
        <div className="mx-auto flex w-fit items-center justify-center rounded-full border border-[#0F4C45]/15 bg-[#F7F1E8]/92 p-3.5 shadow-[0_14px_40px_rgba(22,43,38,0.08)] backdrop-blur-md sm:p-4">
          <nav aria-label="Primary">
            <ul className="flex items-center gap-2 sm:gap-3">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className={`block rounded-full px-8 py-4.5 text-lg font-semibold transition sm:px-9 sm:py-5 sm:text-xl lg:px-10 lg:py-5.5 lg:text-[1.3rem] ${
                      activeSection === item.href.slice(1)
                        ? "bg-[#043439] text-white shadow-[0_10px_24px_rgba(4,52,57,0.22)]"
                        : "text-[#0F4C45] hover:bg-[#0F4C45]/8"
                    }`}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </header>

      <section id="home" className="relative min-h-screen bg-[#F7F1E8]">
        <div className="mx-auto grid min-h-[calc(100vh-7rem)] w-full max-w-[1580px] grid-cols-1 items-center gap-14 px-6 py-8 sm:px-10 sm:py-12 md:px-14 md:py-14 lg:grid-cols-[minmax(0,0.82fr)_minmax(0,1.18fr)] lg:gap-18 lg:px-18 lg:py-14 xl:max-w-[1700px] xl:gap-22 xl:px-24">
          <div className="mx-auto w-full max-w-[620px] text-left">
            <p className="mb-6 text-base font-semibold uppercase tracking-[0.32em] text-[#0F4C45] sm:text-[1.05rem] lg:text-[1.2rem]">
              Front-End Developer • UI/UX
            </p>

            <h1 className="max-w-[8ch] text-6xl font-extrabold leading-[0.92] tracking-tight sm:text-7xl md:text-8xl lg:text-[6.35rem] xl:text-[7.15rem]">
              Hello, I’m Brittne.
            </h1>

            <p className="mt-9 max-w-[38rem] text-xl leading-9 text-[#3E514D] lg:text-[1.5rem] lg:leading-[2.75rem]">
              I build thoughtful digital experiences with a focus on front-end
              development, accessibility, and mapping tools.
            </p>

            <div className="mt-14 flex flex-wrap gap-5">
              <a
                href="https://brittne.myportfolio.com/"
                target="_blank"
                rel="noreferrer"
                className="rounded-full bg-[#043439] px-12 py-5.5 text-xl font-semibold text-white transition hover:opacity-90 lg:px-13 lg:py-6 lg:text-[1.25rem]"
              >
                Download Resume
              </a>

              <a
                href="#contact"
                className="rounded-full border border-[#0F4C45] px-12 py-5.5 text-xl font-semibold text-[#0F4C45] transition hover:bg-[#0F4C45] hover:text-white lg:px-13 lg:py-6 lg:text-[1.25rem]"
              >
                Contact Me
              </a>
            </div>
          </div>

          <div className="flex items-center justify-center">
            <Image
              src="/avatar2.png"
              alt="Brittne avatar"
              width={1500}
              height={1414}
              priority
              className="h-auto w-full max-w-[620px] object-contain drop-shadow-xl transition-transform sm:max-w-[780px] md:max-w-[900px] lg:max-w-[1220px] lg:scale-[1.08] xl:max-w-[1380px] xl:scale-[1.12]"
            />
          </div>
        </div>

        <div className="pointer-events-none absolute inset-x-0 bottom-24 flex justify-center sm:bottom-28">
          <a
            ref={scrollCueRef}
            href="#about"
            className="pointer-events-auto flex flex-col items-center gap-3 text-xs font-semibold uppercase tracking-[0.3em] text-[#0F4C45]/72 transition"
          >
            <span className="relative flex h-14 w-11 items-start justify-center">
              <span className="absolute top-0 h-8 w-8 rounded-full bg-[#0F4C45]" />
              <span className="absolute top-[1.1rem] h-6 w-6 rounded-full bg-[#F7F1E8]" />
              <span className="absolute bottom-[0.2rem] h-6 w-6 rotate-45 rounded-[0.35rem] bg-[#0F4C45]" />
              <span
                ref={cueDotRef}
                className="absolute bottom-0 h-2.5 w-2.5 rounded-full bg-[#0F4C45]/20 blur-[1px]"
              />
            </span>
            <span ref={cueTextRef}>Scroll</span>
          </a>
        </div>
      </section>

      <section
        id="about"
        className="bg-[#F7F1E8] pb-24 pt-8 sm:pb-28 sm:pt-12 lg:pb-36 lg:pt-16"
      >
        <div className="mx-auto grid w-full max-w-[1580px] grid-cols-1 gap-18 px-6 sm:px-10 md:px-14 lg:grid-cols-[minmax(0,1fr)_minmax(340px,0.72fr)] lg:gap-28 lg:px-18 xl:max-w-[1700px] xl:gap-36 xl:px-24">
          <div className="max-w-[860px]">
            <p className="text-base font-semibold uppercase tracking-[0.32em] text-[#0F4C45] sm:text-[1.05rem] lg:text-[1.2rem]">
              About
            </p>

            <h2 className="mt-6 max-w-[12ch] text-5xl font-extrabold leading-[0.95] tracking-tight sm:text-6xl lg:text-[5.2rem]">
              Strategy, design, and front-end craft.
            </h2>

            <div className="mt-10 space-y-8 text-xl leading-10 text-[#3E514D] lg:text-[1.42rem] lg:leading-[2.7rem]">
              <p>
                I’m a front-end developer with a background in marketing,
                digital media, and design. For years, I worked in client-facing
                and B2B creative roles where I developed websites, managed
                visual branding, and helped businesses communicate more
                effectively online. Over time, I became increasingly drawn to
                the technical side of building digital experiences and
                transitioned into software engineering.
              </p>

              <p>
                A lot of my inspiration comes from maps, travel, and
                navigation. I’ve always been fascinated by the way people
                interact with places and information, whether that’s planning a
                trip, exploring a new city, or designing tools that make
                navigation more accessible and intuitive. That interest
                eventually evolved into building map-based and
                accessibility-focused projects that combine front-end
                development with thoughtful user experience design.
              </p>

              <p>
                Today, I focus on creating clean, user-centered interfaces with
                technologies like React, Next.js, and Tailwind CSS while
                continuing to expand my full stack development skills. I also
                enjoy exploring modern AI-assisted development workflows using
                tools like OpenAI Codex and ChatGPT to accelerate prototyping,
                refine interfaces, and support rapid iteration throughout the
                development process.
              </p>
            </div>
          </div>

          <aside className="lg:pt-28 xl:pt-32">
            <div className="rounded-[2rem] border border-[#0F4C45]/12 bg-[#DDE7DE] p-8 shadow-[0_20px_50px_rgba(22,43,38,0.06)] sm:p-10">
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#0F4C45] sm:text-base">
                Focus Areas
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                {focusAreas.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-[#0F4C45]/15 bg-[#F7F1E8] px-5 py-3 text-lg font-semibold text-[#0F4C45]"
                  >
                    {item}
                  </span>
                ))}
              </div>

              <p className="mt-10 text-lg leading-8 text-[#3E514D] sm:text-xl sm:leading-9">
                I care most about building interfaces that feel clear, useful,
                and intuitive from the very first interaction.
              </p>
            </div>
          </aside>
        </div>
      </section>

      <section
        id="projects"
        className="bg-[#F7F1E8] pb-24 pt-8 sm:pb-28 sm:pt-12 lg:pb-36 lg:pt-16"
      >
        <div className="mx-auto w-full max-w-[1580px] px-6 sm:px-10 md:px-14 lg:px-18 xl:max-w-[1700px] xl:px-24">
          <div className="max-w-[860px]">
            <p className="text-base font-semibold uppercase tracking-[0.32em] text-[#0F4C45] sm:text-[1.05rem] lg:text-[1.2rem]">
              Projects
            </p>

            <h2 className="mt-6 max-w-[11ch] text-5xl font-extrabold leading-[0.95] tracking-tight sm:text-6xl lg:text-[5.2rem]">
              Selected work across web, UX, and digital design.
            </h2>

            <p className="mt-8 max-w-[42rem] text-xl leading-9 text-[#3E514D] lg:text-[1.42rem] lg:leading-[2.6rem]">
              A mix of front-end builds, accessibility-minded interfaces, and
              design work shaped by real user needs, visual clarity, and
              practical problem-solving.
            </p>
          </div>

          <div className="mt-14 grid grid-cols-1 gap-8 lg:mt-18 lg:grid-cols-2 xl:gap-10">
            {projects.map((project) => (
              <article
                key={project.title}
                className="rounded-[2rem] border border-[#0F4C45]/12 bg-[#DDE7DE] p-8 shadow-[0_20px_50px_rgba(22,43,38,0.05)] sm:p-10"
              >
                <div className="mb-8 rounded-[1.6rem] border border-dashed border-[#0F4C45]/18 bg-[#F7F1E8] px-6 py-16 text-center text-lg font-semibold text-[#6B7B77] sm:py-20">
                  Project image placeholder
                </div>

                <div className="flex items-start justify-between gap-6">
                  <div>
                    <h3 className="text-3xl font-extrabold tracking-tight text-[#162b26] sm:text-[2.2rem]">
                      {project.shortTitle}
                    </h3>
                    <p className="mt-5 max-w-[32rem] text-lg leading-8 text-[#3E514D] sm:text-xl sm:leading-9">
                      {project.cardSummary}
                    </p>
                  </div>

                  <Link
                    href={`/projects/${project.slug}`}
                    className="shrink-0 rounded-full border border-[#0F4C45]/15 bg-[#F7F1E8] px-5 py-3 text-base font-semibold text-[#0F4C45] transition hover:bg-[#0F4C45] hover:text-white"
                  >
                    View
                  </Link>
                </div>

                <div className="mt-8 flex flex-wrap gap-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-[#0F4C45]/15 bg-[#F7F1E8] px-5 py-3 text-base font-semibold text-[#0F4C45]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        id="contact"
        className="bg-[#F7F1E8] pb-28 pt-8 sm:pb-32 sm:pt-12 lg:pb-40 lg:pt-16"
      >
        <div className="mx-auto grid w-full max-w-[1580px] grid-cols-1 gap-16 px-6 sm:px-10 md:px-14 lg:grid-cols-[minmax(0,0.95fr)_minmax(360px,0.8fr)] lg:gap-24 lg:px-18 xl:max-w-[1700px] xl:gap-32 xl:px-24">
          <div className="max-w-[820px]">
            <p className="text-base font-semibold uppercase tracking-[0.32em] text-[#0F4C45] sm:text-[1.05rem] lg:text-[1.2rem]">
              Contact
            </p>

            <h2 className="mt-6 max-w-[10ch] text-5xl font-extrabold leading-[0.95] tracking-tight sm:text-6xl lg:text-[5.2rem]">
              Let’s build something thoughtful.
            </h2>

            <p className="mt-8 max-w-[40rem] text-xl leading-9 text-[#3E514D] lg:text-[1.42rem] lg:leading-[2.6rem]">
              I’m always interested in opportunities involving front-end
              development, user-focused design, accessibility, and creative
              digital problem-solving.
            </p>

            <div className="mt-12 flex flex-wrap gap-5">
              <a
                href="mailto:brittnebaila@gmail.com"
                className="rounded-full bg-[#043439] px-12 py-5.5 text-xl font-semibold text-white transition hover:opacity-90 lg:px-13 lg:py-6 lg:text-[1.25rem]"
              >
                Email Me
              </a>

              <a
                href="https://brittne.myportfolio.com/"
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-[#0F4C45] px-12 py-5.5 text-xl font-semibold text-[#0F4C45] transition hover:bg-[#0F4C45] hover:text-white lg:px-13 lg:py-6 lg:text-[1.25rem]"
              >
                View Portfolio
              </a>
            </div>
          </div>

          <aside>
            <div className="rounded-[2rem] border border-[#0F4C45]/12 bg-[#DDE7DE] p-8 shadow-[0_20px_50px_rgba(22,43,38,0.05)] sm:p-10">
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#0F4C45] sm:text-base">
                Connect
              </p>

              <div className="mt-8 space-y-6 text-[#162b26]">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#6B7B77]">
                    Email
                  </p>
                  <a
                    href="mailto:brittnebaila@gmail.com"
                    className="mt-2 inline-block text-2xl font-semibold text-[#162b26] transition hover:text-[#0F4C45]"
                  >
                    brittnebaila@gmail.com
                  </a>
                </div>

                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#6B7B77]">
                    Location
                  </p>
                  <p className="mt-2 text-2xl font-semibold">Bellevue, WA</p>
                </div>

                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#6B7B77]">
                    Profiles
                  </p>
                  <div className="mt-4 flex flex-wrap gap-4">
                    {socialLinks.map((link) => (
                      <a
                        key={link.label}
                        href={link.href}
                        target="_blank"
                        rel="noreferrer"
                        className="rounded-full border border-[#0F4C45]/15 bg-[#F7F1E8] px-6 py-3.5 text-lg font-semibold text-[#0F4C45] transition hover:bg-[#0F4C45] hover:text-white"
                      >
                        {link.label}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
