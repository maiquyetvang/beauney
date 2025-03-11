'use client'
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

export interface HeaderMenuItemProps {
	title: string;
	url: string;
}

export const HeaderMenuItem = ({ title, url }: HeaderMenuItemProps) => {
	const pathName = usePathname();
	return (
		<div className="HeaderMenuItem flex justify-start items-center text-center w-full h-13 lg:h-fit">
			<a
				href={url}
				className={cn("w-full px-5 text-text py-3 text-lg lg:hover:text-primary-500",

					(pathName===url || (pathName.includes(url) && url!== '/')) &&"font-semibold text-primary-500 underline",
		)	}
			>
				{title}
			</a>
		</div>
	);
};
