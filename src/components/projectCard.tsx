import { FaGithub } from 'react-icons/fa';
import Icon from './icon';
import { useEffect, useState } from 'react';
import { Colors } from '@/ambientVariables';
interface cardProps {
  data: {
    title: string;
    subTitle?: string;
    primaryTecnology: string;
    tecnologiesUsed: string[];
    description: string;
    demoLive?: string;
    repLink: string;
  };
}

interface ColorsType {
  [key: string]: { primary: string; secondary: string };
}

const colors: ColorsType = Colors;

export default function ProjectCard({ data }: cardProps) {
  const [colorPrimary, setcolorPrimary] = useState<string>();
  const [colorSecondary, setcolorSecondary] = useState<string>();
  const handleOpenWindow = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  useEffect(() => {
    const bgColor = colors[data.primaryTecnology.toLowerCase()] || 'zinc';
    setcolorPrimary(bgColor.primary);
    setcolorSecondary(bgColor.secondary);
  }, [data.primaryTecnology]);

  return (
    <div className={`flex flex-col w-80 rounded-2xl overflow-hidden`} style={{ backgroundColor: colorSecondary }}>
      <div className={`flex flex-col p-2`} style={{ backgroundColor: colorPrimary }}>
        <div className="flex flex-col items-center justify-center mb-10 text-white">
          <h1 className="text-2xl">{data.title}</h1>
          {!!data.subTitle && <p className="text-sm text-center">{data.subTitle}</p>}
        </div>
      </div>
      <div className="flex flex-col h-40 ">
        <div className="flex justify-center" style={{ transform: 'translate(0%, -50%)' }}>
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
        <div className="flex overflow-auto pr-2 pl-2 custom-scrollbar">
          <p className="text-justify ">{data.description}</p>
        </div>
      </div>
      <div className="flex flex-col xxs:flex-row justify-center  p-6 gap-3">
        {!!data.demoLive && (
          <div
            onClick={() => data.demoLive && handleOpenWindow(data.demoLive)}
            className="flex items-center justify-center border-[1px] border-zinc-400 bg-white rounded-md p-3  hover:cursor-pointer hover:shadow-lg"
          >
            <p className="text-sm">Launch</p>
            <div className={`p-1 rounded-md ml-2`} style={{ backgroundColor: colorPrimary }}>
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