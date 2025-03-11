/* eslint-disable @next/next/no-html-link-for-pages */
import { SpecialItem } from '@/components/special-item';
import { HomeIcon } from 'lucide-react';

const specialitem = [
	{
		title: 'Whitening Treatment',
		image: 'img/special-treatment/whitening-treatment.png',
		description: 'For a bright, flawless complexion',
		cons: [
			'Brighten and even out skin tone',
			'Improve dull and pigmented skin',
			'The secret of your youthful face',
		],
		url: '/treatment/whittening-treatment',
	},
	{
		title: 'Botox/Filler',
		image: 'img/special-treatment/botox-filler.png',
		description: 'Add volume to the hollow areas and lift the lower areas',
		cons: [
			'Face volume up',
			'Become young without surgery',
			'The secret of your youthful face',
		],
		url: '/treatment/botox-filler',
	},
	{
		title: 'Ultherapy & Thermage Dual Lifting',
		image: 'img/special-treatment/ultherapy.png',
		description: 'For a slimmer, more defined face',
		cons: [
			'Lift and tighten sagging skin',
			'Double effect of elasticity & contouring',
			'Attractive Facial Contour',
		],
		url: '/treatment/ultherapy',
	},
	{
		title: 'Skin Booster',
		image: 'img/special-treatment/skin-booster.png',
		description: 'Skin Solution for My Precious Skin',
		cons: [
			'Lively and clear skin',
			'Time to restore the skin’s age',
			'The beginning skin confidence',
		],
		url: '/treatment/skin-booster',
	},
	{
		title: 'Hair Transplant',
		image: 'img/special-treatment/hair-transplant.png',
		description: 'For Natural, Healthy Hair Growth',
		cons: [
			'Permanent solution for hair loss',
			'Natural hairline and density',
			'Personalized treatment for optimal results',
		],
		url: '/treatment/hair-transplant',
	},
];

export default function Home() {
	return (
		<div>
			<div className="w-[100vw] h-[400px] bg-[url(/img/about-cover.jpg)] bg-center bg-cover bg-no-repeat flex flex-col justify-end pb-15 lg:pb-20 items-center">
				<h1 className="text-center hidden lg:block mb-5 text-white drop-shadow-lg">
					Special Care Program
				</h1>
				<h2 className="text-center block lg:hidden mb-5 text-white drop-shadow-lg">
					Special Care Program
				</h2>
				<h4 className="text-center text-white">
					Intensive care procedures with our clinic&apos;s premium
					equipment.
				</h4>
			</div>
			<div className="px-[5vw] py-10 lg:py-[5vw]">
				<div className="flex justify-start items-center gap-3 text-black/50 mb-5">
					<a href="/">
						<HomeIcon className="size-5 shrink-0" />
					</a>
					<div className="w-2 h-2 bg-black/30 rounded-full"></div>
					<p>Treatment</p>
				</div>
				<h2 className="mb-10 lg:mb-20">Treatment</h2>
				<div className="flex flex-col justify-start items-stretch gap-10 lg:gap-20">
					{specialitem.map((item) => (
						<div key={item.image} className="border border-black/5">
							<SpecialItem
								image={item.image}
								title={item.title}
								description={item.description}
								cons={item.cons}
								url={item.url}
							/>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}
