import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
    return (
        <Html lang="ko">
            <Head>
                <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;500;600;700;800&display=swap" />
            </Head>
            <body className={'dark'}>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}
