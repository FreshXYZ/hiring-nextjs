import { FC, ReactNode } from 'react';
import Image from 'next/image';
import { clsx } from 'clsx';

type TableHeadCell = {
  children: ReactNode | ReactNode[];
  className?: string;
  sortingColumn: boolean;
  alignColumn: 'left' | 'right' | 'center' | undefined;
  onClick?: () => void;
  orderDirection: string | undefined;
};
export const TableHeadCell: FC<TableHeadCell> = ({
  className = '',
  children,
  sortingColumn,
  alignColumn,
  onClick,
  orderDirection,
}) => {
  return (
    <th
      className={`py-4 first-of-type:rounded-tl-lg last-of-type:rounded-tr-lg cursor-pointer ${className}`}
      onClick={onClick}
    >
      <div
        className={clsx('group flex flex-row w-full h-full  items-center', {
          ['justify-start']: alignColumn === 'left',
          ['justify-end']: alignColumn === 'right',
        })}
      >
        {alignColumn === 'right' && sortingColumn ? (
          <div className="relative w-2 h-2 mr-2">
            <Image
              className={clsx(
                'group-hover:text-typography-disabled text stroke-1',
                {
                  ['rotate-180']: orderDirection === 'asc',
                }
              )}
              src="/icons/arrow.svg"
              alt="Mail Icon"
              layout="fill"
            />
          </div>
        ) : null}
        {children}
        {alignColumn === 'left' && sortingColumn ? (
          <div className="relative w-2 h-2 ml-2">
            <Image
              className={clsx('group-hover:text-typography-disabled stroke-1', {
                ['rotate-180']: orderDirection === 'asc',
              })}
              src="/icons/arrow.svg"
              alt="Mail Icon"
              layout="fill"
            />
          </div>
        ) : null}
      </div>
    </th>
  );
};
