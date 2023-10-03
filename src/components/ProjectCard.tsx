import './ProjectCard.scss';
import { type JSXElement } from 'solid-js';

interface Project {
    name: string;
    url: string;
    description: string;
    technologies: string[];
    icon: string;
    status: string;
}

interface ProjectCardProps {
    project: Project;
}

export default function ProjectCard(props: ProjectCardProps): JSXElement {
    return (
        <div
            class='project'
            onClick={() => {
                window.open(props.project.url);
            }}
        >
            <img src={props.project.icon} alt='' />
            <h3>{props.project.name}</h3>
            <p>{props.project.description}</p>
            <div class='project-label'>Take me there!</div>
            <div
                class='project-status'
                classList={{
                    active: props.project.status === 'active',
                    onhold: props.project.status === 'on_hold',
                }}
            >
                <div class='status-icon' />
                <span>
                    {props.project.status === 'active' ? 'Active' : 'On Hold'}
                </span>
            </div>
        </div>
    );
}
