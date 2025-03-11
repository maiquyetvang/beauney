/* eslint-disable @next/next/no-html-link-for-pages */
import { KoreanCosmeticItem } from '@/components/korean-cosmetic';
import { HomeIcon } from 'lucide-react';

const koreanCosmeticItem = [
  {
    title: 'Synergy Soothing Ampoule 35ml',
    image: 'img/korean-cosmetic/Synergy Soothing Ampoule 35ml.png',
    description:
      'A-skin’s synergy solution helps to recharge moisture energy while keeping the skin hydrated for a longer time.',
    url: 'product/synergy-soothing-ampoule-35',
  },
  {
    title: 'ASKIN Revitalize MGF Plus Cream 50ml ',
    image: 'img/korean-cosmetic/ASKIN Revitalize MGF Plus Cream 50ml .png',
    description: 'Daily Skin Recovery Cream with MGF Complex',
    url: 'product/askin-revitalize-mgf-plus-cream-50',
  },
  {
    title: 'Newmela Cream 30g',
    image: 'img/korean-cosmetic/Newmela-Cream-30g.png',
    description:
      'A-Skins Synergy Solution helps recharge moisture energy while keeping your skin hydrated for a long time.',
    url: 'product/newmela-cream-30',
  },
  {
    title: 'ASKIN Synergy Whitening Ampoule 35ml',
    image: 'img/korean-cosmetic/ASKIN-synergy-whitening-ampoule-35ml.png',
    description:
      'Post Rays Line reinforces and protects skin that has undergone professional skincare treatment.  It is specially formulated to strengthen and safeguard your skin internally before treatment and to soothe and restore it after treatment.',
    url: 'akin-synergy-whitening-ampoule-35',
  },
  {
    title: 'ASKIN Synergy Repair Ampoule 35ml',
    image: 'img/korean-cosmetic/ASKIN-synergy-repair-ampoule-35ml.png',
    description:
      'Post Rays Line reinforces and protects skin that has undergone professional skincare treatment.  It is specially formulated to strengthen and safeguard your skin internally before treatment and to soothe and restore it after treatment.',
    url: 'product/askin-synergy-repair-ampoule-35',
  },
];

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
            {koreanCosmeticItem.map((item) => (
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
