import { Mail } from '~/assets/icons/Icons';
import './Header.scss';
import { For, type JSXElement } from 'solid-js';

interface HeaderProps {
    activePage: string;
}

const pages = ['Home', 'Projects', 'About'];

export default function Header(props: HeaderProps): JSXElement {
    return (
        <header>
            <a id='email' href='mailto:jorgeparpar@gmail.com'>
                <span>
                    <Mail />
                    jorgeparpar@gmail.com
                </span>
            </a>
            <nav>
                <li>
                    <For each={pages}>
                        {(page) => (
                            <a href={'/' + (page !== 'Home' ? page.toLowerCase() : '')}>
                                {page}
                                <div
                                    classList={{
                                        active: page === props.activePage,
                                    }}
                                />
                            </a>
                        )}
                    </For>
                </li>
            </nav>
            <hr />
        </header>
    );
}
