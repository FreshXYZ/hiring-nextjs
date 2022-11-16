import { FC, ReactNode } from 'react';

type TableHead = {
  children: ReactNode | ReactNode[];
  className?: string;
};
export const TableHead: FC<TableHead> = ({ className = '', children }) => {
  return (
    <thead
      className={`
        text-xs font-semibold uppercase bg-secondary-grey-light-2 text-typography-secondary 
        ${className}`}
    >
      {children}
    </thead>
  );
};
