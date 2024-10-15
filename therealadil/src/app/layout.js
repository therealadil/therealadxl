import Head from 'next/head';

export default function Layout({ children }) {
    return (
        <>
            <Head>
                <title>TheRealAdil</title>
                <meta name="description" content="TheRealAdil" />
                {/* Other meta tags can go here */}
            </Head>
            <main>{children}</main>
        </>
    );
}
