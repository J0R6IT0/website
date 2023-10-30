import { Mail } from '~/assets/icons/Icons';
import './Header.scss';
import { type JSXElement } from 'solid-js';

export default function Header(): JSXElement {
    return (
        <header>
            <a id='email' href='mailto:jorgeparpar@gmail.com'><span><Mail />jorgeparpar@gmail.com</span></a>
            <hr />
        </header>
    );
}
