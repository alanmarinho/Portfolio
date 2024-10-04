import { FaCrown } from 'react-icons/fa';

interface SkillLangProps {
  language: string;
  emphasis: boolean;
}

export default function SkillLang({ language, emphasis }: SkillLangProps) {
  return (
    <div
      className={`flex bg-secondary  p-3 rounded-md text-white ${
        !!emphasis && 'bg-gold-gradient hover:cursor-pointer hover:animate-shine'
      }`}
    >
      <p>{language}</p>
      {!!emphasis === true && <FaCrown style={{ transform: 'translate(50%, -50%)' }} />}
    </div>
  );
}
