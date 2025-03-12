/* eslint-disable @next/next/no-img-element */
'use client';
import { Button } from '@/components/button';
import {
  HeaderMenuItem,
  HeaderNavigation,
} from '@/components/layout/header/header-desktop-menu';
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/ui/drawer';
import { useScroll } from '@/hooks/use-scroll';
import { cn } from '@/lib/utils';
import { Globe, Instagram, Mail, MenuIcon } from 'lucide-react';
import Link from 'next/link';

const headerMenuItem = [
  { title: 'HOME', url: '/' },
  { title: 'ABOUT US', url: '/about' },
  { title: 'TREATMENT', url: '/treatment' },
  { title: 'PRODUCT', url: '/product' },
  { title: 'NEWS', url: '/news' },
  { title: 'CONTACT', url: '/contact' },
];

export const Header = () => {
  const scrolled = useScroll(10);

  return (
    <header
      className={cn(
        'fixed z-10 flex w-[100vw] items-center justify-between bg-transparent py-5 pr-3 pl-[5vw] transition-colors lg:bg-white lg:px-[5vw]',
        scrolled && 'max-lg:bg-white',
      )}
    >
      <div className="w-[52px] lg:hidden"></div>
      <Link href="/" className="mx-auto shrink-0 lg:m-0">
        <img src="/logo.svg" alt="logo" />
      </Link>
      {/* navigation item */}
      <HeaderNavigation />
      <div className="hidden items-center justify-center gap-4 lg:flex">
        <a href="#">
          <Button variant="outline" className="size-10 rounded-full">
            <Instagram className="size-5 shrink-0" />
          </Button>
        </a>
        <a href="#">
          <Button variant="outline" className="size-10 rounded-full">
            <Mail className="size-5 shrink-0" />
          </Button>
        </a>
        <a href="#">
          <Button variant="outline" className="size-10 rounded-full">
            <Globe className="size-5 shrink-0" />
          </Button>
        </a>
      </div>
      {/* mobile header */}
      <Drawer>
        <DrawerTrigger asChild>
          <Button
            variant="ghost"
            className={cn(
              'hover:none bg-transparent text-white drop-shadow-lg lg:hidden',
              scrolled && 'max-lg:text-black',
            )}
          >
            <MenuIcon className="size-5 shrink-0" />
          </Button>
        </DrawerTrigger>
        <DrawerContent>
          <div className="h-fit w-full">
            <DrawerHeader className="items-center">
              <DrawerTitle>
                {' '}
                <Link href="/" className="shrink-0">
                  <img src="/logo.svg" alt="logo" />
                </Link>
              </DrawerTitle>
            </DrawerHeader>
            <div className="grid items-start gap-3 bg-white px-3 py-5 align-top">
              {headerMenuItem.map((item) => (
                <div key={item.title}>
                  <HeaderMenuItem
                    title={item.title}
                    url={item.url}
                    className="w-fit items-start text-left"
                  />
                </div>
              ))}
              <div className="flex h-16 items-center justify-center gap-4">
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
            </div>
          </div>
        </DrawerContent>
      </Drawer>
    </header>
  );
};
