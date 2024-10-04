import { ReactNode, Children, isValidElement, ReactElement } from 'react';
import Item from '@components/text/list/itens';
import { FaDotCircle } from 'react-icons/fa';
import { GoDot } from 'react-icons/go';

type itenType = {
  text: string;
};

interface ListProps {
  children: ReactElement<itenType>[];
  style?: string;
}

export default function List({ children, style }: ListProps) {
  return (
    <div className={`flex flex-col border-l-4 border-secondary pl-5  ${style}`}>
      {children.map((item, key) => (
        <div className="flex gap-2 items-center">
          <GoDot />
          <p>{item}</p>
        </div>
      ))}
    </div>
  );
}
