// @refresh reload
import {
    Html,
    Head,
    Body,
    Meta,
    Routes,
    FileRoutes,
    Scripts,
    ErrorBoundary,
} from 'solid-start';
import { type JSXElement, Suspense } from 'solid-js';

export default function Root(): JSXElement {
    return (
        <Html lang='en'>
            <Head>
                <Meta charset='utf-8' />
                <Meta
                    name='viewport'
                    content='width=device-width, initial-scale=1'
                />
                <title>Jorge Pardo</title>
            </Head>
            <Body>
                <ErrorBoundary>
                    <Suspense>
                        <Routes>
                            <FileRoutes />
                        </Routes>
                    </Suspense>
                </ErrorBoundary>
                <Scripts />
            </Body>
        </Html>
    );
}
