import data from '/src/data/data.json';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';

const Experience = () => {
  return (
    <section id="experience" className="experience">
      <h1 className="section-title">Work Experiences</h1>
      <article className="reveal-bottom">
        Explore the milestones of my career transition from a non-tech background to embracing web development. These experiences reflect my commitment to mastering new skills and achieving success in the tech industry.
      </article>

      <div className="card-wrapper">
        {data.experiences.map((experience) => (
          <figure key={experience.id} className="reveal-left">
            <div className="card-header">
              <img src={experience.companyLogo} alt="image" loading="lazy" />
              <a href={experience.urlInstagram} target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faInstagram} className="icon mr-1" />
                {experience.instagram}
              </a>
            </div>
            <figcaption className="card-description">
              <h1>{experience.companyName}</h1>
              <span>
                <small>{experience.jobPosition}</small>
                <small>{experience.periode}</small>
              </span>
              <ul>
                {experience.jobDescription.map((desc, index) => (
                  <li key={index}>{desc}</li>
                ))}
              </ul>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
};

export default Experience;
