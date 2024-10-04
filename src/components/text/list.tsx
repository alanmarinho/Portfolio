import { ReactNode } from 'react';

interface listProps {
  children: ReactNode;
  style?: string;
  url: string;
}

export default function Link({ children, style }: listProps) {
  return <div className="">{children}</div>;
}
