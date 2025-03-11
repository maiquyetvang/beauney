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
				} flex flex-col lg:flex-row h-full`}
			>
				<img src={image} alt="" className="lg:w-96 aspect-square" />
				<div className="bg-white w-full p-5 lg:py-0 lg:px-[60px] flex flex-col justify-start lg:justify-center h-full lg:h-96">
					<h3>{title}</h3>
					<p className="mt-2 mb-6 lg:mb-12">{description}</p>
					<ul className="list-disc">
						{cons.map((i) => (
							<li className="ml-5" key={i}>
								{i}
							</li>
						))}
					</ul>
					<a href={url} className="mt-6 lg:mt-12">
						<Button
							variant="ghost"
							className="w-full lg:w-fit rounded-full"
						>
							VIEW MORE
							<ChevronRight className="size-5 shrink-0" />
						</Button>
					</a>
				</div>
			</div>
		</div>
	);
};
