import './Card.css';

export default function Card({ imagePath, title, description, url }) {
  return (
    <a href={url} className="card-link">
      <section className="card">
        <div className="card-image">
          <img src={imagePath} alt={title} className="card-image" />
        </div>
        <div className="card-information">
          <h1 className="card-name">{title}</h1>
          <p className="card-description">{description}</p>
        </div>
      </section>
    </a>
  );
}