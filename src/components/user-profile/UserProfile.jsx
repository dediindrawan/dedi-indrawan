import SocialMedia from './SocialMedia';
import { useState, useRef, useEffect } from 'react';

const UserProfile = () => {
  const [openSocMed, setOpenocMed] = useState(false);
  const userImageRef = useRef(null);
  const userTextRef = useRef(null);
  const socMedRef = useRef(null);

  const handleClickImage = () => {
    userTextRef.current.classList.toggle('open-user-navbar');
    socMedRef.current.classList.toggle('open-user-navbar');
    setOpenocMed(!openSocMed);
  };

  useEffect(() => {
    const handleClickImageOutside = (e) => {
      if (!userImageRef.current.contains(e.target) && !userTextRef.current.contains(e.target) && !socMedRef.current.contains(e.target)) {
        userTextRef.current.classList.remove('open-user-navbar');
        socMedRef.current.classList.remove('open-user-navbar');
        setOpenocMed(false);
      }
    };

    document.addEventListener('click', handleClickImageOutside);

    return () => {
      document.removeEventListener('click', handleClickImageOutside);
    };
  }, []);

  return (
    <>
      <span>
        <img src="https://i.ibb.co.com/NpWCWh5/img-1.jpg" alt="image" ref={userImageRef} onClick={handleClickImage} />
        <span ref={userTextRef}>
          <h1>👋 Hi, I'm Dedi.</h1>
          <p>Let's get connected:</p>
        </span>
      </span>

      <ul ref={socMedRef}>
        <SocialMedia />
      </ul>
    </>
  );
};

export default UserProfile;
