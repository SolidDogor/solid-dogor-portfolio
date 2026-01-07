import './Presentation.css';
import profileImage from '../../assets/Presentation/foto-perfil.webp';
import cvImage from '../../assets/Presentation/archivo.svg';
import cvPdf from '../../assets/Presentation/cv.pdf';
import Social from './Social';
import { SOCIAL_DATA } from '../../data';

export default function Presentation() {
  return (
    <div className="presentation">
      <div className="profile-picture">
        <img src={profileImage} alt="Profile picture" className="profile-picture" />
      </div>
      <div className="information">
        <h1 className="name">
          Alejandro Olivos
        </h1>
        <div className="description"> 
          <p>
            Apasionado por la programación y la música. A raíz de los varios años que llevo
            enseñando, me gusta desarrollar apps relacionadas al aprendizaje, y por qué no, algo de
            música y juegos :)
          </p>
        </div>
        <div className="socials-section">
          <div className="socials">
            {SOCIAL_DATA.map((socialItem, index) => (
              <Social key={index} {...socialItem} />
            ))}
          </div>
          <div className="cv-section">
            <a download={true} className="cv-button" href={cvPdf}>
              <h2 className="cv-text">Descargar CV</h2>
              <img src={cvImage} alt="CV download" className="download-logo" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
