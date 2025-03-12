/* eslint-disable @next/next/no-img-element */
'use client';
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/ui/drawer';
import { Button } from './button';
import { EquipmentItemType } from '@/types/equipment';

export interface EquipmentItemProps {
  item: EquipmentItemType;
}

export const EquipmentItem = ({ item }: EquipmentItemProps) => {
  const { title, image, description, fullDescription } = item;
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button key={title}>
          <div className="EquipmentItem" key={title}>
            <img src={image} alt="" className="w-full" />
            <div className="flex w-full flex-col gap-4 p-8">
              <h4 className="text-center">{title}</h4>
              <p className="text-center">{description}</p>
            </div>
          </div>
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <div className="h-full w-full overflow-auto pb-10">
          <DrawerHeader className="items-center">
            <DrawerTitle>
              <span className="text-[24px]">Equipment & Technology</span>
            </DrawerTitle>
            <div className="w-full flex-1 md:hidden">
              <img src={image} alt="" className="w-full" />
            </div>
          </DrawerHeader>
          <div className="flex h-full flex-col gap-4 overflow-auto p-5 md:flex-row md:p-8 lg:gap-10">
            <div className="hidden flex-1 md:block">
              <img src={image} alt="" className="w-full" />
            </div>
            <div className="flex flex-1 flex-col gap-4">
              <span className="equipmentItemTitle">{title}</span>
              <span className="equipmentItemDescription whitespace-pre-line">
                {fullDescription}
              </span>
            </div>
          </div>
        </div>
      </DrawerContent>
    </Drawer>
  );
};
