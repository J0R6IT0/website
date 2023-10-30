import './index.scss';
import { For, type JSXElement } from 'solid-js';
import Header from '~/components/Header';
import profilePicture from '../assets/images/pfp.webp';
import javascript from '../assets/icons/tech/javascript.svg';
import typescript from '../assets/icons/tech/typescript.svg';
import reactjs from '../assets/icons/tech/reactjs.svg';
import rust from '../assets/icons/tech/rust.svg';
import solidjs from '../assets/icons/tech/solidjs.svg';
import java from '../assets/icons/tech/java.svg';
import mongodb from '../assets/icons/tech/mongodb.svg';

const techs = [
    { name: 'Rust', icon: rust },
    { name: 'Java', icon: java },
    { name: 'JavaScript', icon: javascript },
    { name: 'TypeScript', icon: typescript },
    { name: 'ReactJS', icon: reactjs },
    { name: 'SolidJS', icon: solidjs },
    { name: 'MongoDB', icon: mongodb },
];

export default function Home(): JSXElement {
    return (
        <main>
            <Header activePage='Home' />
            <div id='details'>
                <img src={profilePicture} alt='' />
                <span id='name'>Hi, I'm Jorge Pardo.👋</span>
                <span id='quote'>
                    <p>Building software with passion.</p>
                    <p>Prioritizing user experience and attention to detail.</p>
                </span>
            </div>
            <div id='carousel'>
                <div id='carousel-slide'>
                    <For each={techs}>{(tech) => <img src={tech.icon} />}</For>
                </div>
                <div id='carousel-slide'>
                    <For each={techs}>{(tech) => <img src={tech.icon} />}</For>
                </div>
            </div>
        </main>
    );
}
