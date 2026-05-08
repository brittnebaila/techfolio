import Image from "next/image";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
});

export default function Home() {
  return (
    <main
      className={`${montserrat.className} min-h-screen overflow-x-hidden bg-[#F7F1E8] text-[#162b26]`}
    >
      <section className="min-h-screen bg-[#F7F1E8]">
        <div className="mx-auto grid min-h-screen w-full max-w-[1580px] grid-cols-1 items-center gap-14 px-6 py-16 sm:px-10 sm:py-20 md:px-14 lg:grid-cols-[minmax(0,0.82fr)_minmax(0,1.18fr)] lg:gap-18 lg:px-18 lg:py-24 xl:max-w-[1700px] xl:gap-22 xl:px-24">
          <div className="mx-auto w-full max-w-[620px] text-left">
            <p className="mb-6 text-sm font-semibold uppercase tracking-[0.32em] text-[#0F4C45] lg:text-[1.05rem]">
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
              <button className="rounded-full bg-[#043439] px-11 py-5 text-lg font-semibold text-white transition hover:opacity-90 lg:px-12 lg:py-5.5 lg:text-[1.1rem]">
                Download Resume
              </button>

              <button className="rounded-full border border-[#0F4C45] px-11 py-5 text-lg font-semibold text-[#0F4C45] transition hover:bg-[#0F4C45] hover:text-white lg:px-12 lg:py-5.5 lg:text-[1.1rem]">
                Contact Me
              </button>
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
      </section>
    </main>
  );
}
