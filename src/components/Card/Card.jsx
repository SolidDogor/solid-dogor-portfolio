import './Card.css';

export default function Card({
  imagePath,
  title,
  description,
  onClick
}) {
  return (
    <button className="card-link" onClick={onClick}>
      <section className="card">
        {imagePath && (
          <div className="card-image">
            <img src={imagePath} alt={title} className="card-image"/>
          </div>
        )}

        <div className="card-information">
          <h1 className="card-name">{title}</h1>
          {description && (
            <p className="card-description">{description}</p>
          )}
          <p><u>Ver más</u></p>
        </div>
      </section>
    </button>
  );
}

