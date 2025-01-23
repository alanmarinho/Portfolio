import { cardProps } from '@/src/components/projectCard';
import { FaCheck, FaQuestion } from 'react-icons/fa';
import { IoClose, IoCloseSharp } from 'react-icons/io5';

interface ICardStatus {
  data: cardProps;
  onClick?: () => void;
}

export default function CardStatus({ data, onClick }: ICardStatus) {
  const statusStyles = {
    approved: 'bg-green-500 border-green-600',
    reproved: 'bg-red-300 border-red-600',
    pending: 'bg-yellow-500 border-yellow-600',
  };
  const iconStatus = {
    approved: <FaCheck className="text-white text-xl" />,
    reproved: <IoClose className="text-white text-3xl" />,
    pending: <FaQuestion className="text-white text-xl" />,
  };
  const status = !!data.status ? data.status : 'pending';
  const handleClick = () => {
    !!onClick && status != 'pending' ? onClick() : null;
  };
  return (
    <div>
      <div className="relative flex ">
        <button
          title="Status do teste"
          className={`z-10 flex ${
            !!onClick && status != 'pending' ? 'cursor-pointer' : 'cursor-default'
          } items-center justify-center rounded-full ${statusStyles[status]} p-2 w-12 h-12 border-2 `}
          onClick={handleClick}
        >
          {iconStatus[status]}
        </button>

        <button
          title="Status do teste"
          className={`absolute ${
            !!onClick && status != 'pending' ? 'cursor-pointer' : 'cursor-default'
          } top-2 left-3 flex items-center rounded-md  w-28 pr-3 h-8 border-2 ${statusStyles[status]}`}
          onClick={handleClick}
        >
          <span className="text-white  text-sm text-right w-full capitalize">{data.status}</span>
        </button>
      </div>
    </div>
  );
}
