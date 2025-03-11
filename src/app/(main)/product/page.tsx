/* eslint-disable @next/next/no-html-link-for-pages */
import { KoreanCosmeticItem } from '@/components/korean-cosmetic';
import { HomeIcon } from 'lucide-react';

const koreanCosmeticItem = [
	{
		title: 'Synergy Soothing Ampoule 35ml',
		image: 'img/korean-cosmetic/Synergy Soothing Ampoule 35ml.png',
		description:
			'A-skin’s synergy solution helps to recharge moisture energy while keeping the skin hydrated for a longer time.',
		url: 'product/synergy-soothing-ampoule-35',
	},
	{
		title: 'ASKIN Revitalize MGF Plus Cream 50ml ',
		image: 'img/korean-cosmetic/ASKIN Revitalize MGF Plus Cream 50ml .png',
		description: 'Daily Skin Recovery Cream with MGF Complex',
		url: 'product/askin-revitalize-mgf-plus-cream-50',
	},
	{
		title: 'Newmela Cream 30g',
		image: 'img/korean-cosmetic/Newmela-Cream-30g.png',
		description:
			'A-Skins Synergy Solution helps recharge moisture energy while keeping your skin hydrated for a long time.',
		url: 'product/newmela-cream-30',
	},
	{
		title: 'ASKIN Synergy Whitening Ampoule 35ml',
		image: 'img/korean-cosmetic/ASKIN-synergy-whitening-ampoule-35ml.png',
		description:
			'Post Rays Line reinforces and protects skin that has undergone professional skincare treatment.  It is specially formulated to strengthen and safeguard your skin internally before treatment and to soothe and restore it after treatment.',
		url: 'akin-synergy-whitening-ampoule-35',
	},
	{
		title: 'ASKIN Synergy Repair Ampoule 35ml',
		image: 'img/korean-cosmetic/ASKIN-synergy-repair-ampoule-35ml.png',
		description:
			'Post Rays Line reinforces and protects skin that has undergone professional skincare treatment.  It is specially formulated to strengthen and safeguard your skin internally before treatment and to soothe and restore it after treatment.',
		url: 'product/askin-synergy-repair-ampoule-35',
	},
];

export default function Home() {
	return (
		<div>
			<div className="w-[100vw] h-[400px] bg-[url(/img/about-cover.jpg)] bg-center bg-cover bg-no-repeat flex flex-col justify-end pb-15 lg:pb-20 items-center">
				<h1 className="text-center hidden lg:block mb-5 text-white drop-shadow-lg">
					Korean Skincare
				</h1>
				<h2 className="text-center block lg:hidden mb-5 text-white drop-shadow-lg">
					Korean Skincares
				</h2>
				<h4 className="text-center text-white">
					Introducing dermatologist-recommended skincare products from
					Korea.
				</h4>
			</div>
			<div className="px-[5vw] py-10 lg:py-[5vw]">
				<div className="flex justify-start items-center gap-3 text-black/50 mb-5">
					<a href="/">
						<HomeIcon className="size-5 shrink-0" />
					</a>
					<div className="w-2 h-2 bg-black/30 rounded-full"></div>
					<p>Product</p>
				</div>
				<h2 className="mb-10 lg:mb-20">Product</h2>
				<div className="flex flex-col justify-start items-stretch gap-10 lg:gap-20">
					<div className="flex flex-col lg:grid grid-flow-row grid-cols-3 gap-10 lg:gap-20 items-stretch overflow-hidden">
						{koreanCosmeticItem.map((item) => (
							<div key={item.image}>
								<KoreanCosmeticItem
									title={item.title}
									description={item.description}
									image={item.image}
									url={item.url}
								/>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
}
