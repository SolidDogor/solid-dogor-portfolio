import './Presentation.css';
import profileImage from '../../assets/Presentation/foto-perfil.webp';
import cvImage from '../../assets/Presentation/archivo.svg';
import Social from './Social';
import { SOCIAL_DATA } from '../../data';

export default function Presentation() {
    return(
        <div className='presentation'>
            <div className='foto-perfil'>
                <img
                    src={profileImage}
                    alt='Foto de perfil'
                    className='foto-perfil'
                />
            </div>
            <div className='informacion'>
                <div className='nombre'>
                    <p>Alejandro Olivos</p>
                </div>
                <div className='descripcion'>
                    <p>
                        Apasionado por la programación y la música. A raíz de
                        los varios años que llevo enseñando, me gusta desarollar
                        apps relacionadas al aprendizaje, y por qué no, algo de 
                        música y juegos :)
                    </p>
                </div>
                <div className='seccion-accesibles'>
                <div className='redes'>
                    {SOCIAL_DATA.map((socialItem, index)=>
                        <Social key={index} {...socialItem} />
                    )}
                </div>
                <div className='seccion-cv'>
                    <button className='boton-cv'>
                        Descargar CV
                        <img
                            src={cvImage}
                            alt='Descarga de archivo'
                            className='logo-descarga'
                        />
                    </button>
                </div>
            </div>
            </div>
        </div>
    );
}
