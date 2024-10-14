import DropDown from '@components/dropDown';
import { text } from 'stream/consumers';
import { ArrowDown, ArrowUp } from 'lucide-react';
import { useState } from 'react';
import Hover from '@components/hoverComponent';

const itens = [
  {
    text: 'item1',
    value: 'value1',
  },
  {
    text: 'item2',
    value: 'value2',
  },
  {
    text: 'item3',
    value: 'value3',
  },
];

interface Item {
  text: string;
  value: string | number;
}

export default function Test() {
  const [selected, setSelected] = useState<Item>(itens[0]);

  return (
    <div className="flex bg-zinc-300 items-center justify-center min-h-screen">
      <div className="bg-red-400 p-3 rounded-lg">
        <Hover message="testessss">teste</Hover>
      </div>
    </div>
  );
}
