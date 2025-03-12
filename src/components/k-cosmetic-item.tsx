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
      <div className="flex w-full flex-col gap-4 p-8">
        <h4 className="text-center">{title}</h4>
        <p className="text-center">{description}</p>
      </div>
    </a>
  );
};
