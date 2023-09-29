import './ProjectCard.scss';
import { type JSXElement } from 'solid-js';

interface Project {
    name: string;
    url: string;
    description: string;
    technologies: string[];
    icon: string;
}

interface ProjectCardProps {
    project: Project
}

export default function ProjectCard(props: ProjectCardProps): JSXElement {
    return (
        <div class='project'>
            <img src={props.project.icon} alt='' />
            <h3>{props.project.name}</h3>
            <p>{props.project.description}</p>
        </div>
    );
}
