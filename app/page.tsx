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

    const cue = scrollCueRef.current;
    const cueDot = cueDotRef.current;
    const cuePebble = cuePebbleRef.current;
    const cueText = cueTextRef.current;
    const animations: gsap.core.Animation[] = [];
    let cueHidden = false;

    const updateActiveSection = () => {
      const navOffset = 120;
      const scrollPosition = window.scrollY + navOffset;
      let currentSection = sectionIds[0];

      sections.forEach((section) => {
        if (scrollPosition >= section.offsetTop) {
          currentSection = section.id;
        }
      });

      setActiveSection((prev) =>
        prev === currentSection ? prev : currentSection
      );
    };

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
      updateActiveSection();

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

    updateActiveSection();
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", updateActiveSection);

    return () => {
      animations.forEach((animation) => animation.kill());
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", updateActiveSection);
    };
  }, []);

  return (
    <main
      className={`${montserrat.className} min-h-screen overflow-x-hidden bg-[#F7F1E8] text-[#162b26]`}
    >
      <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-6 sm:pt-5 lg:px-8">
        <div className="mx-auto flex w-fit items-center justify-center rounded-full border border-[#0F4C45]/15 bg-[#F7F1E8]/92 p-1.5 shadow-[0_14px_40px_rgba(22,43,38,0.08)] backdrop-blur-md">
          <nav aria-label="Primary">
            <ul className="flex items-center gap-1">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className={`block rounded-full px-4 py-2 text-[0.8rem] font-semibold transition sm:px-4.5 sm:py-2.5 sm:text-[0.83rem] lg:px-5 lg:py-2.5 lg:text-[0.88rem] ${
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

      <section
        id="home"
        className="relative min-h-screen scroll-mt-24 bg-[#F7F1E8] sm:scroll-mt-28"
      >
        <div className="mx-auto grid min-h-[calc(100vh-5.5rem)] w-full max-w-[1160px] grid-cols-1 items-center gap-8 px-6 py-8 sm:px-8 sm:py-10 md:px-10 md:py-10 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:gap-8 lg:px-12 lg:py-10 xl:max-w-[1220px] xl:gap-10 xl:px-14">
          <div className="mx-auto w-full max-w-[420px] text-left">
            <p className="mb-3 text-[0.68rem] font-semibold uppercase tracking-[0.28em] text-[#0F4C45] sm:text-[0.74rem] lg:text-[0.8rem]">
              Front-End Developer • UI/UX
            </p>

            <h1 className="max-w-[8ch] text-[2.15rem] font-extrabold leading-[0.92] tracking-tight sm:text-[2.9rem] md:text-[3.5rem] lg:text-[3.9rem] xl:text-[4.35rem]">
              Hello, I’m Brittne.
            </h1>

            <p className="mt-5 max-w-[25rem] text-[0.96rem] leading-7 text-[#3E514D] lg:text-[1rem] lg:leading-[1.9rem]">
              I build thoughtful digital experiences with a focus on front-end
              development, accessibility, and mapping tools.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href="https://brittne.myportfolio.com/"
                target="_blank"
                rel="noreferrer"
                className="rounded-full bg-[#043439] px-6 py-2.5 text-sm font-semibold text-white transition hover:opacity-90 lg:px-7 lg:py-3 lg:text-[0.92rem]"
              >
                Download Resume
              </a>

              <a
                href="#contact"
                className="rounded-full border border-[#0F4C45] px-6 py-2.5 text-sm font-semibold text-[#0F4C45] transition hover:bg-[#0F4C45] hover:text-white lg:px-7 lg:py-3 lg:text-[0.92rem]"
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
              className="h-auto w-full max-w-[300px] object-contain drop-shadow-xl transition-transform sm:max-w-[380px] md:max-w-[460px] lg:max-w-[560px] xl:max-w-[620px]"
            />
          </div>
        </div>

        <div className="pointer-events-none absolute inset-x-0 bottom-12 flex justify-center sm:bottom-16">
          <a
            ref={scrollCueRef}
            href="#about"
            className="pointer-events-auto flex flex-col items-center gap-2 text-[0.6rem] font-semibold uppercase tracking-[0.28em] text-[#0F4C45]/72 transition"
          >
            <span className="relative flex h-10 w-8 items-start justify-center">
              <span className="absolute top-0 h-6 w-6 rounded-full bg-[#0F4C45]" />
              <span className="absolute top-[0.8rem] h-4.5 w-4.5 rounded-full bg-[#F7F1E8]" />
              <span className="absolute bottom-[0.15rem] h-4.5 w-4.5 rotate-45 rounded-[0.25rem] bg-[#0F4C45]" />
              <span
                ref={cueDotRef}
                className="absolute bottom-0 h-2 w-2 rounded-full bg-[#0F4C45]/20 blur-[1px]"
              />
            </span>
            <span ref={cueTextRef}>Scroll</span>
          </a>
        </div>
      </section>

      <section
        id="about"
        className="scroll-mt-24 bg-[#F7F1E8] pb-16 pt-7 sm:scroll-mt-28 sm:pb-20 sm:pt-9 lg:pb-24 lg:pt-12"
      >
        <div className="mx-auto grid w-full max-w-[1100px] grid-cols-1 gap-8 px-6 sm:px-8 md:px-10 lg:grid-cols-[minmax(0,1fr)_minmax(260px,0.58fr)] lg:gap-12 lg:px-12 xl:max-w-[1160px] xl:gap-14 xl:px-14">
          <div className="max-w-[610px]">
            <p className="text-[0.68rem] font-semibold uppercase tracking-[0.26em] text-[#0F4C45] sm:text-[0.74rem] lg:text-[0.78rem]">
              About
            </p>

            <h2 className="mt-3.5 max-w-[12ch] text-[1.75rem] font-extrabold leading-[0.97] tracking-tight sm:text-[2.15rem] lg:text-[2.55rem]">
              Strategy, design, and front-end craft.
            </h2>

            <div className="mt-5 space-y-4 text-[0.88rem] leading-6.5 text-[#3E514D] lg:text-[0.94rem] lg:leading-[1.72rem]">
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

          <aside className="lg:pt-8 xl:pt-10">
            <div className="rounded-[1.15rem] border border-[#0F4C45]/12 bg-[#DDE7DE] p-4.5 shadow-[0_16px_34px_rgba(22,43,38,0.06)] sm:p-5">
              <p className="text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-[#0F4C45] sm:text-[0.74rem]">
                Focus Areas
              </p>

              <div className="mt-4 flex flex-wrap gap-2">
                {focusAreas.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-[#0F4C45]/15 bg-[#F7F1E8] px-2.5 py-1.5 text-[0.68rem] font-semibold text-[#0F4C45] sm:text-[0.74rem]"
                  >
                    {item}
                  </span>
                ))}
              </div>

              <p className="mt-5 text-[0.82rem] leading-5.5 text-[#3E514D]">
                I care most about building interfaces that feel clear, useful,
                and intuitive from the very first interaction.
              </p>
            </div>
          </aside>
        </div>
      </section>

      <section
        id="projects"
        className="scroll-mt-24 bg-[#DDE7DE] pb-20 pt-10 sm:scroll-mt-28 sm:pb-24 sm:pt-12 lg:pb-28 lg:pt-16"
      >
        <div className="mx-auto w-full max-w-[1060px] px-6 sm:px-8 md:px-10 lg:px-10 xl:max-w-[1320px] xl:px-12">
          <div className="max-w-[660px]">
            <p className="text-[0.72rem] font-semibold uppercase tracking-[0.28em] text-[#0F4C45] sm:text-[0.78rem] lg:text-[0.82rem]">
              Projects
            </p>

            <h2 className="mt-4 max-w-[11ch] text-[2rem] font-extrabold leading-[0.96] tracking-tight sm:text-[2.5rem] lg:text-[3rem]">
              Selected work across web, UX, and digital design.
            </h2>

            <p className="mt-5 max-w-[34rem] text-[0.95rem] leading-7 text-[#3E514D] lg:text-[1rem] lg:leading-[1.85rem]">
              A mix of front-end builds, accessibility-minded interfaces, and
              design work shaped by real user needs, visual clarity, and
              practical problem-solving.
            </p>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4 lg:mt-10 lg:gap-4 xl:gap-4">
            {projects.map((project) => (
              <Link
                key={project.title}
                href={`/projects/${project.slug}`}
                className="group block w-full rounded-[1.05rem] border border-[#0F4C45]/12 bg-[#F7F1E8] p-3.5 text-center shadow-[0_14px_28px_rgba(22,43,38,0.05)] transition duration-200 hover:-translate-y-1 hover:border-[#0F4C45]/22 hover:shadow-[0_18px_34px_rgba(22,43,38,0.08)] sm:p-4"
              >
                <div className="mb-3 overflow-hidden rounded-[0.9rem] border border-dashed border-[#0F4C45]/18 bg-[#EEF3EE] transition-colors duration-200 group-hover:border-[#0F4C45]/28">
                  <div className="flex h-[120px] items-center justify-center px-4 text-center text-[0.68rem] font-semibold text-[#6B7B77] transition-colors duration-200 group-hover:text-[#4F625E] sm:h-[140px] sm:text-[0.72rem] xl:h-[155px]">
                    Project image placeholder
                  </div>
                </div>

                <h3 className="text-[0.95rem] font-extrabold tracking-tight text-[#162b26] transition-colors duration-200 group-hover:text-[#0F4C45] sm:text-[1rem]">
                  {project.shortTitle}
                </h3>
                <p className="mt-2 text-[0.72rem] leading-5 text-[#3E514D] sm:text-[0.76rem]">
                  {project.cardSummary}
                </p>

                <div className="mt-3 flex flex-wrap justify-center gap-1.5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-[#0F4C45]/15 bg-[#F7F1E8] px-2 py-1 text-[0.62rem] font-semibold text-[#0F4C45] sm:text-[0.66rem]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section
        id="contact"
        className="scroll-mt-24 bg-[#F7F1E8] pb-16 pt-7 sm:scroll-mt-28 sm:pb-20 sm:pt-9 lg:pb-24 lg:pt-12"
      >
        <div className="mx-auto grid w-full max-w-[1100px] grid-cols-1 gap-8 px-6 sm:px-8 md:px-10 lg:grid-cols-[minmax(0,0.95fr)_minmax(260px,0.6fr)] lg:gap-12 lg:px-12 xl:max-w-[1160px] xl:gap-14 xl:px-14">
          <div className="max-w-[610px]">
            <p className="text-[0.68rem] font-semibold uppercase tracking-[0.26em] text-[#0F4C45] sm:text-[0.74rem] lg:text-[0.78rem]">
              Contact
            </p>

            <h2 className="mt-3.5 max-w-[10ch] text-[1.75rem] font-extrabold leading-[0.97] tracking-tight sm:text-[2.15rem] lg:text-[2.55rem]">
              Let’s build something thoughtful.
            </h2>

            <p className="mt-4 max-w-[31rem] text-[0.88rem] leading-6.5 text-[#3E514D] lg:text-[0.94rem] lg:leading-[1.72rem]">
              I’m always interested in opportunities involving front-end
              development, user-focused design, accessibility, and creative
              digital problem-solving.
            </p>

            <div className="mt-6 flex flex-wrap gap-2.5">
              <a
                href="mailto:brittnebaila@gmail.com"
                className="rounded-full bg-[#043439] px-5 py-2 text-[0.82rem] font-semibold text-white transition hover:opacity-90 lg:px-6 lg:py-2.5 lg:text-[0.88rem]"
              >
                Email Me
              </a>

              <a
                href="https://brittne.myportfolio.com/"
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-[#0F4C45] px-5 py-2 text-[0.82rem] font-semibold text-[#0F4C45] transition hover:bg-[#0F4C45] hover:text-white lg:px-6 lg:py-2.5 lg:text-[0.88rem]"
              >
                View Portfolio
              </a>
            </div>
          </div>

          <aside className="lg:pt-5">
            <div className="rounded-[1.15rem] border border-[#0F4C45]/12 bg-[#DDE7DE] p-4.5 shadow-[0_16px_34px_rgba(22,43,38,0.05)] sm:p-5">
              <p className="text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-[#0F4C45] sm:text-[0.74rem]">
                Connect
              </p>

              <div className="mt-5 space-y-4 text-[#162b26]">
                <div>
                  <p className="text-[0.66rem] font-semibold uppercase tracking-[0.22em] text-[#6B7B77]">
                    Email
                  </p>
                  <a
                    href="mailto:brittnebaila@gmail.com"
                    className="mt-1.5 inline-block text-[0.9rem] font-semibold text-[#162b26] transition hover:text-[#0F4C45] sm:text-[0.95rem]"
                  >
                    brittnebaila@gmail.com
                  </a>
                </div>

                <div>
                  <p className="text-[0.66rem] font-semibold uppercase tracking-[0.22em] text-[#6B7B77]">
                    Location
                  </p>
                  <p className="mt-1.5 text-[0.9rem] font-semibold sm:text-[0.95rem]">
                    Bellevue, WA
                  </p>
                </div>

                <div>
                  <p className="text-[0.66rem] font-semibold uppercase tracking-[0.22em] text-[#6B7B77]">
                    Profiles
                  </p>
                  <div className="mt-2.5 flex flex-wrap gap-2.5">
                    {socialLinks.map((link) => (
                      <a
                        key={link.label}
                        href={link.href}
                        target="_blank"
                        rel="noreferrer"
                        className="rounded-full border border-[#0F4C45]/15 bg-[#F7F1E8] px-3 py-1.5 text-[0.68rem] font-semibold text-[#0F4C45] transition hover:bg-[#0F4C45] hover:text-white sm:text-[0.72rem]"
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
