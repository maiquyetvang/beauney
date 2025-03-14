/* eslint-disable @next/next/no-html-link-for-pages */
import { SpecialItem } from '@/components/special-item';
import { specialItems } from '@/constants/specialItems';
import { HomeIcon } from 'lucide-react';

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
          {specialItems.map((item) => (
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
