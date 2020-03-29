import React from 'react';
import styled from '@emotion/styled';
import { Global } from '@emotion/core';
import Head from 'next/head';

import { Header } from './header';


const AppDiv = styled('div')`
    color: white;
    background: #282828;
    position: relative;
    min-height: 100vh;
`;

const Footer = styled('div')`
    background: red;
    min-height: 15px;
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
`;

export interface LayoutProps {
    title?: string;
    children?: React.ReactNode;
}

export const Layout: React.FunctionComponent<LayoutProps> = (props: LayoutProps) => {
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
                    fontFamily: '\'Poppins\', sans-serif'
                }
            }}/>
            <AppDiv>
                <Header />
                { props.children }
                <Footer />
            </AppDiv>
        </div>
    );
};
