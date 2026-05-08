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
        <div className="mx-auto grid min-h-screen w-full max-w-[1500px] grid-cols-1 items-center gap-14 px-6 py-16 sm:px-10 sm:py-20 md:px-14 lg:grid-cols-[minmax(0,1.05fr)_minmax(380px,0.95fr)] lg:gap-10 lg:px-16 lg:py-24 xl:gap-16 xl:px-20">
          <div className="max-w-3xl text-left">
            <p className="mb-5 text-sm font-semibold uppercase tracking-[0.3em] text-[#0F4C45]">
              Front-End Developer • UI/UX
            </p>

            <h1 className="max-w-[10ch] text-5xl font-extrabold leading-[0.92] tracking-tight sm:text-6xl md:text-7xl lg:text-[5.5rem] xl:text-[6.5rem]">
              Hello, I’m Brittne.
            </h1>

            <p className="mt-7 max-w-xl text-lg leading-8 text-[#3E514D] sm:text-xl sm:leading-9">
              I build thoughtful digital experiences with a focus on front-end
              development, accessibility, and mapping tools.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <button className="rounded-full bg-[#043439] px-7 py-3.5 text-sm font-semibold text-white transition hover:opacity-90">
                Download Resume
              </button>

              <button className="rounded-full border border-[#0F4C45] px-7 py-3.5 text-sm font-semibold text-[#0F4C45] transition hover:bg-[#0F4C45] hover:text-white">
                Contact Me
              </button>
            </div>
          </div>

          <div className="flex items-center justify-center lg:justify-end">
            <Image
              src="/avatar2.png"
              alt="Brittne avatar"
              width={1414}
              height={1307}
              priority
              className="h-auto w-full max-w-[360px] object-contain drop-shadow-xl sm:max-w-[440px] md:max-w-[520px] lg:max-w-[620px] xl:max-w-[700px]"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
