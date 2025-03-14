export interface FirstViewBannerItemProps {
  title: string;
  image: string;
}

export const FirstViewBannerItem = ({
  title,
  image,
}: FirstViewBannerItemProps) => {
  return (
    <div className="FirstViewBannerItem">
      <div
        className={`flex h-[100dvh] w-full items-end justify-items-end bg-cover bg-center bg-no-repeat px-[10vw] py-[10vw]`}
        style={{ backgroundImage: `url(${image})` }}
      >
        <h1 className="hidden max-w-[50vw] text-white drop-shadow-lg lg:block">
          {title}
        </h1>
        <h2 className="block text-white drop-shadow-lg lg:hidden">{title} </h2>
      </div>
    </div>
  );
};
