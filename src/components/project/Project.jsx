import data from '/src/data/data.json';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane, faFileCode } from '@fortawesome/free-solid-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { useState } from 'react';

const Project = () => {
  const [truncatedText, setTruncatedText] = useState({});

  const handleClickTruncated = (id) => {
    setTruncatedText((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }));
  };

  return (
    <section id="project" className="project">
      <h1 className="section-title">Highlight Projects</h1>
      <article className="reveal-bottom">Here are some of the projects that showcase my journey and growth in web development, each demonstrating my commitment to creating impactful and innovative web solutions.</article>

      <div className="card-wrapper">
        {data.projects.map((project) => (
          <figure key={project.id} className="reveal-left">
            <span>
              <img src={project.thumbnail} alt="image" loading="lazy" />
              <blockquote>{project.description}</blockquote>
            </span>
            <figcaption>
              <small>Tech stack:</small>
              <ul className="stack-icon">
                {project.stacks.map((stack, index) => (
                  <li key={index}>
                    <img src={stack} alt="icon" />
                  </li>
                ))}
              </ul>
              <ul className="button-action">
                <li>
                  <a href={project.preview} target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faPaperPlane} className="mr-2" />
                    Live Preview
                  </a>
                </li>
                <li>
                  <a href={project.repo} target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faFileCode} className="mr-2" />
                    Repository
                  </a>
                </li>
              </ul>
            </figcaption>
          </figure>
        ))}
      </div>

      <section className="testimony-section">
        <h1 className="section-title">Testimonial</h1>

        {data.testimonials.map((testimonial) => {
          const isLong = testimonial.body.length > 200;
          const isTruncated = truncatedText[testimonial.id] !== undefined ? truncatedText[testimonial.id] : isLong;

          return (
            <div className="testimony-card reveal-bottom" key={testimonial.id}>
              <span className="user-profile">
                <img src={testimonial.image} alt="image" loading="lazy" />
                <span>
                  <h1>{testimonial.client}</h1>
                  <small>{testimonial.title}</small>
                  <span>
                    <a href={testimonial.instagramUrl} target="_blank" rel="noopener noreferrer">
                      <FontAwesomeIcon icon={faInstagram} className="mr-1" />
                      {testimonial.instagramName}
                    </a>
                  </span>
                </span>
              </span>

              <span>
                <p className="testimony-body">{isTruncated ? `${testimonial.body.substring(0, 200)}...` : testimonial.body}</p>
                {isLong && (
                  <button className="button-truncated text-sky-600" onClick={() => handleClickTruncated(testimonial.id)}>
                    {isTruncated ? 'Read more' : 'Read less'}
                  </button>
                )}
              </span>
            </div>
          );
        })}
      </section>
    </section>
  );
};

export default Project;
