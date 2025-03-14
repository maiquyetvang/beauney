/* eslint-disable @next/next/no-img-element */
export interface KCosmeticItemProps {
  title: string;
  description: string;
  image: string;
  url: string;
}

export const KCosmeticItem = ({
  title,
  description,
  image,
  url,
}: KCosmeticItemProps) => {
  return (
    <a href={url} className="KCosmeticItem lg:hover:bg-amber-700">
      <img src={image} alt="" className="w-full" />
      <div className="flex w-full flex-col gap-4 py-8">
        <span className="text-[30px] font-bold lg:text-center lg:text-[32px]">
          {title}
        </span>
        <span className="text-[18px] lg:text-center lg:text-[22px]">
          {description}
        </span>
      </div>
    </a>
  );
};
