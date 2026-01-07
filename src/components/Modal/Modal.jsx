import './Modal.css';

export default function Modal({ title, image, children, onClose }) {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="modal"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="modal-close"
          onClick={onClose}
          aria-label="Cerrar"
        >
          ✕
        </button>

        {title && <h2 className="modal-title">{title}</h2>}

        {image && (
          <img
            src={image}
            alt={title}
            className="modal-image"
          />
        )}

        {children && (
          <div className="modal-content">
            {children}
          </div>
        )}
      </div>
    </div>
  );
}
