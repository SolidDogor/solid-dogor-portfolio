import { useState } from 'react';
import Card from '../Card/Card';
import Modal from '../Modal/Modal';
import { CERTIFICATIONS_DATA } from '../../data';
import RonProgramador from '../../assets/About/RonProgramador.gif';
import './About.css';

export default function About() {
  const [modalContent, setModalContent] = useState(null);
  
  return (
    <div className="about-section">
      <h1 className="title">Más allá del código...</h1>

      <div className="about-information">
        <p className="about-description">
          Estudiante de Ingeniería de Software en la USIL, apasionado por la lógica
          y el desarrollo de sistemas...
        </p>

        <div className="about-right">
          <div className="about-skills">
            {CERTIFICATIONS_DATA.map((item) => (
              <Card
                key={item.title}
                as="h2"
                {...item}
                onClick={() => setModalContent(item.modal)}
              />
            ))}
          </div>

          <div className="code-ron">
            <img src={RonProgramador} alt="Ron programando" />
            <p>Ron programando...</p>
          </div>
        </div>
      </div>

      {modalContent && (
        <Modal
          title={modalContent.title}
          image={modalContent.image}
          onClose={() => setModalContent(null)}
        >
          <p>{modalContent.content}</p>
        </Modal>
      )}
    </div>
  );
}
