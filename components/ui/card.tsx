import * as React from 'react';

import {cn} from '@/lib/utils';

const Card = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({className, children, ...props}, ref) => {
    const hasHeader = React.Children.toArray(children).some(
      (child) => React.isValidElement(child) && child.type === CardHeader
    );

    return (
      <div ref={ref} className={cn('rounded-xl border-2 bg-card text-card-foreground', className)} {...props}>
        {React.Children.map(children, (child) =>
          React.isValidElement(child) && child.type === CardContent
            ? React.cloneElement(child as React.ReactElement<any>, {
                className: cn(
                  (child as React.ReactElement<any>).props?.className,
                  hasHeader && 'pt-0 sm:pt-0'
                ),
              })
            : child
        )}
      </div>
    );
  }
);
Card.displayName = 'Card';

const CardHeader = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({className, ...props}, ref) => <div ref={ref} className={cn('flex flex-col p-4 sm:p-6', className)} {...props} />
);
CardHeader.displayName = 'CardHeader';

const CardTitle = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLHeadingElement>>(
  ({className, ...props}, ref) => (
    <h3 ref={ref} className={cn('text-lg font-semibold leading-none tracking-tight', className)} {...props} />
  )
);
CardTitle.displayName = 'CardTitle';

const CardDescription = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLParagraphElement>>(
  ({className, ...props}, ref) => <p ref={ref} className={cn('text-sm text-muted-foreground', className)} {...props} />
);
CardDescription.displayName = 'CardDescription';

const CardContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({className, ...props}, ref) => <div ref={ref} className={cn('p-4 sm:p-6', className)} {...props} />
);
CardContent.displayName = 'CardContent';

const CardFooter = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({className, ...props}, ref) => (
    <div ref={ref} className={cn('flex items-center p-4 pt-0 sm:p-6 sm:pt-0', className)} {...props} />
  )
);
CardFooter.displayName = 'CardFooter';

export default Card;
export {CardHeader, CardFooter, CardTitle, CardDescription, CardContent};
