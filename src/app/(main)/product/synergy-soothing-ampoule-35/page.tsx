/* eslint-disable @next/next/no-img-element */
/* eslint-disable @next/next/no-html-link-for-pages */
import { CheckCircle2, HomeIcon } from 'lucide-react';

export default function Home() {
  return (
    <div>
      <div className="flex h-[400px] w-[100vw] flex-col items-center justify-end bg-[url(/img/about-cover.jpg)] bg-cover bg-center bg-no-repeat pb-15 lg:pb-20">
        <h1 className="mb-5 hidden text-center text-white drop-shadow-lg lg:block">
          Korean Skincare
        </h1>
        <h2 className="mb-5 block text-center text-white drop-shadow-lg lg:hidden">
          Korean Skincares
        </h2>
        <h4 className="text-center text-white">
          Introducing dermatologist-recommended skincare products from Korea.
        </h4>
      </div>
      <div className="px-[5vw] py-10 lg:py-[5vw]">
        <div className="mb-5 flex items-center justify-start gap-3 text-black/50">
          <a href="/">
            <HomeIcon className="size-5 shrink-0" />
          </a>
          <div className="h-2 w-2 rounded-full bg-black/30"></div>
          <a href="/product">Product</a>
          <div className="h-2 w-2 rounded-full bg-black/30"></div>
          <p>Synergy Soothing Ampoule 35ml</p>
        </div>
        {/* introduce */}
        <div className="flex flex-col items-center justify-center p-0 pt-0 lg:p-20">
          <h2 className="mb-5">Synergy Soothing Ampoule 35ml</h2>
          <p className="mb-10 w-full text-center lg:w-[50vw]">
            Post Rays Line reinforces and protects skin that has undergone
            professional skincare treatment. It is specially formulated to
            strengthen and safeguard your skin internally before treatment and
            to soothe and restore it after treatment.
          </p>
          <div className="w-full overflow-hidden rounded-full lg:w-[480px]">
            <img
              src="/img/korean-cosmetic/Synergy Soothing Ampoule 35ml.png"
              alt=""
            />
          </div>
        </div>
        {/* program */}
        <div className="py-10">
          <div className="mt-10 flex flex-col items-stretch justify-center gap-[1px] overflow-hidden rounded-3xl text-white lg:flex-row">
            <div className="bg-primary-300 flex flex-1 flex-col items-center justify-start p-10">
              <div>
                <h4 className="mb-3 h-[58px] font-semibold">
                  Cleansing + Peeling
                </h4>
                <p className="text-justify">
                  Using premium laser treatments such as RevLite SI, PicoSure
                  Pro, GentleMax, ICON, PicoWay®, Noliss, and StarWalker, we
                  provide safe and effective pigmentation treatments.
                </p>
              </div>
            </div>
            <div className="bg-primary-400 flex flex-1 flex-col items-center justify-start p-10">
              <div>
                <h4 className="mb-3 h-[58px] font-semibold">
                  Waste Extraction + Water Supply
                </h4>
                <p className="text-justify">
                  Using premium laser treatments such as RevLite SI, PicoSure
                  Pro, GentleMax, ICON, PicoWay®, Noliss, and StarWalker, we
                  provide safe and effective pigmentation treatments.
                </p>
              </div>
            </div>
            <div className="bg-primary-500 flex flex-1 flex-col items-center justify-start p-10">
              <div>
                <h4 className="mb-3 h-[58px] font-semibold">
                  Active Ingradient Absorption + Protection{' '}
                </h4>
                <p className="text-justify">
                  Using premium laser treatments such as RevLite SI, PicoSure
                  Pro, GentleMax, ICON, PicoWay®, Noliss, and StarWalker, we
                  provide safe and effective pigmentation treatments.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* introduce-2 */}
        <div className="w-full py-10">
          <h3 className="mb-5 text-center">
            Hydrafacial, which gives you a noticeable glow
          </h3>
          <p className="px-[10vw] text-center">
            Hydrafacial is the only brand that uses Hydrafacial&apos;s patented
            technology to remove dead skin cells and deep cleanse, then extract
            waste and supply moisture. Hydrafacial&apos;s super serum, which has
            proven its effectiveness, is made with nutrients that give your skin
            an instant glow.
          </p>
        </div>
        {/* effect */}
        <div className="py-10">
          <h4>EFFECT</h4>
          <div className="mt-10 flex flex-col items-start justify-between gap-10 lg:flex-row">
            <ul>
              <li className="flex items-center justify-start gap-5">
                <div className="flex size-20 shrink-0 items-center justify-center rounded-full bg-[#FFF1ED]">
                  <img
                    src="/img/e-p-1.png"
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
                    src="/img/e-p-2.png"
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
                    src="/img/e-p-3.png"
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
      </div>
    </div>
  );
}
