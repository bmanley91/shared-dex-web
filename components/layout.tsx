import { ReactNode } from 'react';
import styled from '@emotion/styled';
import { Global } from '@emotion/core';
import Head from 'next/head';

import { Header } from './header';

const AppDiv = styled('div')`
    color: white;
    background: #282828;
    position: relative;
    min-height: 100vh;
`

export interface LayoutProps {
    title?: string,
    children?: ReactNode
}

export const Layout = (props: LayoutProps) => {
    const displayTitle = props.title ? `Shared Dex - ${props.title}` : 'Shared Dex';
    return (
        <div id='app'>
            <Head>
                <title>{ displayTitle }</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Global styles={{
                body: {
                    margin: 0,
                    fontFamily: "'Poppins', sans-serif"
                }
            }}/>
            <AppDiv>
                <Header />
                { props.children }
            </AppDiv>
        </div>
    );
};
