/* eslint-disable @next/next/no-html-link-for-pages */
import { KoreanCosmeticItem } from '@/components/korean-cosmetic';
import { koreanCosmeticItems } from '@/constants/koreanCosmeticItems';

import { HomeIcon } from 'lucide-react';

export default function Home() {
  return (
    <div>
      <div className="flex w-[100vw] flex-col items-center justify-end bg-[url(/img/about-cover.jpg)] bg-cover bg-center bg-no-repeat px-5 pt-[132px] pb-15 md:px-[5vw] lg:pt-[172px] lg:pb-20">
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
          <p>Product</p>
        </div>
        <h2 className="mb-10 lg:mb-20">Product</h2>
        <div className="flex flex-col items-stretch justify-start gap-10 lg:gap-20">
          <div className="flex grid-flow-row grid-cols-3 flex-col items-stretch gap-10 overflow-hidden lg:grid lg:gap-20">
            {koreanCosmeticItems.map((item) => (
              <div key={item.image}>
                <KoreanCosmeticItem
                  title={item.title}
                  description={item.description}
                  image={item.image}
                  url={item.url}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
