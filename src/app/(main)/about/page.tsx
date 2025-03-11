/* eslint-disable @next/next/no-img-element */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @next/next/no-html-link-for-pages */
import { Button } from '@/components/button';
import { DoctorItem } from '@/components/doctor-item';
import { HeaderMenuItem } from '@/components/header-menu';
import { Globe, HomeIcon, Instagram, Mail, MenuIcon } from 'lucide-react';

const doctorItem = [
	{
		title: 'Hong Won-kyu',
		image: '/img/doctor/Hong Won-kyu.png',
		department: 'Dermatologist',
		award: [
			'Regular Member of the Korean Dermatological Association',
			'Regular Member of the Korean Acne Society',
			'Regular Member of the Korean Vitiligo Society',
			'Regular Member of the Korean Laser Society',
			'Regular Member of the Korean Hair Society',
			'Regular Member of the Korean Atopic Dermatitis Society',
			'Regular Member of the Korean Society for Aesthetic Dermatology and Surgery',
			'Regular Member of the Korean Society for Anti-Aging Dermatology Research',
		],
	},
	{
		title: 'Byun Sang-young',
		image: '/img/doctor/Byun Sang-young.png',
		department: 'Dermatologist',
		award: [
			'Regular Member of the Korean Dermatological Association',
			'Graduated from Seoul National University College of Medicine',
			'Internship and Dermatology Residency at Seoul National University Hospital',
			'Dermatology Training at Peking University Hospital',
			'Regular Member of the Korean Association of Dermatologists',
			'Regular Member of the Korean Society for Laser Dermatology',
			'Regular Member of the Korean Acne Society',
			'Regular Member of the Korean Academy of Anti-Aging Dermatology (KAAD)',
		],
	},
	{
		title: 'Bang Chan-il',
		image: '/img/doctor/Bang Chan-il.png',
		department: 'Dermatologist',
		award: [
			'Regular Member of the Korean Association of Dermatologists',
			'Regular Member of the Korean Acne Society',
			'Regular Member of the Korean Vitiligo Society',
			'Regular Member of the Korean Society for Laser Dermatology',
			'Regular Member of the Korean Hair Society',
			'Regular Member of the Korean Atopic Dermatitis Society',
			'Regular Member of the Korean Society for Aesthetic Dermatology and Surgery',
			'Regular Member of the Korean Society for Anti-Aging Dermatology Research',
		],
	},
];

export default function Home() {
	return (
		<div>
			<div className="w-[100vw] h-[400px] bg-[url(/img/about-cover.jpg)] bg-center bg-cover bg-no-repeat flex flex-col justify-end pb-15 lg:pb-20 items-center">
				<h1 className="text-center hidden lg:block mb-5 text-white drop-shadow-lg">
					Topclass Medical Team
				</h1>
				<h2 className="text-center block lg:hidden mb-5 text-white drop-shadow-lg">
					Topclass Medical Team
				</h2>
				<h4 className="text-center text-white">
					Let me be your skin doctor for life.
				</h4>
			</div>
			<div className="px-[5vw] py-10 lg:py-[5vw]">
				<div className="flex justify-start items-center gap-3 text-black/50 mb-5">
					<a href="/">
						<HomeIcon className="size-5 shrink-0" />
					</a>
					<div className="w-2 h-2 bg-black/30 rounded-full"></div>
					<p>About Us</p>
				</div>
				<h2 className="mb-10 lg:mb-20">About Us</h2>
				<img src="/img/about.png" alt="" className="mb-10" />
				<div className="flex flex-col justify-start items-start gap-10">
					<div>
						<h4 className="text-primary-500 mb-3">KEY DOCTOR</h4>
						<ul className="list-disc text-lg ml-5">
							<li>Domestic & international announcements</li>
							<li>
								Ulcer, Thermage, V-Ro, Densetry, Radius, etc.
								Development of continuous treatment programs
							</li>
						</ul>
					</div>
					<div>
						<h4 className="text-primary-500 mb-3">
							MEDICAL SPECIALIST
						</h4>
						<ul className="list-disc text-lg ml-5">
							<li>240 square meters</li>
							<li>
								5 dermatologists, including both male and female
								specialists, provide consultations
							</li>
						</ul>
					</div>
					<div>
						<h4 className="text-primary-500 mb-3">ACADEMY</h4>
						<ul className="list-disc text-lg ml-5">
							<li>Constant research</li>
							<li>ULTHERA & THERMAGE</li>
							<li>A variety of academic presentations</li>
						</ul>
					</div>
					<div>
						<h4 className="text-primary-500 mb-3">AWARDED</h4>
						<ul className="list-disc text-lg ml-5">
							<li>
								Only 11 of the world&apos;s doctors are awarded
							</li>
							<li>
								Won the 2022 Overseas Innovation Award and the
								Porom Special Award
							</li>
						</ul>
					</div>
				</div>
			</div>
			<div className="px-[5vw] py-10 lg:py-[5vw] bg-[#F7F8FA]">
				<h2 className="hidden lg:block">
					Meet Korea’s Top Dermatologists
				</h2>
				<h3 className="block lg:hidden">
					Meet Korea’s Top Dermatologists
				</h3>
				<div>
					{doctorItem.map((item) => (
						<div key={item.image}>
							<DoctorItem
								image={item.image}
								title={item.title}
								department={item.department}
								award={item.award}
							/>
						</div>
					))}
				</div>
				{/* learn more btn */}
				<div className="w-full flex justify-center items-center">
					<a href="#" className="w-full lg:w-fit">
						<Button
							className="w-full lg:w-96 mt-10"
							variant="outline"
						>
							LEARN MORE
						</Button>
					</a>
				</div>
			</div>
		</div>
	);
}
