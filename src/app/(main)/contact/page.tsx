/* eslint-disable @next/next/no-html-link-for-pages */
import { Button } from '@/components/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { HomeIcon } from 'lucide-react';

const consultField = [
	{ field: 'Skin Whitening', id: 'skinwhitening' },
	{ field: 'Botox', id: 'botox' },
	{ field: 'Filler', id: 'filler' },
	{ field: 'Ultherapy & Thermage Dual Lifting', id: 'ultherapy' },
	{ field: 'Skin booster', id: 'skinbooster' },
	{ field: 'Hair transplant', id: 'hairtransplant' },
	{ field: 'Other ', id: 'other' },
];

export default function Home() {
	return (
		<div>
			<div className="w-[100vw] h-[400px] bg-[url(/img/about-cover.jpg)] bg-center bg-cover bg-no-repeat flex flex-col justify-end pb-15 lg:pb-20 items-center">
				<h1 className="text-center hidden lg:block mb-5 text-white drop-shadow-lg">
					Any Questions? Contact Us!
				</h1>
				<h2 className="text-center block lg:hidden mb-5 text-white drop-shadow-lg">
					Any Questions? Contact Us!
				</h2>
				<h4 className="text-center text-white">
					K Beauty provides safe and professional cosmetic treatments.
					Feel free to contact us for any inquiries or consultations.
				</h4>
			</div>
			<div className="px-[5vw] py-10 lg:py-[5vw]">
				<div className="flex justify-start items-center gap-3 text-black/50 mb-5">
					<a href="/">
						<HomeIcon className="size-5 shrink-0" />
					</a>
					<div className="w-2 h-2 bg-black/30 rounded-full"></div>
					<p>Contact</p>
				</div>
				<h2 className="mb-10 lg:mb-20">Contact</h2>
				<form>
					<h4 className="!font-normal">
						Please select the field you would like to consult.
					</h4>
					<div className="mt-7 flex flex-col lg:grid grid-cols-2 gap-3 w-full pb-10 border-b border-black/10">
						{consultField.map((item) => (
							<div key={item.field}>
								<div className="cursor-pointer lg:hover:text-primary-500 active:bg-primary-50 px-6 h-14 bg-[#F7F8FA] text-lg font-medium flex justify-between items-center gap-5 has-checked:bg-primary-50 lg:hover:has-checked:bg-primary-50 has-checked:text-primary-500 has-checked:font-medium rounded-lg">
									<div className="flex-1 h-full">
										<label
											htmlFor={item.id}
											className="flex justify-start items-center !w-full cursor-pointer h-full"
										>
											{item.field}
										</label>
									</div>
									<Checkbox id={item.id} />
								</div>
							</div>
						))}
					</div>
					<h4 className="!font-normal mt-10">
						Please enter your information for a quick consultation.
					</h4>
					<div className="mt-5 flex flex-col justify-start items-start gap-4">
						<Input
							className="bg-[#F7F8FA] border-none text-lg"
							type="name"
							id="name"
							placeholder="Enter your name"
						/>
						<Input
							className="bg-[#F7F8FA] border-none text-lg"
							type="phone"
							id="phone"
							placeholder="Enter your phone number"
						/>
						<Input
							className="bg-[#F7F8FA] border-none text-lg"
							type="email"
							id="email"
							placeholder="Enter your email address"
						/>
						<Textarea
							className="bg-[#F7F8FA] border-none text-lg resize-none"
							placeholder="Enter your message"
							id="message"
						/>
					</div>
					<div className="flex justify-center items-center">
						<Button
							type="submit"
							variant="primary"
							className="w-full lg:w-[400px] mt-10"
						>
							Send
						</Button>
					</div>
				</form>
			</div>
		</div>
	);
}
