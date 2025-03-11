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
				className={`w-full h-[100dvh] bg-center bg-cover bg-no-repeat flex justify-items-end items-end px-[10vw] py-[10vw]`}
				style={{ backgroundImage: `url(${image})` }}
			>
				<h1 className="hidden lg:block max-w-[50vw] text-white drop-shadow-lg">
					{title}
				</h1>
				<h2 className="text-white drop-shadow-lg block lg:hidden">
					{title}{' '}
				</h2>
			</div>
		</div>
	);
};
