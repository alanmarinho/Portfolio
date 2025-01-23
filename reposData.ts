import { cardProps } from '@components/projectCard';

export const projects = [
  {
    title: 'GitHub Finder',
    subTitle: 'Procucar e mostrar perfis e reposítórios no GitHub',
    primaryTecnology: 'typescript',
    tecnologiesUsed: ['typescript', 'react', 'tailwindcss'],
    description:
      'Este projeto busca e mostra dados do GitHub de qualquer usuário, basta fornecer o userName dele. Desenvolvido com ReacdJs e estilização, TailwindCSS e usando a API do GuitHub para obtenção dos dados.',
    demoLive: 'https://alanmarinho.github.io/github_finder/',
    repLink: 'https://github.com/alanmarinho/github_finder',
  },
  {
    title: 'Qr Code Generator',
    subTitle: 'Gere e baixe QrCodes',
    primaryTecnology: 'typescript',
    tecnologiesUsed: ['typescript', 'react', 'antdesign', 'tailwindcss'],
    description:
      'Desenvolvido em ReactJs, estilizado com TailwindCSS e usando o componente de QrCode do Ant Design, este projeto possibilita gerar e baixar QrCodes para qualque link válido da internet.',
    demoLive: 'https://alanmarinho.github.io/QrCode-Generator',
    repLink: 'https://github.com/alanmarinho/QrCode-Generator',
  },

  {
    title: 'fully-containerized-app',
    subTitle: 'Deploy de um app "completo" em docker. Front, Back e Banco de Dados',
    primaryTecnology: 'typescript',
    tecnologiesUsed: ['typescript', 'docker', 'adonis', 'mysql', 'react'],
    description:
      'Projeto consiste em um app CRUD "completo", contendo front-end, back-end e banco de dados orquestrados com Docker.',
    repLink: 'https://github.com/alanmarinho/fully-containerized-app',
  },
  {
    title: 'To do List',
    subTitle: 'To Do List simples usando FireBase',
    primaryTecnology: 'javascript',
    tecnologiesUsed: ['javascript', 'react', 'firebase', 'tailwindcss'],
    description: 'To Do list simples usando Firebase, ReactJS, NodeJs e javaScript',
    repLink: 'https://github.com/alanmarinho/to-doList',
  },
];

export const academics = [
  {
    title: 'Analizador léxico',
    // subTitle: 'Analizador léxico para reconhecimento de tokens.',
    primaryTecnology: 'python',
    tecnologiesUsed: ['python', 'html', 'flask'],
    description: 'Analizador léxico para reconhecimento de tokens.',
    repLink: 'https://github.com/alanmarinho/analizador_lexico',
  },
  {
    title: 'Algorítimo Genético',
    // subTitle: 'Algorítimo genético desenvolvido para resover o problema do fluxo máximo em grafos.',
    primaryTecnology: 'python',
    tecnologiesUsed: ['python'],
    description: 'Algorítimo genético desenvolvido para resover o problema do fluxo máximo em grafos.',
    repLink: 'https://github.com/alanmarinho/algoritimo_genetico_fluxo_maximo',
  },
  {
    title: 'Galeria de arte urbana',
    // subTitle: 'Atividade simples html e css.',
    primaryTecnology: 'html',
    tecnologiesUsed: ['html', 'css3'],
    description: 'Atividade simples html e css.',
    repLink: 'https://github.com/alanmarinho/galeria_arte_urbana',
    demoLive: 'https://alanmarinho.github.io/galeria_arte_urbana',
  },
  {
    title: 'Cubo mágico',
    // subTitle: 'Atividade onde um cubo mágico 2x2 foi desenvolvido como trabalho final da disciplina Computação Gráfica',
    primaryTecnology: 'python',
    tecnologiesUsed: ['python', 'opengl'],
    description:
      'Atividade onde um cubo mágico 2x2 foi desenvolvido como trabalho final da disciplina Computação Gráfica',
    repLink: 'https://github.com/alanmarinho/CuboOpenGl',
  },
];

export const tecnicalTests: cardProps[] = [
  {
    title: 'Desafio Mandarin',
    // subTitle: 'Atividade onde um cubo mágico 2x2 foi desenvolvido como trabalho final da disciplina Computação Gráfica',
    primaryTecnology: 'html',
    tecnologiesUsed: ['html', 'css3'],
    description: 'Teste técnico para vaga de estágio na empresa Mandarin. Conteúdo de E-Mail.',
    repLink: 'https://github.com/alanmarinho/desafio_Mandarin',
    status: 'reproved', // reproved, approved, pending
    feedBack:
      '[...] Infelizmente, desta vez sua seleção não foi possível para o processo seletivo em nossa agência. [...]',
    score: 1, // 0-10/10,
    candidatesNote:
      'O feedback foi bastante genérico, possivelmente sendo apenas um e-mail automático.\nNão foi citado o teste técnico no feedback, apenas um agradecimento pelo tempo gasto e a manifestação de desejo de sucesso na carreira do candidato. \nNão foi possível confirmar com certeza, no feedBack enviado pela Empresa, que o projeto submetido como objeto do teste técnico foi de fato analisado pela equipe de desenvolvedores da empresa.',
  },
  {
    title: 'Desafio BeTalent',
    // subTitle: 'Atividade onde um cubo mágico 2x2 foi desenvolvido como trabalho final da disciplina Computação Gráfica',
    primaryTecnology: 'typescript',
    tecnologiesUsed: ['typescript', 'adonis', 'mysql', 'nodejs', 'docker', 'lucide'],
    description: 'Teste técnico para vaga de desenvolvedor backEnd júnior na empresa BeTalent. API Rest.',
    repLink: 'https://github.com/alanmarinho/desafio_BeTalent',
    status: 'reproved',
    feedBack:
      '**Descrição Aproximada**\n\n[...] \n Após análise do teste pelos nossos Tech Leads, aplicando os critérios estabelecidos nas regras e pela concorrência, você não foi selecionado para a próxima etapa do processo seletivo. \n Não desanime, seu currículo permanecerá em nosso banco de talentos. \nSegue abaixo algumas observações levadas em conta na avaliação.\n \n **Status da observação:**\n🟢 Baixa (Sem problemas / Ok)\n🟡 Média (Atenção necessária)\n🟠 Alta (Problemas potenciais)\n🔴 Crítica (Problema sério)\n⚫ Bloqueio (Sistema inoperante)\n\n 🟢 Vários `console.log` perdidos no código.\n 🟢 Maior atenção na organização das rotas.\n 🟡 Erros de ortografia em retornos e nomeações.\n 🟠 Modelagem de banco com pontos requeridos ausentes.\n\n [...]',
    score: 10,
    candidatesNote:
      'O Feedback foi bem rico e personalizado, demonstrando que o teste técnico foi de fato e cuidadosamente analisado.\nA empresa foi bastante empática e gentil, e também trouxe observações do teste no Feedback, enriquecendo o retorno e trazendo para o candidato a noção do porquê não foi aprovado para seguir no processo seletivo.',
  },
];
