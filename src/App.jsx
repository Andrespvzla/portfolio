import { Sidebar } from './components/sidebar/Sidebar';
import { Home } from './components/home/Home';
import { About } from './components/about/About';
import { Resume } from './components/resume/Resume';
import { Portfolio } from './components/portfolio/Portfolio';
import { Contact } from './components/contact/Contact';

function App() {
  return (
    <>
      <Sidebar />
      <main className="lg:ml-[100px]">
        <Home />
        <About />
        <Resume />
        <Portfolio />
        <Contact />
      </main>
    </>
  );
}

export default App;
