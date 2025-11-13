import './Skills.css';
import TechIcon from './TechIcon';
import { TECHNOLOGIES_DATA } from '../../data.js';

export default function Skills() {
  return (
    <section className="skills">
      <div className="tittle">Tecnologías y Saberes</div>
      <div className="tech-section">
        <div className="tech-background" />
        <div className="tech">
          {TECHNOLOGIES_DATA.map((technologieItem, index) => (
            <TechIcon key={index} {...technologieItem} />
          ))}
        </div>
      </div>

      <div className="skills-section">
        <div className="descripcion">aleman ingles musica</div>
      </div>
    </section>
  );
}
