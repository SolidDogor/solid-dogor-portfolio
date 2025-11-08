import "./Presentation.css";

export default function Presentation() {
    return(
        <div className="presentation">
            <div className="foto-perfil">
                <img
                    src="./src/assets/foto-perfil.png"
                    alt="Foto de perfil"
                    className="foto-perfil"
                />
            </div>
            <div className="informacion">
                <div className="nombre">
                    <p>Alejandro Olivos</p>
                </div>
                <div className="descripcion">
                    <p>
                        Apasionado por la programación y la música. A raíz de
                        los varios años que llevo enseñando, me gusta desarollar
                        apps relacionadas al aprendizaje, y por qué no, algo de 
                        música y juegos :)
                    </p>
                </div>
                <div className="seccion-accesibles">
                <div className="redes">
                    <a href="https://www.instagram.com/alejandr0lirod">
                        <img
                            src="./src/assets/instagram.png"
                            alt="Logo de instagram"
                            className="logo-instagram"
                        />
                    </a>
                    <a href="https://linkedin.com/in/alejandro-matias-olivos-rodriguez-95201b107">
                        <img
                            src="./src/assets/linkedin.png"
                            alt="Logo de linkedin"
                            className="logo-linkedin"
                        />
                    </a>
                    <a href="https://github.com/SolidDogor">                            
                        <img
                            src="./src/assets/github.png"
                            alt="Logo de github"
                            className="logo-github"
                        />
                    </a>
                </div>
                <div className="seccion-cv">
                    <button className="boton-cv">
                        Descargar CV
                        <img
                            src="./src/assets/archivo.png"
                            alt="Descarga de archivo"
                            className="logo-descarga"
                        />
                    </button>
                </div>
            </div>
            </div>
        </div>
    );
}
