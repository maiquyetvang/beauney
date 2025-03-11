/* eslint-disable @next/next/no-img-element */
/* eslint-disable @next/next/no-html-link-for-pages */
import { CheckCircle2, HomeIcon } from 'lucide-react';

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
					<a href="/product">Product</a>
					<div className="w-2 h-2 bg-black/30 rounded-full"></div>
					<p>Synergy Soothing Ampoule 35ml</p>
				</div>
				{/* introduce */}
				<div className="pt-0 p-0 lg:p-20 flex flex-col justify-center items-center">
					<h2 className="mb-5">Synergy Soothing Ampoule 35ml</h2>
					<p className="w-full lg:w-[50vw] text-center mb-10">
						Post Rays Line reinforces and protects skin that has
						undergone professional skincare treatment. It is
						specially formulated to strengthen and safeguard your
						skin internally before treatment and to soothe and
						restore it after treatment.
					</p>
					<div className="w-full lg:w-[480px] rounded-full overflow-hidden">
						<img
							src="/img/korean-cosmetic/Synergy Soothing Ampoule 35ml.png"
							alt=""
						/>
					</div>
				</div>
				{/* program */}
				<div className="py-10">
					<div className="flex flex-col rounded-3xl overflow-hidden lg:flex-row justify-center items-stretch gap-[1px] text-white mt-10">
						<div className="flex flex-col flex-1 justify-start items-center bg-primary-300 p-10">
							<div>
								<h4 className="mb-3 h-[58px] font-semibold">
									Cleansing + Peeling
								</h4>
								<p className="text-justify">
									Using premium laser treatments such as
									RevLite SI, PicoSure Pro, GentleMax, ICON,
									PicoWay®, Noliss, and StarWalker, we provide
									safe and effective pigmentation treatments.
								</p>
							</div>
						</div>
						<div className="flex flex-col flex-1 justify-start items-center bg-primary-400 p-10">
							<div>
								<h4 className="mb-3 h-[58px] font-semibold">
									Waste Extraction + Water Supply
								</h4>
								<p className="text-justify">
									Using premium laser treatments such as
									RevLite SI, PicoSure Pro, GentleMax, ICON,
									PicoWay®, Noliss, and StarWalker, we provide
									safe and effective pigmentation treatments.
								</p>
							</div>
						</div>
						<div className="flex flex-col flex-1 justify-start items-center bg-primary-500 p-10">
							<div>
								<h4 className="mb-3 h-[58px] font-semibold">
									Active Ingradient Absorption + Protection{' '}
								</h4>
								<p className="text-justify">
									Using premium laser treatments such as
									RevLite SI, PicoSure Pro, GentleMax, ICON,
									PicoWay®, Noliss, and StarWalker, we provide
									safe and effective pigmentation treatments.
								</p>
							</div>
						</div>
					</div>
				</div>
				{/* introduce-2 */}
				<div className="py-10 w-full">
					<h3 className="mb-5 text-center">
						Hydrafacial, which gives you a noticeable glow
					</h3>
					<p className="px-[10vw] text-center">
						Hydrafacial is the only brand that uses
						Hydrafacial&apos;s patented technology to remove dead
						skin cells and deep cleanse, then extract waste and
						supply moisture. Hydrafacial&apos;s super serum, which
						has proven its effectiveness, is made with nutrients
						that give your skin an instant glow.
					</p>
				</div>
				{/* effect */}
				<div className="py-10">
					<h4>EFFECT</h4>
					<div className="flex flex-col lg:flex-row gap-10 justify-between items-start mt-10">
						<ul>
							<li className="flex justify-start items-center gap-5">
								<div className="size-20 bg-[#FFF1ED] flex justify-center shrink-0 items-center rounded-full">
									<img
										src="/img/e-p-1.png"
										alt=""
										className="w-16 rounded-full"
									/>
								</div>
								<div>
									<p className="font-semibold">
										UV Radiation
									</p>
									<p>
										Prolonged exposure to strong UV
										radiation stimulates melanin-producing
										cells, leading to pigmentation.
									</p>
								</div>
							</li>
							<li className="flex justify-start items-center gap-5 mt-5 mb-5">
								<div className="size-20 bg-[#FFF1ED] flex justify-center shrink-0 items-center rounded-full">
									<img
										src="/img/e-p-2.png"
										alt=""
										className="w-16 rounded-full"
									/>
								</div>
								<div>
									<p className="font-semibold">
										Underlying Health Conditions
									</p>
									<p>
										Metabolic imbalances caused by
										underlying health conditions can disrupt
										the natural skin renewal process,
										leading to melanin buildup and
										pigmentation.
									</p>
								</div>
							</li>
							<li className="flex justify-start items-center gap-5">
								<div className="size-20 bg-[#FFF1ED] flex justify-center shrink-0 items-center rounded-full">
									<img
										src="/img/e-p-3.png"
										alt=""
										className="w-16 rounded-full"
									/>
								</div>
								<div>
									<p className="font-semibold">Stress</p>
									<p>
										Chronic stress, irregular lifestyle
										patterns, and fatigue can trigger
										melanin production, resulting in
										increased pigmentation.
									</p>
								</div>
							</li>
						</ul>
						<div className="w-full lg:w-fit flex justify-end">
							<img src="/img/bf-c-girl.png" alt="" />
						</div>
					</div>
				</div>
				{/* need */}
				<div className="py-10">
					<h4>NEEDS</h4>
					<ul className="p-10 mt-10 bg-[#F7F8FA]">
						<li className="flex justify-start items-center gap-3">
							<CheckCircle2 className="size-5 shrink-0 text-primary-500" />
							If you have melasma around the eyes, cheekbones, or
							temples.
						</li>
						<li className="flex justify-start items-center gap-3 mt-3 mb-3">
							<CheckCircle2 className="size-5 shrink-0 text-primary-500" />
							If you notice irregular brown spots on your face.
						</li>
						<li className="flex justify-start items-center gap-3">
							<CheckCircle2 className="size-5 shrink-0 text-primary-500" />
							If blemishes have developed due to prolonged sun
							exposure, dermatitis, or folliculitis.
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
}
