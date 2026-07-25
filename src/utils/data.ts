import {
    SiPython,
    SiReact,
    SiTypescript,
    SiTailwindcss,
    SiNodedotjs,
    SiDocker,
    SiMysql,
    SiFlutter,
    SiNextdotjs,
} from "react-icons/si";
import { FaProjectDiagram } from "react-icons/fa";

interface IHeader {
    text: string;
    link?: string;
    scrollTo?: string;
}
interface experience {
    title: string;
    current: boolean;
    company: string;
    companyUrl?: string;
    description: string;
    startDate: Date;
    endDate: Date | null;
    skills?: string[];
    remote: boolean;
    location?: {
        city?: string;
        state?: string;
        country?: string;
    };
}
export interface IExperience extends Array<experience> { }

interface IInfo {
    name: string;
    email: string;
    github: string;
    linkedin: string;
    resume: string;
    location: {
        city?: string;
        state: string;
        country: string;
    };
}

interface ISkills {
    name: string;
    slug?: string;
    url?: string;
    icon: React.ComponentType<{ className?: string }>;
}
interface IProject {
    name: string;
    description: string;
    technologies: string[];
    icon: React.ComponentType<{ size?: number; style?: React.CSSProperties, className?: string }>;
    color: string;
    repositoryUrl?: string;
    liveUrl?: string;
}

export const projects: IProject[] = [
    {
        name: "CeasaTracker",
        description: "Sitema que realiza a extração e armazenamento de dados dos preços de produtos agrícolas comercializados nas CEASAs do estado do Ceará.",
        technologies: ["Python", "Pandas", "ETL", "MySQL", "Docker", "TypeScript", "Node.js"],
        icon: SiPython,
        color: "#FFF449",
        repositoryUrl: "https://github.com/ceasaTracker",
        liveUrl: "https://ceasatracker.alanmarinho.com.br/",
    },
    {
        name: "ABC da Amazônia wiki",
        description: "Wiki colaborativa que mapeia os episódios da icônica série de programetes ABC da Amazônia da Rede Globo de Televisão.",
        technologies: ["React", "TypeScript", "Tailwind CSS", "YAML", "CI/CD"],
        icon: SiReact,
        color: "#fff",
        repositoryUrl: "https://github.com/abc-da-amazonia",
        liveUrl: "https://abc-da-amazonia.github.io/wiki/",
    },
    {
        name: "Alphabet",
        description: "Joguinho de navegador onde o objetivo é digitar o alfabeto corretamente o mais rápido possível.",
        technologies: ["TypeScript", "React", "AdonisJS", "Node.js"],
        icon: SiTypescript,
        color: "#007DCC",
        repositoryUrl: "https://github.com/alanmarinho/alphabet",
        liveUrl: "https://games.alanmarinho.com.br/",
    },
    {
        name: "Algorítimo Genético",
        description: "Implementação de um algoritmo genético para resolução do problema do fluxo máximo.",
        technologies: ["Python"],
        icon: SiPython,
        color: "#FFF449",
        repositoryUrl: "https://github.com/alanmarinho/algoritimo_genetico_fluxo_maximo"
    },
    {
        name: "Qr Code Generator",
        description: "Aplicação web que permite gerar e baixar códigos QR.",
        technologies: ["React", "TypeScript", "Tailwind CSS"],
        icon: SiReact,
        color: "#61DAFB",
        repositoryUrl: "https://github.com/alanmarinho/QrCode-Generator",
        liveUrl: "https://alanmarinho.github.io/QrCode-Generator/",
    },
]


export const experience: IExperience = [
    {
        title: "Desenvolvedor Júnior",
        company: "IntuitiveCare",
        companyUrl: "https://intuitivecare.com",
        startDate: new Date("2026-07"),
        endDate: null,
        description: "Atuo como desenvolvedor júnior, contribuindo para o desenvolvimento de soluções inovadoras na área de saúde. Participo de projetos que envolvem criação e manutenção de pipelines de dados.",
        current: true,
        skills: ["ETL", "Python", "Banco de Dados", "AWS lambda"],
        remote: true,
    },
    {
        title: "Estagiário em Engenharia de Dados",
        company: "IntuitiveCare",
        companyUrl: "https://intuitivecare.com",
        startDate: new Date("2025-06"),
        endDate: new Date("2026-07"),
        current: false,
        description: "Atuei como estagiário em Engenharia de Dados, auxiliando na coleta, processamento e análise de dados. Participei de projetos que envolviam a implementação de soluções para otimização e automação de processos de dados.",
        skills: ["Python", "ETL", "Banco de Dados", "AWS lambda", "Git", "GitHub",],
        remote: true,
    },
    {
        title: "Assistente de Desenvolvimento de chatbots",
        company: "IFCE",
        companyUrl: "https://ifce.edu.br",
        startDate: new Date("2023-02"),
        endDate: new Date("2023-10"),
        current: false,
        description: "Atuei como assistente de desenvolvimento de chatbots, auxiliando no desenvolvimento de chatbots educacionais.",
        skills: ["Python", "Machine Learning", "NLP", "APIs"],
        remote: false,
        location: {
            state: "Ceará",
            country: "Brasil",
        }
    }
]

export const skills: ISkills[] = [
    { name: "Python", icon: SiPython, slug: "python" },
    { name: "Banco de Dados", icon: SiMysql, slug: "database" },
    { name: "ETL", icon: FaProjectDiagram, slug: "etl" },
    { name: "TypeScript", icon: SiTypescript, slug: "typescript" },
    { name: "Node.js", icon: SiNodedotjs, slug: "nodedotjs" },
    { name: "Docker", icon: SiDocker, slug: "docker" },
    { name: "React", icon: SiReact, slug: "react" },
    { name: "Tailwind CSS", icon: SiTailwindcss, slug: "tailwindcss" },
];

export const myInfo: IInfo = {
    name: "Alan Marinho",
    email: "alanmarinho020@gmail.com",
    github: "https://github.com/alanmarinho",
    linkedin: "https://www.linkedin.com/in/alan-marinho20",
    resume: "https://docs.google.com/viewer?url=https://raw.githubusercontent.com/alanmarinho/utils/main/curriculo.pdf",
    location: {
        state: "Ceará",
        country: "Brasil",
    }
};


export const headerLinks: IHeader[] = [
    { text: "Sobre", scrollTo: "#sobre" },
    { text: "Habilidades", scrollTo: "#habilidades" },
    { text: "Experiência", scrollTo: "#experiencia" },
    { text: "Projetos", scrollTo: "#projetos" },
    { text: "Contato", scrollTo: "#contato" },
];