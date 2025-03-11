import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils';

const buttonVariants = cva(
  'flex justify-center gap-2 items-center px-4 py-4 font-semibold !cursor-pointer disabled:pointer-events-none disabled:opacity-50 disable:select-none',
  {
    variants: {
      variant: {
        default:
          'bg-white lg:hover:bg-neutral-50 active:bg-neutral-100 lg:hover:shadow-md transition-all ease-in-out',
        primary:
          'bg-primary-500 lg:hover:bg-primary-600 active:bg-primary-700 lg:hover:shadow-md transition-all ease-in-out text-white',
        destructive:
          'bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90',
        outline:
          'bg-transparent border border-neutral-200 lg:hover:border-neutral-400 lg:hover:shadow-md transition-all ease-in-out active:border-neutral-600 ',
        neutral:
          'bg-neutral-100 lg:hover:bg-neutral-200 lg:hover:shadow-md transition-all ease-in-out active:bg-neutral-300',
        secondary:
          'bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80',
        ghost: 'hover:bg-accent hover:text-accent-foreground',
        link: 'text-primary underline-offset-4 hover:underline',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button';
    return (
      <Comp
        className={cn(buttonVariants({ variant, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);
Button.displayName = 'Button';

export { Button, buttonVariants };
