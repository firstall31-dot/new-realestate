import * as React from 'react';
import { cn } from '@/lib/utils';

export type TextareaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement>;

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...props }, ref) => {
    return (
      <textarea
        className={cn(
          'w-full rounded-2xl border border-ink-200 bg-white/80 px-4 py-3 text-sm text-ink-800 placeholder:text-ink-500 outline-none transition-all focus:border-gold-400 focus:ring-2 focus:ring-gold-400/20 resize-none',
          className,
        )}
        ref={ref}
        {...props}
      />
    );
  },
);
Textarea.displayName = 'Textarea';

export { Textarea };
