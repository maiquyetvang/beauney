/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @next/next/no-img-element */
'use client';

import { Button } from '@/components/button';
import { EquipmentItem } from '@/components/equipment-item';
import { KCosmeticItem } from '@/components/k-cosmetic-item';
import { KoreanCosmeticItem } from '@/components/korean-cosmetic';
import { LocationItem } from '@/components/location-item';
import { SpecialItem } from '@/components/special-item';
import {
	ChevronRight,
	Clock3,
	Globe,
	Instagram,
	InstagramIcon,
	Mail,
	MapPin,
	MenuIcon,
	PlusIcon,
	RssIcon,
	YoutubeIcon,
} from 'lucide-react';
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from '@/components/ui/accordion';
import Carousel from '@/components/carousel';
import { useState } from 'react';

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

const locationitem = [
	{ title: 'Cheongna', address:"594, Jungbong-daero, Seo-gu, Incheon, Republic of Korea" },
	{ title: 'Yongsan', address:"address 'Yongsan" },
	{ title: 'Seoul National University', address:"address 'Seoul National University" },
	{ title: 'Siheung', address:"address 'Siheung" },
	{ title: 'Benjamin', address:"address 'Benjamin" },
	{ title: 'Pyeongtaek', address:"address 'Pyeongtaek" },
	{ title: 'Gangseo', address:"address 'Gangseo" },
	{ title: 'Artin', address:"address 'Artin" },
	{ title: 'Gwangjang', address:"address 'Gwangjang" },
	{ title: 'Pohang', address:"address 'Pohang" },
	{ title: 'Gwangmyeong', address:"address 'Gwangmyeong" },
	{ title: 'Morgan', address:"address 'Morgan" },
	{ title: 'Songdo', address:"address 'Songdo" },
];

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

const equiptmentitem = [
	{
		title: 'Thermage FLX',
		image: 'img/equipment/thermageflx.png',
		description: 'Skin texture, Skin tone improvement Anti-aging',
	},
	{
		title: 'Ulthera',
		image: '/img/equipment/ulthera.png',
		description: 'Deep Wrinkles, Lifting Elasticity',
	},
	{
		title: 'Vbeam-Perfecta',
		image: '/img/equipment/VbeamPerfecta.png',
		description: 'Acne, Redness, Hemangioma Rosacea, Scar',
	},
];

