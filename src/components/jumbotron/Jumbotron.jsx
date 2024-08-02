import SocialMedia from '../user-profile/SocialMedia';

const Jumbotron = () => {
  return (
    <div className="jumbotron-content">
      <h1 className="fade-in-top">Dedi Indrawan</h1>
      <h2 className="fade-in-top">Front End Developer & Content Creator</h2>
      <p className="fade-in-top">
        <strong>Front End Developer</strong> with 1+ years of experience creating responsive and user friendly websites using HTML, CSS, JavaScript, and currently expanding my skills in React.js.
      </p>

      <ul className="fade-in-bottom">
        <SocialMedia />
      </ul>
    </div>
  );
};

export default Jumbotron;
