/* eslint-disable @next/next/no-html-link-for-pages */
import { Button } from '@/components/button';
import { KCosmeticItem } from '@/components/k-cosmetic-item';
import { kcosmeticItems } from '@/constants/kcosmeticItems';

import { HomeIcon } from 'lucide-react';

export default function Home() {
  return (
    <div>
      <div className="flex w-[100vw] flex-col items-center justify-end bg-[url(/img/about-cover.jpg)] bg-cover bg-center bg-no-repeat px-5 pt-[132px] pb-15 md:px-[5vw] lg:pt-[172px] lg:pb-20">
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
          <p>News</p>
        </div>
        <h2 className="mb-10 lg:mb-20">News</h2>
        <div className="flex w-full grid-flow-row grid-cols-3 flex-col gap-10 lg:grid lg:gap-20">
          {kcosmeticItems.map((item) => (
            <div
              className="transition-all ease-in-out lg:hover:shadow-lg"
              key={item.image}
            >
              <KCosmeticItem
                title={item.title}
                image={item.image}
                description={item.description}
                url={item.url}
              />
            </div>
          ))}
          {/* learn more btn */}
          <div className="col-span-3 flex items-center justify-center">
            <a href="#" className="w-full lg:w-fit">
              <Button className="w-full lg:w-96" variant="outline">
                LEARN MORE
              </Button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
