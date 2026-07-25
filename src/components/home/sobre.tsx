export default function Sobre() {
  return (
    <section className="min-h-[calc(100dvh-56px)] flex items-center justify-center" id="sobre">
      <div className="flex flex-col items-start gap-4 px-4">
          <h2 className="mb-4 text-2xl font-bold">Sobre Alan</h2>

          <div className="flex flex-col items-center gap-6 md:flex-row ">
            <img
              src="https://github.com/alanmarinho.png"
              alt="Alan Marinho"
              className="h-50 w-auto rounded-xl md:h-72"
            />

            <p className="text-left text-lg leading-8">
              Tenho {new Date().getFullYear() - 2002} anos e moro no Ceará, Brasil.
              <br />
              Sou desenvolvedor Full Stack, bacharel em Ciência da Computação pelo <a className="hover:underline" href="https://portal.ifce.edu.br/campus/tiangua/" target="_blank" rel="noopener noreferrer">Instituto Federal do Ceará</a>.
              <br />
              Atualmente trabalho com desenvolvimento de software focado em backend de dados.
              <br />
              Apaixonado por tecnologia e aprendizado contínuo.
            </p>
          </div>
        </div>
    </section>
  );
}