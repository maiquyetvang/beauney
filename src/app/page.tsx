/* eslint-disable @next/next/no-img-element */
'use client';

import { Button } from '@/components/button';
import { EquipmentItem } from '@/components/equipment-item';
import { KCosmeticItem } from '@/components/k-cosmetic-item';
import { KoreanCosmeticItem } from '@/components/korean-cosmetic';
import { LocationItem } from '@/components/location-item';
import { SpecialItem } from '@/components/special-item';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Clock3, MapPin } from 'lucide-react';
import { useEffect, useState } from 'react';

import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel';
import { cn } from '@/lib/utils';
import CarouselHomePage from '@/components/carousel';
import Autoplay from 'embla-carousel-autoplay';
import { specialItems } from '@/components/layout/header/header-desktop-menu';

const locationItems = [
  {
    title: 'Cheongna',
    address: '594, Jungbong-daero, Seo-gu, Incheon, Republic of Korea',
    description: `Cheongna is located near Incheon Airport, <span class="mr-1 ml-1 text-primary-500">just a 30-minute drive</span> from the airport`,
  },
  {
    title: 'Yongsan',
    address:
      '2nd Floor, Unit 8, E Mall, Harrington Square, 17 Seobinggo-ro, Yongsan-gu, Seoul, South Korea',
    description: `Yongsan is located near Incheon Airport, just a 1-hour drive from the airport`,
  },
  {
    title: 'Seoul National University',
    address:
      '2nd Floor, Human Dermatology Clinic Seoul National University Branch, 184-2, Gwanak-gu, Seoul, South Korea',
    description: `Seoul National University is located near Incheon Airport, just a 1-hour drive from the airport.`,
  },
  {
    title: 'Siheung',
    address: '2nd Floor, 186 Gwanak-ro, Gwanak-gu, Seoul, South Korea',
    description: `Siheung is located near Incheon Airport, just a 40-minute drive from the airport.`,
  },
  {
    title: 'Benjamin',
    address: '6th Floor, 138 Dosan-daero, Gangnam-gu, Seoul, South Korea',
    description: `Benjamin is located near Incheon Airport, just a 1-hour drive from the airport.`,
  },
  {
    title: 'Pyeongtaek',
    address:
      '10th Floor, Centum Sky (Starbucks Building), 13 Jungang 2-ro, Pyeongtaek-si, Gyeonggi-do, South Korea',
    description: `Pyeongtaek is located near Incheon Airport, just a 1.5-hour drive from the airport.`,
  },
  {
    title: 'Gangseo',
    address: '261 Gonghang-daero, Gangseo-gu, Seoul, South Korea',
    description: `Gangseo is located near Incheon Airport, just a 40-minute drive from the airport.`,
  },
  {
    title: 'Artin',
    address:
      '1st Floor, Dongyoung Culture Center, 772 Yeoksam-dong, Gangnam-gu, Seoul, South Korea',
    description: `Artin is located near Incheon Airport, just a 1.5-hour drive from the airport.`,
  },
  {
    title: 'Gwangjang',
    address:
      '2nd Floor, Jinnex Odyssey, 502 Achasan-ro, Gwangjin-gu, Seoul, South Korea',
    description: `Artin is located near Incheon Airport, just a 1.5-hour drive from the airport.`,
  },
  {
    title: 'Gwangmyeong',
    address:
      '3rd Floor, Unit 301, Dain Building, 24 Cheolsan-ro, Gwangmyeong-si, Gyeonggi-do, South Korea',
    description: `Artin is located near Incheon Airport, just a 1-hour drive from the airport.`,
  },
  {
    title: 'Morgan',
    address:
      '5th Floor, JB Miso Building, 841 Nonhyeon-ro, Sinsa-dong, Gangnam-gu, Seoul, South Korea',
    description: `Artin is located near Incheon Airport, just a 1.5-hour drive from the airport.`,
  },
  {
    title: 'Songdo',
    address:
      '5th Floor, Office Building, IBS Tower, 263 Central-ro, Yeonsu-gu, Incheon, South Korea',
    description: `Songdo is located near Incheon Airport, just a 30-minute drive from the airport.`,
  },
  {
    title: 'Pohang',
    address:
      '3rd Floor, Unit 301, Dain Building, 24 Cheolsan-ro, Gwangmyeong-si, Gyeonggi-do, South Korea',
    description: `Artin is located near Incheon Airport, just a 1-hour drive from the airport.`,
  },
];