export default function Home() {
	const [selectedLocation, setSelectedLocation] = useState(locationitem[0]); 
	return (
		<div>
			<Carousel />
			{/* special program */}
			<div className="py-20 lg:py-40 bg-primary-50 flex flex-col justify-center items-center">
				<p className="text-lg mb-4 lg:mb-8">K-Beauty Cosmetic Clinic</p>
				<h2 className="mb-10 lg:mb-20 text-center">
					SPECIAL CARE PROGRAM
				</h2>
				{/* slider item */}
				<div className="w-full px-[5vw] flex flex-row overflow-y-auto justify-start items-stretch gap-5 lg:gap-20">
					{specialitem.map((item) => (
						<div key={item.image}>
							<SpecialItem
								image={item.image}
								title={item.title}
								description={item.description}
								cons={item.cons}
								url={item.url}
								isHome
							/>
						</div>
					))}
				</div>
			</div>
			{/* cosmetic clinic */}
			<div className="py-20 lg:py-40 px-[5vw] flex flex-col justify-center items-center">
				<h2 className="mb-4 lg:mb-8 text-center">
					K-Beauty Cosmetic Clinic
				</h2>
				<p className="text-lg lg:w-[50vw] text-center mb-10 lg:md-20">
					At K-Beauty Cosmetic Clinic, we offer advanced skin
					whitening, lifting, laser therapy, Botox, fillers, and hair
					transplants, delivering natural, personalized results with
					cutting-edge techniques.
				</p>
				<h3 className="text-primary-500 lg:mb-20 mb-10">
					Skin Health News
				</h3>
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
			{/* contact us */}
			<div className="bg-primary-50 gap-0 pt-20 lg:pt-0 lg:py-0 flex lg:flex-row flex-col justify-between items-center lg:gap-[5vw] lg:pl-[10vw] lg:px-0 px-[5vw]">
				<div>
					<h2 className="mb-5">Any Questions? Contact Us!</h2>
					<p className="text-lg mb-8">
						HUMAN CHEONGNA offers safe and professional cosmetic
						treatments. If you have any questions or would like a
						consultation, feel free to contact us! We’ll assist you
						quickly and professionally.
					</p>
					<a href="#" className="w-full lg:w-fit">
						<Button className="rounded-full w-full lg:w-fit lg:min-w-52">
							Contact Us
						</Button>
					</a>
				</div>
				<div className="hidden lg:flex justify-end w-full">
					<img src="/img/faq-cover.png" alt="" className="" />
				</div>
				<div className="flex -mr-[10vw] justify-end w-full lg:hidden">
					<img src="/img/faq-cover-mb.png" alt="" className="" />
				</div>
			</div>
			{/* k cosmetic & FAQ  */}
			<div className="py-20 lg:py-40 px-[5vw] flex flex-col justify-center items-center bg-[#F7F8FA]">
				<h2 className="mb-8 text-center">Korean cosmetics</h2>
				<p className="text-lg lg:w-[50vw] text-center mb-10 lg:mb-20">
					Trust in high-quality beauty products that are medically
					approved and backed by expert research for safe and
					effective results.
				</p>
				<div className="flex flex-col lg:grid grid-flow-row grid-cols-3 gap-10 lg:gap-20 items-stretch overflow-hidden">
					{koreanCosmeticItem.map((item) => (
						<div key={item.image}>
							<KoreanCosmeticItem
								title={item.title}
								description={item.description}
								image={item.image}
								url={item.url}
								isHome
							/>
						</div>
					))}
				</div>
				{/* faq */}
				<Accordion
					className="w-full mt-20 lg:mt-40"
					type="single"
					collapsible
				>
					<AccordionItem
						className="border-t border-black/10 w-full"
						value="item-1"
					>
						<AccordionTrigger className="w-full flex justify-between items-center">
							<h4 className="text-md/10">
								<span className="mr-1.5">Q.</span>
								<span>
									Is this product safe for all skin types?
								</span>
							</h4>
						</AccordionTrigger>
						<AccordionContent>
							It depends on the procedure. Simple laser treatments
							or chemical peels allow same-day departure. However,
							for lifting, fillers, or Botox, it&apos;s
							recommended to stay for 1-3 days for proper
							recovery. Surgical treatments (e.g., skin excision)
							may require a minimum recovery period of 5-7 days.
						</AccordionContent>
					</AccordionItem>
					<AccordionItem className="w-full" value="item-2">
						<AccordionTrigger className="w-full flex justify-between items-center">
							<h4 className="text-md/10">
								<span className="mr-1.5">Q.</span>
								<span>
									What ingredients are included, and is this
									product non-irritating?
								</span>
							</h4>
						</AccordionTrigger>
						<AccordionContent>
							It depends on the procedure. Simple laser treatments
							or chemical peels allow same-day departure. However,
							for lifting, fillers, or Botox, it&apos;s
							recommended to stay for 1-3 days for proper
							recovery. Surgical treatments (e.g., skin excision)
							may require a minimum recovery period of 5-7 days.
						</AccordionContent>
					</AccordionItem>
					<AccordionItem className="w-full" value="item-3">
						<AccordionTrigger className="w-full flex justify-between items-center">
							<h4 className="text-md/10">
								<span className="mr-1.5">Q.</span>
								<span>
									How do skin experts recommend this product?
								</span>
							</h4>
						</AccordionTrigger>
						<AccordionContent>
							It depends on the procedure. Simple laser treatments
							or chemical peels allow same-day departure. However,
							for lifting, fillers, or Botox, it&apos;s
							recommended to stay for 1-3 days for proper
							recovery. Surgical treatments (e.g., skin excision)
							may require a minimum recovery period of 5-7 days.
						</AccordionContent>
					</AccordionItem>
				</Accordion>
				<a href="#" className="mt-10 w-full lg:w-fit">
					<Button className="w-full lg:w-96" variant="outline">
						LEARN MORE
					</Button>
				</a>
			</div>
			{/* equipment */}
			<div className="py-20 lg:py-40 px-[5vw] flex flex-col justify-center items-center">
				<h2 className="mb-4 lg:mb-8 text-center">
					Equipment & Technology
				</h2>
				<p className="text-lg lg:w-[50vw] text-center mb-10 lg:mb-20">
					We pursue the highest level of effectiveness and safety
					through continuous investment and upgrades in laser
					technology and equipment.
				</p>
				<div className="w-full flex flex-col lg:grid grid-flow-row grid-cols-3 gap-10 lg:gap-20">
					{equiptmentitem.map((item) => (
						<a href='#' key={item.image} >
							<EquipmentItem
								title={item.title}
								description={item.description}
								image={item.image}
							/>
						</a>
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
			{/* location */}
			<div className="py-20 lg:py-40 px-[5vw] border-t border-black/10">
				<h2 className="mb-10">Our Location</h2>
				<div className="flex justify-start gap-5 w-full flex-nowrap overflow-auto lg:flex-wrap">
					{locationitem.map((item) => (
						<a href="#" key={item.title} onClick={()=> setSelectedLocation(item)}>
							<LocationItem title={item.title} />
						</a>
					))}
				</div>
				<div className="bg-[#F7F8FA] px-10 mt-10">
					<div className="py-10 border-b border-black/10">
						<h4 className="flex justify-start items-center gap-3 mb-5">
							<MapPin className="size-6 shrink-0" />
						{selectedLocation.address}	
						</h4>
						<p className="font-medium">
							HUMAN is located near Incheon Airport,
							<span className="mr-1 ml-1 text-primary-500">
								just a 30-minute drive
							</span>
							from the airport
						</p>
					</div>
					<div className="py-10">
						<h4 className="flex justify-start items-center gap-3 mb-5">
							<Clock3 size="24" />
							Opening Hour
						</h4>
						<div className="grid max-w-[300px] grid-flow-row grid-cols-2 gap-5">
							<p className="font-medium">MON, WED, FRI</p>
							<p className="font-semibold">10:00 - 20:30</p>
							<p className="font-medium">TUE, THU</p>
							<p className="font-semibold">10:00 - 19:00</p>
							<p className="font-medium">SAT</p>
							<p className="font-semibold">10:00 - 16:00</p>
						</div>
					</div>
				</div>
				<iframe
					src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3163.9554716707385!2d126.64770367603398!3d37.532546926076094!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357b7fac82371413%3A0xaa3062c016d9960d!2s594%20Jungbong-daero%2C%20Seo-gu%2C%20Incheon%2C%20H%C3%A0n%20Qu%E1%BB%91c!5e0!3m2!1svi!2s!4v1741057813537!5m2!1svi!2s"
					width="100%"
					height="400"
					loading="lazy"
					className="mt-10"
				></iframe>
			</div>
			{/* FAQ  */}
			<div className="py-20 lg:py-40 px-[5vw] flex flex-col justify-center items-center bg-[#F7F8FA]">
				<h2 className="mb-20">FAQ</h2>
				<Accordion className="w-full" type="single" collapsible>
					<AccordionItem
						className="border-t border-black/10 w-full"
						value="item-1"
					>
						<AccordionTrigger className="w-full flex justify-between items-center">
							<h4 className="text-md/10">
								<span className="mr-1.5">Q.</span>
								<span>
									Do I need a visa to receive dermatology
									treatment in Korea?
								</span>
							</h4>
						</AccordionTrigger>
						<AccordionContent>
							It depends on the procedure. Simple laser treatments
							or chemical peels allow same-day departure. However,
							for lifting, fillers, or Botox, it&apos;s
							recommended to stay for 1-3 days for proper
							recovery. Surgical treatments (e.g., skin excision)
							may require a minimum recovery period of 5-7 days.
						</AccordionContent>
					</AccordionItem>
					<AccordionItem className="w-full" value="item-2">
						<AccordionTrigger className="w-full flex justify-between items-center">
							<h4 className="text-md/10">
								<span className="mr-1.5">Q.</span>
								<span>
									Can I return to Vietnam immediately after
									the procedure, or do I need to stay in Korea
									for a few days?
								</span>
							</h4>
						</AccordionTrigger>
						<AccordionContent>
							It depends on the procedure. Simple laser treatments
							or chemical peels allow same-day departure. However,
							for lifting, fillers, or Botox, it&apos;s
							recommended to stay for 1-3 days for proper
							recovery. Surgical treatments (e.g., skin excision)
							may require a minimum recovery period of 5-7 days.
						</AccordionContent>
					</AccordionItem>
					<AccordionItem className="w-full" value="item-3">
						<AccordionTrigger className="w-full flex justify-between items-center">
							<h4 className="text-md/10">
								<span className="mr-1.5">Q.</span>
								<span>
									What are the most popular and effective
									dermatology treatments?
								</span>
							</h4>
						</AccordionTrigger>
						<AccordionContent>
							It depends on the procedure. Simple laser treatments
							or chemical peels allow same-day departure. However,
							for lifting, fillers, or Botox, it&apos;s
							recommended to stay for 1-3 days for proper
							recovery. Surgical treatments (e.g., skin excision)
							may require a minimum recovery period of 5-7 days.
						</AccordionContent>
					</AccordionItem>
				</Accordion>
				{/* learn more btn */}
				<a href="#" className="w-full lg:w-fit mt-10">
					<Button className="w-full lg:w-96" variant="outline">
						LEARN MORE
					</Button>
				</a>
			</div>
			{/* video */}
			<div className="w-[100vw] h-[29vw] bg-[url(/img/video-hero-img.png)] bg-center bg-cover bg-no-repeat"></div>
		</div>
	);
}
