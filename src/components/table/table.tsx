import { FC, ReactNode } from 'react';

type Table = {
  children: ReactNode | ReactNode[];
};
export const Table: FC<Table> = ({ children }) => {
  return <table className="w-full">{children}</table>;
};
