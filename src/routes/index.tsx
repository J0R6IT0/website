import './index.scss';
import ProfilePicture from '../assets/images/pfp.webp';
import { For, type JSXElement } from 'solid-js';
import ProjectCard from '~/components/ProjectCard';
import projects from '../data/projects.json';

export default function Home(): JSXElement {
    return (
        <main>
            <img id='pfp' src={ProfilePicture} />
            <h1>Hi, I'm Jorge Pardo</h1>
            <div class='project-container'>
                <For each={projects}>
                    {(project) => <ProjectCard project={project} />}
                </For>
            </div>
        </main>
    );
}
