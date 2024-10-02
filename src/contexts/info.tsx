import { createContext, useContext, useState } from 'react';
import { geralInfo } from '@/ambientVariables';

interface InfoProps {
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

interface contextData {
  myInfo: InfoProps;
  knowMe: boolean;
  onKnowMe: (value: boolean) => void;
}

export const infosContext = createContext<contextData>({} as contextData);
export const useInfo = () => {
  return useContext(infosContext);
};

export const InfoContext = ({ children }: { children: React.ReactNode }) => {
  const [info, setInfo] = useState<InfoProps>({
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
  const [knowMe, setknowMe] = useState<boolean>(false);

  const onKowMe = async (value: boolean) => {
    setknowMe(value);
  };

  const value = {
    myInfo: info,
    knowMe,
    onKnowMe: onKowMe,
  };
  return <infosContext.Provider value={value}>{children}</infosContext.Provider>;
};
