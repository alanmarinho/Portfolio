import { FaGithub } from 'react-icons/fa';
import Icon from './icon';

interface cardProps {
  data: {
    title: string;
    subTitle: string;
    primaryTecnology: string;
    tecnologiesUsed: string[];
    description: string;
    demoLive?: string;
    repLink: string;
  };
}

const handleOpenWindow = (url: string) => {
  window.open(url, '_blank', 'noopener,noreferrer');
};

export default function ProjectCard({ data }: cardProps) {
  return (
    <div className="flex flex-col w-80 rounded-2xl overflow-hidden bg-blue-200">
      <div className="flex flex-col bg-blue-400 p-2">
        <div className="flex flex-col items-center justify-center mb-10 text-white">
          <h1 className="text-2xl">{data.title}</h1>
          <p className="text-sm text-center">{data.subTitle}</p>
        </div>
      </div>
      <div className="flex flex-col h-40 ">
        <div className="absolute -mt-7 ml-14">
          <div className="flex items-center gap-2 justify-center">
            <div className="flex justify-center gap-2">
              {data.tecnologiesUsed.slice(0, 3).map((item, id) => (
                <div className="flex items-center p-2 justify-center rounded-full bg-white border-[3px] border-slate-400">
                  <Icon icon={item} />
                </div>
              ))}
            </div>
            {data.tecnologiesUsed.length > 3 && (
              <div className="flex items-center w-6 h-6 justify-center bg-white  rounded-full">
                <p className="text-xs">+{data.tecnologiesUsed.length - 3}</p>
              </div>
            )}
          </div>
        </div>
        <div className="flex mt-8 p-4 overflow-auto custom-scrollbar">
          <p className="text-justify">{data.description}</p>
        </div>
      </div>
      <div className="flex justify-center mt-10 p-6 gap-3">
        {!!data.demoLive && (
          <div
            onClick={() => data.demoLive && handleOpenWindow(data.demoLive)}
            className="flex items-center justify-center border-[1px] border-zinc-400 bg-white rounded-md p-3  hover:cursor-pointer hover:shadow-lg"
          >
            <p className="text-sm">Launch</p>
            <div className="p-1 bg-blue-500 rounded-md ml-2">
              <p className="text-sm text-white">Demo</p>
            </div>
          </div>
        )}
        <div
          onClick={() => handleOpenWindow(data.repLink)}
          className="flex items-center justify-center border-[1px] border-zinc-400 bg-white rounded-md p-3 gap-2 hover:cursor-pointer hover:shadow-lg"
        >
          <p className="text-sm">View Code</p>
          <FaGithub color="#000" size={30} />
        </div>
      </div>
    </div>
  );
}