const kcosmeticitem = [
  {
    title: 'Skin Whitening Treatments',
    image: 'img/k-cosmetic/SWT.png',
    description: 'Achieve a brighter and more even skin tone.',
    url: '/news/skin-whitening-treatment',
  },
  {
    title: 'Lifting',
    image: 'img/k-cosmetic/LIFTING.png',
    description: 'Non-surgical solutions for youthful, firmer skin.',
    url: '/news/lifting',
  },
  {
    title: 'Botox',
    image: 'img/k-cosmetic/BOTOX.png',
    description:
      'Targeted solutions for pigmentation, acne scars, and skin rejuvenation.',
    url: '/news/botox',
  },
  {
    title: 'Filler',
    image: 'img/k-cosmetic/FILLER.png',
    description: 'Smooth fine lines and wrinkles for a youthful appearance.',
    url: '/news/filler',
  },
  {
    title: 'Fillers',
    image: 'img/k-cosmetic/Fillers.png',
    description: 'Restore volume and contour your facial features.',
    url: '/news/fillers',
  },
  {
    title: 'Hair Transplant',
    image: 'img/k-cosmetic/Hair Transplant.png',
    description: 'Advanced techniques to restore natural hair growth.',
    url: '/news/hair-transplant',
  },
];

const koreanCosmeticItem = [
  {
    title: 'Synergy Soothing Ampoule 35ml',
    image: 'img/korean-cosmetic/Synergy Soothing Ampoule 35ml.png',
    description:
      'A-skin’s synergy solution helps to recharge moisture energy while keeping the skin hydrated for a longer time.',
    url: 'product/synergy-soothing-ampoule-35',
  },
  {
    title: 'ASKIN Revitalize MGF Plus Cream 50ml ',
    image: 'img/korean-cosmetic/ASKIN Revitalize MGF Plus Cream 50ml .png',
    description: 'Daily Skin Recovery Cream with MGF Complex',
    url: 'product/askin-revitalize-mgf-plus-cream-50',
  },
  {
    title: 'Newmela Cream 30g',
    image: 'img/korean-cosmetic/Newmela-Cream-30g.png',
    description:
      'A-Skins Synergy Solution helps recharge moisture energy while keeping your skin hydrated for a long time.',
    url: 'product/newmela-cream-30',
  },
  {
    title: 'ASKIN Synergy Whitening Ampoule 35ml',
    image: 'img/korean-cosmetic/ASKIN-synergy-whitening-ampoule-35ml.png',
    description:
      'Post Rays Line reinforces and protects skin that has undergone professional skincare treatment.  It is specially formulated to strengthen and safeguard your skin internally before treatment and to soothe and restore it after treatment.',
    url: 'akin-synergy-whitening-ampoule-35',
  },
  {
    title: 'ASKIN Synergy Repair Ampoule 35ml',
    image: 'img/korean-cosmetic/ASKIN-synergy-repair-ampoule-35ml.png',
    description:
      'Post Rays Line reinforces and protects skin that has undergone professional skincare treatment.  It is specially formulated to strengthen and safeguard your skin internally before treatment and to soothe and restore it after treatment.',
    url: 'product/askin-synergy-repair-ampoule-35',
  },
];
export type EquipmentItemType = {
  title: string;
  image: string;
  description: string;
  fullDescription: string;
};
const equiptmentitem: EquipmentItemType[] = [
  {
    title: 'Thermage FLX',
    image: 'img/equipment/thermageflx.png',
    description: 'Skin texture, Skin tone improvement Anti-aging',
    fullDescription:
      'It is a procedure that uses high-frequency energy instead of lasers to contract and regenerate sagging collagen, the main cause of skin aging.\n It is excellent for improving skin elasticity, tightening, and overall skin enhancement.\n The 4th generation Thermage features a tip that is 33% larger than previous models, reducing procedure time by 25%.',
  },
  {
    title: 'Skin aura',
    image: '/img/equipment/SkinAura.png',
    description: 'Lifting, Collagen Production Skin Texture',
    fullDescription:
      'Skin Aura is an advanced high-intensity focused ultrasound (HIFU) device by Wellcomet, specifically designed to focus on collagen regeneration.\nGoing beyond the limitations of traditional lifting devices, it targets the aging and regeneration of subcutaneous fat layers.\nThis procedure minimizes daily discomfort and pain, helping to create firm and youthful skin.',
  },

  {
    title: 'Ulthera',
    image: '/img/equipment/ulthera.png',
    description: 'Deep Wrinkles, Lifting Elasticity',
    fullDescription:
      'Skin Aura is an advanced high-intensity focused ultrasound (HIFU) device by Wellcomet, specifically designed to focus on collagen regeneration.\n Going beyond the limitations of traditional lifting devices, it targets the aging and regeneration of subcutaneous fat layers.\n This procedure minimizes daily discomfort and pain, helping to create firm and youthful skin.',
  },
  {
    title: 'Vbeam-Perfecta',
    image: '/img/equipment/VbeamPerfecta.png',
    description: 'Acne, Redness, Hemangioma Rosacea, Scar',
    fullDescription:
      'The Erbium Laser combines the advantages of CO2 lasers, making it an ideal laser for deep wrinkles, scars, and resurfacing treatments.\n It is FDA-approved in the U.S., ensuring safety. This is the worlds first laser using YSGG technology with a 2790nm wavelength, providing an advanced skin treatment solution.\n It is highly effective in treating wrinkles around the eyes and mouth while also helping improve pores, elasticity, skin texture, and smoothness.',
  },

  {
    title: 'Pearl Laser',
    image: '/img/equipment/PearlLaser.png',
    description: 'Deep Wrinkles, Wrinkles, Skin Tone Improvement',
    fullDescription:
      "The Erbium Laser combines the advantages of CO2 lasers, making it an ideal laser for deep wrinkles, scars, and resurfacing treatments. It is FDA-approved in the U.S., ensuring safety.\nThis is the world's first laser using YSGG technology with a 2790nm wavelength, providing an advanced skin treatment solution.\nIt is highly effective in treating wrinkles around the eyes and mouth while also helping improve pores, elasticity, skin texture, and smoothness.",
  },
];

