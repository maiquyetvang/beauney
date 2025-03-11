/* eslint-disable @next/next/no-html-link-for-pages */
import { Button } from '@/components/button';
import { KCosmeticItem } from '@/components/k-cosmetic-item';
import { HomeIcon } from 'lucide-react';

const kcosmeticitem = [
	{
		title: 'Skin Whitening Treatments',
		image: 'img/k-cosmetic/SWT.png',
		description: 'Achieve a brighter and more even skin tone.',
		url: '/news/skin-whitening-treatment',
	},
	{
		title: 'Lifting',
		image: 'img/k-cosmetic/LIFTING.png',
		description: 'Non-surgical solutions for youthful, firmer skin.',
		url: '/news/lifting',
	},
	{
		title: 'Botox',
		image: 'img/k-cosmetic/BOTOX.png',
		description:
			'Targeted solutions for pigmentation, acne scars, and skin rejuvenation.',
		url: '/news/botox',
	},
	{
		title: 'Filler',
		image: 'img/k-cosmetic/FILLER.png',
		description:
			'Smooth fine lines and wrinkles for a youthful appearance.',
		url: '/news/filler',
	},
	{
		title: 'Fillers',
		image: 'img/k-cosmetic/Fillers.png',
		description: 'Restore volume and contour your facial features.',
		url: '/news/fillers',
	},
	{
		title: 'Hair Transplant',
		image: 'img/k-cosmetic/Hair Transplant.png',
		description: 'Advanced techniques to restore natural hair growth.',
		url: '/news/hair-transplant',
	},
];

export default function Home() {
	return (
		<div>
			<div className="w-[100vw] h-[400px] bg-[url(/img/about-cover.jpg)] bg-center bg-cover bg-no-repeat flex flex-col justify-end pb-15 lg:pb-20 items-center">
				<h1 className="text-center hidden lg:block mb-5 text-white drop-shadow-lg">
					Skin Health News
				</h1>
				<h2 className="text-center block lg:hidden mb-5 text-white drop-shadow-lg">
					Skin Health News
				</h2>
				<h4 className="text-center text-white">
					We pursue the highest level of effectiveness and safety
					through continuous investment and upgrades in laser
					technology and equipment.
				</h4>
			</div>
			<div className="px-[5vw] py-10 lg:py-[5vw]">
				<div className="flex justify-start items-center gap-3 text-black/50 mb-5">
					<a href="/">
						<HomeIcon className="size-5 shrink-0" />
					</a>
					<div className="w-2 h-2 bg-black/30 rounded-full"></div>
					<p>News</p>
				</div>
				<h2 className="mb-10 lg:mb-20">News</h2>
				<div className="w-full flex flex-col lg:grid grid-flow-row grid-cols-3 gap-10 lg:gap-20">
					{kcosmeticitem.map((item) => (
						<div
							className="lg:hover:shadow-lg transition-all ease-in-out"
							key={item.image}
						>
							<KCosmeticItem
								title={item.title}
								image={item.image}
								description={item.description}
								url={item.url}
							/>
						</div>
					))}
					{/* learn more btn */}
					<div className="col-span-3 flex justify-center items-center">
						<a href="#" className="w-full lg:w-fit">
							<Button
								className="w-full lg:w-96"
								variant="outline"
							>
								LEARN MORE
							</Button>
						</a>
					</div>
				</div>
			</div>
		</div>
	);
}
