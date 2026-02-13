import clsx from 'clsx';
import Link from 'next/link';
import type { ButtonHTMLAttributes, AnchorHTMLAttributes, PropsWithChildren, ComponentProps } from 'react';

type Variant = 'primary' | 'ghost' | 'link';
type Size = 'sm' | 'md' | 'lg';

type CommonProps = {
  variant?: Variant;
  size?: Size;
  className?: string;
};

type ButtonProps = CommonProps & ButtonHTMLAttributes<HTMLButtonElement> & { href?: never };
type NextLinkProps = ComponentProps<typeof Link>;

type AnchorProps = CommonProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'href' | 'className'> & {
    href: NextLinkProps['href'];
  };

const classes = (variant: Variant, size: Size, className?: string) =>
  clsx(
    'btn',
    variant === 'primary' && 'btn-primary',
    variant === 'ghost' && 'btn-ghost',
    variant === 'link' && 'btn-link',
    size === 'sm' && 'btn-sm',
    size === 'md' && '',
    size === 'lg' && 'btn-lg',
    className
  );

export function Button({ variant = 'primary', size = 'md', className, children, ...props }: PropsWithChildren<ButtonProps | AnchorProps>) {
  if ('href' in props && props.href) {
    const { href, ...anchorProps } = props as AnchorProps;
    return (
      <Link href={href} className={classes(variant, size, className)} {...anchorProps}>
        {children}
      </Link>
    );
  }
  return (
    <button className={classes(variant, size, className)} {...(props as ButtonProps)}>
      {variant === 'primary' && (
        <span className="absolute inset-0 overflow-hidden rounded-lg">
          <span className="absolute inset-0 rounded-lg bg-[image:linear-gradient(75deg,transparent_25%,rgba(255,255,255,0.3)_50%,transparent_75%)] opacity-0 transition-opacity duration-1000 group-hover:opacity-100 bg-[length:250%_250%,100%_100%] bg-no-repeat animate-[shimmer_2s_infinite]" />
        </span>
      )}
      <span className="relative">{children}</span>
    </button>
  );
}
