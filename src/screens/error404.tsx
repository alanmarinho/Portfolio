import { useEffect, useState } from 'react';
import { MdArrowBack } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';

export default function Error404() {
  const [Fpressed, setFpressed] = useState<boolean>(false);
  const navigate = useNavigate();
  useEffect(() => {
    const handleKeyPress = (event: any) => {
      if (event.key.toLowerCase() === 'f') {
        setFpressed(true);
      }
    };

    window.addEventListener('keydown', handleKeyPress);

    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, []);
  useEffect(() => {
    if (Fpressed) {
      setTimeout(() => {
        navigate('/');
        setFpressed(false);
      }, 2000);
    }
  }, [Fpressed]);
  return (
    <div className="flex flex-col  bg-blue-500 h-screen">
      <a href="/" className="p-4 hover:cursor-pointer">
        <MdArrowBack color="#fff" />
      </a>
      <div className="flex flex-col md:flex-row ">
        <div className="flex flex-col  text-white p-5">
          <p className="text-[1000%]">:(</p>
          <p className="text-[150%]">Error 404.</p>
          <p className="text-[150%] text-nowrap">Página não encontrada, F.</p>
        </div>
        {!!Fpressed && (
          <div className="flex justify-center p-6 md:h-[80%]">
            <img className="" src="https://i.imgflip.com/45vfuj.jpg" title="made at imgflip.com" />
          </div>
        )}
      </div>
    </div>
  );
}
