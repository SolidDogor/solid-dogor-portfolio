import "./Skills.css";
import TechIcon from "./TechIcon";
import { Technologies } from "../../data.js";

export default function Skills() {
    return (
        <section className="skills">
            <div className="titulo">
                Tecnologías y Saberes
            </div>
            <div className="seccion-tecnologias">
                <div className="fondo-tecnologias"/>
                <div className="tecnologias">
                    {Technologies.map((technologieItem, index)=>
                        <TechIcon key={index} {...technologieItem} />
                    )}
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