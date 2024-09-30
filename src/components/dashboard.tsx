import { useInfo } from '@contexts/info';
import Divider from '@components/divider';
import TecnologiesCarousel from './tecnologiesCarousel';
export default function DashBoard() {
  const { myInfo } = useInfo();

  const test = ['ffff', 'ffff', 'ffff', 'ffff', 'ffff', 'ffff'];
  return (
    <>
      <div className="flex items-center xs:justify-evenly h-40 bg-primary p-6">
        <div className="flex flex-row">
          <img
            className="w-24"
            src={
              myInfo.picture.gitHubPicture
                ? `${myInfo.contact.gitHub.url}.png`
                : !!myInfo.picture.altherURL
                ? myInfo.picture.altherURL
                : myInfo.picture.localPicture
            }
            alt="Profile Picture"
          />
          <div className="flex flex-col">
            <div className="text-white pl-3 flex flex-col">
              <div className="">
                <h1 className="text-2xl">{myInfo.name}</h1>
                <p className="text-sm">{myInfo.role}</p>
              </div>
              {myInfo.openToWork ? (
                <p className="text-md mt-5">Open to Work</p>
              ) : (
                <div>
                  <p className="text-md">
                    {myInfo.inWork.position} at {myInfo.inWork.company}
                  </p>
                  <p className="text-xs">{myInfo.inWork.contry}</p>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className={`hidden ${myInfo.openToWork ? 'xxs:flex' : 'xs:flex'} h-full `}>
          <Divider />
        </div>
        <div className="hidden md:flex h-32 flex-col overflow-hidden">
          <div className="flex items-center flex-col animate-loop-scroll-dtt space-y-7">
            <TecnologiesCarousel />
          </div>
          <div className="flex items-center flex-col animate-loop-scroll-dtt space-y-7 mt-7" aria-hidden="true">
            <TecnologiesCarousel />
          </div>
        </div>
      </div>
      <div className="flex md:hidden flex-row overflow-hidden ">
        <div className="flex items-center flex-row animate-loop-scroll-rtl space-x-8">
          <TecnologiesCarousel />
        </div>
        <div className="flex items-center flex-row animate-loop-scroll-rtl space-x-8 ml-[355px]" aria-hidden="true">
          <TecnologiesCarousel />
        </div>
      </div>
    </>
  );
}
