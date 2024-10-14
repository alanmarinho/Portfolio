export const Comments1 = [
  {
    userName: 'alanmarinho',
    Nome: 'Alan Marinho',
    Senha: '1234', // hash
    securityQuestion: {
      quest: 'quest',
      response: 'response',
    },
    role: ['founder'], // "" / null  or "checked"
    rating: 2,
    founderResponse: '',
    feedback: [
      {
        public: true,
        category: 'criticism', // praise, comment, tip, advice
        likes: 3,
        desliks: 45,
        Message:
          'Seu portfólio parece desatualizado, sem identidade visual consistente e navegação confusa. Faltam projetos relevantes e a falta de responsividade deixa uma péssima impressão profissional.',
      },
    ],
  },
];

export const CommentsData = [
  { knowns: 23, anonimus: 42, geral: 65 },
  [
    {
      anonimus: false,
      nome: 'Alan Marinho',
      userName: 'alanmarinho',
      role: ['founder'],
      feedbacks: [
        {
          public: true,
          category: 'criticism', // praise, comment, tip, advice
          likes: 3,
          desliks: 45,
          Message:
            'Seu portfólio parece desatualizado, sem identidade visual consistente e navegação confusa. Faltam projetos relevantes e a falta de responsividade deixa uma péssima impressão profissional.',
        },
        {
          public: true,
          category: 'criticism', // praise, comment, tip, advice
          likes: 3,
          desliks: 45,
          Message:
            'Seu portfólio parece desatualizado, sem identidade visual consistente e navegação confusa. Faltam projetos relevantes e a falta de responsividade deixa uma péssima impressão profissional.',
        },
      ],
    },

    {
      anonimus: false,
      nome: 'iFood Tech',
      userName: 'iFood',
      role: ['checked'],
      feedbacks: [
        {
          public: true,
          category: 'criticism',
          likes: 12,
          desliks: 2,
          Message:
            'O layout do seu portfólio é bonito, mas a falta de descrição nos projetos dificulta a compreensão do seu trabalho.',
        },
        {
          public: true,
          category: 'praise',
          likes: 20,
          desliks: 0,
          Message: 'Adorei sua abordagem minimalista! Seus trabalhos são muito inspiradores.',
        },
      ],
    },
    {
      anonimus: true,
      role: [''],
      feedbacks: [
        {
          public: true,
          category: 'tip',
          likes: 5,
          desliks: 1,
          Message: 'Considere incluir mais detalhes técnicos sobre as tecnologias que você usou em seus projetos.',
        },
        {
          public: false,
          category: 'comment',
          likes: 8,
          desliks: 0,
          Message:
            "Seu portfólio tem um bom potencial, mas precisa de uma seção de 'Sobre' para contar mais sobre você.",
        },
      ],
    },
    {
      anonimus: false,
      nome: 'Fernanda Oliveira',
      userName: 'fernandaol',
      role: [''],
      feedbacks: [
        {
          public: true,
          category: 'criticism',
          likes: 4,
          desliks: 10,
          Message:
            'As cores do seu portfólio não combinam e podem distrair os visitantes. Uma paleta mais harmônica ajudaria.',
        },
        {
          public: true,
          category: 'advice',
          likes: 6,
          desliks: 1,
          Message: 'Seria interessante incluir depoimentos de clientes para aumentar a credibilidade do seu trabalho.',
        },
      ],
    },
    {
      anonimus: true,
      role: [''],
      feedbacks: [
        {
          public: true,
          category: 'praise',
          likes: 15,
          desliks: 2,
          Message: 'Seu portfólio é muito envolvente e a navegação é intuitiva. Ótimo trabalho!',
        },
        {
          public: false,
          category: 'tip',
          likes: 7,
          desliks: 3,
          Message: 'Pense em adicionar um blog para compartilhar suas experiências e projetos.',
        },
      ],
    },
    {
      anonimus: false,
      nome: 'Luciana Mendes',
      userName: 'lucianam',
      role: [''],
      feedbacks: [
        {
          public: true,
          category: 'comment',
          likes: 9,
          desliks: 4,
          Message: 'Os textos do seu portfólio estão bem escritos, mas falta uma seção de amostras de trabalho.',
        },
        {
          public: true,
          category: 'criticism',
          likes: 5,
          desliks: 8,
          Message: 'Seu portfólio poderia ser mais dinâmico. Considere adicionar animações ou vídeos.',
        },
      ],
    },
  ],
];
