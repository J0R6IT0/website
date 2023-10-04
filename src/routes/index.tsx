import './index.scss';
import ProfilePicture from '../assets/images/pfp.webp';
import { For, type JSXElement } from 'solid-js';
import ProjectCard from '~/components/ProjectCard';
import projects from '../data/projects.json';

const statusOrder = { active: 1, on_hold: 2, abandoned: 3 };

export default function Home(): JSXElement {
    const handleScroll = (): void => {
        const image = document.getElementById('pfp');
        if (image !== null) {
            if (document.body.firstElementChild?.scrollTop !== undefined) {
                image.style.width = `${Math.max(
                    10 * 2 - document.body.firstElementChild?.scrollTop / 10,
                    10
                )}rem`;
            } else {
                image.style.width = '18rem';
            }
        }
    };

    return (
        <main onScroll={handleScroll}>
            <img id='pfp' src={ProfilePicture} />
            <h1>Hi, I'm Jorge Pardo.</h1>
            <div class='project-container'>
                <For
                    each={projects.sort((a, b) => {
                        const statusA = statusOrder[a.status];
                        const statusB = statusOrder[b.status];

                        return statusA - statusB;
                    })}
                >
                    {(project) => <ProjectCard project={project} />}
                </For>
            </div>
        </main>
    );
}
