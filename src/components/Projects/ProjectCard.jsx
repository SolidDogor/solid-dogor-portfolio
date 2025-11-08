import './ProjectCard.css';

export default function ProjectCard() {
    return (
        <div className="project-card">
            <div className="imagen-proyecto">
                <img
                    src="./src/assets/foto-perfil.png"
                    alt="Foto de perfil"
                    className="imagen-proyecto"
                />
            </div>
            <div className="informacion-proyecto">
                <div className="nombre-proyecto">
                    Amores Dulces
                </div>
                <div className="descripcion-proyecto">
                    Página web de venta de postres caseros.
                </div>
            </div>
        </div>
    );
}