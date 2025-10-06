import { ReactNode } from 'react';
import clsx from 'clsx';

interface TypographyProps {
  children: ReactNode;
  variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'body' | 'caption';
  className?: string;
}

const Typography = ({ children, variant = 'body', className }: TypographyProps) => {
  const variantClasses = {
    h1: 'text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900',
    h2: 'text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900',
    h3: 'text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900',
    h4: 'text-xl md:text-2xl lg:text-3xl font-semibold text-gray-900',
    h5: 'text-lg md:text-xl lg:text-2xl font-semibold text-gray-900',
    h6: 'text-base md:text-lg lg:text-xl font-semibold text-gray-900',
    body: 'text-base text-gray-700',
    caption: 'text-sm text-gray-500',
  };

  const Component = variant.startsWith('h') ? variant as keyof JSX.IntrinsicElements : 'p';

  return (
    <Component className={clsx(variantClasses[variant], className)}>
      {children}
    </Component>
  );
};

export default Typography;
