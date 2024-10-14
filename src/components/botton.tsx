import { useInfo } from '@contexts/info';
import { useState } from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { FaLocationDot } from 'react-icons/fa6';
import { MdEmail } from 'react-icons/md';
import Notification from '@components/notification';

export default function Botton() {
  const [showNotification, setShowNotification] = useState(false);
  const [notifications, setNotifications] = useState<string[]>([]);

  const handleShowNotification = (message: string) => {
    setNotifications((prev) => [...prev, message]);
  };

  const { myInfo } = useInfo();

  const handleCopy = (textToCopy: string) => {
    setShowNotification((prev) => !prev);
    handleShowNotification('Email copiado!');
    navigator.clipboard
      .writeText(textToCopy)
      .then(() => {
        console.log('Texto copiado: ', textToCopy);
      })
      .catch((err) => {
        console.error('Erro ao copiar o texto: ', err);
      });
  };
  return (
    <div className="flex text-white w-full flex-col gap-3 p-2 md:p-6 items-center  " style={{ paddingBottom: 3 }}>
      <div className="flex flex-col xxs:flex-row items-center justify-center xxs:justify-between gap-4 w-full">
        <div className="flex flex-col items-center xxs:items-start">
          <h1 className="text-lg sm:text-2xl">{myInfo.name}</h1>
          <p className="text-sm">{myInfo.role}</p>
          <div className="flex items-center gap-1">
            <FaLocationDot color="#fff" />
            <p>
              {myInfo.address.state}/{myInfo.address.contry}
            </p>
          </div>
          <a className="" href={myInfo.contact.gitHub.url} target="_blank">
            <div className="flex items-center gap-1">
              <FaGithub color="#fff" />
              <h1>/{myInfo.contact.gitHub.username}</h1>
            </div>
          </a>
        </div>
        <div className="flex flex-col items-center xxs:items-end">
          {myInfo.openToWork ? (
            <div className="flex flex-col items-center xxs:items-end">
              <h1 className="text-lg sm:text-2xl">Open to Work!</h1>
              <p>Talk to Me ;)</p>
            </div>
          ) : (
            <div className="flex flex-col items-center xxs:items-end">
              <h1 className="text-lg sm:text-2xl">
                {myInfo.inWork.position} at {myInfo.inWork.company}
              </h1>
              <p>
                {myInfo.inWork.state}/{myInfo.inWork.contry}
              </p>
            </div>
          )}
          <a className="flex items-center gap-1" href={myInfo.contact.linkedin.url} target="_blank">
            <FaLinkedin color="#fff" />
            <h1>/{myInfo.contact.linkedin.username}</h1>
          </a>
          <div
            onClick={() => handleCopy(myInfo.contact.email)}
            className="flex  items-center gap-1 hover:cursor-pointer"
          >
            <MdEmail color="#fff" />
            <p>{myInfo.contact.email}</p>
          </div>
        </div>
      </div>
      <span className="text-xs text-center">
        © {new Date().getFullYear()} Alan Marinho. Created with{' '}
        <span
          onClick={() => {
            setShowNotification((prev) => !prev);
            handleShowNotification('Oi ❤️');
          }}
        >
          ❤️
        </span>{' '}
        and lots of coffee.
      </span>
      <div className="fixed z-[20] top-12 right-4">
        <div className="flex flex-col gap-2">
          {notifications.map((item, key) => (
            <Notification setShow={setShowNotification} key={key} message={item} />
          ))}
        </div>
      </div>
    </div>
  );
}
