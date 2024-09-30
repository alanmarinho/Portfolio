import { createContext, useContext, useState } from 'react';
import { geralInfo } from '@/ambientVariables';

interface infoProps {
  theme: string;
  name: string;
  role: string;
  openToWork: boolean;
  address: {
    state: string;
    contry: string;
  };
  picture: {
    gitHubPicture: boolean;
    altherURL: string;
    localPicture?: string;
  };
  inWork: {
    position: string;
    company: string;
    state: string;
    contry: string;
  };
  contact: {
    email: string;
    linkedin: { username: string; url: string };
    gitHub: { username: string; url: string };
  };
}
export const infosContext = createContext<{ myInfo: infoProps }>({ myInfo: geralInfo });
export const useInfo = () => {
  return useContext(infosContext);
};

export const InfoContext = ({ children }: { children: React.ReactNode }) => {
  const [info, setInfo] = useState<infoProps>({
    theme: geralInfo.theme,
    name: geralInfo.name,
    role: geralInfo.role,
    openToWork: geralInfo.openToWork,
    address: {
      state: geralInfo.address.state,
      contry: geralInfo.address.contry,
    },
    picture: {
      gitHubPicture: geralInfo.picture.gitHubPicture,
      altherURL: geralInfo.picture.altherURL,
    },
    inWork: {
      position: geralInfo.inWork.position,
      company: geralInfo.inWork.company,
      state: geralInfo.inWork.state,
      contry: geralInfo.inWork.contry,
    },
    contact: {
      email: geralInfo.contact.email,
      linkedin: { username: geralInfo.contact.linkedin.username, url: geralInfo.contact.linkedin.url },
      gitHub: { username: geralInfo.contact.gitHub.username, url: geralInfo.contact.gitHub.url },
    },
  });
  const value = {
    myInfo: info,
  };
  return <infosContext.Provider value={value}>{children}</infosContext.Provider>;
};
