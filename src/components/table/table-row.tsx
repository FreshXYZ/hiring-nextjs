import { FC, ReactNode } from 'react';

type TableRow = {
  children: ReactNode | ReactNode[];
  className?: string;
};
export const TableRow: FC<TableRow> = ({ className = '', children }) => {
  return <tr className={`${className}`}>{children}</tr>;
};
