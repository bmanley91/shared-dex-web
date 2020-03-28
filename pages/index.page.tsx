import React from 'react';
import { Layout } from '../components/layout';
import styled from '@emotion/styled';

const BodyDiv = styled('div')`
    margin-top: 15px;
    text-align: center;
`;

const Home = () => (
    <Layout>
        <BodyDiv>
            <h1>Welcome to Shared Dex!</h1>
            <p>Shared Dex lets you create and save a pokedex with your friends.</p>
            <p>Click <strong>Create New Dex</strong> above to get started.</p>
            <p>Or pick up where you left off by viewing your <strong>Saved Dexes</strong>.</p>
        </BodyDiv>
    </Layout>
);

export default Home;
