import './About.css';
import Card from '../Card/Card';
import RonProgramador from '../../assets/About/RonProgramador.gif';

export default function About() {
  return (
    <div className="about-section">
      <h1 className="title">Más allá del código...</h1>
      <div className="about-information">
        <p className="about-description">
            Estudiante de Ingeniería de Software en la USIL, apasionado por la lógica
            y el desarrollo de sistemas. Mi flujo de trabajo suele estar supervisado por mi
            gato Ron. Fuera del código, exploro mi creatividad a través de la música y los
            videojuegos. Además, comparto mis conocimientos como profesor de Alemán, Inglés
            y Matemáticas.
        </p>
        <div className="about-right">
            <div className="about-skills">
                <Card as="h2" title="Abitur alemán"/>
                <Card as="h2" title="B2 en inglés"/>
            </div>
            <div className="code-ron">
                <img src={RonProgramador} />
                <p className='code-ron'>Ron programando...</p>
            </div>
        </div>
      </div>
    </div>
  );
}
