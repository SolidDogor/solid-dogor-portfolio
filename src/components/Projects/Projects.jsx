import ProjectCard from "./ProjectCard";
import "./Projects.css";

export default function Projects() {
    return (
        <div className="projects">
            <div className="titulo">
                Proyectos
            </div>
            <div className="proyectos">
                <ProjectCard/>
                <ProjectCard/>
                <ProjectCard/>
                <ProjectCard/>
                <ProjectCard/>
                <ProjectCard/>
            </div>
        </div>
    );
}