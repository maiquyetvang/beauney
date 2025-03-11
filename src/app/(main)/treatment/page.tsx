/* eslint-disable @next/next/no-html-link-for-pages */
import { SpecialItem } from '@/components/special-item';
import { HomeIcon } from 'lucide-react';

const specialitem = [
  {
    title: 'Whitening Treatment',
    image: 'img/special-treatment/whitening-treatment.png',
    description: 'For a bright, flawless complexion',
    cons: [
      'Brighten and even out skin tone',
      'Improve dull and pigmented skin',
      'The secret of your youthful face',
    ],
    url: '/treatment/whittening-treatment',
  },
  {
    title: 'Botox/Filler',
    image: 'img/special-treatment/botox-filler.png',
    description: 'Add volume to the hollow areas and lift the lower areas',
    cons: [
      'Face volume up',
      'Become young without surgery',
      'The secret of your youthful face',
    ],
    url: '/treatment/botox-filler',
  },
  {
    title: 'Ultherapy & Thermage Dual Lifting',
    image: 'img/special-treatment/ultherapy.png',
    description: 'For a slimmer, more defined face',
    cons: [
      'Lift and tighten sagging skin',
      'Double effect of elasticity & contouring',
      'Attractive Facial Contour',
    ],
    url: '/treatment/ultherapy',
  },
  {
    title: 'Skin Booster',
    image: 'img/special-treatment/skin-booster.png',
    description: 'Skin Solution for My Precious Skin',
    cons: [
      'Lively and clear skin',
      'Time to restore the skin’s age',
      'The beginning skin confidence',
    ],
    url: '/treatment/skin-booster',
  },
  {
    title: 'Hair Transplant',
    image: 'img/special-treatment/hair-transplant.png',
    description: 'For Natural, Healthy Hair Growth',
    cons: [
      'Permanent solution for hair loss',
      'Natural hairline and density',
      'Personalized treatment for optimal results',
    ],
    url: '/treatment/hair-transplant',
  },
];

export default function Home() {
  return (
    <div>
      <div className="flex w-[100vw] flex-col items-center justify-end bg-[url(/img/about-cover.jpg)] bg-cover bg-center bg-no-repeat px-5 pt-[132px] pb-15 md:px-[5vw] lg:pt-[172px] lg:pb-20">
        <h1 className="mb-5 hidden text-center text-white drop-shadow-lg lg:block">
          Special Care Program
        </h1>
        <h2 className="mb-5 block text-center text-white drop-shadow-lg lg:hidden">
          Special Care Program
        </h2>
        <h4 className="text-center text-white">
          Intensive care procedures with our clinic&apos;s premium equipment.
        </h4>
      </div>
      <div className="px-[5vw] py-10 lg:py-[5vw]">
        <div className="mb-5 flex items-center justify-start gap-3 text-black/50">
          <a href="/">
            <HomeIcon className="size-5 shrink-0" />
          </a>
          <div className="h-2 w-2 rounded-full bg-black/30"></div>
          <p>Treatment</p>
        </div>
        <h2 className="mb-10 lg:mb-20">Treatment</h2>
        <div className="flex flex-col items-stretch justify-start gap-10 lg:gap-20">
          {specialitem.map((item) => (
            <div key={item.image} className="border border-black/5">
              <SpecialItem
                image={item.image}
                title={item.title}
                description={item.description}
                cons={item.cons}
                url={item.url}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
