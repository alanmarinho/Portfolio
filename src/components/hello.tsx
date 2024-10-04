import Divider from '@components/divider';
import { useInfo } from '@contexts/info';
import Button from '@components/button';
import { FaArrowDown } from 'react-icons/fa';
export default function Hello() {
  const { myInfo } = useInfo();

  return (
    <div className="flex text-white ">
      <div className="flex flex-col md:items-center md:flex-row p-5 gap-4">
        <h1 className="text-2xl">Hello stranger!</h1>
        <div className="hidden sm:flex sm:h-full">
          <Divider />
        </div>
        <div className="flex flex-col items-center gap-5">
          <div className="flex items-center bg-secondary p-1 rounded-full">
            <img
              className="w-32 h-32 rounded-full"
              src={
                myInfo.picture.gitHubPicture
                  ? `${myInfo.contact.gitHub.url}.png`
                  : !!myInfo.picture.altherURL
                  ? myInfo.picture.altherURL
                  : myInfo.picture.localPicture
              }
              alt="Profile Picture"
            />
          </div>
          <p className="text-center">Prazer, me chamo {myInfo.name}, seja muito bem-vindo(a).</p>
          <Button href="#about" animate icon={<FaArrowDown />}>
            Um pouco mais sobre mim
          </Button>
        </div>
      </div>
    </div>
  );
}
