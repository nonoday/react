import { FC, ReactNode } from 'react';
import { Slot } from '@radix-ui/react-slot';

type ButtonVariant =
  | 'default'
  | 'primary'
  | 'secondary'
  | 'tertiary'
  | 'quaternary'
  | 'quinary'
  | 'senary'
  | 'error';

type ButtonSize = 'xs' | 's' | 'm' | 'l' | 'xl' | 'xxl';

type ButtonProps = {
  variant?: ButtonVariant;
  size?: ButtonSize;
  disabled?: boolean;
  children: ReactNode;
  asChild?: boolean;
};

const Button: FC<ButtonProps> = ({
  variant = 'default',
  size = 'm',
  disabled = false,
  children,
  asChild = false,
}) => {
  const styles = {
    base: 'font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline',
    sizes: {
      xs: 'text-xs',
      s: 'text-sm',
      m: 'text-base',
      l: 'text-lg',
      xl: 'text-xl',
      xxl: 'text-2xl',
    },
    variants: {
      default:
        'bg-gray-200 hover:bg-gray-300 text-gray-800',
      primary:
        'bg-blue-500 hover:bg-blue-700 text-white',
      secondary:
        'bg-gray-500 hover:bg-gray-700 text-white',
      tertiary:
        'bg-green-500 hover:bg-green-700 text-white',
      quaternary:
        'bg-yellow-500 hover:bg-yellow-700 text-white',
      quinary:
        'bg-purple-500 hover:bg-purple-700 text-white',
      senary:
        'bg-pink-500 hover:bg-pink-700 text-white',
      error:
        'bg-red-500 hover:bg-red-700 text-white',
    },
  };

  const Component = asChild ? Slot : 'button';

  return (
    <Component
      className={`${styles.base} ${styles.sizes[size]} ${
        styles.variants[variant]
      } ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
      disabled={disabled}
    >
      {children}
    </Component>
  );
};

export default Button;
