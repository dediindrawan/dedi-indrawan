import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import SocialMedia from '../user-profile/SocialMedia';
import { useEffect, useRef } from 'react';

const Contact = () => {
  const copyrightRef = useRef(null);
  const getYear = new Date().getFullYear();

  useEffect(() => {
    if (copyrightRef.current) {
      copyrightRef.current.innerText = getYear;
    }
  }, []);

  return (
    <div className="contact-wrapper">
      <section className="contact-profile">
        <h1 className="section-title">Contact Me</h1>

        <span className="user-contact">
          <img src="https://i.ibb.co.com/NpWCWh5/img-1.jpg" alt="image" loading="lazy" />
          <span>
            <h1>Send me an email:</h1>
            <a href="mailto:dediindrawan218@gmail.com" target="_blank" rel="noopener nooreferrer">
              <FontAwesomeIcon icon={faEnvelope} className="mr-1" />
              dediindrawan218@gmail.com
            </a>
          </span>
        </span>
      </section>

      <div className="social-media">
        <h1>Follow my social media:</h1>
        <ul>
          <SocialMedia />
        </ul>
      </div>

      <p className="copyright">
        &copy; <span ref={copyrightRef}></span> |{' '}
        <a href="https://dedi-indrawan.vercel.app/" target="_blank" rel="noopener nooreferrer">
          Dedi Indrawan
        </a>
      </p>
    </div>
  );
};

export default Contact;
