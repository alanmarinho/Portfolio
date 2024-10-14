import { ReactElement, useEffect, useRef, useState } from 'react';

// interface Item {
//   key: string;
//   value: string;
// }
export type CommentCategory = 'all' | 'criticism' | 'praise' | 'comment' | 'tip' | 'advice';

interface Item {
  key: CommentCategory;
  value: string;
}

interface DropDown {
  itens: Item[];
  defaultItem: Item;
  iconClosed?: ReactElement;
  iconOpen?: ReactElement;
  setSelected: React.Dispatch<React.SetStateAction<Item>>;
  selected: Item;
  style?: string;
}

export default function DropDown({ itens, defaultItem, iconClosed, iconOpen, setSelected, selected, style }: DropDown) {
  const [open, setIsOpen] = useState<boolean>(false);
  const [item1, setitem1] = useState<Item>();

  const handleOpenChange = () => {
    setIsOpen((prev) => !prev);
  };

  const handlSetSelected = (item: Item) => {
    setSelected(item);
    setIsOpen((prev) => !prev);
    setitem1(item);
  };
  return (
    <div className="relative inline-block">
      <div className={`bg-red-400 hover:cursor-pointer hover:bg-red-500 p-2 rounded-md text-white ${style}`}>
        <div onClick={handleOpenChange} className="flex gap-2 hover:cursor-pointer">
          <p className="select-none">{selected.value}</p>
          {!!iconClosed && !open && iconClosed}
          {!!iconOpen && open && iconOpen}
        </div>
      </div>
      {open && (
        <div className="absolute min-w-full left-0 top-full bg-white border rounded shadow-md z-10">
          {itens.map((item, key) => (
            <p onClick={() => handlSetSelected(item)} key={key} className="p-2 hover:bg-gray-200 cursor-pointer">
              {item.value}
            </p>
          ))}
        </div>
      )}
    </div>
  );
}
