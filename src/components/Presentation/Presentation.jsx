import './Presentation.css';
import profileImage from '../../assets/Presentation/foto-perfil.webp';
import cvImage from '../../assets/Presentation/archivo.svg';
import Social from './Social';
import { SOCIAL_DATA } from '../../data';

export default function Presentation() {
  return (
    <div className="presentation">
      <div className="profile-photo">
        <img src={profileImage} alt="Profile photo" className="profile-photo" />
      </div>
      <div className="information">
        <div className="name">
          <p>Alejandro Olivos</p>
        </div>
        <div className="description">
          <p>
            Apasionado por la programación y la música. A raíz de los varios años que llevo
            enseñando, me gusta desarollar apps relacionadas al aprendizaje, y por qué no, algo de
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
            <button className="cv-button">
              Descargar CV
              <img src={cvImage} alt="CV download" className="download-logo" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
