export interface DoctorItemProps {
	title: string;
	department: string;
	image: string;
	award: string[];
}
export const DoctorItem = ({
	title,
	department,
	image,
	award,
}: DoctorItemProps) => {
	return (
		<div className="DoctorItem">
			<div className="mt-10 flex flex-col lg:flex-row justify-start items-center pb-10 border-b border-black/10">
				<img src={image} alt="" className="shrink-0 flex-1" />
				<div className="w-full px-0 pt-10 lg:p-10">
					<div className="w-full flex flex-col lg:flex-row items-start gap-3 lg:gap-0 justify-between lg:items-center">
						<h3>{title}</h3>
						<p className="text-lg font-semibold">{department}</p>
					</div>
					<ul className="list-disc ml-5 mt-10">
						{award.map((i) => (
							<li key={i}>{i}</li>
						))}
					</ul>
				</div>
			</div>
		</div>
	);
};