export default function Home() {
  const [selectedLocation, setSelectedLocation] = useState(locationItems[0]);
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(specialItems.length);

  useEffect(() => {
    if (!api) return;

    setCount(api.scrollSnapList().length);

    const onSelect = () => {
      setCurrent(api.selectedScrollSnap());
    };

    api.on('select', onSelect);

    return () => {
      api.off('select', onSelect);
    };
  }, [api]);

  const handleDotClick = (index: number) => {
    if (api) {
      api.scrollTo(index);
    }
  };
  return (
    <div>
      <CarouselHomePage />
      {/* special program */}
      <div className="bg-primary-50 flex flex-col items-center justify-center py-20 pt-28 lg:py-40">
        <p className="mb-4 text-lg lg:mb-8">K-Beauty Cosmetic Clinic</p>
        <h2 className="mb-10 text-center lg:mb-20">SPECIAL CARE PROGRAM</h2>
        {/* slider item */}
        <div className="grid w-full gap-5 lg:gap-20">
          <div className="relative w-full overflow-hidden">
            <Carousel
              className="w-full"
              setApi={setApi}
              plugins={[
                Autoplay({
                  delay: 3000,
                }),
              ]}
              opts={{
                align: 'start',
                loop: false,
              }}
            >
              <CarouselContent className="relative ml-0 w-[255vw] -translate-x-[77.5vw]">
                <CarouselItem
                  key={2}
                  className="carousel-item basis-1/3 pr-[2.5vw] pl-[2.5vw]"
                ></CarouselItem>{' '}
                {specialItems.map((item, index) => (
                  <CarouselItem
                    key={index}
                    className="carousel-item basis-1/3 pr-[2.5vw] pl-[2.5vw]"
                  >
                    <SpecialItem
                      image={item.image}
                      title={item.title}
                      description={item.description}
                      cons={item.cons}
                      url={item.url}
                      // isHome
                    />
                  </CarouselItem>
                ))}
                <CarouselItem
                  key={1}
                  className="carousel-item basis-1/3 pr-[2.5vw] pl-[2.5vw]"
                ></CarouselItem>
              </CarouselContent>
              {/* <CarouselPrevious /> */}
              {/* <CarouselNext /> */}
            </Carousel>
          </div>
          <div className="mt-4 flex items-center justify-center gap-2">
            {Array.from({ length: count }).map((_, index) => (
              <button
                key={index}
                onClick={() => handleDotClick(index)}
                className={cn(
                  'h-3 w-3 rounded-full transition-all duration-300',
                  current === index
                    ? 'bg-primary'
                    : 'bg-primary/30 hover:bg-primary/50',
                )}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
      {/* cosmetic clinic */}
      <div className="flex flex-col items-center justify-center px-[5vw] py-20 lg:py-40">
        <h2 className="mb-4 text-center lg:mb-8">K-Beauty Cosmetic Clinic</h2>
        <p className="lg:md-20 mb-10 text-center text-lg lg:w-[50vw]">
          At K-Beauty Cosmetic Clinic, we offer advanced skin whitening,
          lifting, laser therapy, Botox, fillers, and hair transplants,
          delivering natural, personalized results with cutting-edge techniques.
        </p>
        <h3 className="text-primary-500 mb-10 lg:mb-20">Skin Health News</h3>
        <div className="flex w-full grid-flow-row grid-cols-3 flex-col gap-10 lg:grid lg:gap-20">
          {kcosmeticitem.map((item) => (
            <div
              className="transition-all ease-in-out lg:hover:shadow-lg"
              key={item.image}
            >
              <KCosmeticItem
                title={item.title}
                image={item.image}
                description={item.description}
                url={item.url}
              />
            </div>
          ))}
          {/* learn more btn */}
          <div className="col-span-3 flex items-center justify-center">
            <a href="#" className="w-full lg:w-fit">
              <Button className="w-full lg:w-96" variant="outline">
                LEARN MORE
              </Button>
            </a>
          </div>
        </div>
      </div>
      {/* contact us */}
      <div className="relative flex min-h-[400px] flex-col items-center justify-between gap-0 bg-[#D590E3] px-[5vw] pt-16 lg:flex-row lg:gap-[5vw] lg:px-0 lg:py-0 lg:pt-0 lg:pl-[10vw]">
        <div className="relative z-10 py-5 text-white lg:pr-80">
          <h2 className="mb-5 text-4xl font-bold">
            Any Questions? Contact Us!
          </h2>
          <p className="mb-8 text-lg">
            HUMAN CHEONGNA offers safe and professional cosmetic treatments. If
            you have any questions or would like a consultation, feel free to
            contact us! We&apos;ll assist you quickly and professionally.
          </p>
          <a href="/contact" className="w-full lg:w-fit">
            <Button className="w-full rounded-none bg-white font-medium text-black hover:bg-white/90 lg:w-fit lg:min-w-52">
              Contact Us
            </Button>
          </a>
        </div>
        <div className="absolute right-0 bottom-0 hidden h-[400px] min-w-[300px] overflow-hidden lg:block">
          <img
            src="/img/faq-cover__.png"
            alt="Contact image"
            className="h-full w-auto object-cover object-bottom"
          />
        </div>
        <div className="-mr-[10vw] flex h-full w-full justify-end lg:hidden">
          <img
            src="/img/faq-cover-mb.png"
            alt="Contact image mobile"
            className="h-full w-auto object-cover object-bottom"
          />
        </div>
      </div>
      {/* k cosmetic & FAQ  */}
      <div className="flex flex-col items-center justify-center bg-[#F7F8FA] px-[5vw] py-20 lg:py-40">
        <h2 className="mb-8 text-center">Korean cosmetics</h2>
        <p className="mb-10 text-center text-lg lg:mb-20 lg:w-[50vw]">
          Trust in high-quality beauty products that are medically approved and
          backed by expert research for safe and effective results.
        </p>
        <div className="flex grid-flow-row grid-cols-3 flex-col items-stretch gap-10 overflow-hidden lg:grid lg:gap-20">
          {koreanCosmeticItem.map((item) => (
            <div key={item.image}>
              <KoreanCosmeticItem
                title={item.title}
                description={item.description}
                image={item.image}
                url={item.url}
                isHome
              />
            </div>
          ))}
        </div>
        {/* faq */}
        <Accordion className="mt-20 w-full lg:mt-40" type="single" collapsible>
          <AccordionItem
            className="w-full border-t border-black/10"
            value="item-1"
          >
            <AccordionTrigger className="flex w-full items-center justify-between">
              <h4 className="text-md/10">
                <span className="mr-1.5">Q.</span>
                <span>Is this product safe for all skin types?</span>
              </h4>
            </AccordionTrigger>
            <AccordionContent>
              It depends on the procedure. Simple laser treatments or chemical
              peels allow same-day departure. However, for lifting, fillers, or
              Botox, it&apos;s recommended to stay for 1-3 days for proper
              recovery. Surgical treatments (e.g., skin excision) may require a
              minimum recovery period of 5-7 days.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem className="w-full" value="item-2">
            <AccordionTrigger className="flex w-full items-center justify-between">
              <h4 className="text-md/10">
                <span className="mr-1.5">Q.</span>
                <span>
                  What ingredients are included, and is this product
                  non-irritating?
                </span>
              </h4>
            </AccordionTrigger>
            <AccordionContent>
              It depends on the procedure. Simple laser treatments or chemical
              peels allow same-day departure. However, for lifting, fillers, or
              Botox, it&apos;s recommended to stay for 1-3 days for proper
              recovery. Surgical treatments (e.g., skin excision) may require a
              minimum recovery period of 5-7 days.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem className="w-full" value="item-3">
            <AccordionTrigger className="flex w-full items-center justify-between">
              <h4 className="text-md/10">
                <span className="mr-1.5">Q.</span>
                <span>How do skin experts recommend this product?</span>
              </h4>
            </AccordionTrigger>
            <AccordionContent>
              It depends on the procedure. Simple laser treatments or chemical
              peels allow same-day departure. However, for lifting, fillers, or
              Botox, it&apos;s recommended to stay for 1-3 days for proper
              recovery. Surgical treatments (e.g., skin excision) may require a
              minimum recovery period of 5-7 days.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        <a href="#" className="mt-10 w-full lg:w-fit">
          <Button className="w-full lg:w-96" variant="outline">
            LEARN MORE
          </Button>
        </a>
      </div>
      {/* equipment */}
      <div className="flex flex-col items-center justify-center px-[5vw] py-20 lg:py-40">
        <h2 className="mb-4 text-center lg:mb-8">Equipment & Technology</h2>
        <p className="mb-10 text-center text-lg lg:mb-20 lg:w-[50vw]">
          We pursue the highest level of effectiveness and safety through
          continuous investment and upgrades in laser technology and equipment.
        </p>
        <div className="flex w-full grid-flow-row grid-cols-3 flex-col gap-10 lg:grid lg:gap-20">
          {equiptmentitem.slice(0, 2).map((item) => (
            <div key={item.title}>
              <EquipmentItem item={item} />
            </div>
          ))}
          {equiptmentitem.slice(3).map((item) => (
            <div key={item.description}>
              <EquipmentItem item={item} />
            </div>
          ))}

          {/* learn more btn */}
          <div className="col-span-3 flex items-center justify-center">
            <a href="#" className="w-full lg:w-fit">
              <Button className="w-full lg:w-96" variant="outline">
                LEARN MORE
              </Button>
            </a>
          </div>
        </div>
      </div>
      {/* location */}
      <div className="border-t border-black/10 px-[5vw] py-20 lg:py-40">
        <h2 className="mb-10">Our Location</h2>
        <div className="flex w-full flex-nowrap justify-start gap-3 overflow-auto md:gap-5 lg:flex-wrap">
          {locationItems.map((item, index) => (
            <div key={item.title} onClick={() => setSelectedLocation(item)}>
              <LocationItem
                title={item.title}
                isActive={locationItems[index] === selectedLocation}
              />
            </div>
          ))}
        </div>
        <div className="mt-10 bg-[#F7F8FA] px-8 md:px-10">
          <div className="border-b border-black/10 py-10">
            <h4 className="mb-5 flex items-center justify-start gap-3">
              <MapPin className="hidden size-6 shrink-0 md:block" />
              {selectedLocation.address}
            </h4>
            <p
              className="font-medium"
              dangerouslySetInnerHTML={{ __html: selectedLocation.description }}
            />
            {/* 
						<p className="font-medium">
							HUMAN is located near Incheon Airport,
							<span className="mr-1 ml-1 text-primary-500">
								just a 30-minute drive
							</span>
							from the airport
						</p> */}
          </div>
          <div className="py-10">
            <h4 className="text-primary-500 mb-5 flex items-center justify-start gap-3">
              <Clock3 size="24" className="hidden md:block" />
              Opening Hour
            </h4>
            <div className="grid max-w-[300px] grid-flow-row grid-cols-2 gap-5">
              <p className="font-medium">MON, WED, FRI</p>
              <p className="font-semibold">10:00 - 20:30</p>
              <p className="font-medium">TUE, THU</p>
              <p className="font-semibold">10:00 - 19:00</p>
              <p className="font-medium">SAT</p>
              <p className="font-semibold">10:00 - 16:00</p>
            </div>
          </div>
        </div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3163.9554716707385!2d126.64770367603398!3d37.532546926076094!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357b7fac82371413%3A0xaa3062c016d9960d!2s594%20Jungbong-daero%2C%20Seo-gu%2C%20Incheon%2C%20H%C3%A0n%20Qu%E1%BB%91c!5e0!3m2!1svi!2s!4v1741057813537!5m2!1svi!2s"
          width="100%"
          height="400"
          loading="lazy"
          className="mt-10"
        ></iframe>
      </div>
      {/* FAQ  */}
      <div className="flex flex-col items-center justify-center bg-[#F7F8FA] px-[5vw] py-20 lg:py-40">
        <h2 className="mb-20">FAQ</h2>
        <Accordion className="w-full" type="single" collapsible>
          <AccordionItem
            className="w-full border-t border-black/10"
            value="item-1"
          >
            <AccordionTrigger className="flex w-full items-center justify-between">
              <h4 className="text-md/10">
                <span className="mr-1.5">Q.</span>
                <span>
                  Do I need a visa to receive dermatology treatment in Korea?
                </span>
              </h4>
            </AccordionTrigger>
            <AccordionContent>
              It depends on the procedure. Simple laser treatments or chemical
              peels allow same-day departure. However, for lifting, fillers, or
              Botox, it&apos;s recommended to stay for 1-3 days for proper
              recovery. Surgical treatments (e.g., skin excision) may require a
              minimum recovery period of 5-7 days.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem className="w-full" value="item-2">
            <AccordionTrigger className="flex w-full items-center justify-between">
              <h4 className="text-md/10">
                <span className="mr-1.5">Q.</span>
                <span>
                  Can I return to Vietnam immediately after the procedure, or do
                  I need to stay in Korea for a few days?
                </span>
              </h4>
            </AccordionTrigger>
            <AccordionContent>
              It depends on the procedure. Simple laser treatments or chemical
              peels allow same-day departure. However, for lifting, fillers, or
              Botox, it&apos;s recommended to stay for 1-3 days for proper
              recovery. Surgical treatments (e.g., skin excision) may require a
              minimum recovery period of 5-7 days.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem className="w-full" value="item-3">
            <AccordionTrigger className="flex w-full items-center justify-between">
              <h4 className="text-md/10">
                <span className="mr-1.5">Q.</span>
                <span>
                  What are the most popular and effective dermatology
                  treatments?
                </span>
              </h4>
            </AccordionTrigger>
            <AccordionContent>
              It depends on the procedure. Simple laser treatments or chemical
              peels allow same-day departure. However, for lifting, fillers, or
              Botox, it&apos;s recommended to stay for 1-3 days for proper
              recovery. Surgical treatments (e.g., skin excision) may require a
              minimum recovery period of 5-7 days.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        {/* learn more btn */}
        <a href="#" className="mt-10 w-full lg:w-fit">
          <Button className="w-full lg:w-96" variant="outline">
            LEARN MORE
          </Button>
        </a>
      </div>
      {/* video */}
      <div className="h-[29vw] w-[100vw] bg-[url(/img/video-hero-img.png)] bg-cover bg-center bg-no-repeat"></div>
    </div>
  );
}
