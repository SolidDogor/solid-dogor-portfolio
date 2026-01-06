import './TechCard.css';

export default function TechCard({ title, images}) {
  return (
      <section className="techcard">
        <h2 className="techcard-name">{title}</h2>
        <div className="techcard-images">
          {images.map(({ imagePath, technologieName}) => (
            <img key={technologieName} src={imagePath} alt={technologieName} className="techcard-image" />
          ))}
        </div>
      </section>
  );
}
