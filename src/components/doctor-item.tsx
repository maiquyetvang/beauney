/* eslint-disable @next/next/no-img-element */
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
      <div className="mt-10 flex flex-col items-center justify-start border-b border-black/10 pb-10 lg:flex-row">
        <img src={image} alt="" className="flex-1 shrink-0" />
        <div className="w-full px-0 pt-10 lg:p-10">
          <div className="flex w-full flex-col items-start justify-between gap-3 lg:flex-row lg:items-center lg:gap-0">
            <h3>{title}</h3>
            <p className="text-lg font-semibold">{department}</p>
          </div>
          <ul className="mt-10 ml-5 list-disc">
            {award.map((i) => (
              <li key={i}>{i}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
