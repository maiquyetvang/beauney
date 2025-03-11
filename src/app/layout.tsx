import { Button } from '@/components/button';
import { HeaderMenuItem } from '@/components/header-menu';
import {
	ArrowDown,
	Globe,
	Instagram,
	Mail,
	MenuIcon,
	RssIcon,
	XIcon,
	YoutubeIcon,
} from 'lucide-react';
import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import Link from 'next/link';

const headerMenuItem = [
	{ title: 'HOME', url: '/' },
	{ title: 'ABOUT US', url: '/about' },
	{ title: 'TREATMENT', url: '/treatment' },
	{ title: 'PRODUCT', url: '/product' },
	{ title: 'NEWS', url: '/news' },
	{ title: 'CONTACT', url: '/contact' },
];

const geistSans = Geist({
	variable: '--font-geist-sans',
	subsets: ['latin'],
});

const geistMono = Geist_Mono({
	variable: '--font-geist-mono',
	subsets: ['latin'],
});

export const metadata: Metadata = {
	title: 'Beauney',
	description: 'K beauney',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body
				className={`${geistSans.variable} ${geistMono.variable} antialiased`}
			>
				{/* header */}
				<header className="w-[100vw] bg-white flex justify-between items-center pl-[5vw] pr-3 lg:px-[5vw] py-5 fixed z-10">
					<Link href="/" className="shrink-0">
						<img src="/logo.svg" alt="logo" />
					</Link>
					{/* navigation item */}
					<div className="hidden lg:flex justify-center gap-5">
						{headerMenuItem.map((item) => (
							<div key={item.title}>
								<HeaderMenuItem
									title={item.title}
									url={item.url}
								/>
							</div>
						))}
					</div>
					<div className="hidden lg:flex justify-center items-center gap-4">
						<a href="#">
							<Button variant="outline" className="rounded-full">
								<Instagram className="size-5 shrink-0" />
							</Button>
						</a>
						<a href="#">
							<Button variant="outline" className="rounded-full">
								<Mail className="size-5 shrink-0" />
							</Button>
						</a>
						<a href="#">
							<Button variant="outline" className="rounded-full">
								<Globe className="size-5 shrink-0" />
							</Button>
						</a>
					</div>
					<div className="bg-white hidden fixed top-[92px] left-0 w-[100vw] p-5 pb-10">
						<div className="flex flex-col justify-center gap-5 pb-5">
							{headerMenuItem.map((item) => (
								<div key={item.title}>
									<HeaderMenuItem
										title={item.title}
										url={item.url}
									/>
								</div>
							))}
						</div>
						<div className="flex justify-center items-center gap-4">
							<a href="#">
								<Button
									variant="outline"
									className="rounded-full"
								>
									<Instagram className="size-5 shrink-0" />
								</Button>
							</a>
							<a href="#">
								<Button
									variant="outline"
									className="rounded-full"
								>
									<Mail className="size-5 shrink-0" />
								</Button>
							</a>
							<a href="#">
								<Button
									variant="outline"
									className="rounded-full"
								>
									<Globe className="size-5 shrink-0" />
								</Button>
							</a>
						</div>
					</div>
					<Button className="lg:hidden">
						<MenuIcon className="size-5 shrink-0" />
					</Button>
				</header>
				{children}
				{/* chat button */}
				<div className="flex gap-3 flex-col items-end fixed bottom-5 right-5">
					<div className="px-3 py-2 bg-white border border-black/10 shadow-lg rounded-2xl relative">
						<div className="flex gap-1 items-center">
							Click Button belows to{' '}
							<span className="font-semibold">Start a Chat</span>
							with us!
							<ArrowDown className="size-4" />
						</div>
						<button className="size-5 absolute -top-2 -right-2 bg-white border border-black/10 flex justify-center items-center rounded-full shadow-sm">
							<XIcon className="size-3 shrink-0" />
						</button>
					</div>
					<button className="border border-black/10 p-3 bg-white/50 backdrop-blur-lg shadow-lg rounded-full">
						<img src="/chat-buble.svg" alt="" className="size-12" />
					</button>
				</div>
				{/* footer */}
				<footer className="px-[5vw] py-20 bg-primary-900 flex flex-col text-white justify-center items-center gap-10">
					<img src="/logo-reverse.png" alt="" className="w-14" />
					<p className="font-light text-primary-100 text-center">
						Name of medical institution : HUMAN Dermatology Clinic
						CHEONGNA
						<br />
						Address : 594, Jungbong-daero, Seo-gu, Incheon, Republic
						of Korea <br />
						Rpresentative : WONKYU HONG <br />
						Busiess registration number : 137-21-83614 <br />
						Representative number : 032-283-3335 <br />
						<br />© HUMAN DERMATOLOGY CLINIC. ALL RIGHTS RESERVED
					</p>
					<div className="flex justify-center gap-5">
						<a href="#">
							<Button className="rounded-full">
								<Instagram className="size-5 shrink-0 text-neutral-800" />
							</Button>
						</a>
						<a href="#">
							<Button className="rounded-full">
								<RssIcon className="size-5 shrink-0 text-neutral-800" />
							</Button>
						</a>
						<a href="#">
							<Button className="rounded-full">
								<YoutubeIcon className="size-5 shrink-0 text-neutral-800" />
							</Button>
						</a>
					</div>
				</footer>
			</body>
		</html>
	);
}
