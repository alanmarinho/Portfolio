import { FaGithub, FaInfo } from 'react-icons/fa';
import Icon from './icon';
import { useEffect, useState } from 'react';
import { Colors } from '@/ambientVariables';
import CardStatus from '@/src/components/cardStatus';
import Divider from './divider';
export type statusTypes = {
  approved: 'approved';
  reproved: 'reproved';
  pending: 'pending';
};
export interface cardProps {
  title: string;
  subTitle?: string;
  primaryTecnology: string;
  tecnologiesUsed: string[];
  description: string;
  demoLive?: string;
  repLink: string;
  status?: keyof statusTypes;
  score?: number;
  feedBack?: string;
  candidatesNote?: string;
}

interface ColorsType {
  [key: string]: { primary: string; secondary: string };
}

const colors: ColorsType = Colors;

export default function ProjectCard(data: cardProps) {
  const [colorPrimary, setcolorPrimary] = useState<string>();
  const [colorSecondary, setcolorSecondary] = useState<string>();
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [statusModal, setStatusModal] = useState<boolean>(false);
  const handleOpenWindow = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const blockScrow = (status: boolean) => {
    if (status) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  };

  const changeModalTecnologies = () => {
    setModalOpen(!modalOpen);
    blockScrow(!modalOpen);
  };
  const changeModalStatus = () => {
    setStatusModal(!statusModal);
    blockScrow(!statusModal);
  };
  useEffect(() => {
    const bgColor = colors[data.primaryTecnology.toLowerCase()] || 'zinc';
    setcolorPrimary(bgColor.primary);
    setcolorSecondary(bgColor.secondary);
  }, [data.primaryTecnology]);

  return (
    <div className={`flex flex-col w-80 rounded-2xl overflow-hidden`} style={{ backgroundColor: colorSecondary }}>
      <div className={`flex flex-col p-2 `} style={{ backgroundColor: colorPrimary }}>
        {data.status && (
          <div className="flex items-center">
            <CardStatus data={data} onClick={changeModalStatus} />
            {!!data.score && data.score > -1 ? (
              <h1
                title="Nota do FeedBack"
                onClick={changeModalStatus}
                className="cursor-pointer ml-auto text-white text-xl"
              >
                {data.score}/10
              </h1>
            ) : null}
          </div>
        )}
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
                  <button className="cursor-default" title={item}>
                    <Icon icon={item} />
                  </button>
                </div>
              ))}
            </div>
            {data.tecnologiesUsed.length > 3 && (
              <div
                onClick={changeModalTecnologies}
                className="flex items-center w-6 h-6 justify-center bg-white cursor-pointer  rounded-full"
              >
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
      {modalOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
          onClick={changeModalTecnologies}
        >
          <div className="bg-white p-6 rounded shadow-lg" onClick={(e) => e.stopPropagation()}>
            <h2 className="text-lg font-bold mb-4">Tecnologias do projeto {data.title}</h2>
            <div className="flex justify-center gap-2">
              {data.tecnologiesUsed.map((item, id) => (
                <div className="flex items-center p-2 justify-center rounded-full bg-white border-[3px] border-slate-400">
                  <button className="cursor-default" title={item}>
                    <Icon icon={item} />
                  </button>
                </div>
              ))}
            </div>
            <div className="flex justify-center">
              <button onClick={changeModalTecnologies} className="mt-4 bg-red-500 text-white px-4 py-2 rounded">
                Fechar
              </button>
            </div>
          </div>
        </div>
      )}
      {statusModal && (
        <div
          className="fixed inset-0  bg-black bg-opacity-50 flex items-center justify-center z-50"
          onClick={changeModalStatus}
        >
          <div className="bg-white rounded  shadow-lg m-10 w-full md:w-1/2" onClick={(e) => e.stopPropagation()}>
            <div className="flex min-h-24 p-2" style={{ backgroundColor: colorPrimary }}>
              <div className="flex-1">
                <h1 className="text-white text-2xl">{data.title}</h1>
                <h3 className="text-white text-sm">{data.description}</h3>
              </div>
              <div className="flex items-center">
                <div className="mb-7">
                  <CardStatus data={data} />
                </div>
                <div className="flex items-center ml-4 mt-10 bg-gray-800 p-2 rounded-md">
                  <h1 className="text-white text-lg mr-2">{data.score}/10</h1>
                  <button
                    className="bg-white rounded-full p-1 cursor-default"
                    title="O Status do Teste Técnico tem como objetivo reportar que fim se deu no teste e o feedBack da empresa em questão."
                  >
                    <FaInfo className="text-black text-xl" />
                  </button>
                </div>
              </div>
            </div>
            <div className="flex flex-col max-h-[50vh] p-4 gap-8 overflow-scroll ">
              <div>
                <h1>FeedBack da Empresa:</h1>
                <h3 className="whitespace-pre-line">"{data.feedBack}"</h3>
              </div>

              <div>
                <h1>Notas do candidato:</h1>
                <h3 className="whitespace-pre-line">{data.candidatesNote}</h3>
              </div>

              <div>
                <h1>Nota do FeedBack: {data.score}/10</h1>
              </div>
            </div>

            <div className="flex p-6 justify-center">
              <button onClick={changeModalStatus} className="mt-4 bg-red-500 text-white px-4 py-2 rounded">
                Fechar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
