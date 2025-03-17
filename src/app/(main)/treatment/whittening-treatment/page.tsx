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
          <p>Whittening Treatment</p>
        </div>
        {/* introduce */}
        <div className="flex flex-col items-center justify-center p-0 pt-0 lg:p-20">
          <h2 className="mb-5 text-center">
            A procedure that restores lost facial volume and V-line in just 10
            minutes.
          </h2>
          <p className="mb-10 w-full text-center lg:w-[50vw]">
            Petit cosmetic procedures can yield significantly different results
            depending on the expertise and precision of the practitioner.
          </p>
          <div className="w-full overflow-hidden rounded-full lg:w-[480px]">
            <img src="/img/special-treatment/whitening-treatment.png" alt="" />
          </div>
        </div>
        {/* sub introduce */}
        <div className="py-10">
          <div className="mt-10 flex flex-col items-stretch justify-center gap-10 lg:flex-row">
            <div className="flex flex-1 flex-col items-center justify-start bg-[#FFF1ED] p-10">
              <p className="mb-3 text-center text-lg font-semibold">Botox</p>
              <p className="text-center">
                Effective for reducing fine lines on the forehead, glabellar
                lines between the eyebrows, and crow’s feet around the eyes, as
                well as reshaping a square jaw.
              </p>
            </div>
            <div className="flex flex-1 flex-col items-center justify-start bg-[#FFF1ED] p-10">
              <p className="mb-3 text-center text-lg font-semibold">Filler</p>
              <p className="text-center">
                Ideal for enhancing volume and reducing wrinkles on the nose
                bridge, chin, sunken cheeks, and lips to create a youthful
                appearance.
              </p>
            </div>
          </div>
        </div>
        {/* program */}
        <div className="py-10">
          <h4>PROGRAM</h4>
          <div className="mt-10 flex flex-col items-start justify-between gap-10 lg:flex-row">
            <ul>
              <li className="flex items-center justify-start gap-5">
                <div className="flex size-20 shrink-0 items-center justify-center rounded-full bg-[#FFF1ED]">
                  <img
                    src="/img/wt-p-1.png"
                    alt=""
                    className="w-14 rounded-full"
                  />
                </div>
                <div>
                  <p className="font-semibold">Various Customized Programs</p>
                  <p>
                    Petit cosmetic procedures can be tailored with various
                    programs to address individual concerns.
                  </p>
                </div>
              </li>
              <li className="mt-5 mb-5 flex items-center justify-start gap-5">
                <div className="flex size-20 shrink-0 items-center justify-center rounded-full bg-[#FFF1ED]">
                  <img
                    src="/img/wt-p-2.png"
                    alt=""
                    className="w-14 rounded-full"
                  />
                </div>
                <div>
                  <p className="font-semibold">Minimal Pain and Discomfort</p>
                  <p>
                    Filler or Botox procedures are performed with minimal pain
                    and discomfort.
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
          <ul className="mt-10 flex flex-col gap-5 bg-[#F7F8FA] p-10">
            <li className="text-lg font-medium">
              Botox / Filler is Recommended for:
            </li>
            <li className="flex items-center justify-start gap-3">
              <CheckCircle2 className="text-primary-500 size-5 shrink-0" />
              For those with a square jaw that makes their face look larger and
              more angular.
            </li>
            <li className="flex items-center justify-start gap-3">
              <CheckCircle2 className="text-primary-500 size-5 shrink-0" />
              For those who desire a smaller and softer facial contour.
            </li>
            <li className="flex items-center justify-start gap-3">
              <CheckCircle2 className="text-primary-500 size-5 shrink-0" />
              For those who want to achieve a V-line conveniently without
              disrupting daily life.
            </li>
            <li className="flex items-center justify-start gap-3">
              <CheckCircle2 className="text-primary-500 size-5 shrink-0" />
              For those concerned about wrinkles that appear with facial
              expressions.
            </li>
            <li className="flex items-center justify-start gap-3">
              <CheckCircle2 className="text-primary-500 size-5 shrink-0" />
              For those looking to improve skin elasticity and fine wrinkles.
            </li>
            <li className="flex items-center justify-start gap-3">
              <CheckCircle2 className="text-primary-500 size-5 shrink-0" />
              For those who want to slim down thick and muscular calves or upper
              arms.
            </li>
            <li className="flex items-center justify-start gap-3">
              <CheckCircle2 className="text-primary-500 size-5 shrink-0" />
              For those who want to soften and feminize the appearance of
              prominent trapezius muscles.
            </li>
            <li className="flex items-center justify-start gap-3">
              <CheckCircle2 className="text-primary-500 size-5 shrink-0" />
              For those seeking a simple injection treatment to reduce sweat and
              body odor.
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
                Approximately 20–30 minutes (Full face)
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
              Botox is effective for correcting fine lines on the forehead,
              glabella, eye area, and nasal bridge, as well as reshaping a
              square jaw.
            </li>
            <li className="flex items-center justify-start gap-3">
              <CheckCircle2 className="text-primary-500 size-5 shrink-0" />
              Botox is categorized into small muscle, large muscle, and skin
              Botox, improving various areas effectively.
            </li>
            <li className="flex items-center justify-start gap-3">
              <CheckCircle2 className="text-primary-500 size-5 shrink-0" />
              Design fillers use hyaluronic acid to restore volume to areas with
              wrinkles or sunken appearance.
            </li>
            <li className="flex items-center justify-start gap-3">
              <CheckCircle2 className="text-primary-500 size-5 shrink-0" />
              Custom-designed fillers enhance volume for a natural and
              well-defined facial contour.
            </li>
            <li className="flex items-center justify-start gap-3">
              <CheckCircle2 className="text-primary-500 size-5 shrink-0" />
              Botox and fillers focus on precise injection by analyzing facial
              proportions and fat distribution.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
