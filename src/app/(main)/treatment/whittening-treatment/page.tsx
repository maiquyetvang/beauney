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
					<p>Whittening Treatment</p>
				</div>
				{/* introduce */}
				<div className="pt-0 p-0 lg:p-20 flex flex-col justify-center items-center">
					<h2 className="mb-5 text-center">
						A procedure that restores lost facial volume and V-line
						in just 10 minutes.
					</h2>
					<p className="w-full lg:w-[50vw] text-center mb-10">
						Petit cosmetic procedures can yield significantly
						different results depending on the expertise and
						precision of the practitioner.
					</p>
					<div className="w-full lg:w-[480px] rounded-full overflow-hidden">
						<img
							src="/img/special-treatment/whitening-treatment.png"
							alt=""
						/>
					</div>
				</div>
				{/* sub introduce */}
				<div className="py-10">
					<div className="flex flex-col lg:flex-row justify-center items-stretch gap-10 mt-10">
						<div className="flex-1 flex flex-col justify-start items-center bg-[#FFF1ED] p-10">
							<p className="text-lg mb-3 text-center font-semibold">
								Botox
							</p>
							<p className="text-center">
								Effective for reducing fine lines on the
								forehead, glabellar lines between the eyebrows,
								and crow’s feet around the eyes, as well as
								reshaping a square jaw.
							</p>
						</div>
						<div className="flex-1 flex flex-col justify-start items-center bg-[#FFF1ED] p-10">
							<p className="text-lg mb-3 text-center font-semibold">
								Filler
							</p>
							<p className="text-center">
								Ideal for enhancing volume and reducing wrinkles
								on the nose bridge, chin, sunken cheeks, and
								lips to create a youthful appearance.
							</p>
						</div>
					</div>
				</div>
				{/* program */}
				<div className="py-10">
					<h4>PROGRAM</h4>
					<div className="flex flex-col lg:flex-row gap-10 justify-between items-start mt-10">
						<ul>
							<li className="flex justify-start items-center gap-5">
								<div className="size-20 bg-[#FFF1ED] flex justify-center shrink-0 items-center rounded-full">
									<img
										src="/img/wt-p-1.png"
										alt=""
										className="w-14 rounded-full"
									/>
								</div>
								<div>
									<p className="font-semibold">
										Various Customized Programs
									</p>
									<p>
										Petit cosmetic procedures can be
										tailored with various programs to
										address individual concerns.
									</p>
								</div>
							</li>
							<li className="flex justify-start items-center gap-5 mt-5 mb-5">
								<div className="size-20 bg-[#FFF1ED] flex justify-center shrink-0 items-center rounded-full">
									<img
										src="/img/wt-p-2.png"
										alt=""
										className="w-14 rounded-full"
									/>
								</div>
								<div>
									<p className="font-semibold">
										Minimal Pain and Discomfort
									</p>
									<p>
										Filler or Botox procedures are performed
										with minimal pain and discomfort.
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
					<ul className="flex gap-5 flex-col p-10 mt-10 bg-[#F7F8FA]">
						<li className="font-medium text-lg">
							Botox / Filler is Recommended for:
						</li>
						<li className="flex justify-start items-center gap-3">
							<CheckCircle2 className="size-5 shrink-0 text-primary-500" />
							For those with a square jaw that makes their face
							look larger and more angular.
						</li>
						<li className="flex justify-start items-center gap-3">
							<CheckCircle2 className="size-5 shrink-0 text-primary-500" />
							For those who desire a smaller and softer facial
							contour.
						</li>
						<li className="flex justify-start items-center gap-3">
							<CheckCircle2 className="size-5 shrink-0 text-primary-500" />
							For those who want to achieve a V-line conveniently
							without disrupting daily life.
						</li>
						<li className="flex justify-start items-center gap-3">
							<CheckCircle2 className="size-5 shrink-0 text-primary-500" />
							For those concerned about wrinkles that appear with
							facial expressions.
						</li>
						<li className="flex justify-start items-center gap-3">
							<CheckCircle2 className="size-5 shrink-0 text-primary-500" />
							For those looking to improve skin elasticity and
							fine wrinkles.
						</li>
						<li className="flex justify-start items-center gap-3">
							<CheckCircle2 className="size-5 shrink-0 text-primary-500" />
							For those who want to slim down thick and muscular
							calves or upper arms.
						</li>
						<li className="flex justify-start items-center gap-3">
							<CheckCircle2 className="size-5 shrink-0 text-primary-500" />
							For those who want to soften and feminize the
							appearance of prominent trapezius muscles.
						</li>
						<li className="flex justify-start items-center gap-3">
							<CheckCircle2 className="size-5 shrink-0 text-primary-500" />
							For those seeking a simple injection treatment to
							reduce sweat and body odor.
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
								Approximately 20–30 minutes (Full face)
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
							Botox is effective for correcting fine lines on the
							forehead, glabella, eye area, and nasal bridge, as
							well as reshaping a square jaw.
						</li>
						<li className="flex justify-start items-center gap-3">
							<CheckCircle2 className="size-5 shrink-0 text-primary-500" />
							Botox is categorized into small muscle, large
							muscle, and skin Botox, improving various areas
							effectively.
						</li>
						<li className="flex justify-start items-center gap-3">
							<CheckCircle2 className="size-5 shrink-0 text-primary-500" />
							Design fillers use hyaluronic acid to restore volume
							to areas with wrinkles or sunken appearance.
						</li>
						<li className="flex justify-start items-center gap-3">
							<CheckCircle2 className="size-5 shrink-0 text-primary-500" />
							Custom-designed fillers enhance volume for a natural
							and well-defined facial contour.
						</li>
						<li className="flex justify-start items-center gap-3">
							<CheckCircle2 className="size-5 shrink-0 text-primary-500" />
							Botox and fillers focus on precise injection by
							analyzing facial proportions and fat distribution.
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
}
