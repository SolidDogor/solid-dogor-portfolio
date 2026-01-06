import './Card.css';

export default function Card({
  imagePath,
  title,
  description,
  url,
  as: Heading = 'h1'
}) {
  return (
    <a href={url} className="card-link">
      <section className="card">
        {imagePath && (
          <div className="card-image">
            <img src={imagePath} alt={title} className="card-image__img" />
          </div>
        )}

        <div className="card-information">
          <Heading className="card-name">{title}</Heading>
          {description && (
            <p className="card-description">{description}</p>
          )}
        </div>
      </section>
    </a>
  );
}
