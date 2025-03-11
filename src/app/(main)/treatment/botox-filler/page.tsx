/* eslint-disable @next/next/no-img-element */
/* eslint-disable @next/next/no-html-link-for-pages */
import { CheckCircle2, HomeIcon } from 'lucide-react';

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
					<a href="/treatment">Treatment</a>
					<div className="w-2 h-2 bg-black/30 rounded-full"></div>
					<p>Botox / Filler</p>
				</div>
				{/* introduce */}
				<div className="pt-0 p-0 lg:p-20 flex flex-col justify-center items-center">
					<h2 className="mb-5 text-center">
						Melasma / Pigmentation / Blemishes
					</h2>
					<p className="w-full lg:w-[50vw] text-center mb-10">
						Melasma, pigmentation, and blemishes—treatment varies
						depending on the type of pigmentation. All premium laser
						treatments for pigmentation are available here!
					</p>
					<div className="w-full lg:w-[480px] rounded-full overflow-hidden">
						<img
							src="/img/special-treatment/botox-filler.png"
							alt=""
						/>
					</div>
				</div>
				{/* program */}
				<div className="py-10">
					<h4>PROGRAM</h4>
					<div className="flex flex-col lg:flex-row justify-center items-stretch gap-10 mt-10">
						<div className="flex flex-col flex-1 justify-start items-center bg-[#FFF1ED] p-10">
							<img
								src="/img/bf-p-1.png"
								alt=""
								className="size-24 mb-5"
							/>
							<div>
								<p className="text-lg mb-3 text-center font-semibold">
									Safely Treat Various Pigmentation Conditions
								</p>
								<p className="text-center">
									Using premium laser treatments such as
									RevLite SI, PicoSure Pro, GentleMax, ICON,
									PicoWay®, Noliss, and StarWalker, we provide
									safe and effective pigmentation treatments.
								</p>
							</div>
						</div>
						<div className="flex flex-col flex-1 justify-start items-center bg-[#FFF1ED] p-10">
							<img
								src="/img/bf-p-2.png"
								alt=""
								className="size-24 mb-5"
							/>
							<div>
								<p className="text-lg mb-3 text-center font-semibold">
									Precision Diagnosis and Laser Selection
								</p>
								<p className="text-center">
									Through precise diagnosis, we determine the
									type, depth, and cause of pigmentation and
									select the most suitable laser treatment to
									correct pigmentation disorders and suppress
									melanin activity.
								</p>
							</div>
						</div>
					</div>
				</div>
				{/* cause */}
				<div className="py-10">
					<h4>CAUSE</h4>
					<div className="flex flex-col lg:flex-row gap-10 justify-between items-start mt-10">
						<ul>
							<li className="flex justify-start items-center gap-5">
								<div className="size-20 bg-[#FFF1ED] flex justify-center shrink-0 items-center rounded-full">
									<img
										src="/img/bf-c-uv.png"
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
										src="/img/bf-c-underlying.png"
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
										src="/img/bf-c-stress.png"
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
				{/* info */}
				<div className="py-10">
					<h4>INFORMATION</h4>
					<ul className="flex flex-col justify-start items-start gap-5 p-10 mt-10 bg-[#F7F8FA]">
						<li className="flex flex-col lg:flex-row justify-start items-start lg:items-center gap-1 lg:gap-3">
							<div className="w-52 flex justify-start items-center">
								<p className="bg-primary-500 text-white size-5 rounded-full flex justify-center items-center font-medium">
									1
								</p>
								<p className="ml-4 font-semibold">
									Procedure Time
								</p>
							</div>
							<p className="ml-[36px]">
								If you have melasma around the eyes, cheekbones,
								or temples.
							</p>
						</li>
						<li className="flex flex-col lg:flex-row justify-start items-start lg:items-center gap-1 lg:gap-3">
							<div className="w-52 flex justify-start items-center">
								<p className="bg-primary-500 text-white size-5 rounded-full flex justify-center items-center font-medium">
									2
								</p>
								<p className="ml-4 font-semibold">
									Treatment Areas
								</p>
							</div>
							<p className="ml-[36px]">
								Any area requiring improvement
							</p>
						</li>
						<li className="flex flex-col lg:flex-row justify-start items-start lg:items-center gap-1 lg:gap-3">
							<div className="w-52 flex justify-start items-center">
								<p className="bg-primary-500 text-white size-5 rounded-full flex justify-center items-center font-medium">
									3
								</p>
								<p className="ml-4 font-semibold">
									Anesthesia Method
								</p>
							</div>
							<p className="ml-[36px]">
								Topical anesthesia if necessary
							</p>
						</li>
						<li className="flex flex-col lg:flex-row justify-start items-start lg:items-center gap-1 lg:gap-3">
							<div className="w-52 flex justify-start items-center">
								<p className="bg-primary-500 text-white size-5 rounded-full flex justify-center items-center font-medium">
									4
								</p>
								<p className="ml-4 font-semibold">
									Daily Activities
								</p>
							</div>
							<p className="ml-[36px]">
								Immediate return to daily activities
							</p>
						</li>
						<li className="flex flex-col lg:flex-row justify-start items-start lg:items-center gap-1 lg:gap-3">
							<div className="w-52 flex justify-start items-center">
								<p className="bg-primary-500 text-white size-5 rounded-full flex justify-center items-center font-medium">
									5
								</p>
								<p className="ml-4 font-semibold">Duration</p>
							</div>
							<p className="ml-[36px]">3–6 months</p>
						</li>
					</ul>
				</div>
				{/* advantage */}
				<div className="py-10">
					<h4>ADVANTAGE</h4>
					<ul className="flex flex-col justify-start items-start gap-5 p-10 mt-10 bg-[#F7F8FA]">
						<li className="flex justify-start items-center gap-3">
							<CheckCircle2 className="size-5 shrink-0 text-primary-500" />
							Utilizing various advanced devices, we provide
							personalized 1:1 customized treatment based on your
							skin type.
						</li>
						<li className="flex justify-start items-center gap-3">
							<CheckCircle2 className="size-5 shrink-0 text-primary-500" />
							If previous treatments were ineffective or worsened
							your condition, it&apos;s time to choose a new laser
							treatment.
						</li>
						<li className="flex justify-start items-center gap-3">
							<CheckCircle2 className="size-5 shrink-0 text-primary-500" />
							A precise diagnosis is conducted to assess the type,
							depth, cause, and symptoms of pigmentation.
						</li>
						<li className="flex justify-start items-center gap-3">
							<CheckCircle2 className="size-5 shrink-0 text-primary-500" />
							Using the appropriate laser equipment, we treat
							pigmentation disorders and suppress melanin
							activity.
						</li>
						<li className="flex justify-start items-center gap-3">
							<CheckCircle2 className="size-5 shrink-0 text-primary-500" />
							Our comprehensive pigmentation treatment program
							offers the perfect solution for your skin concerns.
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
}
