import './index.scss';
import { type JSXElement } from 'solid-js';
import Header from '~/components/Header';

export default function About(): JSXElement {
    return (
        <main>
            <Header activePage='About'/>
            about
        </main>
    );
}
