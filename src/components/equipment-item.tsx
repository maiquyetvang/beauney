export interface EquipmentItemProps {
	title: string;
	description: string;
	image: string;
}

export const EquipmentItem = ({
	title,
	description,
	image,
}: EquipmentItemProps) => {
	return (
		<div className="EquipmentItem">
			<img src={image} alt="" className="w-full" />
			<div className="flex p-8 gap-4 flex-col w-full">
				<h4 className="text-center">{title}</h4>
				<p className="text-center">{description}</p>
			</div>
		</div>
	);
};
