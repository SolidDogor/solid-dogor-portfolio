import { useState } from 'react';
import Card from '../Card/Card.jsx';
import Modal from '../Modal/Modal.jsx';
import './Projects.css';
import { PROJECTS_DATA } from '../../data.js';

export default function Projects() {
  const [modalContent, setModalContent] = useState(null);

  return (
    <div className="projects-section">
      <h1 className="title">Proyectos</h1>

      <div className="projects">
        {PROJECTS_DATA.map((projectItem) => (
          <Card
            key={projectItem.title}
            {...projectItem}
            onClick={() => setModalContent(projectItem.modal)}
          />
        ))}
      </div>

      {modalContent && (
        <Modal
          title={modalContent.title}
          image={modalContent.image}
          onClose={() => setModalContent(null)}
        >
          <p>{modalContent.content}</p>

          {modalContent.link && (
            <a
              href={modalContent.link}
              target="_blank"
              rel="noopener noreferrer"
              className="modal-link"
            >
              Ver proyecto
            </a>
          )}
        </Modal>
      )}
    </div>
  );
}
