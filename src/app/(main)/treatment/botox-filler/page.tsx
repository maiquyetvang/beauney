/* eslint-disable @next/next/no-img-element */
/* eslint-disable @next/next/no-html-link-for-pages */
import { CheckCircle2, HomeIcon } from 'lucide-react';

export default function Home() {
  return (
    <div>
      <div className="flex h-[400px] w-[100vw] flex-col items-center justify-end bg-[url(/img/about-cover.jpg)] bg-cover bg-center bg-no-repeat pb-15 lg:pb-20">
        <h1 className="mb-5 hidden text-center text-white drop-shadow-lg lg:block">
          Topclass Medical Team
        </h1>
        <h2 className="mb-5 block text-center text-white drop-shadow-lg lg:hidden">
          Topclass Medical Team
        </h2>
        <h4 className="text-center text-white">
          Let me be your skin doctor for life.
        </h4>
      </div>
      <div className="px-[5vw] py-10 lg:py-[5vw]">
        <div className="mb-5 flex items-center justify-start gap-3 text-black/50">
          <a href="/">
            <HomeIcon className="size-5 shrink-0" />
          </a>
          <div className="h-2 w-2 rounded-full bg-black/30"></div>
          <a href="/treatment">Treatment</a>
          <div className="h-2 w-2 rounded-full bg-black/30"></div>
          <p>Botox / Filler</p>
        </div>
        {/* introduce */}
        <div className="flex flex-col items-center justify-center p-0 pt-0 lg:p-20">
          <h2 className="mb-5 text-center">
            Melasma / Pigmentation / Blemishes
          </h2>
          <p className="mb-10 w-full text-center lg:w-[50vw]">
            Melasma, pigmentation, and blemishes—treatment varies depending on
            the type of pigmentation. All premium laser treatments for
            pigmentation are available here!
          </p>
          <div className="w-full overflow-hidden rounded-full lg:w-[480px]">
            <img src="/img/special-treatment/botox-filler.png" alt="" />
          </div>
        </div>
        {/* program */}
        <div className="py-10">
          <h4>PROGRAM</h4>
          <div className="mt-10 flex flex-col items-stretch justify-center gap-10 lg:flex-row">
            <div className="flex flex-1 flex-col items-center justify-start bg-[#FFF1ED] p-10">
              <img src="/img/bf-p-1.png" alt="" className="mb-5 size-24" />
              <div>
                <p className="mb-3 text-center text-lg font-semibold">
                  Safely Treat Various Pigmentation Conditions
                </p>
                <p className="text-center">
                  Using premium laser treatments such as RevLite SI, PicoSure
                  Pro, GentleMax, ICON, PicoWay®, Noliss, and StarWalker, we
                  provide safe and effective pigmentation treatments.
                </p>
              </div>
            </div>
            <div className="flex flex-1 flex-col items-center justify-start bg-[#FFF1ED] p-10">
              <img src="/img/bf-p-2.png" alt="" className="mb-5 size-24" />
              <div>
                <p className="mb-3 text-center text-lg font-semibold">
                  Precision Diagnosis and Laser Selection
                </p>
                <p className="text-center">
                  Through precise diagnosis, we determine the type, depth, and
                  cause of pigmentation and select the most suitable laser
                  treatment to correct pigmentation disorders and suppress
                  melanin activity.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* cause */}
        <div className="py-10">
          <h4>CAUSE</h4>
          <div className="mt-10 flex flex-col items-start justify-between gap-10 lg:flex-row">
            <ul>
              <li className="flex items-center justify-start gap-5">
                <div className="flex size-20 shrink-0 items-center justify-center rounded-full bg-[#FFF1ED]">
                  <img
                    src="/img/bf-c-uv.png"
                    alt=""
                    className="w-16 rounded-full"
                  />
                </div>
                <div>
                  <p className="font-semibold">UV Radiation</p>
                  <p>
                    Prolonged exposure to strong UV radiation stimulates
                    melanin-producing cells, leading to pigmentation.
                  </p>
                </div>
              </li>
              <li className="mt-5 mb-5 flex items-center justify-start gap-5">
                <div className="flex size-20 shrink-0 items-center justify-center rounded-full bg-[#FFF1ED]">
                  <img
                    src="/img/bf-c-underlying.png"
                    alt=""
                    className="w-16 rounded-full"
                  />
                </div>
                <div>
                  <p className="font-semibold">Underlying Health Conditions</p>
                  <p>
                    Metabolic imbalances caused by underlying health conditions
                    can disrupt the natural skin renewal process, leading to
                    melanin buildup and pigmentation.
                  </p>
                </div>
              </li>
              <li className="flex items-center justify-start gap-5">
                <div className="flex size-20 shrink-0 items-center justify-center rounded-full bg-[#FFF1ED]">
                  <img
                    src="/img/bf-c-stress.png"
                    alt=""
                    className="w-16 rounded-full"
                  />
                </div>
                <div>
                  <p className="font-semibold">Stress</p>
                  <p>
                    Chronic stress, irregular lifestyle patterns, and fatigue
                    can trigger melanin production, resulting in increased
                    pigmentation.
                  </p>
                </div>
              </li>
            </ul>
            <div className="flex w-full justify-end lg:w-fit">
              <img src="/img/bf-c-girl.png" alt="" />
            </div>
          </div>
        </div>
        {/* need */}
        <div className="py-10">
          <h4>NEEDS</h4>
          <ul className="mt-10 bg-[#F7F8FA] p-10">
            <li className="flex items-center justify-start gap-3">
              <CheckCircle2 className="text-primary-500 size-5 shrink-0" />
              If you have melasma around the eyes, cheekbones, or temples.
            </li>
            <li className="mt-3 mb-3 flex items-center justify-start gap-3">
              <CheckCircle2 className="text-primary-500 size-5 shrink-0" />
              If you notice irregular brown spots on your face.
            </li>
            <li className="flex items-center justify-start gap-3">
              <CheckCircle2 className="text-primary-500 size-5 shrink-0" />
              If blemishes have developed due to prolonged sun exposure,
              dermatitis, or folliculitis.
            </li>
          </ul>
        </div>
        {/* info */}
        <div className="py-10">
          <h4>INFORMATION</h4>
          <ul className="mt-10 flex flex-col items-start justify-start gap-5 bg-[#F7F8FA] p-10">
            <li className="flex flex-col items-start justify-start gap-1 lg:flex-row lg:items-center lg:gap-3">
              <div className="flex w-52 items-center justify-start">
                <p className="bg-primary-500 flex size-5 items-center justify-center rounded-full font-medium text-white">
                  1
                </p>
                <p className="ml-4 font-semibold">Procedure Time</p>
              </div>
              <p className="ml-[36px]">
                If you have melasma around the eyes, cheekbones, or temples.
              </p>
            </li>
            <li className="flex flex-col items-start justify-start gap-1 lg:flex-row lg:items-center lg:gap-3">
              <div className="flex w-52 items-center justify-start">
                <p className="bg-primary-500 flex size-5 items-center justify-center rounded-full font-medium text-white">
                  2
                </p>
                <p className="ml-4 font-semibold">Treatment Areas</p>
              </div>
              <p className="ml-[36px]">Any area requiring improvement</p>
            </li>
            <li className="flex flex-col items-start justify-start gap-1 lg:flex-row lg:items-center lg:gap-3">
              <div className="flex w-52 items-center justify-start">
                <p className="bg-primary-500 flex size-5 items-center justify-center rounded-full font-medium text-white">
                  3
                </p>
                <p className="ml-4 font-semibold">Anesthesia Method</p>
              </div>
              <p className="ml-[36px]">Topical anesthesia if necessary</p>
            </li>
            <li className="flex flex-col items-start justify-start gap-1 lg:flex-row lg:items-center lg:gap-3">
              <div className="flex w-52 items-center justify-start">
                <p className="bg-primary-500 flex size-5 items-center justify-center rounded-full font-medium text-white">
                  4
                </p>
                <p className="ml-4 font-semibold">Daily Activities</p>
              </div>
              <p className="ml-[36px]">Immediate return to daily activities</p>
            </li>
            <li className="flex flex-col items-start justify-start gap-1 lg:flex-row lg:items-center lg:gap-3">
              <div className="flex w-52 items-center justify-start">
                <p className="bg-primary-500 flex size-5 items-center justify-center rounded-full font-medium text-white">
                  5
                </p>
                <p className="ml-4 font-semibold">Duration</p>
              </div>
              <p className="ml-[36px]">3–6 months</p>
            </li>
          </ul>
        </div>
        {/* advantage */}
        <div className="py-10">
          <h4>ADVANTAGE</h4>
          <ul className="mt-10 flex flex-col items-start justify-start gap-5 bg-[#F7F8FA] p-10">
            <li className="flex items-center justify-start gap-3">
              <CheckCircle2 className="text-primary-500 size-5 shrink-0" />
              Utilizing various advanced devices, we provide personalized 1:1
              customized treatment based on your skin type.
            </li>
            <li className="flex items-center justify-start gap-3">
              <CheckCircle2 className="text-primary-500 size-5 shrink-0" />
              If previous treatments were ineffective or worsened your
              condition, it&apos;s time to choose a new laser treatment.
            </li>
            <li className="flex items-center justify-start gap-3">
              <CheckCircle2 className="text-primary-500 size-5 shrink-0" />A
              precise diagnosis is conducted to assess the type, depth, cause,
              and symptoms of pigmentation.
            </li>
            <li className="flex items-center justify-start gap-3">
              <CheckCircle2 className="text-primary-500 size-5 shrink-0" />
              Using the appropriate laser equipment, we treat pigmentation
              disorders and suppress melanin activity.
            </li>
            <li className="flex items-center justify-start gap-3">
              <CheckCircle2 className="text-primary-500 size-5 shrink-0" />
              Our comprehensive pigmentation treatment program offers the
              perfect solution for your skin concerns.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
