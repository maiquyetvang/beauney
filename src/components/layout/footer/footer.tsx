/* eslint-disable @next/next/no-img-element */
import { Button } from '@/components/button';
import { Instagram } from 'lucide-react';
import Image from 'next/image';

export const Footer = () => {
  return (
    <footer className="bg-primary-900 flex flex-col items-center justify-center gap-10 px-[5vw] py-20 text-white">
      <img src="/logo-reverse.svg" alt="" className="w-14" />
      <p className="text-primary-100 text-center font-light">
        Name of medical institution : HUMAN Dermatology Clinic CHEONGNA
        <br />
        Address : 594, Jungbong-daero, Seo-gu, Incheon, Republic of Korea <br />
        Rpresentative : WONKYU HONG <br />
        Busiess registration number : 137-21-83614 <br />
        Representative number : 032-283-3335 <br />
        <br />© HUMAN DERMATOLOGY CLINIC. ALL RIGHTS RESERVED
      </p>
      <div className="flex justify-center gap-5">
        <a href="#">
          <Button className="size-10 rounded-full">
            <Instagram className="size-6 shrink-0 text-neutral-800" />
          </Button>
        </a>
        <a href="#">
          <Button className="size-10 rounded-full">
            <Image
              alt=""
              width={24}
              height={24}
              src="/logo-blog.svg"
              className="size-6 min-w-6"
            />
          </Button>
        </a>{' '}
        <a href="#">
          <Button className="size-10 rounded-full">
            <Image
              alt=""
              width={24}
              height={24}
              src="/logo-talk.svg"
              className="size-6 min-w-6"
            />
          </Button>
        </a>
        <a href="#">
          <Button className="size-10 rounded-full">
            <Image
              alt=""
              width={24}
              height={24}
              src="/logo-youtube.svg"
              className="size-6 min-w-6"
            />
          </Button>
        </a>
      </div>
    </footer>
  );
};
