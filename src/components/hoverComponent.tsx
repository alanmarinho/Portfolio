import { ReactNode, useState } from 'react';

interface Hover {
  children: ReactNode;
  message: string;
}

export default function Hover({ children, message }: Hover) {
  const [onHover, setOnHover] = useState<boolean>(false);

  const handleHover = () => {
    setOnHover((prev) => !prev);
  };
  return (
    <div onMouseLeave={() => handleHover()} onMouseEnter={() => handleHover()} className="relative">
      {onHover && (
        <div className="flex items-center justify-center text-black">
          <div className="absolute bg-zinc-100 p-1 rounded-lg" style={{ transform: 'translate(0%, -85%)' }}>
            <div className="absolute  bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full border-8 border-transparent border-t-zinc-100"></div>
            <p className="text-nowrap">{message}</p>
          </div>
        </div>
      )}
      <p className="select-none">{children}</p>
    </div>
  );
}
