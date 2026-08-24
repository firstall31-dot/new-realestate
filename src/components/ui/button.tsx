import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-semibold ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0',
  {
    variants: {
      variant: {
        default: 'bg-ink-950 text-white hover:bg-ink-800 hover:shadow-lg hover:shadow-ink-950/20 hover:-translate-y-0.5',
        gold: 'bg-gold-400 text-ink-950 hover:bg-gold-300 hover:shadow-lg hover:shadow-gold-400/30 hover:-translate-y-0.5',
        outline: 'border border-ink-200 bg-white/80 text-ink-800 hover:bg-ink-50 hover:border-ink-300',
        ghost: 'hover:bg-ink-100 text-ink-700 hover:text-ink-950',
        secondary: 'bg-ink-100 text-ink-700 hover:bg-ink-200',
        destructive: 'bg-destructive text-destructive-foreground hover:bg-destructive/90',
        link: 'text-ink-950 underline-offset-4 hover:underline',
      },
      size: {
        default: 'px-5 py-2.5',
        sm: 'px-4 py-2 text-xs',
        lg: 'px-7 py-3.5',
        xl: 'px-8 py-4',
        icon: 'h-10 w-10',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button';
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);
Button.displayName = 'Button';

export { Button, buttonVariants };
