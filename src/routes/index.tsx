import './index.scss';
import { type JSXElement } from 'solid-js';
import Header from '~/components/Header';

export default function Home(): JSXElement {
    return (
        <main>
            <Header />
        </main>
    );
}
