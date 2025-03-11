/* eslint-disable @next/next/no-img-element */
/* eslint-disable @next/next/no-html-link-for-pages */
import { HomeIcon } from 'lucide-react';

export default function Home() {
	return (
		<div>
			{' '}
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
					<a href="/news">News</a>
					<div className="w-2 h-2 bg-black/30 rounded-full"></div>
					<p>Skin Whitening Treatments</p>
				</div>
				{/* introduce */}
				<div className="pt-0 p-0 lg:p-20 flex flex-col justify-center items-center">
					<h2 className="mb-10">Skin Whitening Treatments</h2>
					<img src="/img/k-cosmetic/SWT.png" alt="" />
					<p className="mt-10">
						Achieve a brighter and more even skin tone.
					</p>
				</div>
			</div>
		</div>
	);
}
