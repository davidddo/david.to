import {MouseEventHandler, ReactNode} from 'react';
import {cva, type VariantProps} from 'class-variance-authority';
import {LucideIcon} from 'lucide-react';

import {cn} from '@/lib/utils';

const badgeVariants = cva(
  'inline-flex items-center rounded-md border px-2 py-0.5 text-sm font-semibold transition-colors focus:outline-none',
  {
    variants: {
      variant: {
        default: 'border-transparent bg-primary text-primary-foreground',
        secondary: 'border-transparent bg-secondary text-secondary-foreground',
        destructive: 'border-transparent bg-destructive text-destructive-foreground',
        outline: 'text-foreground',
      },
      state: {
        default: '',
        warning: 'border-warning text-warning',
      },
    },
    defaultVariants: {
      variant: 'default',
      state: 'default',
    },
  }
);

export interface BadgeProps extends VariantProps<typeof badgeVariants> {
  className?: string;
  children?: ReactNode;

  icon?: LucideIcon;
  size?: 'sm' | 'md';

  onClick?: MouseEventHandler<HTMLAnchorElement> & MouseEventHandler<HTMLDivElement>;
  href?: string;
  target?: string;
}

function Badge({className, variant, state, children, ...props}: BadgeProps) {
  const size = props.size ?? 'md';
  const Comp = props.href ? 'a' : 'div';

  const isClickable = props.onClick || props.href;

  return (
    <Comp
      className={cn(badgeVariants({variant, state}), className, {
        'text-xs px-1.5': size === 'sm',
        'text-sm px-2': size === 'md',
        'hover:cursor-pointer': isClickable,
        'hover:bg-primary/80': isClickable && variant === 'default',
        'hover:bg-secondary/80': isClickable && (variant === 'secondary' || variant === 'outline'),
        'hover:bg-destructive/80': isClickable && variant === 'destructive',
      })}
      {...props}
    >
      {props.icon && (
        <span className={cn({'mr-1.5': size === 'sm', 'mr-2': size === 'md'})}>
          {
            <props.icon
              className={cn('h-4 w-4', {
                'h-[14px] w-[14px]': size === 'sm',
                'h-4 w-4': size === 'md',
              })}
            />
          }
        </span>
      )}
      {children}
    </Comp>
  );
}

export {badgeVariants};
export default Badge;
