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
			<div className="flex p-8 gap-4 flex-col w-full">
				<h4 className="text-center">{title}</h4>
				<p className="text-center">{description}</p>
			</div>
		</a>
	);
};
