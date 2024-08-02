import data from '/src/data/data.json';

const Profile = () => {
  return (
    <section id="profile" className="profile">
      <h1 className="section-title">About Me</h1>

      <figure className="profile-description">
        <img src="https://i.ibb.co.com/d0mfMWg/profile-image.png" alt="image" loading="lazy" className="reveal-left" />
        <figcaption>
          <article className="reveal-bottom">
            As a passionate Front End Developer with over one year of experience, I specialize in crafting responsive and user friendly websites using HTML, CSS, and JavaScript. I am currently enhancing my skills in React.js to build
            dynamic and engaging web applications. Additionally, I create web programming content, sharing insights and tutorials to help others learn and grow in the field.
          </article>
        </figcaption>
      </figure>

      <section className="skill-section">
        <h1 className="section-title">My Skills</h1>

        <figure>
          <ul className="reveal-left">
            {data.techIcons.map((techIcon) => (
              <li key={techIcon.id}>
                <img src={techIcon.icon} alt="icon" loading="lazy" />
              </li>
            ))}
          </ul>
          <figcaption>
            <article className="reveal-bottom">I’ve explored various technologies that have fueled my growth and enabled me to create compelling and responsive web experiences.</article>
          </figcaption>
        </figure>
      </section>
    </section>
  );
};

export default Profile;
