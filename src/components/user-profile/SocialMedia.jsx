import data from '/src/data/data.json';

const SocialMedia = () => {
  return (
    <>
      {data.socialMedias.map((socialMedia) => (
        <li key={socialMedia.id}>
          <a href={socialMedia.url} target="_blank" rel="noopener noreferrer">
            <img src={socialMedia.icon} alt="icon" />
          </a>
        </li>
      ))}
    </>
  );
};

export default SocialMedia;
