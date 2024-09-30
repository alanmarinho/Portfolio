import Botton from '@components/botton';
import DashBoard from '@components/dashboard';
import NavBAr from '@components/header';
import ProjectCard from '@components/projectCard';

function App() {
  const data = {
    title: 'GitHub Finder',
    subTitle: 'Find GitHub users and view their repositories Suspendisse nec facilisis odio, et porta dolor.',
    primaryTecnology: 'typescript',
    tecnologiesUsed: ['typescript', 'react', 'styled-components', 'javascript'],
    description:
      ' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse nec facilisis odio, et porta dolor. Fusce molestie ex sed mollis porttitor. Sed id arcu sit amet orci malesuada sollicitudin. Pellentesque neque leo, pharetra a neque et, egestas ornare elit. Etiam eget mattis massa. Nunc a purus sit amet nulla condimentum gravida id eget nulla. Nulla rutrum at magna ut vulputate. Proin at mollis leo. In gravida iaculis purus.',
    demoLive: 'https://alanmarinho.github.io/github_finder/',
    repLink: 'https://github.com/alanmarinho/github_finder/tree/main',
  };
  return (
    <div>
      <NavBAr />
      <DashBoard />
      <div className="flex md:flex-col justify-center items-center">
        <div className="bg-white w-full lg:w-[900px] md:w-[700px] sm:w-[500px] ">
          <div id="about" className="flex p-5 flex-col gap-5">
            <h1 className="text-2xl">About</h1>
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
          <div id="projects" className="flex p-5 flex-col gap-5">
            <h1 className="text-2xl">Projects</h1>

            <div className="flex gap-14 overflow-auto justify-center items-center">
              <ProjectCard data={data} />
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
