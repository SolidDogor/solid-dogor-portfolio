import './ProjectCard.css';

export default function ProjectCard({ imagePath, title, description, url }) {
  return (
    <a href={url} className="project-link">
      <section className="project-card">
        <div className="project-image">
          <img src={imagePath} alt={title} className="project-image" />
        </div>
        <div className="project-information">
          <div className="project-name">{title}</div>
          <div className="project-description">{description}</div>
        </div>
      </section>
    </a>
  );
}
