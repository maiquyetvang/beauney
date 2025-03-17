/* eslint-disable @next/next/no-img-element */
import { ChevronRight } from 'lucide-react';
import { Button } from './button';

export interface KoreanCosmeticItemProps {
  title: string;
  description: string;
  image: string;
  url: string;
  isHome?: boolean;
}

export const KoreanCosmeticItem = ({
  title,
  description,
  image,
  url,
  isHome,
}: KoreanCosmeticItemProps) => {
  return (
    <div className="KoreanCosmeticItem flex h-full flex-col">
      <img src={image} alt="" className="w-full" />
      <div
        className={`${
          isHome ? 'px-8' : 'px-0'
        } flex w-full flex-1 flex-col items-start justify-start gap-4 bg-white py-8`}
      >
        <div className="flex-1">
          <h4 className="mb-2">{title}</h4>
          <p>{description}</p>
        </div>
        <a href={url} className="w-full lg:w-fit">
          <Button variant="ghost" className="w-full rounded-full lg:w-fit">
            LEARN MORE <ChevronRight className="size-5 shrink-0" />
          </Button>
        </a>
      </div>
    </div>
  );
};
