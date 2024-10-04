export const Comments = [
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
