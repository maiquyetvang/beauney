/* eslint-disable @next/next/no-img-element */
/* eslint-disable @next/next/no-html-link-for-pages */
import { HomeIcon } from 'lucide-react';

export default function Home() {
  return (
    <div>
      {' '}
      <div className="flex h-[400px] w-[100vw] flex-col items-center justify-end bg-[url(/img/about-cover.jpg)] bg-cover bg-center bg-no-repeat pb-15 lg:pb-20">
        <h1 className="mb-5 hidden text-center text-white drop-shadow-lg lg:block">
          Skin Health News
        </h1>
        <h2 className="mb-5 block text-center text-white drop-shadow-lg lg:hidden">
          Skin Health News
        </h2>
        <h4 className="text-center text-white">
          We pursue the highest level of effectiveness and safety through
          continuous investment and upgrades in laser technology and equipment.
        </h4>
      </div>
      <div className="px-[5vw] py-10 lg:py-[5vw]">
        <div className="mb-5 flex items-center justify-start gap-3 text-black/50">
          <a href="/">
            <HomeIcon className="size-5 shrink-0" />
          </a>
          <div className="h-2 w-2 rounded-full bg-black/30"></div>
          <a href="/news">News</a>
          <div className="h-2 w-2 rounded-full bg-black/30"></div>
          <p>Skin Whitening Treatments</p>
        </div>
        {/* introduce */}
        <div className="flex flex-col items-center justify-center p-0 pt-0 lg:p-20">
          <h2 className="mb-10">Skin Whitening Treatments</h2>
          <img src="/img/k-cosmetic/SWT.png" alt="" />
          <p className="mt-10">Achieve a brighter and more even skin tone.</p>
        </div>
      </div>
    </div>
  );
}
