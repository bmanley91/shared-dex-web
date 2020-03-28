import { Header } from './header';
import { ReactNode } from 'react';
import Head from 'next/head';

const layoutStyle = {
    margin: 20,
    padding: 20,
    border: '1px solid #DDD'
};

export interface LayoutProps {
    title?: string,
    children?: ReactNode
}

export const Layout = (props: LayoutProps) => (
    <>
        <Head>
            <title>Shared Dex</title>
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <div style={layoutStyle}>
            <Header />
            { props.children }
        </div>
    </>
);
