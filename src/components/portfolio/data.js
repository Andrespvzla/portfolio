import { FaReact } from 'react-icons/fa';
import { SiWordpress, SiJavascript, SiAstro } from 'react-icons/si';

const Data = [
  {
    id: 1,
    category: 'react',
    icon: FaReact,
    name: 'Login with Firebase',
    desc: 'Created a project where you can login into a protected page using Firebase and TailwindCSS. Includes validations and toast for notifications, sing in, sign up, recover password, login with google',
    git: 'https://github.com/Andrespvzla/login-firebase',
    demo: 'https://loginproject.andrespalacios.dev/login',
  },
  {
    id: 2,
    category: 'astro',
    icon: SiAstro,
    name: 'Happy Clicks Photo Booth',
    desc: 'Customer requested a website to show their services to their customers. I built this website with Astro Framework because it was really fun to use and very easy to built with.',
    // git: 'http://www.github.com',
    demo: 'https://happyclicksphotobooth.com',
  },
  {
    id: 3,
    category: 'wordpress',
    icon: SiWordpress,
    name: 'University Website',
    desc: 'A complete page built with WordPress. Designed around 10 different pages aligned with the best user experience posible. Included a module to take payment from students using React',
    git: '',
    demo: 'https://uft.edu.ve',
  },
  {
    id: 4,
    category: 'javascript',
    icon: SiJavascript,
    name: 'ToDo App',
    desc: 'A ToDo app created with Vite and Vanilla JavaScript. You can create new ToDos, remove all ToDos, complete a ToDo and filter ToDos',
    git: 'https://github.com/Andrespvzla/todo-vite-app',
    demo: 'https://andrespalacios-todoapp.netlify.app',
  },
];

export default Data;
