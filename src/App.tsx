import Botton from '@components/botton';
import DashBoard from '@components/dashboard';
import NavBAr from '@components/header';
import ProjectCard from '@components/projectCard';
import { projects } from '@/reposData';
import { MdArrowRight } from 'react-icons/md';
import { useEffect, useRef } from 'react';
import { useInfo } from '@contexts/info';

function App() {
  const { onKnowMe, knowMe } = useInfo();

  const introRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            onKnowMe(true);
          }
        });
      },
      { threshold: 0 },
    );

    if (introRef.current) {
      observer.observe(introRef.current);
    }

    return () => {
      if (introRef.current) {
        observer.unobserve(introRef.current);
      }
    };
  }, []);

  return (
    <div>
      <NavBAr />
      {knowMe ? (
        <DashBoard />
      ) : (
        <div ref={introRef} className="flex items-center justify-center bg-primary min-h-screen">
          <h1>ddd</h1>
          <a href="#about" onClick={() => onKnowMe(true)}>
            teeeee
          </a>
        </div>
      )}
      <div className="flex md:flex-col justify-center items-center">
        <div className="bg-white w-full lg:w-[900px] md:w-[700px] sm:w-[500px] ">
          <div id="about" className="flex p-5 flex-col gap-5 min-h-96">
            <h1 className="text-2xl">Hello stranger!</h1>
            <p className="text-justify">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse nec facilisis odio, et porta dolor.
              Fusce molestie ex sed mollis porttitor. Sed id arcu sit amet orci malesuada sollicitudin. Pellentesque
              neque leo, pharetra a neque et, egestas ornare elit. Etiam eget mattis massa. Nunc a purus sit amet nulla
              condimentum gravida id eget nulla. Nulla rutrum at magna ut vulputate. Proin at mollis leo. In gravida
              iaculis purus.
            </p>
          </div>
          <div id="skills" className="flex p-5 flex-col gap-5">
            <h1 className="text-2xl">Skills</h1>
            <p className="text-justify">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse nec facilisis odio, et porta dolor.
              Fusce molestie ex sed mollis porttitor. Sed id arcu sit amet orci malesuada sollicitudin. Pellentesque
              neque leo, pharetra a neque et, egestas ornare elit. Etiam eget mattis massa. Nunc a purus sit amet nulla
              condimentum gravida id eget nulla. Nulla rutrum at magna ut vulputate. Proin at mollis leo. In gravida
              iaculis purus.
            </p>
          </div>
          <div id="projects" className="flex p-5 flex-col gap-5 ">
            <h1 className="text-2xl">Projects</h1>

            <div className="flex gap-14 items-center overflow-x-auto">
              {projects.map((item, id) => (
                <div>
                  <ProjectCard data={item} key={id} />
                </div>
              ))}
              <div className="flex items-center text-white justify-center bg-blue-400 p-5 rounded-lg whitespace-nowrap hover:cursor-pointer hover:shadow-lg">
                <h1 className="text-lg">Show All</h1>
                <MdArrowRight color="#fff" size={40} />
              </div>
            </div>
            <p className="text-justify">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse nec facilisis odio, et porta dolor.
              Fusce molestie ex sed mollis porttitor. Sed id arcu sit amet orci malesuada sollicitudin. Pellentesque
              neque leo, pharetra a neque et, egestas ornare elit. Etiam eget mattis massa. Nunc a purus sit amet nulla
              condimentum gravida id eget nulla. Nulla rutrum at magna ut vulputate. Proin at mollis leo. In gravida
              iaculis purus.
            </p>
          </div>
          <div id="academics" className="flex p-5 flex-col gap-5">
            <h1 className="text-2xl">Academics</h1>
            <p className="text-justify">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse nec facilisis odio, et porta dolor.
              Fusce molestie ex sed mollis porttitor. Sed id arcu sit amet orci malesuada sollicitudin. Pellentesque
              neque leo, pharetra a neque et, egestas ornare elit. Etiam eget mattis massa. Nunc a purus sit amet nulla
              condimentum gravida id eget nulla. Nulla rutrum at magna ut vulputate. Proin at mollis leo. In gravida
              iaculis purus.
            </p>
          </div>
        </div>
      </div>
      <div id="contact" className="flex items-center justify-center flex-col gap-5 bg-black ">
        <div className="flex flex-col w-full md:max-w-[700px] lg:justify-evenly  lg:max-w-[900px] sm:max-w-[500px]">
          <Botton />
        </div>
      </div>
    </div>
  );
}

export default App;
