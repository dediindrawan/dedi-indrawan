import Navbar from './components/navbar/Navbar';
import Jumbotron from './components/jumbotron/Jumbotron';
import Profile from './components/profile/Profile';
import Project from './components/project/Project';
import Content from './components/content/Content';
import Contact from './components/contact/Contact';
import './index.css';
import Experience from './components/experience/Experience';

function App() {
  return (
    <div className="main-container">
      <nav className="navbar">
        <Navbar />
      </nav>

      <header className="jumbotron">
        <Jumbotron />
      </header>

      <main className="content-container">
        <Profile />
        <Project />
        <Experience />
        <Content />
      </main>

      <footer id="contact" className="contact">
        <Contact />
      </footer>
    </div>
  );
}

export default App;
