import Botton from '@components/botton';
import DashBoard from '@components/dashboard';
import NavBAr from '@components/header';
import ProjectCard from '@components/projectCard';
import { academics, projects } from '@/reposData';
import { useEffect, useRef } from 'react';
import { useInfo } from '@contexts/info';
import Hello from '@components/hello';

import Bold from '@components/text/bold';
import Text from '@components/text/text';
import { Skills } from '@/ambientVariables';
import SkillLang from '@components/skillLang';
import Link from '@components/text/link';
import List from '@components/text/list/list';
import Item from '@components/text/list/item';
import ButtonComment from '@components/buttons/commentButtoon';

function App() {
  const { onKnowMe, knowMe, myInfo } = useInfo();

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
          <Hello />
        </div>
      )}
      <div className="flex md:flex-col justify-center items-center">
        <div className="bg-white w-full lg:w-[900px] md:w-[700px] sm:w-[500px] ">
          <div id="about" className="flex p-5 flex-col gap-5 min-h-max">
            <h1 className="text-2xl">About</h1>
            <div className="flex flex-col sm:flex-row ">
              <div className="flex flex-col gap-3">
                <Text style="text-justify">
                  Sou <Bold>{myInfo.role}</Bold>, apaixonado por programação e um eterno estudante. Atualmente estou
                  quase terminando meu Bacharelado em <Bold>Ciência da Computação</Bold> pelo{' '}
                  <Bold>Instituto Federal do Ceará</Bold>.
                </Text>
                <Text>
                  Tenho {new Date().getFullYear() - 2002} anos de idade e moro no estata do {myInfo.address.state},{' '}
                  {myInfo.address.contry} e estou sempre em busca de aprender um pouco mais a cada dia. Tenho
                  conhecimento em diversas tecnologias de <Bold>Front-end</Bold> e <Bold>Back-end</Bold>.
                </Text>
              </div>
            </div>
          </div>
          <div id="skills" className="flex p-5 flex-col gap-5">
            <h1 className="text-2xl">Skills</h1>
            <div className="flex flex-wrap gap-4">
              {Skills.map((item, key) => (
                <SkillLang language={item.language} emphasis={item.emphasis} />
              ))}
            </div>
          </div>
          <div id="projects" className="flex p-5 flex-col gap-5 ">
            <h1 className="text-2xl">Projects</h1>
            <div className="flex gap-14 items-center overflow-x-auto">
              {projects.map((item, id) => (
                <div>
                  <ProjectCard data={item} key={id} />
                </div>
              ))}
              {/* <Button icon={<FaPlus />}>Show more</Button> */}
            </div>
            <Text>
              Estes são alguns dos projetos que já desenvolvi, envolvendo <Bold>Front end</Bold>, <Bold>Back end</Bold>,{' '}
              <Bold>Banco de bados</Bold>, <Bold>APIs REST</Bold> e outros.
            </Text>
            <Text>
              No meu <Link url={myInfo.contact.gitHub.url}>GitHub</Link> tem mais alguns :)
            </Text>
          </div>
          <div id="academics" className="flex p-5 flex-col gap-5">
            <h1 className="text-2xl">Academics</h1>
            <div className="flex gap-14 items-center overflow-x-auto">
              {academics.map((item, key) => (
                <div>
                  <ProjectCard data={item} key={key} />
                </div>
              ))}
            </div>
            <Text>
              Aqui estão alguns do projeto e atividades que já desenvolvi na faculdade, curso Ciencia da Computação no{' '}
              <Bold>Instituto Federal do Ceará</Bold>, lá além de atividade puramente teóricas, também desenvolvi alguns
              projetos praticos, envolvendo <Bold>Front end</Bold>, <Bold>Back end</Bold>, <Bold>Banco de bados</Bold>,{' '}
              <Bold>APIs REST</Bold> além <Bold>Algorítmos</Bold> como:
            </Text>
            <List>
              <Item>Algorítimos Genéticos</Item>
              <Item>Analizador Léxico</Item>
              <Item>Open Gl</Item>
            </List>
          </div>

          <div className="flex p-5 flex-col gap-5">
            <h1 className="text-2xl">Visitantes</h1>
            <Text>Aqui estão alguns que já pessaram por aqui.</Text>
          </div>

          <div className="flex p-5 flex-col gap-5">
            <h1 className="text-2xl">FeedBack</h1>
            <div className="flex flex-col gap-3">
              <Text>
                Gostaria de registrar sua passagem por aqui deixando um Comentário, Sugestão, Consenho ou Crítica?
              </Text>
              <Text>
                É <Bold style="underline">anônimo</Bold> se quiser ;)
              </Text>
            </div>
            <div className="flex justify-center gap-3">
              <ButtonComment onClick={() => console.log('FSDFSF')}>Registar minha passagem</ButtonComment>
            </div>
          </div>
          <div className="flex p-5 flex-col gap-5">
            <h1 className="text-2xl text-zinc-400">//end</h1>
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
