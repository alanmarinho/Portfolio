import { ReactNode } from 'react';

interface LinkProps {
  children: ReactNode;
  style?: string;
  url: string;
}

export default function Link({ children, style, url }: LinkProps) {
  return (
    <span className={style}>
      <a className="text-primary font-semibold underline" href={url} target="_blank">
        {children}
      </a>
    </span>
  );
}
