import ProjectCard from './ProjectCard';
import './Projects.css';
import { PROJECTS_DATA } from '../../data.js';

export default function Projects() {
  return (
    <div className="projects">
      <div className="titulo">Proyectos</div>
      <div className="proyectos">
        {PROJECTS_DATA.map((projectItem, index) => (
          <ProjectCard key={index} {...projectItem} />
        ))}
      </div>
    </div>
  );
}
