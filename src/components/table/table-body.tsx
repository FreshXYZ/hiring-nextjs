import { FC, ReactNode } from 'react';

type TableBody = {
  children: ReactNode | ReactNode[];
};
export const TableBody: FC<TableBody> = ({ children }) => {
  return <tbody>{children}</tbody>;
};
