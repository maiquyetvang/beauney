/* eslint-disable @next/next/no-img-element */
import { ChevronRight } from 'lucide-react';
import { Button } from './button';

export interface SpecialItemProps {
  title: string;
  description: string;
  image: string;
  cons: string[];
  isHome?: boolean;
  url: string;
}
export const SpecialItem = ({
  title,
  description,
  image,
  cons,
  isHome,
  url,
}: SpecialItemProps) => {
  return (
    <div className="SpecialItem h-full">
      <div
        className={`${
          isHome ? 'w-[80vw]' : 'w-full'
        } flex h-full flex-col lg:flex-row`}
      >
        <img src={image} alt="" className="aspect-square lg:w-96" />
        <div className="flex h-full flex-1 flex-col justify-start bg-white p-5 select-none lg:h-96 lg:justify-center lg:px-[60px] lg:py-0">
          <h3>{title}</h3>
          <p className="mt-2 mb-6 select-none lg:mb-12">{description}</p>
          <ul className="list-disc select-none">
            {cons.map((i) => (
              <li className="ml-5" key={i}>
                {i}
              </li>
            ))}
          </ul>
          <a href={url} className="mt-6 lg:mt-12">
            <Button variant="ghost" className="w-full rounded-full lg:w-fit">
              VIEW MORE
              <ChevronRight className="size-5 shrink-0" />
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
};
