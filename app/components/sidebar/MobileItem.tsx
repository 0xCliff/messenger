'use client';

import { IconType } from 'react-icons';
import clsx from 'clsx';
import Link from 'next/link';

interface MobileItemProps {
  href: string;
  active?: boolean;
  icon: IconType;
  onClick?: () => void;
}

const MobileItem: React.FC<MobileItemProps> = ({
  href,
  active,
  icon: Icon,
  onClick,
}) => {
  const handleClick = () => {
    if (onClick) {
      return onClick();
    }
  };

  return (
    <Link
      onClick={handleClick}
      href={href}
      className={clsx(
        'group flex gap-x-3 rounded-md p-4 justify-center text-sm leading-6 font-semibold  w-full text-gray-500 hover:text-black hover:bg-gray-100',
        active && 'bg-gray-100 text-black',
      )}
    >
      <Icon className='h-6 w-6' />
    </Link>
  );
};

export default MobileItem;
