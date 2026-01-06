import Card from '../Card/Card.jsx';
import './Projects.css';
import { PROJECTS_DATA } from '../../data.js';

export default function Projects() {
  return (
    <div className="projects-section">
      <h1 className="title">Proyectos</h1>
      <div className="projects">
        {PROJECTS_DATA.map((projectItem, index) => (
          <Card key={index} {...projectItem} />
        ))}
      </div>
    </div>
  );
}
