import { FC, ReactNode } from 'react';

type TableCell = {
  children: ReactNode | ReactNode[];
  className?: string;
};
export const TableCell: FC<TableCell> = ({ className = '', children }) => {
  return (
    <td
      className={`py-4 first-of-type:rounded-bl-lg last-of-type:rounded-br-lg  ${className}`}
    >
      {children}
    </td>
  );
};
