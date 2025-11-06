import "./Header.css";

export default function Header() {
    return(
        <header className="header">
            <div className="seccion-sobre-mi">
                <img
                    src="./src/assets/foto-perfil.png"
                    alt="Foto de perfil"
                    className="foto-perfil"
                />
                <div className="informacion">
                    <div className="nombre">
                        <p>Alejandro Olivos</p>
                    </div>
                    <div className="descripcion">
                        <p>Ingenierio de Software<br/>
                            Estudiante de USIL<br/>
                            Apasionado de la programación y el arte
                        </p>
                    </div>
                </div>
            </div>
            <div className="seccion-accesibles">
                <div className="redes">
                    <a href="https://www.instagram.com/alejandr0lirod">
                        <img
                            src="./src/assets/instagram.png"
                            alt="Logo de instagram"
                            
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

        </header>
    );
}