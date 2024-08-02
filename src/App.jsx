import { Helmet } from 'react-helmet';
import Navbar from './components/navbar/Navbar';
import Jumbotron from './components/jumbotron/Jumbotron';
import Profile from './components/profile/Profile';
import Project from './components/project/Project';
import Content from './components/content/Content';
import Contact from './components/contact/Contact';
import Experience from './components/experience/Experience';
import './index.css';

function App() {
  return (
    <>
      <Helmet>
        {/*  */}
        <meta name="google-site-verification" content="DLSSF-HltDOjhDBN7vUvHu_3AvOXGko9PG8ydaiITLQ" />
        {/* information handling referer on http request */}
        <meta name="referrer" content="no-referrer" />
        {/* SEO meta tag */}
        <meta
          name="description"
          content="As a passionate Front End Developer with over one year of experience, I specialize in crafting responsive and user friendly websites using HTML, CSS, and JavaScript. I am currently enhancing my skills in React.js to build dynamic and engaging web applications. Additionally, I create web programming content, sharing insights and tutorials to help others learn and grow in the field."
        />
        <meta name="keywords" content="dedi indrawan, front end developer, content creator, web developer" />
        <meta name="author" content="Dedi Indrawan" />
        <meta name="robots" content="index, follow" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        {/* open graph meta data */}
        <meta property="og:title" content="Dedi Indrawan | Portfolio Front End Developer" />
        <meta property="og:description" content="Front End Developer with 1+ years of experience creating responsive and user friendly websites using HTML, CSS, JavaScript, and currently expanding my skills in React.js." />
        <meta property="og:image" content="https://i.ibb.co.com/2FqrBCm/logo.png" />
        <meta property="og:url" content="https://dedi-indrawan.vercel.app/" />
        {/* favicon */}
        <link rel="icon" href="/src/assets/favicon-logo.ico" type="image/x-icon" />
        <link rel="shortcut icon" href="/src/assets/favicon-logo.ico" type="image/x-icon" />
      </Helmet>

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
    </>
  );
}

export default App;
