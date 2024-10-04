import { ReactNode } from 'react';
interface TextProps {
  children: ReactNode;
  style?: string;
}
export default function Bold({ children, style }: TextProps) {
  return <span className={`font-bold ${style}`}>{children}</span>;
}
