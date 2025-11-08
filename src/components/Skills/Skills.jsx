import "./Skills.css";
import TechIcon from "./TechIcon";

export default function Skills() {
    return (
        <section className="skills">
            <div className="titulo">
                Tecnologías y Saberes
            </div>
            <div className="fondo-tecnologias">
                <div className="tecnologias">
                    <TechIcon/>
                    <TechIcon/>
                    <TechIcon/>
                    <TechIcon/>
                    <TechIcon/>
                    <TechIcon/>
                    <TechIcon/>
                </div> 
            </div>
            <div className="saberes">
                <div className="descripcion">
                    aleman
                    ingles
                    musica
                </div>
            </div>
        </section>
    );
}