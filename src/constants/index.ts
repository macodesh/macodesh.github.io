import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  nodejs,
  mongodb,
  git,
  csharp,
  docker,
  carrent,
  jobit,
  tripguide,
  threejs,
  aspnet,
  trybe
} from '../assets'

export const navLinks = [
  {
    id: 'about',
    title: 'Sobre'
  },
  {
    id: 'experience',
    title: 'Experiência'
  },
  {
    id: 'tech',
    title: 'Tecnologias'
  },
  {
    id: 'projects',
    title: 'Projetos'
  },
  {
    id: 'contact',
    title: 'Contato'
  }
]

const services = [
  {
    title: 'Web',
    icon: web
  },
  {
    title: 'Mobile',
    icon: mobile
  },
  {
    title: 'Backend',
    icon: backend
  },
  {
    title: 'Desktop',
    icon: creator
  }
]

const technologies = [
  {
    name: 'HTML 5',
    icon: html
  },
  {
    name: 'CSS 3',
    icon: css
  },
  {
    name: 'JavaScript',
    icon: javascript
  },
  {
    name: 'TypeScript',
    icon: typescript
  },
  {
    name: 'React JS',
    icon: reactjs
  },
  {
    name: 'ASP.net',
    icon: aspnet
  },
  {
    name: 'Node JS',
    icon: nodejs
  },
  {
    name: 'MongoDB',
    icon: mongodb
  },
  {
    name: 'Three JS',
    icon: threejs
  },
  {
    name: 'git',
    icon: git
  },
  {
    name: 'C#',
    icon: csharp
  },
  {
    name: 'docker',
    icon: docker
  }
]

const experiences = [
  {
    title: 'Summer de Instrução',
    company_name: 'Trybe',
    icon: trybe,
    iconBg: '#1eb71fff',
    date: 'Julho de 2023',
    points: [
      'Responsável por realizar monitorias técnicas individuais e coletivas, revisão de conteúdo de forma síncrona e suporte por Slack para resolução de dúvidas.',
      ' Os conteúdos abordados para monitoria e revisão incluem: Fundamentos do Desenvolvimento Web contendo HTML, CSS, JAVASCRIPT e testes automatizados com Jest.',
      'Front-end passando por REACT e REDUX. Back-end abordando tecnologias como Mongo, SQL e NODEJS e o módulo de Ciências da Computação.'
    ]
  }
]

const testimonials = [
  {
    testimonial:
      'I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.',
    name: 'Sara Lee',
    designation: 'CFO',
    company: 'Acme Co',
    image: 'https://randomuser.me/api/portraits/women/4.jpg'
  }
]

const projects = [
  {
    name: 'Car Rent',
    description:
      'Plataforma baseada na Web que permite aos usuários pesquisar, reservar e gerenciar aluguel de carros de vários fornecedores, fornecendo uma solução conveniente e eficiente para as necessidades de transporte.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient'
      },
      {
        name: 'mongodb',
        color: 'green-text-gradient'
      },
      {
        name: 'tailwind',
        color: 'pink-text-gradient'
      }
    ],
    image: carrent,
    source_code_link: 'https://github.com/macodesh'
  },
  {
    name: 'Job IT',
    description:
      'Aplicativo da Web que permite aos usuários pesquisar vagas de emprego, visualizar faixas salariais estimadas para cargos e localizar empregos disponíveis com base em sua localização atual.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient'
      },
      {
        name: 'restapi',
        color: 'green-text-gradient'
      },
      {
        name: 'scss',
        color: 'pink-text-gradient'
      }
    ],
    image: jobit,
    source_code_link: 'https://github.com/macodesh'
  },
  {
    name: 'Trip Guide',
    description:
      'Uma plataforma abrangente de reservas de viagens que permite aos usuários reservar voos, hotéis e aluguel de carros e oferece recomendações selecionadas para destinos populares.',
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient'
      },
      {
        name: 'supabase',
        color: 'green-text-gradient'
      },
      {
        name: 'css',
        color: 'pink-text-gradient'
      }
    ],
    image: tripguide,
    source_code_link: 'https://github.com/macodesh'
  }
]

export { services, technologies, experiences, testimonials, projects }
