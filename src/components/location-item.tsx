import { cn } from "@/lib/utils";

export interface LocationItemProps {
	title: string;
	isActive?: boolean
}

export const LocationItem = ({ title, isActive }: LocationItemProps) => {
	return (
		<div className="LocationItem">
			<button className={cn("px-5 py-4 text-lg bg-black/3 w-fit text-nowrap  lg:hover:bg-primary-100",
				isActive && "text-primary-500 bg-primary-50"
			)}>
				{title}
			</button>
		</div>
	);
};
