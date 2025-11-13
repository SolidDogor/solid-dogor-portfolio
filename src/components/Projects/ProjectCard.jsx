import './ProjectCard.css';

export default function ProjectCard({ imagePath, title, description, url }) {
  return (
    <a href={url} className="proyect-link">
      <section className="project-card">
        <div className="imagen-proyecto">
          <img src={imagePath} alt={title} className="imagen-proyecto" />
        </div>
        <div className="informacion-proyecto">
          <div className="nombre-proyecto">{title}</div>
          <div className="descripcion-proyecto">{description}</div>
        </div>
      </section>
    </a>
  );
}
