'use client';

import { cn } from '@/lib/utils';
import { usePathname } from 'next/navigation';

export interface HeaderMenuItemProps {
  title: string;
  url: string;
  className?: string;
}
export const specialItems = [
  {
    title: 'Whitening Treatment',
    image: 'img/special-treatment/whitening-treatment.png',
    description: 'For a bright, flawless complexion',
    cons: [
      'Brighten and even out skin tone',
      'Improve dull and pigmented skin',
      'The secret of your youthful face',
    ],
    url: '/treatment/whittening-treatment',
  },
  {
    title: 'Botox/Filler',
    image: 'img/special-treatment/botox-filler.png',
    description: 'Add volume to the hollow areas and lift the lower areas',
    cons: [
      'Face volume up',
      'Become young without surgery',
      'The secret of your youthful face',
    ],
    url: '/treatment/botox-filler',
  },
  {
    title: 'Ultherapy & Thermage Dual Lifting',
    image: 'img/special-treatment/ultherapy.png',
    description: 'For a slimmer, more defined face',
    cons: [
      'Lift and tighten sagging skin',
      'Double effect of elasticity & contouring',
      'Attractive Facial Contour',
    ],
    url: '/treatment/ultherapy',
  },
  {
    title: 'Skin Booster',
    image: 'img/special-treatment/skin-booster.png',
    description: 'Skin Solution for My Precious Skin',
    cons: [
      'Lively and clear skin',
      'Time to restore the skin’s age',
      'The beginning skin confidence',
    ],
    url: '/treatment/skin-booster',
  },
  {
    title: 'Hair Transplant',
    image: 'img/special-treatment/hair-transplant.png',
    description: 'For Natural, Healthy Hair Growth',
    cons: [
      'Permanent solution for hair loss',
      'Natural hairline and density',
      'Personalized treatment for optimal results',
    ],
    url: '/treatment/hair-transplant',
  },
];

export const HeaderMenuItem = ({
  title,
  url,
  className,
}: HeaderMenuItemProps) => {
  const pathName = usePathname();
  return (
    <div
      className={cn(
        'HeaderMenuItem flex h-13 w-full items-center justify-start text-center font-medium lg:h-fit',
        className,
        (pathName === url || (pathName.includes(url) && url !== '/')) && ' ',
      )}
    >
      <a
        href={url}
        className={cn(
          'text-text w-full truncate px-5 py-3 text-lg lg:hover:text-[#BB1D96]',
          (pathName === url || (pathName.includes(url) && url !== '/')) &&
            'border-b-[2px] border-[#BB1D96] text-[#BB1D96]',
        )}
      >
        {title}
      </a>
    </div>
  );
};

export const HeaderNavigation = () => {
  const pathname = usePathname();

  const isTreatmentActive = pathname.includes('/treatment');

  return (
    <div className="hidden justify-center gap-5 lg:flex">
      <HeaderMenuItem title="HOME" url="/" />
      <HeaderMenuItem title="ABOUT US" url="/about" />
      <div className="group relative">
        <a
          href="/treatment"
          className={cn(
            'HeaderMenuItem flex h-13 w-full cursor-pointer items-center justify-start text-center lg:h-fit',
            isTreatmentActive && '',
          )}
        >
          <div
            className={cn(
              'text-text flex w-full items-center justify-center gap-1 px-5 py-3 text-lg lg:hover:text-[#BB1D96]',
              isTreatmentActive &&
                'border-b-[2px] border-[#BB1D96] font-semibold text-[#BB1D96]',
            )}
          >
            TREATMENT
          </div>
        </a>

        <div
          className={cn(
            'absolute left-0 z-10 hidden w-fit rounded-sm bg-white shadow-lg transition-all duration-300 ease-in-out lg:group-hover:block',
          )}
        >
          <div className="text-normal truncate">
            {specialItems.map((item) => (
              <a
                key={item.url}
                href={item.url}
                className="block px-4 py-3 text-gray-800 hover:bg-gray-100 hover:text-[#BB1D96]"
              >
                {item.title}
              </a>
            ))}
          </div>
        </div>
      </div>

      <HeaderMenuItem title="PRODUCT" url="/product" />
      <HeaderMenuItem title="NEWS" url="/news" />
      <HeaderMenuItem title="CONTACT" url="/contact" />
    </div>
  );
};
