import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const badgeVariants = cva(
  'inline-flex items-center rounded-full px-3 py-1 text-xs font-bold transition-colors',
  {
    variants: {
      variant: {
        default: 'bg-ink-950 text-white',
        gold: 'bg-gold-400 text-ink-950',
        sage: 'bg-sage-500 text-white',
        outline: 'border border-ink-200 text-ink-700',
        glass: 'glass text-ink-950',
        glassDark: 'glass-dark text-white',
        white: 'bg-white/90 text-ink-950 backdrop-blur-md',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  },
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return <div className={cn(badgeVariants({ variant }), className)} {...props} />;
}

export { Badge, badgeVariants };
