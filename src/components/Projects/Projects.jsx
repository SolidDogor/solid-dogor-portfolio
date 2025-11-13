import ProjectCard from './ProjectCard';
import './Projects.css';
import { PROJECTS_DATA } from '../../data.js';

export default function Projects() {
  return (
    <div className="projects-section">
      <div className="tittle">Proyectos</div>
      <div className="projects">
        {PROJECTS_DATA.map((projectItem, index) => (
          <ProjectCard key={index} {...projectItem} />
        ))}
      </div>
    </div>
  );
}
