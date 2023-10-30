import './index.scss';
import { type JSXElement } from 'solid-js';
import Header from '~/components/Header';

export default function Projects(): JSXElement {
    return (
        <main>
            <Header activePage='Projects'/>
            projects
        </main>
    );
}
