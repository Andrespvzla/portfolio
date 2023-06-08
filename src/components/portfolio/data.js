import { FaReact } from 'react-icons/fa';
import { SiTailwindcss, SiWordpress } from 'react-icons/si';

const Data = [
  {
    id: 1,
    category: 'react',
    icon: FaReact,
    name: 'Login with Firebase',
    desc: 'Created a project where you can login into a protected page using Firebase and TailwindCSS. Includes validations and toast for notifications, sing in, sign up, recover password, login with google.',
    git: 'http://www.github.com',
    demo: 'http://www.demo.com',
  },
  {
    id: 2,
    category: 'react',
    icon: FaReact,
    name: 'Pokedex using PokeAPI',
    desc: 'Created a project utilizing PokeApi and designed with TailwindCSS. Includes pagination, search pokemons, pokemons details, filter pokemons by type and save your favorite pokemons.',
    git: 'http://www.github.com',
    demo: 'http://www.demo.com',
  },

  {
    id: 3,
    category: 'tailwindcss',
    icon: SiTailwindcss,
    name: 'Landing Page',
    desc: `Landing page for a business designed with TailwindCSS. It's a responsive website with some great design skills and best practices.`,
    git: 'http://www.github.com',
    demo: 'http://www.demo.com',
  },
  {
    id: 4,
    category: 'wordpress',
    icon: SiWordpress,
    name: 'University Website',
    desc: 'A complete page built with WordPress. Designed around 10 different pages aligned with the best user experience posible.',
    git: 'http://www.github.com',
    demo: 'http://www.demo.com',
  },
];

export default Data;
