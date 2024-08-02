import data from '/src/data/data.json';

const Content = () => {
  return (
    <section id="content" className="content">
      <h1 className="section-title">Highlight Contents</h1>
      <article className="reveal-bottom">
        Explore a selection of videos where I delve into web development topics, offering practical tutorials and valuable insights. These videos showcase my commitment to teaching and my enthusiasm for the web development community.
      </article>

      <div className="card-wrapper">
        {data.contents.map((content) => (
          <figure key={content.id} className="reveal-left">
            <a href={content.video} target="_blank" rel="noopener noreferrer">
              <img src={content.gif} alt="image" loading="lazy" />
              <figcaption>
                <h1>{content.title}</h1>
                <p>{content.description}</p>
              </figcaption>
            </a>
          </figure>
        ))}
      </div>
    </section>
  );
};

export default Content;
