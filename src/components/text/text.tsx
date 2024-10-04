import { ReactNode } from 'react';

interface TextProps {
  children: ReactNode;
  style?: string;
}

export default function Text({ children, style }: TextProps) {
  return <span className={style}>{children}</span>;
}
